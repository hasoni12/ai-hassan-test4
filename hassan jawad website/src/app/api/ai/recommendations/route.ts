// src/app/api/ai/recommendations/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getCoursesRecommendations } from '@/services/openai';

export async function POST(request: NextRequest) {
  try {
    const { interests, level, type } = await request.json();
    
    if (!interests || !Array.isArray(interests) || interests.length === 0) {
      return NextResponse.json(
        { error: 'يجب توفير مصفوفة من الاهتمامات' },
        { status: 400 }
      );
    }

    if (!level) {
      return NextResponse.json(
        { error: 'يجب تحديد المستوى' },
        { status: 400 }
      );
    }

    // الحصول على التوصيات من OpenAI
    const recommendationsJson = await getCoursesRecommendations(interests, level);
    
    // محاولة تحليل النتيجة كـ JSON
    try {
      const recommendations = JSON.parse(recommendationsJson);
      return NextResponse.json({ recommendations });
    } catch (e) {
      // إذا لم تكن النتيجة بتنسيق JSON صالح، نعيد النص كما هو
      return NextResponse.json({ 
        error: 'تعذر تحليل النتيجة', 
        rawResponse: recommendationsJson 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('خطأ في معالجة طلب التوصيات:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء معالجة طلبك' },
      { status: 500 }
    );
  }
}
