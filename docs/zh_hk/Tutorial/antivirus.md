# 防毒軟件排除設定 (白名單)

玩親各種注入式 Mod，最常遇到嘅問題就係俾防毒軟件（Antivirus）誤殺或者喺背景偷偷 block 咗導致 inject 失敗。呢篇指南會同大家拆解誤報嘅原因，同埋教大家點樣喺常見防毒軟件入面正確加返白名單（排除名單）。

## 點解防毒軟件會話佢有毒 / 出誤報？

HoYoShade 嘅底層注入核心（⌈幻港之蝶⌋）需要將畫面渲染模組 `ReShade64.dll` 掛落遊戲進程入面。呢個過程無可避免會用到 Windows 進程注入 API（例如 `OpenProcess`、`VirtualAllocEx`、`WriteProcessMemory` 同埋 `CreateRemoteThread`）。

因為某啲木馬同病毒程式都係用呢啲進程注入手段，所以現代防毒軟件嘅啟發式行為分析（Heuristics）同雲端查殺引擎好容易一刀切，將所有注入行為通通標記為「可疑注入工具」（好似彈出 `HackTool:Win32/Injector` 或者 `Trojan:Win32/Wacatac`）。

HoYoShade 嘅全部注入源碼已經喺 GitHub 公開晒（睇返 [`inject_mod.cpp`](https://github.com/DuolaD/HoYoShade/blob/V2.X.X-Stable/inject_mod.cpp)），完全冇任何偷個人資料、加後門或者搞破壞嘅 code。想隻 Game 順順利利開到，強烈建議用之前先將 HoYoShade 資料夾加落防毒嘅排除名單。

## Windows 內置 Defender (Windows 安全性中心) 設定方法

如果你部電腦用緊 Windows 10 或 Windows 11 自帶嘅 Windows Defender：

1. 撳 Windows 開始選單，search 並打開 **Windows 安全性**（Windows Security）。
2. 喺左邊選單或者主介面中撳 **病毒與威脅防護**。
3. 搵到「“病毒與威脅防護”設定」嗰欄，撳 **管理設定**。
4. 碌落去搵到「排除項目」，撳 **新增或移除排除項目**。
5. 系統如果彈 UAC 提示，撳「是」。
6. 撳 **新增排除項目** 個掣，喺下拉選單揀 **資料夾**（Folder）。
7. 搵返並揀中你成個解壓出嚟嘅 HoYoShade 完整資料夾（例如 `D:\HoYoShade\`）。
8. *(建議選做)* 可以順手用同樣方法，將擺咗遊戲主程序嘅安裝 Folder 都一齊加埋落排除名單。

## 第三方防毒軟件設定

如果你部電腦裝咗第三方防毒軟件（例如卡巴斯基 Kaspersky、Norton、火絨安全等）：

- **火絨安全**：打開主介面 -> 撳右上角 menu -> 設定 -> 病毒防護 -> 排除項管理 -> 新增資料夾，揀 HoYoShade Folder 就搞掂。
- **其他防毒軟件**：去各軟件嘅「信任區」、「白名單」或者「Exclusions / 排除名單」設定入面，將 HoYoShade 所在 Folder 加落去就得。

## File 俾防毒食咗 / 刪除咗點救返？

如果未加白名單就解壓咗，發現 Folder 入面個 `.exe` 或者 `ReShade64.dll` 唔見咗：

1. 打開防毒軟件嘅「隔離區」或者「保護歷程記錄 / Protection history」。
2. 搵返啱啱嗰個時間俾佢隔離咗嘅 HoYoShade 檔案。
3. 撳「還原（Restore）」兼且勾選「同時新增至信任清單」。
4. 如果已經被徹底剷除咗，請先整好排除名單，再重新解壓一次 download 返嚟嘅 zip 包。
