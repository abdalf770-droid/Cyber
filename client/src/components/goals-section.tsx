import { Card } from "@/components/ui/card";
import { Rocket, TrendingUp, Eye, CheckCircle } from "lucide-react";

export default function GoalsSection() {
  return (
    <section id="goals" className="py-16 print-break">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">الأهداف الاستراتيجية</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            الأهداف والرؤى المستقبلية لشركة الاتصالات اليمنية في مجال التكنولوجيا وأمن المعلومات
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="section-card p-6 shadow-lg border border-border border-t-4 border-t-primary">
            <div className="mb-4">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Rocket className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">الأهداف قصيرة المدى</h3>
              <p className="text-muted-foreground text-sm mb-4">(6 - 12 شهر)</p>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center">
                <CheckCircle className="text-primary h-4 w-4 ml-2" />
                تطوير أنظمة الحماية السيبرانية
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary h-4 w-4 ml-2" />
                تدريب الموظفين على أمن المعلومات
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary h-4 w-4 ml-2" />
                تحديث البنية التحتية للشبكة
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary h-4 w-4 ml-2" />
                تطبيق سياسات أمان جديدة
              </li>
            </ul>
          </Card>
          
          <Card className="section-card p-6 shadow-lg border border-border border-t-4 border-t-accent">
            <div className="mb-4">
              <div className="bg-accent/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="text-accent h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-2">الأهداف متوسطة المدى</h3>
              <p className="text-muted-foreground text-sm mb-4">(1 - 3 سنوات)</p>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center">
                <CheckCircle className="text-accent h-4 w-4 ml-2" />
                الحصول على شهادة ISO 27001
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent h-4 w-4 ml-2" />
                تطوير مركز عمليات الأمان (SOC)
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent h-4 w-4 ml-2" />
                تطبيق الذكاء الاصطناعي
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent h-4 w-4 ml-2" />
                توسع الخدمات السحابية
              </li>
            </ul>
          </Card>
          
          <Card className="section-card p-6 shadow-lg border border-border border-t-4 border-t-green-500">
            <div className="mb-4">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Eye className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">الرؤية طويلة المدى</h3>
              <p className="text-muted-foreground text-sm mb-4">(3 - 5 سنوات)</p>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center">
                <CheckCircle className="text-green-600 h-4 w-4 ml-2" />
                قيادة التحول الرقمي في اليمن
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-600 h-4 w-4 ml-2" />
                تطوير شبكة 5G متقدمة
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-600 h-4 w-4 ml-2" />
                إنشاء مركز للابتكار التقني
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-600 h-4 w-4 ml-2" />
                الامتثال الكامل للمعايير الدولية
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">مؤشرات الأداء الرئيسية (KPIs)</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="kpi-availability">95%</div>
              <div className="text-muted-foreground">معدل توفر الخدمة المستهدف</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-3xl font-bold text-accent mb-2" data-testid="kpi-incidents">50%</div>
              <div className="text-muted-foreground">تقليل الحوادث الأمنية</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2" data-testid="kpi-satisfaction">80%</div>
              <div className="text-muted-foreground">رضا العملاء المستهدف</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="kpi-efficiency">30%</div>
              <div className="text-muted-foreground">زيادة الكفاءة التشغيلية</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
