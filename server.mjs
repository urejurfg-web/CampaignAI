import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app=express();
app.use(express.json({limit:"2mb"}));

function instructions(project, mode){
return `تو Campaign AI هستی؛ دستیار حرفه‌ای Campaign Manager.
حالت کاری: ${mode}

اطلاعات پروژه:
${JSON.stringify(project || {},null,2)}

قواعد:
1) اول اطلاعات موجود را بررسی کن؛ چیزی را که در پروژه مشخص است دوباره سؤال نکن.
2) اگر داده حیاتی کم است، ابتدا «داده‌های موردنیاز» را جداگانه بگو.
3) برای طراحی کمپین از این زنجیره استفاده کن:
Audit → Goal → Audience → Insight → Offer → Idea → Strategy → Funnel → Content → Channel → Budget → Tracking → KPI → Analysis → Optimization → Report.
4) فروش، درآمد، سود ناخالص، سود خالص، هزینه تبلیغات، CAC، LTV، ROAS و ROI را با هم قاطی نکن.
5) عددی که داده نشده را به عنوان واقعیت نساز؛ مثال فرضی را با برچسب «مثال» مشخص کن.
6) برای Proposal، قرارداد و گزارش، خروجی را مرتب و قابل کپی ارائه کن.
7) در پیشنهادهای تبلیغاتی، ادعای غیرقابل اثبات، رضایت جعلی و کمبود ساختگی پیشنهاد نکن.
8) پاسخ‌ها فارسی، عملی، مرحله‌ای و متناسب با همین پروژه باشند.`;
}

app.post("/chat", async(req,res)=>{
  try{
    const {project,message,mode="assistant"}=req.body||{};
    if(!message) return res.status(400).json({error:"message is required"});
    if(!process.env.OPENAI_API_KEY) return res.status(500).json({error:"OPENAI_API_KEY is not configured"});

    const response=await fetch("https://api.openai.com/v1/responses",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`
      },
      body:JSON.stringify({
        model:process.env.OPENAI_MODEL||"gpt-5.6-luna",
        instructions:instructions(project,mode),
        input:message
      })
    });
    const data=await response.json();
    if(!response.ok) return res.status(response.status).json({error:data});
    res.json({answer:data.output_text||"پاسخی دریافت نشد."});
  }catch(e){
    res.status(500).json({error:e.message});
  }
});

app.listen(process.env.PORT||3000,()=>console.log("Campaign AI backend is running"));
