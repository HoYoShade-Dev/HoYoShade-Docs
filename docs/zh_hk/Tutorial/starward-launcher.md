# 喺 Starward 啟動器入面用 HoYoShade

[Starward](https://github.com/Scighost/Starward) 係一隻深受米家玩家歡迎嘅開源第三方米哈遊啟動器。呢篇指南會介紹點樣喺 Starward 管理嘅遊戲客戶端入面，配合 HoYoShade 一齊開跑。

## 準備工作

1. 確認 Starward 入面已經關聯好或者裝好目標遊戲，而且遊戲平時可以單獨正常開到。
2. 搞之前請先完全退出遊戲，唔好等佢喺背景 run 緊。
3. Download 兼解壓好 HoYoShade release 包，建議先做 [防毒軟件加白名單](/zh_hk/Tutorial/antivirus)。

## 詳細操作步驟

### 第一步：喺 Starward 搵到遊戲主程序目錄

1. 打開 Starward 啟動器，喺左邊導航列揀你要增強畫質嘅遊戲。
2. 搵到主介面底部的「開始遊戲」按鈕，撳佢右邊嗰個**齒輪圖示（遊戲設定）**。
3. 喺設定 panel 入面就可以見到「遊戲安裝位置」。撳嗰個資料夾 icon，系統檔案總管就會直接幫你打開嗰個目錄。
4. 睇下目錄入面係咪真係有隻 Game 嘅主程序（例如 `YuanShen.exe`、`GenshinImpact.exe`、`StarRail.exe` 或 `ZenlessZoneZero.exe`）。

### 第二步：擺好 `ReShade.ini` 設定檔

1. 打開解壓出嚟嘅 HoYoShade 資料夾，run 一次 HoYoShade 啟動器 gen 個 `ReShade.ini` 出嚟。
2. 將呢個 `ReShade.ini` copy 兼 paste 去第一步打開嗰個遊戲主程序根目錄。

### 第三步：開 HoYoShade 注入器

1. 喺 HoYoShade 啟動器入面輸入你隻 Game 對應嘅序號。
2. 注入器進入監聽狀態，控制台黑框會出提示：
   ```text
   Waiting for a '...' process to start ...
   ```
3. 由得佢喺背景 run，千祈唔好手多去閂咗佢。

### 第四步：喺 Starward 正常開 Game

1. 返去 Starward 介面，撳**開始遊戲**。
2. 遊戲進程一開，HoYoShade 注入器就會自動 detect 到進程兼搞掂注入，出咗 `Injecting HoYoShade ... Succeeded!` 之後就會自動閂埋。
3. 入到 Game 個 mon 頂部會 load shaders，load 完撳一下鍵盤嘅 <kbd>Home</kbd> 掣就可以打開 control panel 揀調色 Preset。

## Starward 特性與相容性注意事項

### 1. 同 Starward 內置嘅解鎖 FPS 功能撞唔撞？
Starward 可以幫部分遊戲解鎖影格率（FPS）。HoYoShade 同呢個功能**完全相容，唔會撞車**：
- FPS 解鎖主要係透過 memory patch 改動引擎渲染幀率上限；
- HoYoShade 係喺 DirectX 圖形後期渲染管線（post-processing）運作；
- 兩者工作喺完全唔同嘅模組層級，同時一齊開完全冇衝突。不過要留意開咗 FPS 解鎖器之後，唔好喺遊戲入面亂手動改 FPS 設定。

### 2. 自訂啟動參數支援
如果你喺 Starward 幫隻 Game 設咗視窗化啟動參數（好似 `-popupwindow`、`-screen-fullscreen 0`），HoYoShade 嘅注入邏輯完全唔受影響，照常運作。

### 3. 多區服切換注意事項
Starward 切換唔同區服（例如國服切換去國際服）好方便。如果你喺 Starward 切換咗區服，記得 HoYoShade 注入器嗰邊都要揀返對應嘅客戶端（例如國服原神係 `YuanShen.exe`，國際服係 `GenshinImpact.exe`），否則注入器會認唔到個進程。