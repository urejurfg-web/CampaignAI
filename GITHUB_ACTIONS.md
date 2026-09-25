# ساخت APK با GitHub Actions

این پروژه برای Build مستقیم با GitHub Actions آماده شده و به Android Studio یا سرویس Render نیاز ندارد.

## روش استفاده با گوشی

1. یک Repository جدید در GitHub بساز و آن را روی Public یا Private بگذار.
2. تمام فایل‌های این ZIP را داخل Repository آپلود کن؛ خود فایل ZIP را داخل Repository نگذار.
3. Commit را روی branch با نام `main` انجام بده.
4. وارد تب **Actions** شو.
5. Workflow با نام **Build Campaign AI APK** را باز کن.
6. اگر با Push خودکار اجرا نشد، **Run workflow** را بزن.
7. بعد از سبز شدن Build، وارد اجرای همان Workflow شو.
8. پایین صفحه در بخش **Artifacts** فایل `CampaignAI-debug-apk` را دانلود کن.
9. ZIP Artifact را باز کن و `app-debug.apk` را روی گوشی نصب کن.

## نکته

این Workflow مستقیماً Gradle 8.9 را روی GitHub Runner اجرا می‌کند و نیازی به Gradle Wrapper داخل ZIP ندارد. Android SDK 35 و Java 17 نیز در Runner نصب می‌شوند.

اتصال AI به Backend یک مرحله جدا از Build APK است؛ برای استفاده واقعی از AI باید Backend روی یک سرور قابل دسترس قرار بگیرد و `API_BASE_URL` در تنظیمات Build به آدرس آن تغییر کند.
