# 判斷客戶端類型

在使用 HoYoShade 注入前，需要先明確遊戲客戶端的發行地區與渠道。

HoYoShade 注入內核會根據所選客戶端監聽對應的進程名稱與權限特徵。如果選錯客戶端（例如實際安裝的是國際服，但在注入器中選擇了國服），注入器會因為匹配不到對應的進程名而一直停留在等待狀態。

## 各遊戲執行檔名稱對照

| 遊戲名稱 | 客戶端渠道 / 地區 | 遊戲主程序執行檔名 |
| :--- | :--- | :--- |
| **原神** | 中國大陸官服（天空島服） | `YuanShen.exe` |
| **原神** | 中國大陸渠道服（嗶哩嗶哩 / 世界樹服） | `YuanShen.exe` |
| **原神** | 國際服（HoYoverse / 歐美 / 亞服 / 港澳台） | `GenshinImpact.exe` |
| **原神** | Epic Games 商店分發版 | `GenshinImpact.exe` |
| **崩壞：星穹鐵道** | 中國大陸服（星穹列車服 / B服） | `StarRail.exe` |
| **崩壞：星穹鐵道** | 國際服（America / Europe / Asia / TW/HK/MO） | `StarRail.exe` |
| **絕區零** | 中國大陸服 / 國際服 | `ZenlessZoneZero.exe` |
| **崩壞3** | 中國大陸官服 / B服 / 各海外服 | `BH3.exe` |

*注：原神的國服與國際服採用了不同的執行檔名，在選擇注入項時必須嚴格區分。*

## 判斷渠道的方法

如果無法確認當前客戶端屬於哪種渠道，可透過以下方式排查。

### 方法一：查看遊戲目錄下的 `config.ini`

這是最直接也最可靠的判斷方式：

1. 進入遊戲的安裝資料夾（即包含上述 `.exe` 執行檔的資料夾，例如 `Genshin Impact Game\` 或 `ZenlessZoneZero Game\`）。
2. 在該目錄下找到名為 `config.ini` 的文字檔案並用記事本打開。
3. 檢查其中的 `cps`、`channel` 和 `sub_channel` 欄位：

```ini
[General]
channel=1
cps=mihoyo
game_version=5.4.0
sub_channel=1
```

對應規則如下：

- **中國大陸官服**：`cps=mihoyo`，`channel=1`，`sub_channel=1`。
- **中國大陸嗶哩嗶哩服（B服）**：`cps=bilibili`，`channel=14`，`sub_channel=0`。
- **國際服（全球版本）**：`cps=hoyoverse`，`channel=1`（部分地區與聯運客戶端會帶有特定標識，如 Epic 或海外聯運代號）。

### 方法二：查看啟動器與登入介面

- **啟動器標識**：
  - 若使用的是中國大陸版米哈遊啟動器（HoYoPlay），遊戲名稱通常顯示為中文官方名（如《原神》、《崩壞：星穹鐵道》）。
  - 若使用的是全球版 HoYoPlay，啟動器語言預設為英文或多語言，遊戲顯示為英文官方名（如 *Genshin Impact*、*Honkai: Star Rail*）。
- **登入介面驗證**：
  - 打開遊戲後，登入視窗如果是米哈遊通行證（手機驗證碼/密碼），則為國服官服。
  - 登入視窗如果是嗶哩嗶哩彈窗或 QR Code，則為 B 服。
  - 登入視窗提供 HoYoverse Account、Google、Apple ID、Facebook 等快捷登入選項，則為國際服。

### 方法三：在 Starward 啟動器中查看

如果使用 Starward 啟動器，在主介面選中對應遊戲後，右上角會明確標註當前的伺服器分區（例如「天空島」、「世界樹」、「America」或「Asia」），這與 HoYoShade 注入器中的選項直接對應。