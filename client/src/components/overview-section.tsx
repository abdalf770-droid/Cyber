import { Card } from "@/components/ui/card";
import { Search, Calendar, TrendingUp } from "lucide-react";

export default function OverviewSection() {
  return (
    <section id="overview" className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">نظرة عامة حول المشروع</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            يهدف هذا التقرير إلى تقديم دراسة مفصلة حول الواقع التقني وأمن المعلومات في شركة الاتصالات اليمنية
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="section-card p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">الهدف من الزيارة</h3>
              <p className="text-muted-foreground">
                استكشاف البنية التحتية التقنية وتحديد نقاط القوة والضعف في أنظمة الأمان
              </p>
            </div>
          </Card>
          
          <Card className="section-card p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">مدة الدراسة</h3>
              <p className="text-muted-foreground">
                زيارة ميدانية شاملة استغرقت أسبوعين للوقوف على جميع جوانب العمل التقني
              </p>
            </div>
          </Card>
          
          <Card className="section-card p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">النتائج المتوقعة</h3>
              <p className="text-muted-foreground">
                تقديم توصيات عملية لتطوير البنية التحتية وتعزيز أمن المعلومات
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
