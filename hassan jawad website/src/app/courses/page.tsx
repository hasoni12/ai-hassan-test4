'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

export default function CoursesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courses = [
    {
      id: 1,
      title: 'أوتوكاد',
      description: 'تعلم أساسيات التصميم الهندسي باستخدام برنامج أوتوكاد',
      image: '/placeholder.jpg',
      link: 'https://youtube.com/playlist?list=PLhiFu-f80eo_NNLsyQUpHqYcrkftgqZ4P',
      category: 'برامج هندسية',
      level: 'مبتدئ',
    },
    {
      id: 2,
      title: 'ريفيت',
      description: 'تعلم نمذجة المباني والإنشاءات باستخدام برنامج ريفيت',
      image: '/placeholder.jpg',
      link: 'https://youtube.com/playlist?list=PLhiFu-f80eo-fJPbEr9uxFG-QnjY32s99',
      category: 'برامج هندسية',
      level: 'متوسط',
    },
    {
      id: 3,
      title: 'SAP2000',
      description: 'تعلم تحليل وتصميم الهياكل الإنشائية باستخدام برنامج SAP2000',
      image: '/placeholder.jpg',
      link: 'https://youtube.com/playlist?list=PLhiFu-f80eo-p39D-XbcuAuyzT-Y16Hrn',
      category: 'برامج هندسية',
      level: 'متقدم',
    },
    {
      id: 4,
      title: 'الإكسل',
      description: 'تعلم مهارات تحليل البيانات وإنشاء الجداول باستخدام برنامج الإكسل',
      image: '/placeholder.jpg',
      link: 'https://youtube.com/playlist?list=PLhiFu-f80eo90U_43hqZ3pqjhFG3vNKp9',
      category: 'برامج مكتبية',
      level: 'مبتدئ',
    },
    {
      id: 5,
      title: 'البوربوينت',
      description: 'تعلم إنشاء عروض تقديمية احترافية باستخدام برنامج البوربوينت',
      image: '/placeholder.jpg',
      link: 'https://youtu.be/NP3YF-PJPAU',
      category: 'برامج مكتبية',
      level: 'مبتدئ',
    },
    {
      id: 6,
      title: 'Civil 3D',
      description: 'الدورة الكاملة لتعلم تصميم الطرق والبنية التحتية باستخدام برنامج Civil 3D',
      image: '/placeholder.jpg',
      link: 'https://youtube.com/playlist?list=PLhiFu-f80eo_H58ZKmLGtjyGIrovr0d-H',
      category: 'برامج هندسية',
      level: 'متقدم',
    },
    {
      id: 7,
      title: 'بريمافيرا',
      description: 'تعلم إدارة المشاريع الهندسية باستخدام برنامج بريمافيرا',
      image: '/placeholder.jpg',
      link: 'https://youtube.com/playlist?list=PLhiFu-f80eo9aUs_OTzXNA0xaEt2my3aE',
      category: 'إدارة مشاريع',
      level: 'متوسط',
    },
  ];

  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [activeLevel, setActiveLevel] = useState('الكل');

  const categories = ['الكل', 'برامج هندسية', 'برامج مكتبية', 'إدارة مشاريع'];
  const levels = ['الكل', 'مبتدئ', 'متوسط', 'متقدم'];

  const filterCourses = (category: string, level: string) => {
    let filtered = courses;
    
    if (category !== 'الكل') {
      filtered = filtered.filter(course => course.category === category);
    }
    
    if (level !== 'الكل') {
      filtered = filtered.filter(course => course.level === level);
    }
    
    setFilteredCourses(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    filterCourses(category, activeLevel);
  };

  const handleLevelChange = (level: string) => {
    setActiveLevel(level);
    filterCourses(activeCategory, level);
  };

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
              الدورات التعليمية
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              نوفر لك خارطة طريق مفصّلة لتعلم التخصصات الهندسية المختلفة، تبدأ من الأساسيات حتى الاحتراف، مع روابط لأفضل الدورات المجانية على الإنترنت.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* فلاتر التصفية */}
            <div className="w-full md:w-1/4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">التصنيفات</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-right py-2 px-3 rounded-md transition-colors ${
                        activeCategory === category
                          ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">المستوى</h3>
                <div className="space-y-2">
                  {levels.map(level => (
                    <button
                      key={level}
                      onClick={() => handleLevelChange(level)}
                      className={`block w-full text-right py-2 px-3 rounded-md transition-colors ${
                        activeLevel === level
                          ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* قائمة الدورات */}
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <Card
                    key={course.id}
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    imageAlt={`دورة ${course.title}`}
                    footer={
                      <div className="w-full">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-gray-500 dark:text-gray-400">{course.category}</span>
                          <span className="text-sm bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary px-2 py-1 rounded-full">{course.level}</span>
                        </div>
                        <a 
                          href={course.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <Button className="w-full">
                            مشاهدة الدورة
                            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Button>
                        </a>
                      </div>
                    }
                  />
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">لا توجد دورات متاحة بالمعايير المحددة</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setActiveCategory('الكل');
                      setActiveLevel('الكل');
                      setFilteredCourses(courses);
                    }}
                  >
                    إعادة ضبط الفلاتر
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">الأسئلة الشائعة</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion>
              <AccordionItem title="هل الدورات مجانية بالكامل؟">
                <p className="text-gray-600 dark:text-gray-400">
                  نعم، جميع الدورات المعروضة في هذا القسم مجانية بالكامل ومتاحة على منصة يوتيوب. يمكنك الوصول إليها في أي وقت دون الحاجة إلى دفع أي رسوم.
                </p>
              </AccordionItem>
              <AccordionItem title="هل أحتاج إلى خبرة سابقة لبدء الدورات؟">
                <p className="text-gray-600 dark:text-gray-400">
                  تختلف متطلبات كل دورة حسب مستواها. الدورات المصنفة كـ "مبتدئ" لا تتطلب خبرة سابقة، بينما قد تتطلب الدورات المتوسطة والمتقدمة بعض المعرفة الأساسية بالمجال.
                </p>
              </AccordionItem>
              <AccordionItem title="هل يمكنني الحصول على شهادة بعد إكمال الدورة؟">
                <p className="text-gray-600 dark:text-gray-400">
                  الدورات المجانية لا توفر شهادات رسمية، لكننا نعمل على إضافة نظام لإصدار شهادات إتمام في المستقبل. يمكنك متابعة تقدمك من خلال حسابك على المنصة.
                </p>
              </AccordionItem>
              <AccordionItem title="كيف يمكنني اقتراح دورة جديدة؟">
                <p className="text-gray-600 dark:text-gray-400">
                  يمكنك اقتراح دورات جديدة من خلال نموذج الاتصال في صفحة "تواصل معنا". نحن نرحب دائمًا باقتراحاتكم ونعمل على توفير المحتوى الذي يلبي احتياجاتكم.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
