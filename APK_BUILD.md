# Campaign AI — APK build

This project is a native Android/Kotlin app. It is intentionally configured to build the APK directly with Gradle, without a web renderer.

## GitHub Actions
1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Open **Actions**.
4. Select **Build Campaign AI APK**.
5. Choose **Run workflow**.
6. After the run succeeds, open the run and download **CampaignAI-debug-apk** from Artifacts.

The workflow provisions Java 17, Android SDK 35 and Gradle 8.9, then runs `:app:assembleDebug`.

## Important
The APK can open and run the local app without the AI backend. The AI chat requires a reachable backend matching `API_BASE_URL` in `app/build.gradle.kts`. Do not put an OpenAI API key in the Android app.
