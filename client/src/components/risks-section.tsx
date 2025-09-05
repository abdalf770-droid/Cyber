import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Users, ArrowLeft } from "lucide-react";

export default function RisksSection() {
  return (
    <section id="risks" className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">المخاطر والتحديات الأمنية</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            تحليل شامل للتهديدات والمخاطر المحتملة والحلول المقترحة لمعالجتها
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="section-card p-6 shadow-lg border border-border border-r-4 border-r-red-500">
            <div className="mb-4">
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-red-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">التهديدات السيبرانية</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• هجمات DDoS المتكررة</li>
              <li>• محاولات اختراق قواعد البيانات</li>
              <li>• البرمجيات الخبيثة والفيروسات</li>
              <li>• هجمات التصيد الإلكتروني</li>
            </ul>
            <div className="mt-4 p-3 bg-red-50 rounded-lg">
              <Badge variant="destructive" className="text-xs">مستوى الخطورة: عالي</Badge>
            </div>
          </Card>
          
          <Card className="section-card p-6 shadow-lg border border-border border-r-4 border-r-yellow-500">
            <div className="mb-4">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <AlertTriangle className="text-yellow-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-yellow-600 mb-2">مخاطر البنية التحتية</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• انقطاع التيار الكهربائي</li>
              <li>• أعطال الأجهزة والمعدات</li>
              <li>• مشاكل الشبكة والاتصال</li>
              <li>• قصور في أنظمة التبريد</li>
            </ul>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">مستوى الخطورة: متوسط</Badge>
            </div>
          </Card>
          
          <Card className="section-card p-6 shadow-lg border border-border border-r-4 border-r-orange-500">
            <div className="mb-4">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-orange-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">المخاطر البشرية</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• نقص الوعي الأمني</li>
              <li>• أخطاء الموظفين</li>
              <li>• ضعف في التدريب التقني</li>
              <li>• عدم الالتزام بالإجراءات</li>
            </ul>
            <div className="mt-4 p-3 bg-orange-50 rounded-lg">
              <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-800">مستوى الخطورة: متوسط</Badge>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 shadow-lg border border-border">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">الخطة العلاجية المقترحة</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">الحلول التقنية</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowLeft className="text-primary h-4 w-4 mt-1 ml-3" />
                  <span className="text-muted-foreground">تطبيق أنظمة الحماية المتقدمة (Firewall, IDS/IPS)</span>
                </li>
                <li className="flex items-start">
                  <ArrowLeft className="text-primary h-4 w-4 mt-1 ml-3" />
                  <span className="text-muted-foreground">تشفير البيانات الحساسة</span>
                </li>
                <li className="flex items-start">
                  <ArrowLeft className="text-primary h-4 w-4 mt-1 ml-3" />
                  <span className="text-muted-foreground">تحديث الأنظمة والبرمجيات دورياً</span>
                </li>
                <li className="flex items-start">
                  <ArrowLeft className="text-primary h-4 w-4 mt-1 ml-3" />
                  <span className="text-muted-foreground">نظام النسخ الاحتياطي المؤتمت</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">الحلول الإدارية</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowLeft className="text-accent h-4 w-4 mt-1 ml-3" />
                  <span className="text-muted-foreground">برامج التدريب والتوعية</span>
                </li>
                <li className="flex items-start">
                  <ArrowLeft className="text-accent h-4 w-4 mt-1 ml-3" />
                  <span className="text-muted-foreground">وضع إجراءات وسياسات واضحة</span>
                </li>
                <li className="flex items-start">
                  <ArrowLeft className="text-accent h-4 w-4 mt-1 ml-3" />
                  <span className="text-muted-foreground">مراجعة دورية للأنظمة</span>
                </li>
                <li className="flex items-start">
                  <ArrowLeft className="text-accent h-4 w-4 mt-1 ml-3" />
                  <span className="text-muted-foreground">خطط الاستجابة للحوادث</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
