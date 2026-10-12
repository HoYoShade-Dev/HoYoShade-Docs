# 用官方啟動器 (HoYoPlay) 安裝兼運行

呢篇指南會同大家分享點樣喺米哈遊官方啟動器（HoYoPlay）管理嘅遊戲客戶端入面，配合 HoYoShade 一齊開跑。

## 準備工作

1. 確保遊戲本體已經透過 HoYoPlay 完整 download 好晒，而且平時自己可以正常單獨開到。
2. 操作前記得先將遊戲完全 quit 咗，唔好等佢喺背景行緊。
3. 喺 Release 頁面 download 最新版嘅 HoYoShade zip 包，解壓去一個獨立 Folder（例如 `D:\HoYoShade\`）。
4. 費事核心注入模組被防毒軟件當做毒阻住，強烈建議先睇睇 [防毒軟件加白名單](/zh_hk/Tutorial/antivirus) 將 HoYoShade Folder 加落信任名單。

## 詳細操作步驟

### 第一步：搵返遊戲安裝根目錄

HoYoPlay 啟動器自己個安裝 Folder 同實際遊戲 Game 檔嘅 Folder 係兩回事，你需要搵返遊戲主程序（.exe）擺喺邊：

1. 打開 HoYoPlay 啟動器，喺左邊或者頂部切換至你要增強畫質嘅遊戲（例如《原神》或者《崩壞：星穹鐵道》）。
2. 撳右下角「開始遊戲」按鈕隔離嗰個**更多選項圖示（三條橫線或者齒輪）**，揀**遊戲設定**。
3. 喺「基本資訊」或者「遊戲安裝位置」嗰行後面，撳**開啟所在資料夾**。
4. 檔案總管會彈出遊戲目錄，確認呢個 Folder 入面確實有隻 Game 嘅主程序（例如 `YuanShen.exe`、`GenshinImpact.exe`、`StarRail.exe` 或 `ZenlessZoneZero.exe`）。

### 第二步：擺好設定檔 `ReShade.ini`

1. 打開解壓好嘅 HoYoShade 資料夾，run 一次入面嘅 HoYoShade 啟動器（對應語言嘅執行檔或者 script）。
2. 程式運行之後會喺 HoYoShade 根目錄自動 gen 一份 `ReShade.ini` 設定檔。
3. 將呢份 `ReShade.ini` 複製（Copy）兼貼上（Paste）到第一步打開嗰個**遊戲主程序根目錄**（即係同 `.exe` 擺埋同一層）。

> 溫馨提示：`ReShade.ini` 入面記錄咗 Shaders 著色器同 Presets 預設嘅 path。擺咗入遊戲執行檔同級目錄之後，遊戲一開 ReShade 內核就會自動認得。以後日常開 Game 玩，完全唔需要重複再 copy。

### 第三步：開注入器等候監聽

1. 喺 HoYoShade 啟動器入面，睇住你隻遊戲同伺服器分區，輸入對應嘅編號（唔肯定嘅請睇 [分清客戶端版本](/zh_hk/Tutorial/check-your-client)）。
2. 控制台黑框會出類似咁嘅字，進入等待監聽狀態：
   ```text
   Waiting for a 'YuanShen.exe' process to start ...
   ```
3. 由得呢個控制台黑框喺背景 run，千祈唔好手多去閂咗佢。

### 第四步：喺 HoYoPlay 正常開 Game

1. 返去 HoYoPlay 官方啟動器，撳**開始遊戲**。
2. 遊戲主程序一開，HoYoShade 注入器就會自動抓到遊戲進程嘅 PID 兼搞掂掛載，控制台會出：
   ```text
   Found a matching process with PID 12345! Injecting HoYoShade ... Succeeded!
   ```
3. 注入搞掂之後，控制台會自動閂埋，完全唔會喺背景霸佔額外系統資源。

### 第五步：入 Game 驗證兼揀 Preset

1. 進入遊戲載入畫面嗰陣，個 mon 頂部會彈出 ReShade 狀態列，顯示著色器同紋理 load 緊。
2. 加載搞掂之後，撳一下鍵盤嘅 <kbd>Home</kbd> 掣就可以叫出 control panel。
3. 喺 panel 頂部嘅 Preset 下拉選單入面，揀包入面附送嘅遊戲專用調色 Preset（例如啱原神、星鐵或者絕區零嘅風格），或者自己隨便執下啲特效參數都得。

## 遊戲更新咗之後要點做？

米哈遊官方客戶端平時熱更新或者大版本換代更迭嗰陣，通常都唔會郁你安裝目錄入面嘅額外 config 檔。更新完之後：

1. 睇下遊戲主程序目錄入面個 `ReShade.ini` 仲喺唔喺度。
2. 開 Game 前好似平時咁開定 HoYoShade 注入器，跟住開 Game 就得。
3. 如果遇到啟動器全量重裝遊戲導致成個目錄清空，重新由 HoYoShade Folder copy 一次 `ReShade.ini` 入新嘅主程序目錄就搞掂返。