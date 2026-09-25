# Campaign AI — Final Campaign Manager Edition

این نسخه یک پروژه Android/Jetpack Compose برای دستیار Campaign Manager است.

قابلیت‌ها:
- ساخت پروژه کمپین
- ذخیره محلی پروژه‌ها با SharedPreferences
- تحلیل کسب‌وکار
- بانک سؤال هوشمند
- طراحی کامل کمپین
- تحلیل مشتری و Insight
- Offer
- Funnel
- برنامه محتوای 30 روزه
- Copywriting و Hook و CTA
- KPI و هدف‌گذاری Funnel
- Unit Economics، CAC، LTV، ROAS و ROI
- A/B Testing و Optimization
- Proposal
- پیش‌نویس قرارداد
- گزارش کمپین
- چت AI با Context پروژه
- Backend امن برای OpenAI Responses API

نکته امنیتی:
کلید OpenAI نباید داخل APK قرار بگیرد. آن را فقط روی Backend در متغیر محیطی OPENAI_API_KEY قرار دهید.

راه‌اندازی Backend:
1) Node.js نصب باشد.
2) داخل backend:
   npm install
3) فایل .env بسازید و OPENAI_API_KEY را تنظیم کنید.
4) npm start

راه‌اندازی Android:
پروژه را در Android Studio باز کنید و Gradle Sync و Run را بزنید.
برای شبیه‌ساز، API_BASE_URL پیش‌فرض http://10.0.2.2:3000/ است.
برای گوشی واقعی، آن را به IP کامپیوتر در شبکه محلی تغییر دهید.

این پروژه سورس نهایی است؛ برای ساخت APK در Android Studio از Build > Build APK استفاده کنید.


## پشتیبانی از پیام‌رسان‌ها و شبکه‌های اجتماعی
Campaign AI اکنون انتخاب چندکاناله دارد. برای هر پروژه می‌توان چند پلتفرم را هم‌زمان انتخاب کرد و اطلاعات انتخاب‌ها همراه پروژه به Backend/AI ارسال می‌شود تا طراحی کمپین متناسب با کانال‌ها انجام شود.

پلتفرم‌های فعلی: Telegram، WhatsApp، Instagram، Eitaa، Rubika، Bale، Soroush Plus، Gap، iGap، Signal، Discord، Viber، LINE، WeChat، Snapchat، Facebook Messenger، TikTok، YouTube، X، LinkedIn، Pinterest، Reddit و Other/Custom.

**نکته:** وجود نام یک پلتفرم در این فهرست به معنی اتصال مستقیم یا ارسال خودکار پیام/تبلیغ به آن سرویس نیست. اتصال عملی به API، احراز هویت و مجوزهای هر سرویس نیاز دارد و می‌تواند در نسخه‌های بعدی به‌صورت جداگانه اضافه شود.
