import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ShieldQuestion, Database, Wifi, AlertTriangle, Cloud, Smartphone, GraduationCap } from "lucide-react";

export default function PoliciesSection() {
  return (
    <section id="policies" className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">السياسات والإجراءات الأمنية</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            استعراض شامل لسياسات أمن المعلومات والإجراءات المطبقة والمطلوب تطويرها
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="section-card p-8 shadow-lg border border-border">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500" 
                alt="وثائق السياسات الأمنية - يمن نت" 
                className="w-full h-64 object-cover rounded-lg"
                data-testid="img-security-policies"
                crossOrigin="anonymous"
              />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-primary">السياسات الحالية</h3>
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-primary/5 rounded-lg">
                <FileText className="text-primary h-5 w-5 mt-1 ml-3" />
                <div>
                  <h4 className="font-semibold mb-1">سياسة كلمات المرور</h4>
                  <p className="text-sm text-muted-foreground">تعقيد وتحديث دوري لكلمات المرور</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-primary/5 rounded-lg">
                <ShieldQuestion className="text-primary h-5 w-5 mt-1 ml-3" />
                <div>
                  <h4 className="font-semibold mb-1">سياسة التحكم بالوصول</h4>
                  <p className="text-sm text-muted-foreground">تحديد صلاحيات المستخدمين</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-primary/5 rounded-lg">
                <Database className="text-primary h-5 w-5 mt-1 ml-3" />
                <div>
                  <h4 className="font-semibold mb-1">سياسة حماية البيانات</h4>
                  <p className="text-sm text-muted-foreground">تشفير وحماية البيانات الحساسة</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-primary/5 rounded-lg">
                <Wifi className="text-primary h-5 w-5 mt-1 ml-3" />
                <div>
                  <h4 className="font-semibold mb-1">سياسة استخدام الشبكة</h4>
                  <p className="text-sm text-muted-foreground">قواعد استخدام الموارد الشبكية</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="section-card p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold mb-6 text-accent">السياسات المطلوب تطويرها</h3>
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                <AlertTriangle className="text-accent h-5 w-5 mt-1 ml-3" />
                <div>
                  <h4 className="font-semibold mb-1">سياسة الاستجابة للحوادث</h4>
                  <p className="text-sm text-muted-foreground">إجراءات التعامل مع الحوادث الأمنية</p>
                  <Badge variant="destructive" className="mt-2">أولوية عالية</Badge>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                <Cloud className="text-accent h-5 w-5 mt-1 ml-3" />
                <div>
                  <h4 className="font-semibold mb-1">سياسة الحوسبة السحابية</h4>
                  <p className="text-sm text-muted-foreground">ضوابط استخدام الخدمات السحابية</p>
                  <Badge variant="secondary" className="mt-2 bg-yellow-100 text-yellow-800">أولوية متوسطة</Badge>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                <Smartphone className="text-accent h-5 w-5 mt-1 ml-3" />
                <div>
                  <h4 className="font-semibold mb-1">سياسة الأجهزة المحمولة</h4>
                  <p className="text-sm text-muted-foreground">إدارة وحماية الأجهزة المحمولة</p>
                  <Badge variant="secondary" className="mt-2 bg-yellow-100 text-yellow-800">أولوية متوسطة</Badge>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                <GraduationCap className="text-accent h-5 w-5 mt-1 ml-3" />
                <div>
                  <h4 className="font-semibold mb-1">سياسة التدريب والتوعية</h4>
                  <p className="text-sm text-muted-foreground">برامج تدريب الموظفين على الأمان</p>
                  <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">أولوية منخفضة</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 shadow-lg border border-border">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">خطة تنفيذ السياسات الجديدة</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="bg-red-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="font-bold">1</span>
              </div>
              <h4 className="font-bold text-red-600 mb-2">المرحلة الأولى</h4>
              <p className="text-sm text-muted-foreground mb-4">الشهر الأول - الثالث</p>
              <ul className="text-sm text-muted-foreground space-y-1 text-right">
                <li>• تقييم الوضع الحالي</li>
                <li>• تحديد الاحتياجات</li>
                <li>• وضع مسودات السياسات</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="bg-yellow-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="font-bold">2</span>
              </div>
              <h4 className="font-bold text-yellow-600 mb-2">المرحلة الثانية</h4>
              <p className="text-sm text-muted-foreground mb-4">الشهر الرابع - السادس</p>
              <ul className="text-sm text-muted-foreground space-y-1 text-right">
                <li>• مراجعة وتعديل السياسات</li>
                <li>• الحصول على الموافقات</li>
                <li>• إعداد برامج التدريب</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="font-bold">3</span>
              </div>
              <h4 className="font-bold text-green-600 mb-2">المرحلة الثالثة</h4>
              <p className="text-sm text-muted-foreground mb-4">الشهر السابع - التاسع</p>
              <ul className="text-sm text-muted-foreground space-y-1 text-right">
                <li>• تطبيق السياسات</li>
                <li>• تدريب الموظفين</li>
                <li>• المراقبة والتقييم</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
