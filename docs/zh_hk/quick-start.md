# 快速上手

歡迎睇 HoYoShade 官方文檔！呢頁會同大家介紹核心概念同埋最基本嘅上手步驟，等你可以輕輕鬆鬆開跑 HoYoShade。

## 乜嘢係 HoYoShade？

HoYoShade 係基於官方開源 ReShade 二次開發嘅畫面增強工具，專為 miHoYo / HoYoverse 旗下 PC 遊戲客戶端量身定做。

ReShade 透過 intercept（攔截）CPU 發去 GPU 嘅圖形 API 通訊，喺畫面後期渲染（post-processing）階段做濾鏡調色。HoYoShade 專門針對米哈遊遊戲嘅運行環境做好晒適配：

- **一鍵通用注入**：搭載 ⌈幻港之蝶⌋ 自研注入核心，跨遊戲通用，唔使自己手動掛載，輕鬆過反作弊。
- **無懼遊戲更新**：注入機制基於通用進程空間加載，理論上平時遊戲熱更新或者出大版本 patch 都唔使等我哋出新版，即刻繼續照開照玩。
- **好夾其他生態同 Mod**：同常用嘅啟動器（好似官方 HoYoPlay、Starward）以及各種輔助工具（例如解鎖 120 FPS 工具、3DMigoto）保持極佳嘅相容性，支援鏈式啟動一齊開。
- **開箱即用**：入面已經整合好常用嘅專用 Shaders、繁中字體同埋調好嘅畫面 Presets。
- **架構全開源透明**：核心加載同注入 logic 完全開源，跟足 BSD-3 開源協議，絕無陰質嘢。

## 玩之前必睇嘅安全須知

喺開波之前，麻煩大家睇一睇以下呢幾點注意事項：

- **Account 與遊戲安全**：雖然 HoYoShade 只係幫你調整本機畫面嘅後處理渲染，完全唔會改遊戲 memory 數據或者數值，但官方反作弊機制話變就變。用得任何第三方注入工具，都一定存在潛在嘅封號或者被風控風險，一切責任由玩家個人承擔。玩之前建議先睇睇 [用戶協議](/zh_hk/user-agreement)。
- **拍片與直播提示**：如果你要錄片、開 Twitch / YouTube 直播或者 share 遊戲畫面，建議喺遊戲入面熄咗 UID 顯示，同埋唔好喺公開直播中展示模組注入配置面板。
- **非官方聲明**：呢個項目係由民間社群獨立維護，同 miHoYo / HoYoverse 官方冇任何關係。千祈唔好走去向遊戲官方客服反饋任何由 Mod 引起嘅問題呀！
- **開源免費**：HoYoShade 開源版本永久免費派發。如果你喺淘寶、蝦皮、旋轉拍賣等平台畀錢買咗呢個開源包，請即刻申請退款兼檢舉條友！

## 運行環境要求

- **作業系統 (OS)**：Windows 10 或 Windows 11（64-bit 系統）。唔支援 macOS、Linux、HarmonyOS 或者各種轉譯環境。
- **硬件配置**：
  - CPU 同 RAM：符合遊戲官方嘅最低運行要求就得。
  - 顯示卡 (GPU)：支援 DirectX 11 或 DirectX 12。建議效能唔好低過 NVIDIA GeForce GTX 1060 / AMD Radeon RX 580，並記得裝返顯卡官方最新嘅穩定版 Driver。
- **運行庫**：需要裝好微軟常用嘅 Microsoft Visual C++ 2015-2022 Redistributable（x64）。

## 三步超快上手流程

1. **Download 兼解壓**：
   喺 [GitHub Releases](https://github.com/DuolaD/HoYoShade/releases) download 最新版本嘅 release 包，解壓去一個正常 Folder（例如 `D:\HoYoShade\`，千祈唔好直接掟落 C 盤根目錄）。解壓之前強烈建議將呢個 Folder 加落防毒軟件嘅白名單（排除名單），詳細教學睇返 [防毒軟件加白名單](/zh_hk/Tutorial/antivirus)。

2. **開注入器兼揀遊戲版本**：
   Double click 打開 HoYoShade 啟動器，睇住個清單輸入你隻遊戲同版本嘅序號（如果唔肯定自己係邊個服，可以先睇 [分清客戶端版本](/zh_hk/Tutorial/check-your-client)）。注入器跟住就會進入等待監聽狀態。

3. **開 Game 兼套用 Preset**：
   透過官方啟動器或者 Starward 開 Game。遊戲 load 緊嗰陣，個 mon 頂部會彈出 ReShade 編譯提示。入到遊戲之後，撳一下鍵盤嘅 <kbd>Home</kbd> 掣就可以叫出 control panel，跟住揀你鍾意嘅調色 Preset 就搞掂！

詳細圖文操作步驟可以睇返對應啟動器嘅教學：
- [用官方啟動器 (HoYoPlay)](/zh_hk/Tutorial/mihoyo-launcher)
- [用第三方啟動器 (Starward)](/zh_hk/Tutorial/starward-launcher)