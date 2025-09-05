import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Award, Shield, ClipboardCheck } from "lucide-react";

export default function FrameworksSection() {
  return (
    <section id="frameworks" className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">الأطر والمعايير المطبقة</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            استعراض للمعايير الدولية والأطر التنظيمية المطبقة في الشركة
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="section-card p-8 shadow-lg border border-border">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500" 
                alt="مركز الأمان والمراقبة - يمن نت" 
                className="w-full h-64 object-cover rounded-lg"
                data-testid="img-security-framework"
                crossOrigin="anonymous"
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-lg ml-3">
                <CheckCircle className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-green-600">الأطر المطبقة</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center p-3 bg-green-50 rounded-lg">
                <Award className="text-green-600 h-5 w-5 ml-3" />
                <div>
                  <span className="font-semibold">ISO 27001</span>
                  <p className="text-sm text-muted-foreground">إدارة أمن المعلومات</p>
                </div>
              </li>
              <li className="flex items-center p-3 bg-green-50 rounded-lg">
                <Shield className="text-green-600 h-5 w-5 ml-3" />
                <div>
                  <span className="font-semibold">NIST Framework</span>
                  <p className="text-sm text-muted-foreground">إطار الأمن السيبراني</p>
                </div>
              </li>
              <li className="flex items-center p-3 bg-green-50 rounded-lg">
                <ClipboardCheck className="text-green-600 h-5 w-5 ml-3" />
                <div>
                  <span className="font-semibold">ITIL v4</span>
                  <p className="text-sm text-muted-foreground">إدارة خدمات تقنية المعلومات</p>
                </div>
              </li>
            </ul>
          </Card>
          
          <Card className="section-card p-8 shadow-lg border border-border">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-2 rounded-lg ml-3">
                <Clock className="text-orange-600 h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-orange-600">الأطر المطلوب تطبيقها</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center p-3 bg-orange-50 rounded-lg">
                <Clock className="text-orange-600 h-5 w-5 ml-3" />
                <div>
                  <span className="font-semibold">COBIT 2019</span>
                  <p className="text-sm text-muted-foreground">حوكمة تقنية المعلومات</p>
                </div>
              </li>
              <li className="flex items-center p-3 bg-orange-50 rounded-lg">
                <Clock className="text-orange-600 h-5 w-5 ml-3" />
                <div>
                  <span className="font-semibold">GDPR Compliance</span>
                  <p className="text-sm text-muted-foreground">حماية البيانات الشخصية</p>
                </div>
              </li>
              <li className="flex items-center p-3 bg-orange-50 rounded-lg">
                <Clock className="text-orange-600 h-5 w-5 ml-3" />
                <div>
                  <span className="font-semibold">DevSecOps</span>
                  <p className="text-sm text-muted-foreground">أمان التطوير والتشغيل</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-orange-100 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">خطة التطبيق</h4>
              <p className="text-sm text-orange-700">
                يتطلب تطبيق هذه الأطر استثماراً في التدريب والاستشارة خلال العام القادم
              </p>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 shadow-lg border border-border">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">مصفوفة تقييم الامتثال</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right py-3 px-4">الإطار</th>
                  <th className="text-center py-3 px-4">نسبة التطبيق</th>
                  <th className="text-center py-3 px-4">الحالة</th>
                  <th className="text-right py-3 px-4">الأولوية</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 px-4">ISO 27001</td>
                  <td className="text-center py-3 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-sm">85%</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge className="bg-green-100 text-green-800">مطبق</Badge>
                  </td>
                  <td className="py-3 px-4">عالية</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">NIST Framework</td>
                  <td className="text-center py-3 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-sm">60%</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge className="bg-yellow-100 text-yellow-800">جزئي</Badge>
                  </td>
                  <td className="py-3 px-4">عالية</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">ITIL v4</td>
                  <td className="text-center py-3 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <span className="text-sm">90%</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge className="bg-green-100 text-green-800">مطبق</Badge>
                  </td>
                  <td className="py-3 px-4">متوسطة</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">COBIT 2019</td>
                  <td className="text-center py-3 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                    <span className="text-sm">25%</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge variant="destructive">غير مطبق</Badge>
                  </td>
                  <td className="py-3 px-4">عالية</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
}
