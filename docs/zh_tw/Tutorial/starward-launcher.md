# 在 Starward 啟動器中使用 HoYoShade

[Starward](https://github.com/Scighost/Starward) 是一款開源的第三方米哈遊遊戲啟動器。本指南介紹如何在由 Starward 管理的遊戲客戶端中配合使用 HoYoShade。

## 準備工作

1. 確認 Starward 中已正確關聯或安裝目標遊戲，且遊戲可以離線獨立啟動。
2. 確保在操作前遊戲進程已完全退出。
3. 下載並解壓縮 HoYoShade 發行包，建議提前完成 [防毒軟體排除設定](/zh_tw/Tutorial/antivirus)。

## 具體操作步驟

### 第一步：在 Starward 中獲取遊戲主程序目錄

1. 打開 Starward 啟動器，並在左側導覽列選擇你要增強畫質的遊戲。
2. 找到主介面底部的「開始遊戲」按鈕，點擊其右側的**齒輪圖示（遊戲設定）**。
3. 在設定面板中即可查看「遊戲安裝目錄」。點擊該路徑旁邊的資料夾圖示，系統資源管理器將直接跳轉至該目錄。
4. 確認目錄中存在主程序執行檔（如 `YuanShen.exe`、`GenshinImpact.exe`、`StarRail.exe` 或 `ZenlessZoneZero.exe`）。

### 第二步：放置 `ReShade.ini` 設定檔

1. 打開解壓縮後的 HoYoShade 資料夾，運行 HoYoShade 啟動器生成 `ReShade.ini`。
2. 將該 `ReShade.ini` 複製並貼上至第一步中打開的遊戲主程序根目錄。

### 第三步：運行 HoYoShade 注入器

1. 在 HoYoShade 啟动器中輸入目標遊戲對應的序號。
2. 注入器進入監聽狀態，控制台提示：
   ```text
   Waiting for a '...' process to start ...
   ```
3. 保持控制台在背景運行。

### 第四步：從 Starward 啟動遊戲

1. 回到 Starward 介面，點擊**開始遊戲**。
2. 遊戲進程被啟動後，HoYoShade 注入器會自動檢測到進程並執行掛載，提示 `Injecting HoYoShade ... Succeeded!` 後自動關閉控制台。
3. 遊戲內螢幕頂端載入著色器，加載完畢後按 <kbd>Home</kbd> 鍵即可打開調色設定選單。

## Starward 特性與相容性說明

### 1. 與 Starward 內建 FPS 解鎖功能的相容性
Starward 提供了針對部分遊戲的影格率解鎖功能。HoYoShade 與該功能完全相容：
- FPS 解鎖機制主要透過記憶體補丁調節引擎渲染時脈上限；
- HoYoShade 作用於 DirectX 圖形後處理渲染管線；
- 兩者工作在不同的模組層級，同時使用不會產生衝突。但需注意在使用 FPS 解鎖器時，勿在遊戲內設定中隨意切換影格率選項。

### 2. 自訂啟動參數支援
若在 Starward 中為遊戲配置了視窗化啟動參數（如 `-popupwindow`、`-screen-fullscreen 0`），HoYoShade 的注入邏輯不受任何影響。

### 3. 多區服切換注意事項
Starward 支援快速切換不同區服的客戶端（例如從國服切換至國際服）。若在 Starward 中切換了區服，需確認 HoYoShade 注入器中選擇的目標客戶端同步更新（例如國服原神對應 `YuanShen.exe`，國際服對應 `GenshinImpact.exe`），否則注入器將無法捕獲到進程。