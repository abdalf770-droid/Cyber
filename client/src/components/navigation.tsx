import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Satellite, Menu, X, Download } from "lucide-react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const generatePDF = async () => {
    const navbar = document.querySelector('.no-print');
    
    try {
      // Hide navbar temporarily
      if (navbar) {
        (navbar as HTMLElement).style.display = 'none';
      }
      
      // Show loading indicator
      const originalText = (document.querySelector('[data-testid="button-download-pdf"] span') as HTMLElement)?.innerText;
      const downloadBtn = document.querySelector('[data-testid="button-download-pdf"]') as HTMLButtonElement;
      if (downloadBtn) {
        downloadBtn.disabled = true;
        const textElement = downloadBtn.querySelector('span');
        if (textElement) textElement.innerText = 'جاري التحميل...';
      }
      
      // Scroll to top and wait for content
      window.scrollTo(0, 0);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Get content sections for multi-page PDF
      const sections = [
        document.querySelector('section:nth-child(2)'), // Hero
        document.querySelector('#overview')?.parentElement,
        document.querySelector('#technology')?.parentElement,
        document.querySelector('#risks')?.parentElement,
        document.querySelector('#structure')?.parentElement,
        document.querySelector('#frameworks')?.parentElement,
        document.querySelector('#goals')?.parentElement,
        document.querySelector('#policies')?.parentElement,
        document.querySelector('footer')
      ].filter(Boolean);
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      let isFirstPage = true;
      
      for (const section of sections) {
        if (!isFirstPage) {
          pdf.addPage();
        }
        
        // Capture each section
        const canvas = await html2canvas(section as HTMLElement, {
          useCORS: true,
          allowTaint: true,
          scale: 1.5,
          width: (section as HTMLElement).scrollWidth,
          height: (section as HTMLElement).scrollHeight,
          backgroundColor: '#ffffff',
          imageTimeout: 30000,
          logging: false
        });
        
        const imgData = canvas.toDataURL('image/png', 1.0);
        
        // Calculate scaling
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(
          (pdfWidth - 20) / imgWidth * 72 / 96,
          (pdfHeight - 20) / imgHeight * 72 / 96
        );
        
        const finalWidth = imgWidth * ratio;
        const finalHeight = imgHeight * ratio;
        
        // Center the image
        const x = (pdfWidth - finalWidth) / 2;
        const y = 10;
        
        // Add image to PDF
        pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);
        
        isFirstPage = false;
      }
      
      // Save the PDF
      pdf.save('تقرير-النزول-الميداني-شركة-الاتصالات-اليمنية-يمن-نت.pdf');
      
      // Restore button text
      if (downloadBtn) {
        downloadBtn.disabled = false;
        const textElement = downloadBtn.querySelector('span');
        if (textElement && originalText) textElement.innerText = originalText;
      }
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('حدث خطأ في تحميل ملف PDF. يرجى التأكد من تحميل الصفحة كاملاً والمحاولة مرة أخرى.');
      
      // Restore button
      const downloadBtn = document.querySelector('[data-testid="button-download-pdf"]') as HTMLButtonElement;
      if (downloadBtn) {
        downloadBtn.disabled = false;
        const textElement = downloadBtn.querySelector('span');
        if (textElement) textElement.innerText = 'تحميل PDF';
      }
    } finally {
      // Show navbar again
      if (navbar) {
        (navbar as HTMLElement).style.display = '';
      }
    }
  };

  const navItems = [
    { id: 'overview', label: 'نظرة عامة' },
    { id: 'technology', label: 'التكنولوجيا' },
    { id: 'risks', label: 'المخاطر' },
    { id: 'structure', label: 'الهيكل التنظيمي' },
    { id: 'frameworks', label: 'الأطر المطبقة' },
    { id: 'goals', label: 'الأهداف' },
    { id: 'policies', label: 'السياسات' },
  ];

  return (
    <header 
      className={`${
        isScrolled 
          ? 'fixed top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-white border-b border-border'
      } w-full transition-all duration-300 no-print`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="bg-primary p-2 rounded-lg">
              <Satellite className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">تقرير النزول الميداني</h1>
              <p className="text-muted-foreground text-sm">شركة الاتصالات اليمنية - يمن نت</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button 
              onClick={generatePDF} 
              className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-download-pdf"
            >
              <Download className="h-4 w-4 ml-2" />
              <span>تحميل PDF</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-right text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={generatePDF} 
                className="sm:hidden bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                data-testid="button-mobile-download-pdf"
              >
                <Download className="h-4 w-4 ml-2" />
                <span>تحميل PDF</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
