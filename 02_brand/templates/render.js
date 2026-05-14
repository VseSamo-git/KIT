// Render KIT social assets to PNG using Playwright + Chromium.
// Usage: NODE_PATH=/opt/node22/lib/node_modules node 02_brand/templates/render.js

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const TEMPLATE = 'file://' + path.resolve(__dirname, 'asset.html');
const OUT = path.resolve(__dirname, '..', 'assets_export');

// Все ассеты, которые рендерим
const ASSETS = [
  // Instagram
  { out: 'instagram/avatar.png',                 url: '?type=avatar&w=320&h=320' },
  { out: 'instagram/highlights/01_свадьбы.png',  url: '?type=highlight&w=1080&h=1920&text=' + encodeURIComponent('СВАДЬБЫ') },
  { out: 'instagram/highlights/02_витрины.png',  url: '?type=highlight&w=1080&h=1920&text=' + encodeURIComponent('ВИТРИНЫ') },
  { out: 'instagram/highlights/03_события.png',  url: '?type=highlight&w=1080&h=1920&text=' + encodeURIComponent('СОБЫТИЯ') },
  { out: 'instagram/highlights/04_о_нас.png',    url: '?type=highlight&w=1080&h=1920&text=' + encodeURIComponent('О НАС') },
  { out: 'instagram/highlights/05_цены.png',     url: '?type=highlight&w=1080&h=1920&text=' + encodeURIComponent('ЦЕНЫ') },

  // VK
  { out: 'vk/avatar.png',        url: '?type=avatar&w=400&h=400' },
  { out: 'vk/cover.png',         url: '?type=cover&w=1920&h=768&slogan=' + encodeURIComponent('5 ЛЕТ · 150+ СОБЫТИЙ · САНКТ-ПЕТЕРБУРГ') },
  { out: 'vk/cover_mobile.png',  url: '?type=cover&w=1196&h=400&slogan=' + encodeURIComponent('5 ЛЕТ · 150+ СОБЫТИЙ · СПБ') },

  // Telegram
  { out: 'telegram/avatar.png',     url: '?type=avatar&w=512&h=512' },
  { out: 'telegram/bot_avatar.png', url: '?type=avatar&w=512&h=512' },

  // YouTube
  { out: 'youtube/avatar.png',      url: '?type=avatar&w=800&h=800' },
  { out: 'youtube/channel_art.png', url: '?type=cover_wide&w=2560&h=1440&slogan=' + encodeURIComponent('ДЕКОР НА МЕРОПРИЯТИЯ · САНКТ-ПЕТЕРБУРГ') },
  { out: 'youtube/watermark.png',   url: '?type=watermark&w=150&h=150', omitBackground: true },

  // Pinterest
  { out: 'pinterest/avatar.png',  url: '?type=avatar&w=500&h=500' },
  { out: 'pinterest/cover.png',   url: '?type=cover&w=1500&h=500&slogan=' + encodeURIComponent('ДЕКОР И ФЛОРИСТИКА · СПБ') },

  // Дзен
  { out: 'dzen/avatar.png',  url: '?type=avatar&w=240&h=240' },
  { out: 'dzen/cover.png',   url: '?type=cover&w=1100&h=360&slogan=' + encodeURIComponent('ДЕКОР И ФЛОРИСТИКА · САНКТ-ПЕТЕРБУРГ') },

  // Threads
  { out: 'threads/avatar.png', url: '?type=avatar&w=640&h=640' },

  // Facebook
  { out: 'facebook/avatar.png', url: '?type=avatar&w=400&h=400' },
  { out: 'facebook/cover.png',  url: '?type=cover&w=820&h=312&slogan=' + encodeURIComponent('ДЕКОР НА МЕРОПРИЯТИЯ · СПБ') },
];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  for (const a of ASSETS) {
    const m = a.url.match(/w=(\d+)&h=(\d+)/);
    const w = +m[1], h = +m[2];
    await page.setViewportSize({ width: w, height: h });
    await page.goto(TEMPLATE + a.url, { waitUntil: 'networkidle' });
    // Ждём готовности шрифтов и завершения build()
    await page.waitForFunction(() => document.body.dataset.ready === '1', null, { timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(400); // финальный буфер на дорисовку

    const outPath = path.join(OUT, a.out);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    await page.screenshot({
      path: outPath,
      omitBackground: !!a.omitBackground,
      type: 'png',
      clip: { x: 0, y: 0, width: w, height: h },
    });
    const size = fs.statSync(outPath).size;
    console.log(`✓ ${a.out} (${w}×${h}, ${(size/1024).toFixed(1)}KB)`);
  }

  await browser.close();
  console.log(`\nDone. ${ASSETS.length} files in ${OUT}/`);
})();
