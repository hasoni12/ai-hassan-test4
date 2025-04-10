// src/app/api/ai/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { askOpenAI, Message } from '@/services/openai';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'يجب توفير مصفوفة من الرسائل' },
        { status: 400 }
      );
    }

    // إضافة رسالة نظام لتوجيه السلوك
    const systemMessage: Message = {
      role: 'system',
      content: `
        أنت مساعد ذكي لموقع حسن جواد التعليمي للمهندسين المدنيين.
        أجب على أسئلة المستخدمين باللغة العربية بشكل دقيق ومفيد.
        تخصص في المجالات الهندسية مثل الهندسة المدنية والمعمارية والإنشائية.
        قدم معلومات عن الدورات والكتب والمشاريع المتاحة على الموقع.
        ساعد المستخدمين في اختيار المسار المهني المناسب وتطوير مهاراتهم.
      `
    };

    const allMessages = [systemMessage, ...messages];
    const response = await askOpenAI(allMessages);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('خطأ في معالجة طلب المحادثة:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء معالجة طلبك' },
      { status: 500 }
    );
  }
}
