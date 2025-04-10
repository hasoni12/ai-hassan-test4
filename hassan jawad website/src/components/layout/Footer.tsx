'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* معلومات الموقع */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-primary dark:text-secondary">حسن جواد</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              منصة ذكية لمهندس المستقبل - موقع تعليمي شامل يساعد الطلاب والخريجين الجدد على بناء مستقبلهم المهني
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://www.linkedin.com/in/hassan-jawad-9a3618309" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/hy9y_" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="mailto:enghassanjawad@outlook.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">
                <span className="sr-only">البريد الإلكتروني</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* روابط سريعة */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">الرئيسية</Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">الدورات التعليمية</Link>
              </li>
              <li>
                <Link href="/software" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">البرامج الهندسية</Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">مكتبة الكتب</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">المشاريع</Link>
              </li>
            </ul>
          </div>
          
          {/* الدورات المجانية */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">الدورات المجانية</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://youtube.com/playlist?list=PLhiFu-f80eo_NNLsyQUpHqYcrkftgqZ4P" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">دورة أوتوكاد</a>
              </li>
              <li>
                <a href="https://youtube.com/playlist?list=PLhiFu-f80eo-fJPbEr9uxFG-QnjY32s99" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">دورة ريفيت</a>
              </li>
              <li>
                <a href="https://youtube.com/playlist?list=PLhiFu-f80eo-p39D-XbcuAuyzT-Y16Hrn" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">دورة SAP2000</a>
              </li>
              <li>
                <a href="https://youtube.com/playlist?list=PLhiFu-f80eo90U_43hqZ3pqjhFG3vNKp9" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">دورة الإكسل</a>
              </li>
              <li>
                <a href="https://youtube.com/playlist?list=PLhiFu-f80eo_H58ZKmLGtjyGIrovr0d-H" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary">دورة Civil 3D</a>
              </li>
            </ul>
          </div>
          
          {/* تواصل معنا */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary dark:text-secondary ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400">enghassanjawad@outlook.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary dark:text-secondary ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400">متاح للاستشارات الهندسية والتعليمية</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* حقوق النشر */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            &copy; {currentYear} حسن جواد. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
