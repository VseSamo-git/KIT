# Социальные аккаунты КИТ

> Операционный файл. Логины — открытые, пароли и токены **никогда не хранятся в репозитории**. Хранить отдельно в Bitwarden / 1Password.

---

## Активные платформы

| № | Платформа | Логин / аккаунт | Комментарий |
|---|---|---|---|
| 1 | **Telegram** | `@kitwedding` | Канал и DM |
| 2 | **Instagram** | `kitwedding` | Основная витрина бренда |
| 3 | **Threads** | `@kitwedding` (связан с IG) | Реактивные короткие посты, цитаты |
| 4 | **Facebook** | `happy-kit@yandex.ru` | Учётка владельца, нужна для Meta Business Suite |
| 5 | **VK** | `+79995209336` | Аккаунт владельца. Группа: [vk.com/wow_decor_spb](https://vk.com/wow_decor_spb) — переименование делают Оля/Андрей сами |
| 6 | **Pinterest** | `happykitkrd@gmail.com` | Активные публикации + трендвотчинг |
| 7 | **Дзен** | `happy-kit@yandex.ru` | SEO-канал для длинных статей |
| 8 | **YouTube** | `happykitkrd@gmail.com` | Активный канал · длинные кейс-видео + Shorts |

---

## Использование в пайплайне

| Платформа | Роль в фабрике | Кто публикует | API / способ |
|---|---|---|---|
| Instagram | Главный охват, Reels + кейсы | Publisher (n8n) | Instagram Graph API через Meta Business |
| Threads | Реактивные короткие посты | Publisher через Meta API | Тот же Meta Business аккаунт |
| VK | Адаптации, повтор контента | Publisher (n8n) | VK Group token (`messages.send`, `wall.post`) |
| Telegram | Канал + Idea Inbox + уведомления | Publisher + Idea Bot | Telegram Bot API |
| Дзен | SEO длинных статей | Publisher (n8n) | Дзен API / Web automation |
| Pinterest | Pins-публикации + трендвотчинг | Publisher (n8n) + Trend Watcher | Pinterest API (v5) |
| YouTube | Активный · кейс-видео + Shorts | Publisher (полуручной) | YouTube Data API v3 |
| Facebook | **Только связка с Meta Business** | — | Не публикуем активно, нужна для прав на IG API |

---

## Что нужно сделать в спринте Day 1

- [ ] Получить **Instagram Long-Lived Access Token** через Meta Business Suite (через FB-аккаунт).
- [ ] Сгенерировать **VK group access token** с правами `wall, photos, messages, manage`.
- [ ] Создать **Telegram-бота `@kit_ideas_bot`** через @BotFather, получить токен.
- [ ] Получить **YouTube OAuth2 refresh token** для канала.
- [ ] Получить **Pinterest API access** (нужна заявка, может занять до 7 дней — стартануть сразу).
- [ ] Дзен: разобраться с публикацией. На текущий момент Дзен не имеет публичного API — либо ставим вручную, либо через Selenium/Playwright (костыль).

---

## Что хранится отдельно (не в репозитории)

В Bitwarden / 1Password / `.env` на VPS:

```
META_ACCESS_TOKEN=...
VK_GROUP_TOKEN=...
VK_GROUP_ID=...
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHANNEL_ID=...
TELEGRAM_OLGA_USER_ID=...
TELEGRAM_ANDREY_USER_ID=...
YOUTUBE_REFRESH_TOKEN=...
YOUTUBE_CLIENT_ID=...
YOUTUBE_CLIENT_SECRET=...
PINTEREST_ACCESS_TOKEN=...
CLAUDE_API_KEY=...
KIE_AI_API_KEY=...
APIFY_API_TOKEN=...
TAVILY_API_KEY=...
NOCODB_API_TOKEN=...
```

---

## Старые / выводимые из обращения

| Старый ник | Где | Что делаем |
|---|---|---|
| `wow_decor_spb` | VK группа | Переименовать в `kit_decor_spb`, обновить аватар / обложку под Editorial Noir |
| `Kit Wedding` (написание) | Везде | Заменить на единое `КИТ` в шапках и описаниях |
| `Декор свадеб СПБ \| Кит` | VK название | Заменить на `КИТ · Декор на мероприятия` |

---

## Унификация шапок (по брендбуку)

Все шапки/аватары соцсетей переводим на одну версию:

- **Аватар:** Mark-версия логотипа (только хвост) на Noir-фоне.
- **Обложка/баннер:** Compact-локап `КИТ декор` + тэглайн `ДЕКОР НА МЕРОПРИЯТИЯ · САНКТ-ПЕТЕРБУРГ` на Noir-фоне.
- **Bio:** 5-секундный мессендж из `01_strategy/02_MESSAGING_FRAMEWORK.md` («КИТ — атмосферный декор и флористика в СПб. Свадьбы · Витрины · Корпоративы»).
