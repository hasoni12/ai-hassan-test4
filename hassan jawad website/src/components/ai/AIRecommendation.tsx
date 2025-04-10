'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface AIRecommendationProps {
  type: 'courses' | 'books' | 'career';
}

export default function AIRecommendation({ type }: AIRecommendationProps) {
  const [interests, setInterests] = useState<string[]>([]);
  const [level, setLevel] = useState('');
  const [customInterest, setCustomInterest] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [error, setError] = useState('');

  // قائمة الاهتمامات المتاحة حسب نوع التوصية
  const availableInterests = {
    courses: [
      'هندسة مدنية',
      'هندسة معمارية',
      'تصميم إنشائي',
      'إدارة مشاريع',
      'برامج هندسية',
      'تصميم طرق',
      'هندسة جيوتقنية',
    ],
    books: [
      'تصميم خرساني',
      'تصميم معدني',
      'ميكانيكا التربة',
      'هندسة الزلازل',
      'إدارة المشاريع',
      'الرسم الهندسي',
      'نمذجة معلومات البناء',
    ],
    career: [
      'مهندس تصميم',
      'مهندس موقع',
      'مهندس تخطيط',
      'مدير مشاريع',
      'مهندس BIM',
      'مهندس تكاليف',
      'مهندس جودة',
    ],
  };

  // قائمة المستويات المتاحة
  const availableLevels = {
    courses: ['مبتدئ', 'متوسط', 'متقدم'],
    books: ['أساسي', 'متوسط', 'متقدم', 'مرجعي'],
    career: ['طالب', 'خريج جديد', 'خبرة 1-3 سنوات', 'خبرة 3-7 سنوات', 'خبرة أكثر من 7 سنوات'],
  };

  // عناوين حسب نوع التوصية
  const titles = {
    courses: 'الحصول على توصيات الدورات',
    books: 'اكتشاف الكتب المناسبة',
    career: 'تخطيط المسار المهني',
  };

  // أوصاف حسب نوع التوصية
  const descriptions = {
    courses: 'احصل على توصيات مخصصة للدورات التعليمية بناءً على اهتماماتك ومستواك',
    books: 'اكتشف الكتب والمراجع المناسبة لمجال تخصصك ومستوى خبرتك',
    career: 'احصل على خطة مسار مهني مخصصة تناسب اهتماماتك وأهدافك',
  };

  // إضافة اهتمام
  const addInterest = (interest: string) => {
    if (!interests.includes(interest)) {
      setInterests([...interests, interest]);
    }
  };

  // إزالة اهتمام
  const removeInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  // إضافة اهتمام مخصص
  const addCustomInterest = () => {
    if (customInterest.trim() && !interests.includes(customInterest.trim())) {
      setInterests([...interests, customInterest.trim()]);
      setCustomInterest('');
    }
  };

  // الحصول على التوصيات
  const getRecommendations = async () => {
    if (interests.length === 0 || !level) {
      setError('الرجاء تحديد اهتماماتك والمستوى المطلوب');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // محاكاة الاتصال بـ API
      // في التطبيق الفعلي، سيتم استبدال هذا بطلب إلى API الخاص بنا الذي يتصل بـ OpenAI
      setTimeout(() => {
        const mockRecommendations = getMockRecommendations();
        setRecommendations(mockRecommendations);
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      setError('حدث خطأ أثناء الحصول على التوصيات. يرجى المحاولة مرة أخرى.');
      setIsLoading(false);
    }
  };

  // دالة مؤقتة لمحاكاة استجابة الذكاء الاصطناعي
  // سيتم استبدالها بالاتصال الفعلي بـ OpenAI API
  const getMockRecommendations = () => {
    if (type === 'courses') {
      return [
        {
          title: 'أساسيات التصميم الإنشائي',
          description: 'دورة شاملة في أساسيات التصميم الإنشائي للمباني السكنية والتجارية',
          level: 'مبتدئ',
          category: 'تصميم إنشائي',
        },
        {
          title: 'تصميم المنشآت الخرسانية المسلحة',
          description: 'دورة متقدمة في تصميم العناصر الإنشائية الخرسانية وفق الكود العربي الموحد',
          level: 'متوسط',
          category: 'هندسة مدنية',
        },
        {
          title: 'تحليل المنشآت باستخدام SAP2000',
          description: 'دورة عملية في استخدام برنامج SAP2000 لتحليل وتصميم المنشآت المختلفة',
          level: level,
          category: 'برامج هندسية',
        },
      ];
    } else if (type === 'books') {
      return [
        {
          title: 'أساسيات التصميم الخرساني',
          author: 'د. شاكر البحيري',
          description: 'كتاب شامل يغطي أساسيات تصميم العناصر الخرسانية المسلحة',
          level: 'أساسي',
          category: 'تصميم خرساني',
        },
        {
          title: 'ميكانيكا التربة والأساسات',
          author: 'د. عبدالفتاح القصبي',
          description: 'مرجع متكامل في ميكانيكا التربة وتصميم الأساسات المختلفة',
          level: 'متوسط',
          category: 'هندسة جيوتقنية',
        },
        {
          title: 'الكود العربي الموحد للتصميم الإنشائي',
          author: 'جامعة الدول العربية',
          description: 'المرجع الرسمي للتصميم الإنشائي في الدول العربية',
          level: 'مرجعي',
          category: 'تصميم إنشائي',
        },
      ];
    } else {
      return [
        {
          title: 'خطة تطوير مهارات التصميم الإنشائي',
          skills: ['تحليل إنشائي متقدم', 'تصميم مقاوم للزلازل', 'نمذجة ثلاثية الأبعاد'],
          courses: ['دورة SAP2000 المتقدمة', 'دورة التصميم المقاوم للزلازل', 'دورة Revit الإنشائي'],
          certifications: ['PMP (إدارة مشاريع)', 'شهادة مهندس محترف'],
          timeline: '12-18 شهر',
        },
      ];
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{titles[type]}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{descriptions[type]}</p>

      <div className="space-y-6">
        {/* اختيار الاهتمامات */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            اختر اهتماماتك
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {availableInterests[type].map((interest) => (
              <button
                key={interest}
                onClick={() => addInterest(interest)}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  interests.includes(interest)
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>

          {/* إضافة اهتمام مخصص */}
          <div className="flex mt-2">
            <input
              type="text"
              value={customInterest}
              onChange={(e) => setCustomInterest(e.target.value)}
              placeholder="أضف اهتمام آخر..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
            />
            <button
              onClick={addCustomInterest}
              disabled={!customInterest.trim()}
              className="bg-primary text-white px-4 py-2 rounded-l-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              إضافة
            </button>
          </div>
        </div>

        {/* الاهتمامات المختارة */}
        {interests.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              اهتماماتك المختارة
            </label>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <div
                  key={interest}
                  className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary px-3 py-1 rounded-full flex items-center"
                >
                  <span>{interest}</span>
                  <button
                    onClick={() => removeInterest(interest)}
                    className="mr-1 hover:text-red-500 focus:outline-none"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* اختيار المستوى */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            اختر المستوى
          </label>
          <div className="flex flex-wrap gap-2">
            {availableLevels[type].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  level === lvl
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* زر الحصول على التوصيات */}
        <Button
          onClick={getRecommendations}
          disabled={isLoading || interests.length === 0 || !level}
          className="w-full"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              جاري التحليل...
            </>
          ) : (
            'الحصول على التوصيات'
          )}
        </Button>

        {/* رسالة الخطأ */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="mr-3">
                <p className="text-sm font-medium text-red-800 dark:text-red-200">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* عرض التوصيات */}
        {recommendations.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">التوصيات المقترحة</h4>
            <div className="space-y-4">
              {type === 'courses' && recommendations.map((rec, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-gray-100">{rec.title}</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{rec.description}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary px-2 py-1 rounded-full">
                      {rec.level}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {rec.category}
                    </span>
                  </div>
                </div>
              ))}

              {type === 'books' && recommendations.map((rec, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-gray-100">{rec.title}</h5>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">المؤلف: {rec.author}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{rec.description}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary px-2 py-1 rounded-full">
                      {rec.level}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {rec.category}
                    </span>
                  </div>
                </div>
              ))}

              {type === 'career' && recommendations.map((rec, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-gray-100">{rec.title}</h5>
                  <div className="mt-3">
                    <h6 className="text-sm font-medium text-gray-700 dark:text-gray-300">المهارات المقترحة:</h6>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {rec.skills.map((skill: string, i: number) => (
                        <span key={i} className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3">
                    <h6 className="text-sm font-medium text-gray-700 dark:text-gray-300">الدورات الموصى بها:</h6>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {rec.courses.map((course: string, i: number) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3">
                    <h6 className="text-sm font-medium text-gray-700 dark:text-gray-300">الشهادات المقترحة:</h6>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {rec.certifications.map((cert: string, i: number) => (
                        <li key={i}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3 text-sm">
                    <span className="font-medium text-gray-700 dark:text-gray-300">المدة المقترحة: </span>
                    <span className="text-gray-600 dark:text-gray-400">{rec.timeline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
