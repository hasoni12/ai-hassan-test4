'use client';

import React, { useState, useEffect } from 'react';
import { testAIResponse, measurePagePerformance, testAccessibility } from '@/utils/testUtils';

interface AIPerformanceTestProps {
  className?: string;
}

export default function AIPerformanceTest({ className = '' }: AIPerformanceTestProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [testResults, setTestResults] = useState<any>(null);
  const [pagePerformance, setPagePerformance] = useState<any>(null);
  const [accessibilityResults, setAccessibilityResults] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // قياس أداء الصفحة
    const perfData = measurePagePerformance();
    if (perfData) {
      setPagePerformance(perfData);
    }
    
    // اختبار إمكانية الوصول للعناصر الرئيسية
    if (typeof document !== 'undefined') {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        setAccessibilityResults(testAccessibility(mainElement as HTMLElement));
      }
    }
  }, []);

  const runAITest = async () => {
    setIsLoading(true);
    
    try {
      // اختبار أداء واجهة برمجة الذكاء الاصطناعي
      // ملاحظة: هذا اختبار وهمي ولن يتصل فعلياً بالخادم في هذه المرحلة
      const chatResult = await testAIResponse('/api/ai/chat', {
        messages: [{ role: 'user', content: 'مرحباً، كيف يمكنني تعلم الهندسة المدنية؟' }]
      });
      
      const recommendationsResult = await testAIResponse('/api/ai/recommendations', {
        interests: ['هندسة مدنية', 'تصميم إنشائي'],
        level: 'متوسط',
        type: 'courses'
      });
      
      const careerPlanResult = await testAIResponse('/api/ai/career-plan', {
        specialization: 'هندسة إنشائية',
        experience: 'خبرة 1-3 سنوات',
        skills: ['AutoCAD', 'SAP2000', 'تصميم خرساني'],
        goals: ['التخصص في مجال التصميم الإنشائي', 'الحصول على شهادة PMP']
      });
      
      setTestResults({
        chat: chatResult,
        recommendations: recommendationsResult,
        careerPlan: careerPlanResult,
        averageResponseTime: (
          chatResult.duration + 
          recommendationsResult.duration + 
          careerPlanResult.duration
        ) / 3
      });
    } catch (error) {
      console.error('خطأ في اختبار الذكاء الاصطناعي:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">اختبار أداء الذكاء الاصطناعي</h3>
      
      <div className="space-y-6">
        <div className="flex justify-center">
          <button
            onClick={runAITest}
            disabled={isLoading}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                جاري الاختبار...
              </>
            ) : 'بدء اختبار الذكاء الاصطناعي'}
          </button>
        </div>
        
        {testResults && (
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">نتائج اختبار الذكاء الاصطناعي</h4>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">متوسط وقت الاستجابة:</p>
                <div className="flex items-center mt-1">
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
                    <div 
                      className={`h-4 rounded-full transition-all duration-1000 ${
                        testResults.averageResponseTime < 500 
                          ? 'bg-green-500' 
                          : testResults.averageResponseTime < 1000 
                            ? 'bg-yellow-500' 
                            : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min(100, (testResults.averageResponseTime / 20))}%` }}
                    ></div>
                  </div>
                  <span className="mr-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {testResults.averageResponseTime.toFixed(2)}ms
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">روبوت المحادثة</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">وقت الاستجابة: {testResults.chat.duration.toFixed(2)}ms</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    الحالة: {testResults.chat.success ? (
                      <span className="text-green-500">ناجح</span>
                    ) : (
                      <span className="text-red-500">فاشل</span>
                    )}
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">نظام التوصيات</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">وقت الاستجابة: {testResults.recommendations.duration.toFixed(2)}ms</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    الحالة: {testResults.recommendations.success ? (
                      <span className="text-green-500">ناجح</span>
                    ) : (
                      <span className="text-red-500">فاشل</span>
                    )}
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">مخطط المسار المهني</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">وقت الاستجابة: {testResults.careerPlan.duration.toFixed(2)}ms</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    الحالة: {testResults.careerPlan.success ? (
                      <span className="text-green-500">ناجح</span>
                    ) : (
                      <span className="text-red-500">فاشل</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {pagePerformance && (
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">أداء الصفحة</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">وقت تحميل الصفحة:</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {pagePerformance.pageLoadTime}ms
                </p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">وقت تحميل DOM:</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {pagePerformance.domLoadTime}ms
                </p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">زمن الاستجابة للشبكة:</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {pagePerformance.networkLatency}ms
                </p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">وقت المعالجة:</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {pagePerformance.processingTime}ms
                </p>
              </div>
            </div>
          </div>
        )}
        
        {accessibilityResults && (
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">إمكانية الوصول</h4>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full ${accessibilityResults.hasAltText ? 'bg-green-500' : 'bg-red-500'} ml-2`}></div>
                <span className="text-gray-700 dark:text-gray-300">النص البديل للصور</span>
              </div>
              
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full ${accessibilityResults.hasAriaLabel ? 'bg-green-500' : 'bg-red-500'} ml-2`}></div>
                <span className="text-gray-700 dark:text-gray-300">سمات ARIA</span>
              </div>
              
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full ${accessibilityResults.hasRole ? 'bg-green-500' : 'bg-red-500'} ml-2`}></div>
                <span className="text-gray-700 dark:text-gray-300">أدوار العناصر</span>
              </div>
              
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full ${accessibilityResults.isAccessible ? 'bg-green-500' : 'bg-yellow-500'} ml-2`}></div>
                <span className="text-gray-700 dark:text-gray-300">التوافق العام مع إمكانية الوصول</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
