# 分清客戶端版本

喺用 HoYoShade 注入之前，一定要先搞清楚你部機裝緊嗰隻遊戲到底係邊個服、邊個渠道發行嘅版本。

HoYoShade 嘅注入核心（⌈幻港之蝶⌋）會跟住你揀嘅遊戲版本去監聽對應嘅 Process 進程名稱同權限。如果你揀錯咗（例如明明裝緊國際服，但喺注入器入面揀咗國服），注入器就認唔到個進程，只會一直企喺度卡喺「Waiting...」狀態。

## 各遊戲主程式（.exe）名稱對照表

| 遊戲名稱 | 客戶端渠道 / 地區 | 遊戲主程序執行檔名 (.exe) |
| :--- | :--- | :--- |
| **原神** | 中國大陸官服（天空島服） | `YuanShen.exe` |
| **原神** | 中國大陸渠道服（Bilibili / 世界樹服） | `YuanShen.exe` |
| **原神** | 國際服（HoYoverse / 港澳台 / 亞服 / 歐美） | `GenshinImpact.exe` |
| **原神** | Epic Games 商店版 | `GenshinImpact.exe` |
| **崩壞：星穹鐵道** | 中國大陸服（星穹列車服 / B服） | `StarRail.exe` |
| **崩壞：星穹鐵道** | 國際服（America / Europe / Asia / TW/HK/MO） | `StarRail.exe` |
| **絕區零** | 中國大陸服 / 國際服 | `ZenlessZoneZero.exe` |
| **崩壞3** | 中國大陸官服 / B服 / 各海外服 | `BH3.exe` |

*註：原神嘅國服同國際服係採用完全唔同嘅 .exe 檔名，揀注入項目嗰陣一定要睇清睇楚呀！*

## 點樣分自己隻 Game 係邊個渠道？

如果你唔肯定自己隻 Game 屬於邊個服，可以試下用以下呢幾招排查：

### 方法一：直接睇遊戲目錄入面嘅 `config.ini`

呢個係最快、最準確嘅判斷方法：

1. 打開遊戲安裝 Folder（即係擺咗上面嗰柞 `.exe` 執行檔嘅資料夾，例如 `Genshin Impact Game\` 或者 `ZenlessZoneZero Game\`）。
2. 喺呢個目錄入面搵一個叫 `config.ini` 嘅文字 File，用記事本開咗佢。
3. 睇下入面嘅 `cps`、`channel` 同 `sub_channel` 係寫乜：

```ini
[General]
channel=1
cps=mihoyo
game_version=5.4.0
sub_channel=1
```

對照規則如下：

- **中國大陸官服**：`cps=mihoyo`，`channel=1`，`sub_channel=1`。
- **中國大陸 Bilibili 服（B服）**：`cps=bilibili`，`channel=14`，`sub_channel=0`。
- **國際服（全球版 / 港澳台服）**：`cps=hoyoverse`，`channel=1`（某啲海外合作版可能會有 Epic 等代號）。

### 方法二：睇啟動器同登入畫面

- **睇啟動器外觀**：
  - 如果你用緊大陸版米哈遊啟動器（HoYoPlay），遊戲名稱通常顯示為簡體中文官方名（好似《原神》、《崩坏：星穹铁道》）。
  - 如果係全球版 HoYoPlay，啟動器通常預設英文或多語言，遊戲顯示英文名（例如 *Genshin Impact*、*Honkai: Star Rail*）。
- **睇登入畫面驗證**：
  - 開 Game 之後，如果登入框係米哈遊通行證（手機驗證碼/密碼），就係國服官服。
  - 如果彈出 bilibili 登入視窗或者掃 QR Code，就係 B 服。
  - 如果提供 HoYoverse Account、Google、Apple ID、Facebook 等快捷登入掣，就係國際服。

### 方法三：喺 Starward 啟動器入面睇

如果你平時用開 Starward 啟動器，主介面揀好目標遊戲之後，右上角會寫明當前嘅伺服器分區（例如「天空島」、「世界樹」、「America」或者「Asia」），呢啲分區直接同 HoYoShade 注入器入面嘅序號對應。