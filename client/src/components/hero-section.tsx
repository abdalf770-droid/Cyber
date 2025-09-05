import { Card } from "@/components/ui/card";
import { GraduationCap, UserCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-pattern bg-gradient-to-l from-primary/5 to-accent/5 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600" 
              alt="مبنى شركة الاتصالات اليمنية - يمن نت في صنعاء" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              data-testid="img-company-building"
              crossOrigin="anonymous"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            تقرير النزول الميداني
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            شركة الاتصالات اليمنية - يمن نت
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            دراسة شاملة للبنية التحتية التقنية وأمن المعلومات في إحدى أكبر شركات الاتصالات في اليمن
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="p-6 shadow-lg border border-border">
              <div className="flex items-center mb-4">
                <div className="bg-primary p-2 rounded-lg ml-3">
                  <GraduationCap className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">إعداد الطالب</h3>
                  <p className="text-primary font-bold" data-testid="text-student-name">عبدالفتاح الشيخ</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-lg border border-border">
              <div className="flex items-center mb-4">
                <div className="bg-accent p-2 rounded-lg ml-3">
                  <UserCheck className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">تحت إشراف</h3>
                  <p className="text-accent font-bold" data-testid="text-supervisor-name">الدكتور أحمد الحميري</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
