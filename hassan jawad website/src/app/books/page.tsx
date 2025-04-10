'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

export default function BooksPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const books = [
    {
      id: 1,
      title: 'تصميم المنشآت الخرسانية',
      author: 'د. شاكر البحيري',
      description: 'مرجع شامل في تصميم المنشآت الخرسانية وفق الكود العربي الموحد',
      image: '/placeholder.jpg',
      category: 'هندسة مدنية',
      tags: ['خرسانة', 'تصميم إنشائي'],
    },
    {
      id: 2,
      title: 'هندسة الأساسات',
      author: 'برازمان',
      description: 'كتاب متكامل في هندسة الأساسات وميكانيكا التربة',
      image: '/placeholder.jpg',
      category: 'هندسة مدنية',
      tags: ['أساسات', 'ميكانيكا التربة'],
    },
    {
      id: 3,
      title: 'أعمال التنفيذ',
      author: 'مجموعة مؤلفين',
      description: 'دليل عملي لأعمال التنفيذ في المشاريع الإنشائية',
      image: '/placeholder.jpg',
      category: 'هندسة مدنية',
      tags: ['تنفيذ', 'إدارة مشاريع'],
    },
    {
      id: 4,
      title: 'دليل AutoCAD للمبتدئين',
      author: 'حسن جواد',
      description: 'دليل شامل لتعلم برنامج AutoCAD من الصفر حتى الاحتراف',
      image: '/placeholder.jpg',
      category: 'برامج هندسية',
      tags: ['أوتوكاد', 'رسم هندسي'],
    },
    {
      id: 5,
      title: 'شرح Revit بالعربي',
      author: 'حسن جواد',
      description: 'كتاب تعليمي لبرنامج Revit باللغة العربية',
      image: '/placeholder.jpg',
      category: 'برامج هندسية',
      tags: ['ريفيت', 'نمذجة معلومات البناء'],
    },
    {
      id: 6,
      title: 'Excel للمهندسين',
      author: 'مجموعة مؤلفين',
      description: 'تطبيقات برنامج Excel في المجالات الهندسية المختلفة',
      image: '/placeholder.jpg',
      category: 'برامج هندسية',
      tags: ['إكسل', 'تحليل بيانات'],
    },
    {
      id: 7,
      title: 'البريمافيرا خطوة بخطوة',
      author: 'حسن جواد',
      description: 'دليل عملي لاستخدام برنامج Primavera P6 في إدارة المشاريع الهندسية',
      image: '/placeholder.jpg',
      category: 'برامج هندسية',
      tags: ['بريمافيرا', 'إدارة مشاريع'],
    },
    {
      id: 8,
      title: 'SAP2000 و ETABS بالمشاريع',
      author: 'مجموعة مؤلفين',
      description: 'تعلم برامج التحليل الإنشائي من خلال مشاريع عملية',
      image: '/placeholder.jpg',
      category: 'برامج هندسية',
      tags: ['تحليل إنشائي', 'نمذجة'],
    },
    {
      id: 9,
      title: 'فن إدارة الوقت للمهندسين',
      author: 'د. محمد الحسيني',
      description: 'استراتيجيات وتقنيات لإدارة الوقت بفعالية في المجال الهندسي',
      image: '/placeholder.jpg',
      category: 'تطوير مهني',
      tags: ['إدارة وقت', 'إنتاجية'],
    },
    {
      id: 10,
      title: 'الذكاء العاطفي في بيئة العمل',
      author: 'د. أحمد السعيد',
      description: 'أهمية الذكاء العاطفي وتطبيقاته في بيئة العمل الهندسي',
      image: '/placeholder.jpg',
      category: 'تطوير مهني',
      tags: ['ذكاء عاطفي', 'مهارات شخصية'],
    },
    {
      id: 11,
      title: 'الطريق إلى العمل الحر',
      author: 'م. علي الشمري',
      description: 'دليل المهندس للانتقال من الوظيفة التقليدية إلى العمل الحر',
      image: '/placeholder.jpg',
      category: 'تطوير مهني',
      tags: ['عمل حر', 'ريادة أعمال'],
    },
  ];

  const [filteredBooks, setFilteredBooks] = useState(books);
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['الكل', 'هندسة مدنية', 'برامج هندسية', 'تطوير مهني'];

  const filterBooks = (category: string, term: string) => {
    let filtered = books;
    
    if (category !== 'الكل') {
      filtered = filtered.filter(book => book.category === category);
    }
    
    if (term) {
      const lowercaseTerm = term.toLowerCase();
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(lowercaseTerm) || 
        book.author.toLowerCase().includes(lowercaseTerm) || 
        book.description.toLowerCase().includes(lowercaseTerm) ||
        book.tags.some(tag => tag.toLowerCase().includes(lowercaseTerm))
      );
    }
    
    setFilteredBooks(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    filterBooks(category, searchTerm);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterBooks(activeCategory, term);
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
              مكتبة الكتب الهندسية
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              مكتبة إلكترونية ضخمة تحتوي على كتب ومراجع بصيغة PDF، تغطي تخصصات متعددة في مجالات الهندسة المختلفة.
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
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">البحث</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="ابحث عن كتاب..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  />
                  <svg 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
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
            </div>

            {/* قائمة الكتب */}
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map(book => (
                  <Card
                    key={book.id}
                    title={book.title}
                    description={book.description}
                    image={book.image}
                    imageAlt={`كتاب ${book.title}`}
                    footer={
                      <div className="w-full">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-gray-500 dark:text-gray-400">{book.category}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{book.author}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {book.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button className="w-full">
                          تحميل الكتاب
                          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </Button>
                      </div>
                    }
                  />
                ))}
              </div>

              {filteredBooks.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">لا توجد كتب متاحة بالمعايير المحددة</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setActiveCategory('الكل');
                      setSearchTerm('');
                      setFilteredBooks(books);
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
          <h2 className="text-3xl font-bold mb-8 text-center">المشاركة والتعاون</h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              إذا كنت تمتلك محتوى مفيد (كتب، روابط، ملفات)، فنحن نرحّب بمشاركتك لبناء مجتمع هندسي متعاون. يمكنك مشاركة الكتب والمراجع التي تراها مفيدة للمهندسين من خلال النموذج أدناه.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="book-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  عنوان الكتاب
                </label>
                <input
                  type="text"
                  id="book-title"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  placeholder="أدخل عنوان الكتاب"
                />
              </div>
              <div>
                <label htmlFor="book-author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  اسم المؤلف
                </label>
                <input
                  type="text"
                  id="book-author"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  placeholder="أدخل اسم المؤلف"
                />
              </div>
              <div>
                <label htmlFor="book-description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  وصف الكتاب
                </label>
                <textarea
                  id="book-description"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  placeholder="أدخل وصفاً مختصراً للكتاب"
                ></textarea>
              </div>
              <div>
                <label htmlFor="book-link" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  رابط الكتاب (اختياري)
                </label>
                <input
                  type="url"
                  id="book-link"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  placeholder="أدخل رابط تحميل الكتاب"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ملف الكتاب (PDF)
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
                        <span>رفع ملف</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pr-1">أو اسحب وأفلت</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PDF حتى 10 ميجابايت
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Button className="w-full" size="lg">
                  مشاركة الكتاب
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
