# КИТ — Декор и флористика, Санкт-Петербург

Репозиторий проекта по перезапуску бренда и фабрики контента КИТ.
Семейная студия декора (Ольга + Андрей), Санкт-Петербург.

> **Бренд:** Editorial Noir (концепция 05). Палитра Noir / Paper / Dusty Rose. Шрифт Space Grotesk.
> **Стек:** Claude + Kie.ai + NocoDB + n8n.
> **Цель:** Ольга каждый день смотрит **одну панель в NocoDB** — фабрика контента работает, контент приносит лиды.

---

## Карта проекта

| Папка | Что внутри |
|---|---|
| **`01_strategy/`** | Стратегия и аналитика. Vision/Mission, мессенджи, ICP, позиционирование, GTM, growth, рынок, бизнес-модель. |
| **`02_brand/`** | Бренд: текстовый брендбук + визуальный HTML-брендбук + мудборд. |
| **`03_voice/`** | Tone of Voice + корпус реальных постов Ольги для Claude. |
| **`04_content_ops/`** | Контент-стратегия, SOP производства контента, схемы NocoDB и workflows n8n. |
| **`05_assets/`** | Референсы конкурентов + скриншоты собственных постов как baseline. |
| **`06_pipeline/`** | (создаётся на этапе 3) Агенты, скиллы Claude, n8n-workflows, NocoDB-схема. |
| **`archive/`** | Старые версии, исходники: 10-вариантная презентация, DOCX-исходник нового TOV, старый лонгрид. |

---

## Что согласовано и где статус

| Артефакт | Файл | Статус |
|---|---|---|
| Vision · Mission · Values | `01_strategy/01_VISION_MISSION_VALUES.md` | ✅ Согласовано (содержание), палитра требует ревью под Noir |
| Messaging | `01_strategy/02_MESSAGING_FRAMEWORK.md` | ✅ Согласовано |
| ICP | `01_strategy/03_IDEAL_CUSTOMER_PROFILE.md` | ✅ Согласовано |
| **Brand Book** | `02_brand/04_BRAND_BOOK.md` | 🔄 **На согласовании · Editorial Noir** |
| **Brand Book — визуальный** | `02_brand/BRANDBOOK_VISUAL.html` | 🔄 **На согласовании Ольгой** |
| Tone of Voice | `03_voice/05_TONE_OF_VOICE.md` | ⏳ Этап 2 — обновляется на основе реальных постов |
| Positioning · Competitive | `01_strategy/06_POSITIONING_COMPETITIVE_ANALYSIS.md` | ✅ Согласовано |
| Content Strategy | `04_content_ops/07_CONTENT_STRATEGY.md` | ✅ Согласовано (черновая) |
| Content Production SOP | `04_content_ops/08_CONTENT_PRODUCTION_SOP.md` | ⏳ Этап 3 — дополняется NocoDB-схемой и n8n-workflows |
| Go-to-Market | `01_strategy/09_GO_TO_MARKET_STRATEGY.md` | ✅ Согласовано |
| Growth & Distribution | `01_strategy/10_GROWTH_DISTRIBUTION_STRATEGY.md` | ✅ Согласовано |
| Market Research | `01_strategy/11_MARKET_RESEARCH_REPORT.md` | ✅ Согласовано |
| Business Model Canvas | `01_strategy/12_BUSINESS_MODEL_CANVAS.md` | ✅ Согласовано |

---

## Этапы перезапуска

**Этап 1 · Бренд** ✅ ЗАВЕРШЁН
- [x] Реорганизация репозитория
- [x] Brand Book переписан под Editorial Noir
- [x] Визуальный брендбук HTML
- [x] Реальный логотип `02_brand/logo/kit-logo.jpg` интегрирован
- [x] Шрифты согласованы: Tenor Sans + Marck Script + Space Grotesk

**Этап 2 · Голос** ✅ ЗАВЕРШЁН
- [x] 5 эталонных постов Ольги в `03_voice/voice_samples/`
- [x] 05_TONE_OF_VOICE.md v2.0 на основе реальных постов
- [x] Удалены конфликтующие правила про эмодзи и присутствие на каждом мероприятии

**Этап 3 · Подготовка к фабрике** ✅ ЗАВЕРШЁН
- [x] `06_pipeline/CONTENT_FACTORY_VISUAL.html` — визуальная презентация
- [x] `06_pipeline/CONTENT_LOGIC.md` — каноническая логика трёх потоков
- [x] `06_pipeline/ROADMAP.md` — 7-фазовый план запуска
- [x] `04_content_ops/SOCIAL_ACCOUNTS.md` — 8 платформ с логинами
- [x] `02_brand/SOCIAL_VISUALS_SPEC.md` — спецификация ассетов
- [x] **21 PNG для всех платформ** в `02_brand/assets_export/`
- [x] Render-пайплайн (Playwright + локальные шрифты) в `02_brand/templates/`
- [x] **`02_brand/HOW_TO_SETUP_SOCIALS.md`** — инструкция Оле

**Этап 4 · Инфраструктура** ⏳ СЛЕДУЮЩАЯ СЕССИЯ
- [ ] VPS + NocoDB + n8n (docker-compose)
- [ ] Подключить API: Claude, Kie.ai, IG Graph, VK, TG Bot, Pinterest, Apify, Tavily
- [ ] Создать таблицы NocoDB по схеме
- [ ] `04_content_ops/nocodb_schema.md`

**Этап 5 · Агенты и запуск** ⏳ СЛЕДУЮЩАЯ СЕССИЯ
- [ ] `04_content_ops/claude_prompts/` — промпты для 12 агентов
- [ ] n8n workflows
- [ ] Первый авто-пост «Мы обновились — встречайте КИТ»

**Полное резюме сделанного:** `PROJECT_SUMMARY.md`

---

## Конвенции

- **Документы пишем на русском**, технические комментарии в коде — на русском или английском по контексту.
- **Не создаём дубликаты файлов.** Если файл переименовывается — `git mv`, чтобы сохранить историю.
- **Бренд — Editorial Noir.** Никаких упоминаний Ivory / Sage / Bronze в новых документах.
- **Один шрифт в материалах** — Space Grotesk. Один акцентный цвет — Dusty Rose `#C9A99A`.
- **Старая презентация и docx** хранятся в `archive/` для трассировки решений.

---

## Источники и ссылки

- Презентация 10 концепций (источник Editorial Noir): `archive/KIT_10_concepts_2026-05.html`
- DOCX с заметками Ольги и реальными постами: `archive/12.05.26_tone_of_voice_source.docx`
- Соцсети: Instagram `@kitwedding`, VK «Декор свадеб СПБ | Кит»
- Референсы конкурентов: `05_assets/references/` (`@feerichi`, `@thefair.ru`)
