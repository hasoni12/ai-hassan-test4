'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

export default function CareerPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const careerPaths = [
    {
      title: 'مهندس تصميم إنشائي',
      description: 'تخصص في تصميم الهياكل الإنشائية للمباني والجسور والمنشآت المختلفة',
      skills: ['تحليل إنشائي', 'تصميم خرساني', 'تصميم معدني', 'SAP2000', 'ETABS', 'AutoCAD'],
      courses: ['تصميم المنشآت الخرسانية', 'تصميم المنشآت المعدنية', 'ميكانيكا التربة والأساسات'],
      certifications: ['PE (مهندس محترف)', 'PMP (إدارة مشاريع)'],
    },
    {
      title: 'مهندس تصميم معماري',
      description: 'تخصص في تصميم المباني والمساحات من الناحية الجمالية والوظيفية',
      skills: ['تصميم معماري', 'نمذجة ثلاثية الأبعاد', 'Revit', 'SketchUp', 'Photoshop'],
      courses: ['تصميم معماري متقدم', 'نمذجة معلومات البناء (BIM)', 'تصميم داخلي'],
      certifications: ['LEED AP', 'AIA (معهد المهندسين المعماريين)'],
    },
    {
      title: 'مهندس موقع',
      description: 'الإشراف على تنفيذ المشاريع الإنشائية في الموقع وضمان جودة التنفيذ',
      skills: ['قراءة المخططات', 'إدارة العمال', 'ضبط الجودة', 'حساب الكميات', 'جدولة المشاريع'],
      courses: ['إدارة مشاريع التشييد', 'تخطيط وجدولة المشاريع', 'ضبط جودة التنفيذ'],
      certifications: ['PMP (إدارة مشاريع)', 'CQE (مهندس جودة معتمد)'],
    },
    {
      title: 'مهندس تخطيط وتكاليف',
      description: 'تخصص في تخطيط المشاريع وإعداد الجداول الزمنية وتقدير التكاليف',
      skills: ['Primavera P6', 'MS Project', 'Excel', 'حساب الكميات', 'تقدير التكاليف'],
      courses: ['إدارة المشاريع الاحترافية', 'تخطيط وجدولة المشاريع', 'إدارة التكاليف'],
      certifications: ['PMP (إدارة مشاريع)', 'PSP (مخطط جداول زمنية)', 'EVP (قيمة مكتسبة)'],
    },
    {
      title: 'مهندس BIM',
      description: 'تخصص في نمذجة معلومات البناء وتنسيق التخصصات المختلفة',
      skills: ['Revit', 'Navisworks', 'تنسيق MEP', 'تحليل التعارضات', 'التصميم التعاوني'],
      courses: ['نمذجة معلومات البناء المتقدمة', 'تنسيق BIM', 'برمجة Dynamo'],
      certifications: ['Autodesk Certified Professional', 'BIM Level 2'],
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div 
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              بناء المسار المهني
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              قسم خاص لمساعدتك في الانتقال من الدراسة إلى سوق العمل وتطوير مسارك المهني في مجال الهندسة.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">المسارات المهنية المتاحة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((path, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{path.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{path.description}</p>
                  <Button className="w-full" onClick={() => {
                    const element = document.getElementById(`career-${index}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>
                    استكشف المسار
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {careerPaths.map((path, index) => (
        <section 
          id={`career-${index}`}
          key={index} 
          className={`py-16 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'}`}
        >
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {path.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
                {path.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary dark:text-secondary">المهارات المطلوبة</h3>
                  <ul className="space-y-2">
                    {path.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start">
                        <svg className="h-6 w-6 text-primary dark:text-secondary ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary dark:text-secondary">الدورات الموصى بها</h3>
                  <ul className="space-y-2">
                    {path.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start">
                        <svg className="h-6 w-6 text-primary dark:text-secondary ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-secondary">الشهادات المهنية المقترحة</h3>
                <ul className="space-y-2">
                  {path.certifications.map((cert, certIndex) => (
                    <li key={certIndex} className="flex items-start">
                      <svg className="h-6 w-6 text-primary dark:text-secondary ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <Button size="lg">
                  إنشاء خطة مسار مهني مخصصة
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">نصائح لبناء السيرة الذاتية</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion>
              <AccordionItem title="كيفية بناء سيرة ذاتية احترافية">
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    السيرة الذاتية هي بوابتك الأولى لسوق العمل. إليك بعض النصائح لإنشاء سيرة ذاتية احترافية:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 pr-6">
                    <li>استخدم تنسيقاً واضحاً ومقروءاً مع هوامش مناسبة وخط مريح للقراءة</li>
                    <li>ابدأ بملخص مهني قوي يلخص خبراتك ومهاراتك الرئيسية</li>
                    <li>ركز على الإنجازات بدلاً من المسؤوليات، واستخدم أرقاماً ونسباً مئوية لتوضيح تأثيرك</li>
                    <li>خصص سيرتك الذاتية لكل وظيفة تتقدم إليها، مع التركيز على المهارات والخبرات ذات الصلة</li>
                    <li>تأكد من خلو السيرة الذاتية من الأخطاء الإملائية والنحوية</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400">
                    يمكنك تحميل قوالب السيرة الذاتية المخصصة للمهندسين من قسم الموارد.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem title="بناء حساب LinkedIn احترافي">
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    LinkedIn هو أداة قوية للتواصل المهني وإيجاد فرص عمل. إليك كيفية تحسين ملفك الشخصي:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 pr-6">
                    <li>استخدم صورة شخصية احترافية وصورة غلاف مناسبة لمجالك</li>
                    <li>اكتب عنواناً وظيفياً واضحاً يعكس تخصصك ومهاراتك</li>
                    <li>اكتب ملخصاً شخصياً يبرز خبراتك وإنجازاتك وشغفك بمجالك</li>
                    <li>أضف مهاراتك الرئيسية واطلب التزكيات من زملائك ومديريك</li>
                    <li>شارك محتوى متخصصاً وتفاعل مع منشورات الآخرين في مجالك</li>
                    <li>انضم إلى المجموعات المهنية المتخصصة في مجال الهندسة</li>
                  </ul>
                </div>
              </AccordionItem>
              <AccordionItem title="التحضير للمقابلات الوظيفية">
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    المقابلة الوظيفية هي فرصتك لإقناع صاحب العمل بأنك المرشح المثالي. إليك كيفية الاستعداد:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 pr-6">
                    <li>ابحث عن الشركة وثقافتها ومشاريعها الحالية قبل المقابلة</li>
                    <li>راجع الأسئلة الشائعة في مقابلات الهندسة وحضّر إجاباتك</li>
                    <li>جهز أمثلة محددة من خبراتك السابقة لتوضيح مهاراتك وإنجازاتك</li>
                    <li>تدرب على شرح المشاريع التي عملت عليها بطريقة واضحة ومختصرة</li>
                    <li>حضّر أسئلة ذكية لطرحها على المحاورين في نهاية المقابلة</li>
                    <li>تدرب على المقابلات مع صديق أو زميل للحصول على تغذية راجعة</li>
                  </ul>
                </div>
              </AccordionItem>
              <AccordionItem title="بناء شبكة علاقات مهنية قوية">
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    التواصل المهني هو أحد أهم عوامل النجاح في المسار المهني. إليك كيفية بناء شبكة علاقات قوية:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 pr-6">
                    <li>احضر المؤتمرات والفعاليات المهنية في مجال الهندسة</li>
                    <li>انضم إلى النقابات والجمعيات المهنية المتخصصة</li>
                    <li>شارك في ورش العمل والدورات التدريبية للتعرف على زملاء جدد</li>
                    <li>تواصل مع خريجي جامعتك وزملاء الدراسة السابقين</li>
                    <li>قدم المساعدة للآخرين وكن مستعداً للتعاون والمشاركة</li>
                    <li>حافظ على التواصل المستمر مع شبكة علاقاتك المهنية</li>
                  </ul>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">أداة تخطيط المسار المهني</h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
              استخدم أداة تخطيط المسار المهني المدعومة بالذكاء الاصطناعي للحصول على خطة مخصصة تناسب أهدافك ومهاراتك.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  التخصص الهندسي
                </label>
                <select
                  id="specialization"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                >
                  <option value="">اختر تخصصك</option>
                  <option value="structural">هندسة إنشائية</option>
                  <option value="architectural">هندسة معمارية</option>
                  <option value="geotechnical">هندسة جيوتقنية</option>
                  <option value="transportation">هندسة النقل والمواصلات</option>
                  <option value="water">هندسة المياه والبيئة</option>
                  <option value="construction">هندسة التشييد وإدارة المشاريع</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  مستوى الخبرة
                </label>
                <select
                  id="experience"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                >
                  <option value="">اختر مستوى خبرتك</option>
                  <option value="student">طالب</option>
                  <option value="fresh">خريج جديد</option>
                  <option value="junior">مهندس مبتدئ (1-3 سنوات)</option>
                  <option value="mid">مهندس متوسط (3-7 سنوات)</option>
                  <option value="senior">مهندس خبير (7+ سنوات)</option>
                </select>
              </div>
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  المهارات الحالية
                </label>
                <textarea
                  id="skills"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  placeholder="أدخل مهاراتك الحالية مفصولة بفواصل"
                ></textarea>
              </div>
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  الأهداف المهنية
                </label>
                <textarea
                  id="goals"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  placeholder="ما هي أهدافك المهنية على المدى القصير والطويل؟"
                ></textarea>
              </div>
              <div>
                <Button className="w-full" size="lg">
                  إنشاء خطة المسار المهني
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
