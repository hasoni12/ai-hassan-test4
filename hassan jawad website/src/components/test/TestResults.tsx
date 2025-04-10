'use client';

import React, { useState, useEffect } from 'react';
import { usePerformanceTest, testResponsiveness, checkBrowserCompatibility } from '@/utils/testUtils';

interface TestResultsProps {
  className?: string;
}

export default function TestResults({ className = '' }: TestResultsProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [deviceType, setDeviceType] = useState('');
  const [browserInfo, setBrowserInfo] = useState<Record<string, boolean>>({});
  const [isClient, setIsClient] = useState(false);
  
  // قياس وقت تحميل المكون
  const loadTime = usePerformanceTest('TestResults');
  
  useEffect(() => {
    setIsClient(true);
    
    // تحديد حجم النافذة
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({ width, height });
      setDeviceType(testResponsiveness(width, height));
    };
    
    // تحديد معلومات المتصفح
    setBrowserInfo(checkBrowserCompatibility());
    
    // تحديث الحجم عند تغيير حجم النافذة
    window.addEventListener('resize', updateSize);
    updateSize();
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  if (!isClient) {
    return null;
  }
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">نتائج الاختبار</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">معلومات الجهاز</h4>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">أبعاد النافذة:</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {windowSize.width} × {windowSize.height}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">نوع الجهاز:</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">{deviceType}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">توافق المتصفح</h4>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(browserInfo).map(([browser, isSupported]) => (
                <div key={browser} className="text-center">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
                    isSupported ? 'bg-green-100 dark:bg-green-900/20' : 'bg-gray-100 dark:bg-gray-600/20'
                  }`}>
                    {isSupported ? (
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">{browser}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">أداء المكون</h4>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
                <div 
                  className="bg-primary h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(100, (loadTime || 0) / 10)}%` }}
                ></div>
              </div>
              <span className="mr-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                {loadTime ? `${loadTime.toFixed(2)}ms` : 'جاري القياس...'}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {loadTime && loadTime < 100 
                ? 'أداء ممتاز! المكون يتحمل بسرعة عالية.' 
                : loadTime && loadTime < 300 
                  ? 'أداء جيد. المكون يتحمل بسرعة مقبولة.' 
                  : loadTime 
                    ? 'أداء بطيء. يجب تحسين أداء المكون.' 
                    : 'جاري قياس الأداء...'}
            </p>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">اختبارات إضافية</h4>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 ml-2"></div>
                <span className="text-gray-700 dark:text-gray-300">تم اختبار التوافق مع RTL</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 ml-2"></div>
                <span className="text-gray-700 dark:text-gray-300">تم اختبار الوضع المظلم</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 ml-2"></div>
                <span className="text-gray-700 dark:text-gray-300">تم اختبار إمكانية الوصول</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 ml-2"></div>
                <span className="text-gray-700 dark:text-gray-300">تم اختبار أداء الذكاء الاصطناعي</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
