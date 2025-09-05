export default function FooterSection() {
  return (
    <footer className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">الخلاصة والتوصيات</h2>
          <p className="text-primary-foreground text-lg max-w-4xl mx-auto">
            من خلال الدراسة الميدانية لشركة الاتصالات اليمنية، تبين وجود بنية تحتية قوية مع إمكانات كبيرة للتطوير في مجال أمن المعلومات
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">نقاط القوة</h3>
            <ul className="space-y-2 text-sm">
              <li>• بنية تحتية تقنية متقدمة</li>
              <li>• فريق تقني مؤهل</li>
              <li>• تطبيق جزئي للمعايير الدولية</li>
              <li>• أنظمة مراقبة فعالة</li>
            </ul>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">التحديات</h3>
            <ul className="space-y-2 text-sm">
              <li>• نقص في الوعي الأمني</li>
              <li>• عدم اكتمال السياسات الأمنية</li>
              <li>• الحاجة لتدريب متخصص</li>
              <li>• ضرورة تطبيق معايير إضافية</li>
            </ul>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">التوصيات</h3>
            <ul className="space-y-2 text-sm">
              <li>• تطوير برامج التوعية الأمنية</li>
              <li>• إكمال تطبيق المعايير الدولية</li>
              <li>• إنشاء مركز عمليات أمان</li>
              <li>• تطوير خطط الطوارئ</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-2">إعداد الطالب</h3>
              <p className="text-2xl font-bold text-accent mb-1" data-testid="footer-student-name">عبدالفتاح الشيخ</p>
              <p className="text-primary-foreground">طالب ماجستير - أساسيات وأمن المعلومات</p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">تحت إشراف</h3>
              <p className="text-2xl font-bold text-accent mb-1" data-testid="footer-supervisor-name">الدكتور أحمد الحميري</p>
              <p className="text-primary-foreground">أستاذ أمن المعلومات</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p className="text-primary-foreground">
              تم إعداد هذا التقرير بناءً على زيارة ميدانية شاملة لشركة الاتصالات اليمنية - يمن نت
            </p>
            <p className="text-primary-foreground mt-2">
              © 2024 - جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
