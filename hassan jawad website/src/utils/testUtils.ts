// src/utils/testUtils.ts
import { useEffect, useState } from 'react';

/**
 * هوك لاختبار الأداء وقياس وقت التحميل
 * @param componentName اسم المكون المراد قياس أدائه
 * @returns وقت التحميل بالمللي ثانية
 */
export function usePerformanceTest(componentName: string) {
  const [loadTime, setLoadTime] = useState<number | null>(null);

  useEffect(() => {
    const startTime = performance.now();
    
    // تسجيل بداية تحميل المكون في وحدة التحكم
    console.log(`[Performance] ${componentName} بدأ التحميل`);
    
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // تسجيل وقت التحميل الكامل
      console.log(`[Performance] ${componentName} اكتمل التحميل في ${duration.toFixed(2)}ms`);
      setLoadTime(duration);
    };
  }, [componentName]);

  return loadTime;
}

/**
 * دالة لاختبار توافق المكونات مع مختلف أحجام الشاشات
 * @param width عرض الشاشة
 * @param height ارتفاع الشاشة
 * @returns حالة التوافق
 */
export function testResponsiveness(width: number, height: number): string {
  if (width < 640) {
    return 'mobile';
  } else if (width < 768) {
    return 'small-tablet';
  } else if (width < 1024) {
    return 'tablet';
  } else if (width < 1280) {
    return 'laptop';
  } else {
    return 'desktop';
  }
}

/**
 * دالة لاختبار أداء الذكاء الاصطناعي وقياس وقت الاستجابة
 * @param apiEndpoint نقطة النهاية للواجهة البرمجية
 * @param payload البيانات المرسلة
 * @returns وقت الاستجابة والنتيجة
 */
export async function testAIResponse(apiEndpoint: string, payload: any) {
  const startTime = performance.now();
  
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    const data = await response.json();
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    return {
      success: true,
      duration,
      data,
    };
  } catch (error) {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    return {
      success: false,
      duration,
      error,
    };
  }
}

/**
 * دالة لاختبار تحميل الصفحة وقياس مؤشرات الأداء الرئيسية
 */
export function measurePagePerformance() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // الحصول على توقيت الأداء
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const domLoadTime = perfData.domComplete - perfData.domLoading;
    
    return {
      pageLoadTime,
      domLoadTime,
      networkLatency: perfData.responseEnd - perfData.requestStart,
      processingTime: perfData.domInteractive - perfData.responseEnd,
      memoryUsage: (performance as any).memory?.usedJSHeapSize || 'غير متاح',
    };
  }
  
  return null;
}

/**
 * دالة لاختبار توافق المتصفح
 */
export function checkBrowserCompatibility() {
  if (typeof window === 'undefined') return {};
  
  const isChrome = !!window.chrome;
  const isFirefox = typeof (window as any).InstallTrigger !== 'undefined';
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isEdge = !!(window as any).StyleMedia;
  const isIE = /*@cc_on!@*/false || !!(document as any).documentMode;
  
  return {
    chrome: isChrome,
    firefox: isFirefox,
    safari: isSafari,
    edge: isEdge,
    ie: isIE,
  };
}

/**
 * دالة لاختبار الوصول وتوافق قارئات الشاشة
 * @param element العنصر المراد اختباره
 */
export function testAccessibility(element: HTMLElement) {
  const hasAltText = element.tagName === 'IMG' && element.hasAttribute('alt');
  const hasAriaLabel = element.hasAttribute('aria-label');
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
  const hasRole = element.hasAttribute('role');
  
  return {
    hasAltText,
    hasAriaLabel,
    hasAriaLabelledBy,
    hasRole,
    isAccessible: hasAltText || hasAriaLabel || hasAriaLabelledBy,
  };
}
