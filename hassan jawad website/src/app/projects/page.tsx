'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'تصميم جسر معلق',
      description: 'مشروع تخرج لتصميم جسر معلق باستخدام SAP2000 مع دراسة تحليلية كاملة',
      image: '/placeholder.jpg',
      category: 'هندسة إنشائية',
      tools: ['SAP2000', 'AutoCAD', 'Excel'],
    },
    {
      id: 2,
      title: 'نظام إدارة المباني الذكية',
      description: 'تطبيق لإدارة أنظمة المباني الذكية باستخدام تقنيات إنترنت الأشياء والذكاء الاصطناعي',
      image: '/placeholder.jpg',
      category: 'أنظمة ذكية',
      tools: ['Arduino', 'Python', 'React'],
    },
    {
      id: 3,
      title: 'تصميم مبنى سكني متعدد الطوابق',
      description: 'مشروع تصميم مبنى سكني كامل من 12 طابق باستخدام تقنيات BIM',
      image: '/placeholder.jpg',
      category: 'هندسة معمارية',
      tools: ['Revit', 'ETABS', 'Lumion'],
    },
    {
      id: 4,
      title: 'تخطيط حي سكني مستدام',
      description: 'مشروع تخطيط حي سكني يراعي معايير الاستدامة والكفاءة في استخدام الطاقة',
      image: '/placeholder.jpg',
      category: 'تخطيط عمراني',
      tools: ['Civil 3D', 'ArcGIS', 'SketchUp'],
    },
    {
      id: 5,
      title: 'نظام مراقبة سلامة المنشآت',
      description: 'تطوير نظام لمراقبة سلامة المنشآت في الوقت الفعلي باستخدام أجهزة استشعار متصلة',
      image: '/placeholder.jpg',
      category: 'أنظمة ذكية',
      tools: ['IoT Sensors', 'MATLAB', 'Power BI'],
    },
    {
      id: 6,
      title: 'تصميم شبكة مياه وصرف صحي',
      description: 'مشروع تصميم شبكة مياه وصرف صحي متكاملة لمنطقة سكنية',
      image: '/placeholder.jpg',
      category: 'هندسة بيئية',
      tools: ['Civil 3D', 'WaterGEMS', 'Excel'],
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [activeTool, setActiveTool] = useState('الكل');

  const categories = ['الكل', 'هندسة إنشائية', 'هندسة معمارية', 'تخطيط عمراني', 'هندسة بيئية', 'أنظمة ذكية'];
  
  // استخراج جميع الأدوات الفريدة من المشاريع
  const allTools = ['الكل', ...Array.from(new Set(projects.flatMap(project => project.tools)))];

  const filterProjects = (category: string, tool: string) => {
    let filtered = projects;
    
    if (category !== 'الكل') {
      filtered = filtered.filter(project => project.category === category);
    }
    
    if (tool !== 'الكل') {
      filtered = filtered.filter(project => project.tools.includes(tool));
    }
    
    setFilteredProjects(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    filterProjects(category, activeTool);
  };

  const handleToolChange = (tool: string) => {
    setActiveTool(tool);
    filterProjects(activeCategory, tool);
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
              مشاريع واقعية ومتقدمة
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              نعرض مشاريع تخرج ونماذج تطبيقية، من الفكرة إلى التنفيذ، لمساعدتك في تطوير مهاراتك العملية.
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
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">الأدوات المستخدمة</h3>
                <div className="space-y-2">
                  {allTools.map(tool => (
                    <button
                      key={tool}
                      onClick={() => handleToolChange(tool)}
                      className={`block w-full text-right py-2 px-3 rounded-md transition-colors ${
                        activeTool === tool
                          ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* قائمة المشاريع */}
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map(project => (
                  <Card
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    imageAlt={`مشروع ${project.title}`}
                    footer={
                      <div className="w-full">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-gray-500 dark:text-gray-400">{project.category}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tools.map((tool, index) => (
                            <span 
                              key={index} 
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                        <Button className="w-full">
                          عرض تفاصيل المشروع
                        </Button>
                      </div>
                    }
                  />
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">لا توجد مشاريع متاحة بالمعايير المحددة</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setActiveCategory('الكل');
                      setActiveTool('الكل');
                      setFilteredProjects(projects);
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
          <h2 className="text-3xl font-bold mb-8 text-center">مشاركة مشروعك</h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              هل لديك مشروع مميز ترغب في مشاركته مع المجتمع الهندسي؟ يمكنك تقديم مشروعك ليتم عرضه في هذا القسم ومشاركة خبراتك مع الآخرين.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="project-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  عنوان المشروع
                </label>
                <input
                  type="text"
                  id="project-title"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  placeholder="أدخل عنوان المشروع"
                />
              </div>
              <div>
                <label htmlFor="project-category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  التصنيف
                </label>
                <select
                  id="project-category"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                >
                  <option value="">اختر تصنيفاً</option>
                  {categories.filter(cat => cat !== 'الكل').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="project-description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  وصف المشروع
                </label>
                <textarea
                  id="project-description"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  placeholder="أدخل وصفاً مفصلاً للمشروع"
                ></textarea>
              </div>
              <div>
                <label htmlFor="project-tools" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  الأدوات المستخدمة
                </label>
                <input
                  type="text"
                  id="project-tools"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  placeholder="أدخل الأدوات المستخدمة مفصولة بفواصل"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  صورة المشروع
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-primary dark:text-secondary hover:text-primary/80 focus-within:outline-none"
                      >
                        <span>رفع صورة</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pr-1">أو اسحب وأفلت</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG حتى 5 ميجابايت
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ملفات المشروع (اختياري)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                      <label
                        htmlFor="files-upload"
                        className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-primary dark:text-secondary hover:text-primary/80 focus-within:outline-none"
                      >
                        <span>رفع ملفات</span>
                        <input id="files-upload" name="files-upload" type="file" multiple className="sr-only" />
                      </label>
                      <p className="pr-1">أو اسحب وأفلت</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PDF, DWG, RVT حتى 20 ميجابايت
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Button className="w-full" size="lg">
                  تقديم المشروع
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
