'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* قسم الترحيب الرئيسي */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-0"></div>
        <div 
          className={`container relative z-10 text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            منصة حسن جواد
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            موقع تعليمي شامل يساعد الطلاب والخريجين الجدد على بناء مستقبلهم المهني في مجالات الهندسة والتقنية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">استكشف الدورات</Button>
            <Button size="lg" variant="outline">تعرف علينا</Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* قسم الدورات التعليمية */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              الدورات التعليمية
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="الهندسة المدنية"
              description="خارطة طريق مفصّلة لتعلم الهندسة المدنية، تبدأ من الأساسيات حتى الاحتراف"
              image="/placeholder.jpg"
              imageAlt="دورة الهندسة المدنية"
              footer={<Button className="w-full">استعرض الدورة</Button>}
            />
            <Card
              title="الهندسة المعمارية"
              description="دليل شامل للتصميم المعماري والنمذجة ثلاثية الأبعاد باستخدام أحدث البرامج"
              image="/placeholder.jpg"
              imageAlt="دورة الهندسة المعمارية"
              footer={<Button className="w-full">استعرض الدورة</Button>}
            />
            <Card
              title="هندسة البرمجيات"
              description="تعلم أساسيات البرمجة وتطبيقاتها في المجالات الهندسية المختلفة"
              image="/placeholder.jpg"
              imageAlt="دورة هندسة البرمجيات"
              footer={<Button className="w-full">استعرض الدورة</Button>}
            />
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">عرض جميع الدورات</Button>
          </div>
        </div>
      </section>

      {/* قسم البرامج الهندسية */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              البرامج الهندسية
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-primary dark:text-secondary text-4xl mb-4">
                <i className="fas fa-drafting-compass"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">AutoCAD</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">للرسم الهندسي ثنائي وثلاثي الأبعاد</p>
              <a 
                href="https://youtube.com/playlist?list=PLhiFu-f80eo_NNLsyQUpHqYcrkftgqZ4P" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary dark:text-secondary hover:underline"
              >
                شاهد الدورة المجانية
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-primary dark:text-secondary text-4xl mb-4">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Revit</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">لتصميم نماذج معلومات المباني (BIM)</p>
              <a 
                href="https://youtube.com/playlist?list=PLhiFu-f80eo-fJPbEr9uxFG-QnjY32s99" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary dark:text-secondary hover:underline"
              >
                شاهد الدورة المجانية
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-primary dark:text-secondary text-4xl mb-4">
                <i className="fas fa-cubes"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">SAP2000</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">لتحليل وتصميم المنشآت الإنشائية</p>
              <a 
                href="https://youtube.com/playlist?list=PLhiFu-f80eo-p39D-XbcuAuyzT-Y16Hrn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary dark:text-secondary hover:underline"
              >
                شاهد الدورة المجانية
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-primary dark:text-secondary text-4xl mb-4">
                <i className="fas fa-road"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Civil 3D</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">لتصميم الطرق والبنية التحتية</p>
              <a 
                href="https://youtube.com/playlist?list=PLhiFu-f80eo_H58ZKmLGtjyGIrovr0d-H" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary dark:text-secondary hover:underline"
              >
                شاهد الدورة المجانية
              </a>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">استعراض جميع البرامج</Button>
          </div>
        </div>
      </section>

      {/* قسم الأسئلة الشائعة */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              الأسئلة الشائعة
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion>
              <AccordionItem title="ما هي المنصة وما الذي تقدمه؟">
                <p className="text-gray-600 dark:text-gray-400">
                  منصة حسن جواد هي موقع تعليمي شامل يساعد الطلاب والخريجين الجدد على بناء مستقبلهم المهني في مجالات الهندسة والتقنية من خلال محتوى متكامل ومجاني، مقدم بخبرة تفوق 30 سنة في البرمجة وتصميم المواقع.
                </p>
              </AccordionItem>
              <AccordionItem title="هل الدورات مجانية؟">
                <p className="text-gray-600 dark:text-gray-400">
                  نعم، نوفر العديد من الدورات المجانية في مختلف المجالات الهندسية مثل أوتوكاد، ريفيت، SAP2000، الإكسل، وغيرها. كما نقدم توصيات لدورات مدفوعة عالية الجودة لمن يرغب في التعمق أكثر.
                </p>
              </AccordionItem>
              <AccordionItem title="كيف يمكنني الاستفادة من مكتبة الكتب الهندسية؟">
                <p className="text-gray-600 dark:text-gray-400">
                  توفر المنصة مكتبة إلكترونية ضخمة تحتوي على كتب ومراجع بصيغة PDF، تغطي تخصصات متعددة في مجالات الهندسة المختلفة. يمكنك تصفح الكتب حسب التخصص وتحميلها مجاناً.
                </p>
              </AccordionItem>
              <AccordionItem title="هل يمكنني المساهمة في المحتوى؟">
                <p className="text-gray-600 dark:text-gray-400">
                  بالتأكيد! نرحب بمشاركتك للمحتوى المفيد مثل الكتب والروابط والملفات لبناء مجتمع هندسي متعاون. يمكنك استخدام نموذج رفع الملفات واقتراح المحتوى المتاح في قسم "تواصل ومشاركة".
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* قسم التواصل */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              تواصل معنا
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">ابق على تواصل</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                نحن هنا للإجابة على استفساراتك وتقديم المساعدة. لا تتردد في التواصل معنا عبر أي من القنوات التالية.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary dark:text-secondary ml-3">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">البريد الإلكتروني</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      <a href="mailto:enghassanjawad@outlook.com" className="hover:text-primary dark:hover:text-secondary">
                        enghassanjawad@outlook.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary dark:text-secondary ml-3">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">وسائل التواصل الاجتماعي</h4>
                    <div className="mt-1 flex space-x-4 rtl:space-x-reverse">
                      <a href="https://www.instagram.com/hy9y_" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/hassan-jawad-9a3618309" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    placeholder="أدخل رسالتك"
                  ></textarea>
                </div>
                <div>
                  <Button className="w-full" size="lg">إرسال الرسالة</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* روبوت المحادثة */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
          aria-label="فتح روبوت المحادثة"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
