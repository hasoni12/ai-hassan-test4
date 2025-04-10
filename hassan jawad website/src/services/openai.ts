// src/services/openai.ts
import { OpenAI } from 'openai';

// تهيئة عميل OpenAI
// ملاحظة: يجب استبدال 'your-api-key' بمفتاح API الحقيقي في بيئة الإنتاج
// ويفضل استخدام متغيرات البيئة لتخزين المفتاح
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'your-api-key',
  dangerouslyAllowBrowser: true // للاختبار فقط، يجب إزالته في الإنتاج
});

// واجهة لنوع الرسالة
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// دالة لإرسال سؤال إلى OpenAI والحصول على إجابة
export async function askOpenAI(messages: Message[], model = 'gpt-3.5-turbo'): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    return response.choices[0].message.content || 'عذراً، لم أستطع الإجابة على سؤالك.';
  } catch (error) {
    console.error('خطأ في الاتصال بـ OpenAI:', error);
    return 'حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.';
  }
}

// دالة للحصول على توصيات الدورات بناءً على اهتمامات المستخدم
export async function getCoursesRecommendations(interests: string[], level: string): Promise<string> {
  const prompt = `
    أنت مساعد متخصص في توصية الدورات التعليمية للمهندسين. 
    الرجاء تقديم 3-5 توصيات لدورات تعليمية مناسبة لمهندس مهتم بالمجالات التالية: ${interests.join(', ')}.
    مستوى المهندس: ${level}.
    قدم النتائج بتنسيق JSON كالتالي:
    [
      {
        "title": "عنوان الدورة",
        "description": "وصف مختصر للدورة",
        "level": "مستوى الدورة (مبتدئ/متوسط/متقدم)",
        "category": "تصنيف الدورة"
      }
    ]
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0].message.content || '[]';
    
    // محاولة تحليل النتيجة كـ JSON
    try {
      JSON.parse(content);
      return content;
    } catch (e) {
      // إذا لم تكن النتيجة بتنسيق JSON صالح، نعيد نصاً عادياً
      return content;
    }
  } catch (error) {
    console.error('خطأ في الحصول على توصيات الدورات:', error);
    return '[]';
  }
}

// دالة لتوليد خطة مسار مهني مخصصة
export async function generateCareerPlan(specialization: string, experience: string, skills: string[], goals: string[]): Promise<string> {
  const prompt = `
    أنت مستشار مهني متخصص في مجال الهندسة. 
    الرجاء إنشاء خطة مسار مهني مخصصة لمهندس بالمواصفات التالية:
    - التخصص: ${specialization}
    - مستوى الخبرة: ${experience}
    - المهارات الحالية: ${skills.join(', ')}
    - الأهداف المهنية: ${goals.join(', ')}
    
    قدم خطة مفصلة تتضمن:
    1. المهارات التي يجب تطويرها
    2. الدورات والشهادات المقترحة
    3. خطوات التطور المهني على مدى 1-3 سنوات
    4. نصائح للتميز في مجال التخصص
    
    قدم النتائج بتنسيق JSON كالتالي:
    {
      "skills_to_develop": ["مهارة 1", "مهارة 2", ...],
      "recommended_courses": ["دورة 1", "دورة 2", ...],
      "certifications": ["شهادة 1", "شهادة 2", ...],
      "career_steps": ["خطوة 1", "خطوة 2", ...],
      "tips": ["نصيحة 1", "نصيحة 2", ...]
    }
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const content = response.choices[0].message.content || '{}';
    
    // محاولة تحليل النتيجة كـ JSON
    try {
      JSON.parse(content);
      return content;
    } catch (e) {
      // إذا لم تكن النتيجة بتنسيق JSON صالح، نعيد نصاً عادياً
      return content;
    }
  } catch (error) {
    console.error('خطأ في توليد خطة المسار المهني:', error);
    return '{}';
  }
}

// دالة للإجابة على الأسئلة التقنية
export async function answerTechnicalQuestion(question: string): Promise<string> {
  const systemPrompt = `
    أنت مساعد هندسي متخصص يجيب على الأسئلة التقنية باللغة العربية.
    قدم إجابات دقيقة ومفصلة ومفهومة، مع الاستشهاد بالمصادر عند الضرورة.
    استخدم لغة تقنية مناسبة مع شرح المصطلحات المعقدة.
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: question }
      ],
      temperature: 0.5,
      max_tokens: 1500,
    });

    return response.choices[0].message.content || 'عذراً، لم أستطع الإجابة على سؤالك.';
  } catch (error) {
    console.error('خطأ في الإجابة على السؤال التقني:', error);
    return 'حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.';
  }
}

export default {
  askOpenAI,
  getCoursesRecommendations,
  generateCareerPlan,
  answerTechnicalQuestion
};
