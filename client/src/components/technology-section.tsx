import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function TechnologySection() {
  return (
    <section id="technology" className="py-16 print-break">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">التكنولوجيا المستخدمة في الشركة</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            استعراض شامل للتقنيات والأنظمة المطبقة في شركة الاتصالات اليمنية
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="section-card p-8 shadow-lg border border-border">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500" 
                alt="البنية التحتية للشبكة - شركة يمن نت" 
                className="w-full h-64 object-cover rounded-lg"
                data-testid="img-network-infrastructure"
                crossOrigin="anonymous"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">البنية التحتية للشبكة</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="text-primary h-5 w-5 ml-3" />
                شبكات الألياف البصرية عالية السرعة
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary h-5 w-5 ml-3" />
                أنظمة التبديل المتقدمة (Cisco, Huawei)
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary h-5 w-5 ml-3" />
                شبكة 4G/5G للخدمات المحمولة
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary h-5 w-5 ml-3" />
                أنظمة النسخ الاحتياطي والتعافي
              </li>
            </ul>
          </Card>
          
          <Card className="section-card p-8 shadow-lg border border-border">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500" 
                alt="مركز البيانات والخوادم - يمن نت" 
                className="w-full h-64 object-cover rounded-lg"
                data-testid="img-data-center"
                crossOrigin="anonymous"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">أنظمة المعلومات</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="text-primary h-5 w-5 ml-3" />
                أنظمة إدارة قواعد البيانات (Oracle, MySQL)
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary h-5 w-5 ml-3" />
                حلول الحوسبة السحابية الهجينة
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary h-5 w-5 ml-3" />
                أنظمة ERP لإدارة الموارد
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary h-5 w-5 ml-3" />
                تطبيقات خدمة العملاء المتقدمة
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">المواصفات التقنية الرئيسية</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-availability">99.9%</div>
              <div className="text-muted-foreground">معدل التوفر</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-servers">1000+</div>
              <div className="text-muted-foreground">خادم نشط</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-storage">50TB</div>
              <div className="text-muted-foreground">سعة التخزين</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-support">24/7</div>
              <div className="text-muted-foreground">المراقبة والدعم</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
