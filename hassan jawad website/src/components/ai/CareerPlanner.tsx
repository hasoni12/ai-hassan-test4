'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

interface CareerPlannerProps {
  className?: string;
}

export default function CareerPlanner({ className }: CareerPlannerProps) {
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const [customSkill, setCustomSkill] = useState('');
  const [customGoal, setCustomGoal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [careerPlan, setCareerPlan] = useState<any>(null);
  const [error, setError] = useState('');

  const specializations = [
    'هندسة إنشائية',
    'هندسة معمارية',
    'هندسة جيوتقنية',
    'هندسة النقل والمواصلات',
    'هندسة المياه والبيئة',
    'هندسة التشييد وإدارة المشاريع',
  ];

  const experienceLevels = [
    'طالب',
    'خريج جديد',
    'خبرة 1-3 سنوات',
    'خبرة 3-7 سنوات',
    'خبرة أكثر من 7 سنوات',
  ];

  const commonSkills = [
    'AutoCAD',
    'Revit',
    'SAP2000',
    'ETABS',
    'Excel',
    'تصميم خرساني',
    'تصميم معدني',
    'إدارة مشاريع',
    'حساب كميات',
    'تخطيط مشاريع',
    'تنفيذ',
    'إشراف',
  ];

  const commonGoals = [
    'الحصول على وظيفة في شركة كبرى',
    'العمل في مجال التصميم الإنشائي',
    'التخصص في إدارة المشاريع',
    'الحصول على شهادة PMP',
    'بدء عمل خاص',
    'العمل في الخارج',
    'التخصص في مجال BIM',
    'الانتقال إلى مجال الاستشارات',
  ];

  // إضافة مهارة
  const addSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  // إزالة مهارة
  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  // إضافة مهارة مخصصة
  const addCustomSkill = () => {
    if (customSkill.trim() && !skills.includes(customSkill.trim())) {
      setSkills([...skills, customSkill.trim()]);
      setCustomSkill('');
    }
  };

  // إضافة هدف
  const addGoal = (goal: string) => {
    if (!goals.includes(goal)) {
      setGoals([...goals, goal]);
    }
  };

  // إزالة هدف
  const removeGoal = (goal: string) => {
    setGoals(goals.filter((g) => g !== goal));
  };

  // إضافة هدف مخصص
  const addCustomGoal = () => {
    if (customGoal.trim() && !goals.includes(customGoal.trim())) {
      setGoals([...goals, customGoal.trim()]);
      setCustomGoal('');
    }
  };

  // الحصول على خطة المسار المهني
  const generateCareerPlan = async () => {
    if (!specialization || !experience || skills.length === 0 || goals.length === 0) {
      setError('الرجاء إكمال جميع الحقول المطلوبة');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // محاكاة الاتصال بـ API
      // في التطبيق الفعلي، سيتم استبدال هذا بطلب إلى API الخاص بنا
      setTimeout(() => {
        const mockCareerPlan = getMockCareerPlan();
        setCareerPlan(mockCareerPlan);
        setIsLoading(false);
      }, 2000);
      
      // الاتصال الفعلي بـ API (معلق حالياً)
      /*
      const response = await fetch('/api/ai/career-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          specialization,
          experience,
          skills,
          goals,
        }),
      });

      if (!response.ok) {
        throw new Error('فشل الاتصال بالخادم');
      }

      const data = await response.json();
      setCareerPlan(data.careerPlan);
      setIsLoading(false);
      */
    } catch (err) {
      setError('حدث خطأ أثناء توليد خطة المسار المهني. يرجى المحاولة مرة أخرى.');
      setIsLoading(false);
    }
  };

  // دالة مؤقتة لمحاكاة استجابة الذكاء الاصطناعي
  const getMockCareerPlan = () => {
    return {
      skills_to_develop: [
        "تحليل إنشائي متقدم",
        "تصميم مقاوم للزلازل",
        "نمذجة معلومات البناء (BIM)",
        "برمجة بلغة Python للتحليل الإنشائي",
        "إدارة المشاريع الاحترافية"
      ],
      recommended_courses: [
        "دورة متقدمة في SAP2000 و ETABS",
        "دورة التصميم المقاوم للزلازل",
        "دورة Revit الإنشائي المتقدمة",
        "دورة Python للمهندسين",
        "دورة إدارة المشاريع الاحترافية PMP"
      ],
      certifications: [
        "شهادة مهندس محترف (PE)",
        "شهادة إدارة مشاريع احترافية (PMP)",
        "شهادة Autodesk Certified Professional في Revit Structure",
        "شهادة LEED Green Associate"
      ],
      career_steps: [
        "السنة الأولى: التركيز على تطوير مهارات التحليل والتصميم الإنشائي المتقدمة",
        "السنة الأولى: الحصول على شهادة Autodesk في Revit Structure",
        "السنة الثانية: تطوير مهارات إدارة المشاريع والتحضير لشهادة PMP",
        "السنة الثانية: بناء محفظة مشاريع متنوعة تظهر مهاراتك في التصميم المقاوم للزلازل",
        "السنة الثالثة: التخصص في مجال BIM والتصميم الإنشائي المتقدم",
        "السنة الثالثة: البحث عن فرص في شركات استشارية كبرى أو بدء عمل استشاري خاص"
      ],
      tips: [
        "انضم إلى الجمعيات المهنية في مجال الهندسة الإنشائية لبناء شبكة علاقات قوية",
        "تابع المؤتمرات والندوات المتخصصة في مجال التصميم الإنشائي",
        "اعمل على مشاريع جانبية لتطبيق المهارات الجديدة وإثراء محفظة أعمالك",
        "ابحث عن مرشد في مجال التصميم الإنشائي يمكنه توجيهك في مسارك المهني",
        "حافظ على التعلم المستمر ومواكبة أحدث التقنيات والمعايير في المجال"
      ]
    };
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">مخطط المسار المهني الذكي</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        استخدم أداة تخطيط المسار المهني المدعومة بالذكاء الاصطناعي للحصول على خطة مخصصة تناسب أهدافك ومهاراتك.
      </p>

      <div className="space-y-6">
        {/* اختيار التخصص */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            التخصص الهندسي
          </label>
          <div className="flex flex-wrap gap-2">
            {specializations.map((spec) => (
              <button
                key={spec}
                onClick={() => setSpecialization(spec)}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  specialization === spec
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* اختيار مستوى الخبرة */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            مستوى الخبرة
          </label>
          <div className="flex flex-wrap gap-2">
            {experienceLevels.map((exp) => (
              <button
                key={exp}
                onClick={() => setExperience(exp)}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  experience === exp
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {exp}
              </button>
            ))}
          </div>
        </div>

        {/* اختيار المهارات */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            المهارات الحالية
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {commonSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => addSkill(skill)}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  skills.includes(skill)
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>

          {/* إضافة مهارة مخصصة */}
          <div className="flex mt-2">
            <input
              type="text"
              value={customSkill}
              onChange={(e) => setCustomSkill(e.target.value)}
              placeholder="أضف مهارة أخرى..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
            />
            <button
              onClick={addCustomSkill}
              disabled={!customSkill.trim()}
              className="bg-primary text-white px-4 py-2 rounded-l-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              إضافة
            </button>
          </div>
        </div>

        {/* المهارات المختارة */}
        {skills.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              المهارات المختارة
            </label>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary px-3 py-1 rounded-full flex items-center"
                >
                  <span>{skill}</span>
                  <button
                    onClick={() => removeSkill(skill)}
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

        {/* اختيار الأهداف */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            الأهداف المهنية
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {commonGoals.map((goal) => (
              <button
                key={goal}
                onClick={() => addGoal(goal)}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  goals.includes(goal)
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {goal}
              </button>
            ))}
          </div>

          {/* إضافة هدف مخصص */}
          <div className="flex mt-2">
            <input
              type="text"
              value={customGoal}
              onChange={(e) => setCustomGoal(e.target.value)}
              placeholder="أضف هدفاً آخر..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
            />
            <button
              onClick={addCustomGoal}
              disabled={!customGoal.trim()}
              className="bg-primary text-white px-4 py-2 rounded-l-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              إضافة
            </button>
          </div>
        </div>

        {/* الأهداف المختارة */}
        {goals.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              الأهداف المختارة
            </label>
            <div className="flex flex-wrap gap-2">
              {goals.map((goal) => (
                <div
                  key={goal}
                  className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary px-3 py-1 rounded-full flex items-center"
                >
                  <span>{goal}</span>
                  <button
                    onClick={() => removeGoal(goal)}
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

        {/* زر توليد خطة المسار المهني */}
        <Button
          onClick={generateCareerPlan}
          disabled={isLoading || !specialization || !experience || skills.length === 0 || goals.length === 0}
          className="w-full"
          size="lg"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              جاري إنشاء الخطة...
            </>
          ) : (
            <>
              إنشاء خطة المسار المهني
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </>
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

        {/* عرض خطة المسار المهني */}
        {careerPlan && (
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <h4 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              خطة المسار المهني المخصصة
            </h4>

            <div className="space-y-6">
              {/* المهارات التي يجب تطويرها */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">المهارات التي يجب تطويرها</h5>
                <div className="flex flex-wrap gap-2">
                  {careerPlan.skills_to_develop.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* الدورات الموصى بها */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">الدورات الموصى بها</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {careerPlan.recommended_courses.map((course: string, index: number) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>

              {/* الشهادات المقترحة */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">الشهادات المقترحة</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {careerPlan.certifications.map((cert: string, index: number) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>

              {/* خطوات المسار المهني */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">خطوات المسار المهني</h5>
                <div className="space-y-4">
                  {careerPlan.career_steps.map((step: string, index: number) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center ml-3">
                        {index + 1}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* نصائح للتميز */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">نصائح للتميز في مجالك</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {careerPlan.tips.map((tip: string, index: number) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline">
                تحميل الخطة كملف PDF
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
