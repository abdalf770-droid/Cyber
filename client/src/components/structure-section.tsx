import { Card } from "@/components/ui/card";
import { Crown, Settings, Shield, Laptop } from "lucide-react";

export default function StructureSection() {
  return (
    <section id="structure" className="py-16 print-break">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">الهيكل التنظيمي للشركة</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            استعراض للبنية الإدارية والتنظيمية في شركة الاتصالات اليمنية
          </p>
        </div>
        
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600" 
            alt="مكاتب الإدارة العليا - شركة يمن نت" 
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
            data-testid="img-executive-meeting"
            crossOrigin="anonymous"
          />
        </div>
        
        {/* Executive Level */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-6 rounded-xl text-center">
            <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Crown className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">المدير التنفيذي</h3>
            <p className="text-primary-foreground">الإدارة العليا والتوجيه الاستراتيجي</p>
          </div>
        </div>
        
        {/* Management Level */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 shadow-lg border border-border text-center">
            <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Settings className="text-primary h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold mb-2">مدير العمليات</h4>
            <p className="text-muted-foreground text-sm">إدارة العمليات التشغيلية اليومية</p>
          </Card>
          
          <Card className="p-6 shadow-lg border border-border text-center">
            <div className="bg-accent/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="text-accent h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold mb-2">مدير أمن المعلومات</h4>
            <p className="text-muted-foreground text-sm">حماية وأمان البيانات والأنظمة</p>
          </Card>
          
          <Card className="p-6 shadow-lg border border-border text-center">
            <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Laptop className="text-primary h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold mb-2">مدير التقنية</h4>
            <p className="text-muted-foreground text-sm">تطوير وصيانة البنية التقنية</p>
          </Card>
        </div>
        
        {/* Departments */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-4 border border-border">
            <h5 className="font-semibold mb-2 text-primary">قسم الشبكات</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• صيانة الشبكات</li>
              <li>• مراقبة الأداء</li>
              <li>• حل المشاكل التقنية</li>
            </ul>
          </Card>
          
          <Card className="p-4 border border-border">
            <h5 className="font-semibold mb-2 text-primary">قسم البيانات</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• إدارة قواعد البيانات</li>
              <li>• النسخ الاحتياطي</li>
              <li>• تحليل البيانات</li>
            </ul>
          </Card>
          
          <Card className="p-4 border border-border">
            <h5 className="font-semibold mb-2 text-primary">قسم الدعم الفني</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• خدمة العملاء</li>
              <li>• حل المشاكل</li>
              <li>• التدريب التقني</li>
            </ul>
          </Card>
          
          <Card className="p-4 border border-border">
            <h5 className="font-semibold mb-2 text-primary">قسم الأمان</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• مراقبة الأمان</li>
              <li>• التحقق من التهديدات</li>
              <li>• تطبيق السياسات</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
