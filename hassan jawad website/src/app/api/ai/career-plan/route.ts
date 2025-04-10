// src/app/api/ai/career-plan/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { generateCareerPlan } from '@/services/openai';

export async function POST(request: NextRequest) {
  try {
    const { specialization, experience, skills, goals } = await request.json();
    
    if (!specialization) {
      return NextResponse.json(
        { error: 'يجب تحديد التخصص' },
        { status: 400 }
      );
    }

    if (!experience) {
      return NextResponse.json(
        { error: 'يجب تحديد مستوى الخبرة' },
        { status: 400 }
      );
    }

    if (!skills || !Array.isArray(skills) || skills.length === 0) {
      return NextResponse.json(
        { error: 'يجب توفير مصفوفة من المهارات' },
        { status: 400 }
      );
    }

    if (!goals || !Array.isArray(goals) || goals.length === 0) {
      return NextResponse.json(
        { error: 'يجب توفير مصفوفة من الأهداف' },
        { status: 400 }
      );
    }

    // الحصول على خطة المسار المهني من OpenAI
    const careerPlanJson = await generateCareerPlan(specialization, experience, skills, goals);
    
    // محاولة تحليل النتيجة كـ JSON
    try {
      const careerPlan = JSON.parse(careerPlanJson);
      return NextResponse.json({ careerPlan });
    } catch (e) {
      // إذا لم تكن النتيجة بتنسيق JSON صالح، نعيد النص كما هو
      return NextResponse.json({ 
        error: 'تعذر تحليل النتيجة', 
        rawResponse: careerPlanJson 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('خطأ في معالجة طلب خطة المسار المهني:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء معالجة طلبك' },
      { status: 500 }
    );
  }
}
