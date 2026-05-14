# КИТ · итоги работы за сессию

> Резюме всех решений, артефактов и следующих шагов проекта КИТ декор.
> Период: 13–14 мая 2026.
> Состав: Андрей (продюсер) + Claude (технический партнёр) + Ольга (носитель голоса, утверждающая).

---

## Что было до старта

- Бизнес: семейная студия декора и флористики Ольги и Андрея в Санкт-Петербурге.
- 5 лет на рынке, 150+ выполненных событий.
- Существующие соцсети: Instagram `@kitwedding`, VK «Декор свадеб СПБ \| Кит», и др. — но без единого бренда и системы контента.
- Был пакет из 12 стратегических документов (Vision/Mission, ICP, бизнес-модель и т.д.) и презентация с 10 концепциями визуального бренда.
- Цель: перезапустить бренд под единым именем КИТ + построить автоматизированную фабрику контента, чтобы Оля управляла всей коммуникацией с одной панели.

---

## Что было сделано

### 1. Реорганизация репозитория

- Из плоской структуры в корне → в логические папки:
  - `01_strategy/` — 8 документов стратегии и аналитики
  - `02_brand/` — брендбук, визуальный брендбук, ассеты, шаблоны
  - `03_voice/` — TOV + корпус реальных постов Ольги
  - `04_content_ops/` — стратегия контента, SOP, соц-аккаунты
  - `05_assets/` — референсы конкурентов и собственные посты
  - `06_pipeline/` — фабрика контента (логика, презентация, roadmap)
  - `archive/` — исторические артефакты (старая презентация, исходник TOV)
- Все перемещения через `git mv` — история файлов сохранена.

### 2. Бренд: Editorial Noir (концепция 05 из 10)

**Решение**: выбрана концепция «Editorial Noir» из подгруженной презентации `archive/KIT_10_concepts_2026-05.html`.

**Палитра** (4 цвета, никаких добавок):
- Noir `#080808` — основной фон (70% площади)
- Coal `#1A1A1A` — вторичный фон, карточки
- Paper `#F0EDE8` — основной текст / светлый фон (25%)
- Dusty Rose `#C9A99A` — единственный акцент (≤5%)

**Шрифты** (3 гарнитуры с непересекающимися ролями):
- **Tenor Sans** Regular 400 — display / вордмарк «КИТ» / hero-заголовки
- **Marck Script** Regular 400 — **только** «декор» в локапе логотипа
- **Space Grotesk** 300/400/500/Italic — body, labels, тэглайн, всё остальное

**Логотип**: реальный файл от Оли — `02_brand/logo/kit-logo.jpg` (хвост кита + КИТ + декор + «ДЕКОР НА МЕРОПРИЯТИЯ»). Двойной смысл имени: акроним К·И·Т + слово «кит».

**Визуальный брендбук**: `02_brand/BRANDBOOK_VISUAL.html` — самостоятельный HTML с 8 секциями (палитра, типографика, логотип, голос, IG-сетка, сторис, CTA, красные линии). Открывается в браузере.

### 3. Голос (TOV)

Полностью переписан на основе реальных постов Ольги, а не абстрактных правил.

- **Корпус** в `03_voice/voice_samples/` — 5 эталонных постов:
  - Свадьба Meze 04.04 (формула A · кейс-флористика)
  - Летняя свадьба с лимонами (кейс с фишкой-деталью)
  - «За каждым красивым оформлением» 25.03 (формула C · философия + 🤍)
  - День из жизни декоратора (формула D · BTS-таймлайн)
  - Свадьба «Птички и Ягоды» 20.06 (формула B · длинный кейс с CTA-кодом)
- **05_TONE_OF_VOICE.md v2.0** — пять столпов голоса (Сенсорика · Конкретика · Уязвимость · Разговор с другом · Финал-эмоция), пять шаблонов A–E, чек-лист для Brand Guard.

**Важная коррекция в messaging**: убрана фраза «лично присутствуем на каждом мероприятии» из всех документов. Заменена на «лично ведём каждый проект — от концепции до монтажа» (Оля и Андрей не могут физически быть на каждом событии).

### 4. Социальные аккаунты (8 платформ)

`04_content_ops/SOCIAL_ACCOUNTS.md` — полный список с логинами, ролями в пайплайне, чек-листом для получения API-ключей.

| # | Платформа | Логин | Статус |
|---|---|---|---|
| 1 | Instagram | `kitwedding` | Главная витрина |
| 2 | Telegram | `@kitwedding` | Канал + бот `@kit_ideas_bot` |
| 3 | Threads | `@kitwedding` (через IG) | Реактивные короткие посты |
| 4 | VK | группа → переименовать в `kit_decor_spb` | Адаптации, повтор |
| 5 | YouTube | `happykitkrd@gmail.com` | Активный · кейс-видео |
| 6 | Pinterest | `happykitkrd@gmail.com` | Активные публикации |
| 7 | Дзен | `happy-kit@yandex.ru` | SEO-статьи |
| 8 | Facebook | `happy-kit@yandex.ru` | Только связка с Meta Business |

### 5. Архитектура контент-фабрики

**12 агентов в 5 слоях** (`06_pipeline/CONTENT_FACTORY_VISUAL.html`):

| Слой | Агенты |
|---|---|
| Стратегия | A01 Brand Strategist · A02 Trend Watcher |
| Планирование | A03 Editor-in-Chief · A04 Idea Expander |
| Производство | A05 Copywriter · A06 Visual Director · A07 Brand Guard |
| Дистрибуция | A08 Publisher · A09 Repurpose |
| Обратная связь | A10 Analytics · A11 Inbox Bot · A12 Case Reaper |

**Логика трёх потоков** (`06_pipeline/CONTENT_LOGIC.md`, согласовано Олей):

- **Поток A · Месячный план** (скелет): Editor строит, Оля утверждает раз в месяц в одно касание. ⚪ Paper.
- **Поток B · Тренды** (вставки): Trend Watcher показывает alert **с обязательным доказательством** (3+ скриншота от топ-аккаунтов, цифры роста), Оля решает по каждому. 🌹 Rose.
- **Поток C · Идеи Оли** (живой голос): TG-бот → Whisper → Idea Expander → 5–7 черновиков, Оля выбирает. ⚫ Coal.
- **Capacity Guard**: 50 единиц/нед потолок. При конфликте машина показывает Оле выбор «что подвинуть».
- **Inbox с 4 лентами** в порядке приоритета: От тебя · После событий · Тренды · По плану.

### 6. Визуальные ассеты соцсетей (21 PNG)

`02_brand/assets_export/` — готовые PNG для всех 8 платформ:

| Платформа | Что внутри |
|---|---|
| `instagram/` | avatar 320×320, 5 highlights 1080×1920, bio.txt, welcome_post.txt |
| `vk/` | avatar 400×400, cover 1920×768 + mobile 1196×400, description, group_setup, welcome_post |
| `telegram/` | avatar 512×512, bot_avatar 512×512, description, welcome_post, bot_description |
| `youtube/` | avatar 800×800, channel_art 2560×1440, watermark 150×150 (transparent), description, welcome_video_idea |
| `pinterest/` | avatar 500×500, cover 1500×500, description, boards.txt |
| `dzen/` | avatar 240×240, cover 1100×360, description, welcome_article (план статьи) |
| `threads/` | avatar 640×640, bio, welcome_post |
| `facebook/` | avatar 400×400, cover 820×312, description |

**Render-пайплайн** в `02_brand/templates/`:
- `asset.html` — единый шаблон, принимает URL-параметры (тип, размер, текст).
- `render.js` — Node-скрипт через Playwright + Chromium, прогоняет все ассеты.
- `fonts/` — локально скачанные WOFF2 файлы (Tenor Sans / Marck Script / Space Grotesk) — потому что Google Fonts CDN заблокирован cert-ошибкой в headless.
- Полностью воспроизводимо: `cd /home/user/KIT && NODE_PATH=/opt/node22/lib/node_modules node 02_brand/templates/render.js`.

### 7. Документы для Оли

- `02_brand/HOW_TO_SETUP_SOCIALS.md` — пошаговая инструкция в дружеском тоне: что заливать, в каком порядке, плюс правила современных соцсетей (сторис каждый день, ответы в DM в первый час, Reels трижды в неделю, не более 4–6 хэштегов и т.д.) + чек-лист.

### 8. Roadmap до запуска фабрики

`06_pipeline/ROADMAP.md` — семь фаз с разделением ролей:

| Фаза | Что | Часы Claude | Часы Андрея | Часы Оли | Дни |
|---|---|---|---|---|---|
| 0 | Согласование бренда | ✅ сделано | — | — | сегодня |
| 1 | Визуальные ассеты соцсетей | ✅ сделано | — | 1–2 ч (заливка) | день 1 |
| 2 | Инфраструктура (VPS + NocoDB + n8n) | 2 | 3–4 | 0 | день 2 |
| 3 | Базовые агенты (Copywriter, Idea Expander, Brand Guard, Inbox Bot) | 5–6 | 1 | 0.5 | день 3-4 |
| 4 | Editor + Publisher + первый авто-пост | 2.5 | 1 | 0.5 | день 5 |
| 5 | Trend Watcher + Analytics | 3 | 0.5 | 0.5 | день 6 |
| 6 | Repurpose + Case Reaper + Visual Director | 2–3 | 1 | 0 | день 7 |
| 7 | Стабилизация | 3–5 | 1/день | 0.25/день | неделя 2 |

---

## Все ключевые артефакты — карта

```
KIT/
├─ PROJECT_SUMMARY.md                    ← этот файл
├─ 00_README.md                           ← карта проекта + статусы
│
├─ 01_strategy/                           ← стратегия и аналитика (8 доков)
│   ├─ 01_VISION_MISSION_VALUES.md
│   ├─ 02_MESSAGING_FRAMEWORK.md
│   ├─ 03_IDEAL_CUSTOMER_PROFILE.md
│   ├─ 06_POSITIONING_COMPETITIVE_ANALYSIS.md
│   ├─ 09_GO_TO_MARKET_STRATEGY.md
│   ├─ 10_GROWTH_DISTRIBUTION_STRATEGY.md
│   ├─ 11_MARKET_RESEARCH_REPORT.md
│   └─ 12_BUSINESS_MODEL_CANVAS.md
│
├─ 02_brand/                              ← бренд
│   ├─ 04_BRAND_BOOK.md                   ← текстовый брендбук (Editorial Noir)
│   ├─ BRANDBOOK_VISUAL.html              ← визуальный брендбук для Оли
│   ├─ SOCIAL_VISUALS_SPEC.md             ← спецификация ассетов
│   ├─ HOW_TO_SETUP_SOCIALS.md            ← инструкция Оле ⭐
│   ├─ logo/
│   │   ├─ kit-logo.jpg                   ← реальный логотип от Оли
│   │   ├─ kit-mark.svg                   ← упрощённый знак (хвост)
│   │   └─ README.md
│   ├─ templates/                         ← render-пайплайн
│   │   ├─ asset.html
│   │   ├─ render.js
│   │   └─ fonts/                         ← локальные WOFF2
│   └─ assets_export/                     ← 21 готовый PNG ⭐
│       ├─ instagram/  ← 7 файлов (PNG + .txt)
│       ├─ vk/         ← 6 файлов
│       ├─ telegram/   ← 5 файлов
│       ├─ youtube/    ← 5 файлов
│       ├─ pinterest/  ← 4 файла
│       ├─ dzen/       ← 4 файла
│       ├─ threads/    ← 3 файла
│       └─ facebook/   ← 3 файла
│
├─ 03_voice/                              ← голос
│   ├─ 05_TONE_OF_VOICE.md                ← TOV v2.0 на основе реальных постов
│   └─ voice_samples/                     ← корпус Ольги (5 файлов)
│
├─ 04_content_ops/                        ← операции контента
│   ├─ 07_CONTENT_STRATEGY.md
│   ├─ 08_CONTENT_PRODUCTION_SOP.md
│   └─ SOCIAL_ACCOUNTS.md                 ← логины, API, секреты
│
├─ 05_assets/
│   ├─ own_posts/                         ← скриншоты собственных постов
│   └─ references/                        ← референсы конкурентов (feerichi, thefair.ru)
│
├─ 06_pipeline/                           ← фабрика контента
│   ├─ CONTENT_FACTORY_VISUAL.html        ← презентация фабрики ⭐
│   ├─ CONTENT_LOGIC.md                   ← каноническая логика 3 потоков
│   └─ ROADMAP.md                         ← 7-фазовый план запуска ⭐
│
└─ archive/
    ├─ KIT_presentation_2026-05.html      ← старый лонгрид
    ├─ KIT_10_concepts_2026-05.html       ← презентация 10 концепций
    └─ 12.05.26_tone_of_voice_source.docx ← исходник TOV-заметок Оли
```

⭐ — главные документы для использования прямо сейчас.

---

## Решения, зафиксированные в проекте

1. **Бренд**: Editorial Noir, концепция 05 из 10.
2. **Имя**: КИТ (кириллица), не KIT. Старые формы (Kit Wedding, WOW Decor) выводятся.
3. **Шрифты**: три (Tenor Sans + Marck Script + Space Grotesk), не один.
4. **Технологический стек**: Claude API + Kie.ai + NocoDB + n8n. Не Airtable (50 000 ₽/год экономия).
5. **Бот идей для Оли**: `@kit_ideas_bot` в Telegram.
6. **Подход к голосу**: tренируем агентов на реальных постах Оли, не на абстрактных правилах.
7. **Логика фабрики**: три потока (план/тренды/идеи), Оля — единственный финальный approver.
8. **Trend Watcher** обязан показывать доказательства тренда, не просто score.
9. **Месячный план**: Оля утверждает одна, в одно касание, раз в месяц.
10. **Активные платформы (8)**: Instagram, Telegram, Threads, VK, YouTube, Pinterest, Дзен, Facebook (последняя — только для Meta Business).
11. **Месячная стоимость стека**: ~6 200 ₽ (VPS + Claude + Kie.ai + Apify + Tavily + домен).

---

## Что не сделано (следующие шаги)

### Сразу после этой сессии
- **Оля**: пройти по `02_brand/HOW_TO_SETUP_SOCIALS.md`, обновить шапки и описания всех 8 соцсетей. ~2 часа.
- **Андрей**: переименовать VK-группу. Получить Telegram Bot token у @BotFather для бота `@kit_ideas_bot`.

### Фаза 2 — инфраструктура (день 2 спринта)
- Поднять VPS Hetzner (~500 ₽/мес).
- Развернуть NocoDB + n8n + Caddy через docker-compose.
- Получить API-ключи: Claude, Kie.ai, Telegram Bot, IG Long-Lived Token (через Meta Business), VK Group token, Pinterest API, Apify, Tavily.
- Создать таблицы в NocoDB: `ideas`, `content_calendar`, `monthly_plans`, `trend_alerts`, `events`, `leads`, `metrics`, `voice_samples`.

### Фаза 3 — базовые агенты (дни 3-4 спринта)
- Написать промпты Claude для 4 базовых агентов (Idea Expander, Copywriter, Brand Guard, Inbox Bot).
- Импортировать n8n workflows.
- Тестовый прогон: Оля закидывает голосовое в `@kit_ideas_bot` → 5-7 черновиков в NocoDB Inbox.

### Фазы 4-7 — Editor, Publisher, Trend Watcher, Analytics, Repurpose, Case Reaper, Visual Director.

Каждая фаза — описана в `06_pipeline/ROADMAP.md` пошагово.

---

## Метрики проекта (цели на 90 дней)

| Метрика | Старт | Цель М3 |
|---|---|---|
| События в месяц | 3–4 | 10–12 |
| Подписчики Instagram | — | +5 000 |
| Подписчики Telegram | 0 | 500 |
| Партнёры-организаторы | 3 | 15 |
| Входящих лидов в месяц | — | 20+ |
| Месячная выручка | 450–600k ₽ | 2M+ ₽ |

---

## Контакты файлов

Главная ветка работы: `claude/kit-decor-setup-cSiKH`
Репозиторий: `github.com/VseSamo-git/KIT`

Вход для Оли — `02_brand/assets_export/` (картинки и тексты) + `02_brand/HOW_TO_SETUP_SOCIALS.md` (инструкция).
Вход для Андрея — `06_pipeline/ROADMAP.md` (что делать дальше) + `04_content_ops/SOCIAL_ACCOUNTS.md` (что нужно по API).

---

*На этом мы закончили эту часть работы. Следующая сессия — Фаза 2 (инфраструктура).*

🤍 КИТ
