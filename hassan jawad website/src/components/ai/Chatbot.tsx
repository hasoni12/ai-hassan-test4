'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // إضافة رسالة ترحيبية عند فتح المحادثة لأول مرة
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: 'مرحباً! أنا المساعد الذكي لموقع حسن جواد. كيف يمكنني مساعدتك اليوم؟',
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // تمرير إلى آخر رسالة عند إضافة رسالة جديدة
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // إضافة رسالة المستخدم
    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // محاكاة الاتصال بـ API
      // في التطبيق الفعلي، سيتم استبدال هذا بطلب إلى API الخاص بنا الذي يتصل بـ OpenAI
      setTimeout(() => {
        const response = getAIResponse(input);
        
        const assistantMessage: Message = {
          role: 'assistant',
          content: response,
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: Message = {
        role: 'assistant',
        content: 'عذراً، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى.',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  // دالة مؤقتة لمحاكاة استجابة الذكاء الاصطناعي
  // سيتم استبدالها بالاتصال الفعلي بـ OpenAI API
  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('دورة') || lowerQuery.includes('تعلم') || lowerQuery.includes('كورس')) {
      return 'يمكنك العثور على مجموعة متنوعة من الدورات التعليمية في قسم "الدورات التعليمية". نقدم دورات في مجالات مختلفة مثل أوتوكاد، ريفيت، SAP2000، وغيرها. هل تبحث عن دورة معينة؟';
    }
    
    if (lowerQuery.includes('كتاب') || lowerQuery.includes('مرجع') || lowerQuery.includes('pdf')) {
      return 'تحتوي مكتبتنا على مجموعة كبيرة من الكتب والمراجع الهندسية. يمكنك تصفحها في قسم "مكتبة الكتب". هل تبحث عن موضوع محدد؟';
    }
    
    if (lowerQuery.includes('مشروع') || lowerQuery.includes('تخرج')) {
      return 'نقدم أمثلة على مشاريع واقعية ومتقدمة في قسم "المشاريع". يمكنك الاطلاع عليها للحصول على أفكار لمشروعك الخاص.';
    }
    
    if (lowerQuery.includes('وظيفة') || lowerQuery.includes('عمل') || lowerQuery.includes('مهنة') || lowerQuery.includes('سيرة ذاتية')) {
      return 'يمكنك زيارة قسم "المسار المهني" للحصول على نصائح حول بناء مسارك المهني، وإعداد السيرة الذاتية، والتحضير للمقابلات الوظيفية.';
    }
    
    if (lowerQuery.includes('تواصل') || lowerQuery.includes('اتصال') || lowerQuery.includes('رسالة')) {
      return 'يمكنك التواصل معنا من خلال نموذج الاتصال في صفحة "تواصل معنا" أو عبر البريد الإلكتروني: enghassanjawad@outlook.com';
    }
    
    return 'شكراً على سؤالك! يمكنني مساعدتك في العثور على الدورات التعليمية، الكتب، المشاريع، أو تقديم نصائح للمسار المهني. هل يمكنك توضيح ما تبحث عنه بشكل أكثر تحديداً؟';
  };

  return (
    <>
      {/* زر فتح المحادثة */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="فتح روبوت المحادثة"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* نافذة المحادثة */}
      <div
        className={`fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-sm transition-all duration-300 transform ${
          isOpen
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* رأس نافذة المحادثة */}
        <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-bold">المساعد الذكي</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
            aria-label="إغلاق المحادثة"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* محتوى المحادثة */}
        <div className="p-4 h-80 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70 text-right">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none">
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* نموذج إدخال الرسالة */}
        <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex space-x-2 rtl:space-x-reverse">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
