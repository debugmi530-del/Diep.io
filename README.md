# Diep Clone — Android APK

Репозиторий для сборки APK через GitHub Actions.

## Как собрать

1. Загрузи этот репозиторий на GitHub
2. Перейди во вкладку **Actions**
3. Запусти **Build APK** вручную (кнопка «Run workflow»), или сделай любой push в ветку `main`
4. После завершения скачай APK из раздела **Artifacts**

## Структура

- `app/src/main/assets/www/` — файлы игры (HTML/JS/CSS)
- `app/src/main/java/.../MainActivity.java` — WebView-оболочка
- `.github/workflows/build-apk.yml` — автосборка APK
