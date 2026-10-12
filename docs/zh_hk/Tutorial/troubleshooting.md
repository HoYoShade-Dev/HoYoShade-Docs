# 常見問題與解決方法 (Troubleshooting)

呢度整理咗大家用 HoYoShade 嗰陣最常撞到嘅問題同埋對應嘅排查步驟。

## 1. 注入器一直卡喺「等待遊戲啟動」，開咗 Game 都完全冇反應

控制台黑框一直停喺 `Waiting for a '...' process to start ...`，但明明喺啟動器入面開咗 Game，個黑框完全冇任何輸出變化：

- **睇下係咪揀錯服**：檢查下你喺注入器揀嘅版本同你部機實際開緊嘅 Game 夾唔夾。例如國服《原神》主程序叫 `YuanShen.exe`，國際服叫 `GenshinImpact.exe`。如果揀錯咗服，注入器就永遠監聽唔到個進程。對照表請睇 [分清客戶端版本](/zh_hk/Tutorial/check-your-client)。
- **檢查管理員權限 (Run as administrator)**：如果遊戲啟動器或者 Game 本身係用「系統管理員身分執行」開，但注入器只係普通權限開，注入器就會因為權限唔夠而 inject 唔到入去。試下 Right click 撳 HoYoShade 啟動器，揀「以系統管理員身分執行」。
- **防毒喺背景暗中 block 咗**：某啲防毒軟件唔會彈提示出嚟，但會喺背景直接 block 咗進程注入 API。請參考 [防毒軟件加白名單](/zh_hk/Tutorial/antivirus) 將目錄加返白名單。

## 2. 一開 Game 就 Crash、閃退或者彈 Direct3D / D3D error

隻 Game 一開就即刻 crash 咗、黑畫面自動閂咗或者報 Direct3D error：

- **其他 Overlay 軟體撞咗車**：ReShade 需要接管 DirectX 嘅渲染交換鏈。如果背景有其他同類型 Overlay 工具一齊開緊，好容易會搶資源撞車：
  - **RTSS (RivaTuner Statistics Server)**：將遊戲嘅 Application Detection Level 改做 `None`，或者開咗 Custom Direct3D Support。
  - **GeForce Experience / NVIDIA App**：去設定入面暫時熄咗「遊戲內迷你窗 / In-Game Overlay」。
  - **Discord / Steam / 遊戲加加等**：熄咗呢啲軟件嘅遊戲內浮動視窗同 FPS 監測 Overlay。
- **顯示卡 Driver 太舊**：太舊嘅 Driver 可能缺少咗某啲 DirectX 11/12 渲染指令，建議去官網 update 去最新嘅穩定版顯卡 Driver。
- **Shader file 損壞或出錯**：如果你自己加咗第三方 Shader，入面嘅 syntax error 可能會搞到編譯 crash 咗。試下清走你自己加嘅額外 shader，用返預設包自帶嘅 `reshade-shaders` 試下先。

## 3. 入到 Game 撳 Home 掣冇反應，叫唔出設定面板

遊戲畫面正常出到，但點撳 <kbd>Home</kbd> 都開唔到 ReShade 選單：

- **確認鍵盤 Hotkey 對唔對**：好多 Laptop 或者 87 鍵 / 60% 鍵盤冇獨立嘅 <kbd>Home</kbd> 實體掣，通常要撳埋 <kbd>Fn</kbd> 掣（例如 <kbd>Fn</kbd> + <kbd>Home</kbd> 或者 <kbd>Fn</kbd> + <kbd>←</kbd>）。
- **睇下 `ReShade.ini` 擺啱位未**：`ReShade.ini` 一定要擺喺放遊戲 `.exe` 嗰個 Folder 入面，千祈唔好擺咗喺出面啟動器嗰層。冇呢個 file，ReShade 就讀唔到 hotkey binding。
- **自己改個呼出熱鍵**：如果真係撞掣，可以用記事本打開遊戲 Folder 入面個 `ReShade.ini`，搵 `KeyOverlay=` 改做其他 keycode（例如將 `KeyOverlay=36,0,0,0` 改做其他掣）。

## 4. 遊戲版本更新之後點樣開返？

米哈遊遊戲每次小更新或者大版本更新之後：

- 理論上 HoYoShade 完全唔使等更新 patch，直接照常注入就用得。
- 如果更新完撳唔出面板，睇下遊戲 Folder 入面個 `ReShade.ini` 係咪喺更新過程俾啟動器清走咗。如果不幸冇咗，由 HoYoShade Folder copy 一份返入去就搞掂。

## 5. 景深 (DOF) 等深度緩衝區 (Depth Buffer) 特效冇反應

- 為了防止有人喺線上多人連線遊戲入面利用 Depth Buffer 整透視外掛，ReShade 只要偵測到有網絡連線數據或者特定多人場景，就會自動鎖死高精度深度緩衝區。
- HoYoShade 隨包附送嘅調色 Preset 主要係靠色彩校正、曲線調光、Tonemap 同埋銳化等算法，完全唔需要 Depth Buffer 都可以穩定生效，大家可以放心用。
