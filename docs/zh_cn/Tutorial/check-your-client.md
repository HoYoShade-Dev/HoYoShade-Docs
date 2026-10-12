# 判断客户端类型

在使用 HoYoShade 注入前，需要先明确游戏客户端的发行地区与渠道。

HoYoShade 注入内核会根据所选客户端监听对应的进程名称与权限特征。如果选错客户端（例如实际安装的是国际服，但在注入器中选择了国服），注入器会因为匹配不到对应的进程名而一直停留在等待状态。

## 各游戏可执行文件名称对照

| 游戏名称 | 客户端渠道 / 地区 | 游戏主程序可执行文件名 |
| :--- | :--- | :--- |
| **原神** | 中国大陆官服（天空岛服） | `YuanShen.exe` |
| **原神** | 中国大陆渠道服（哔哩哔哩 / 世界树服） | `YuanShen.exe` |
| **原神** | 国际服（HoYoverse / 欧美 / 亚服 / 港澳台） | `GenshinImpact.exe` |
| **原神** | Epic Games 商店分发版 | `GenshinImpact.exe` |
| **崩坏：星穹铁道** | 中国大陆服（星穹列车服 / B服） | `StarRail.exe` |
| **崩坏：星穹铁道** | 国际服（America / Europe / Asia / TW/HK/MO） | `StarRail.exe` |
| **绝区零** | 中国大陆服 / 国际服 | `ZenlessZoneZero.exe` |
| **崩坏3** | 中国大陆官服 / B服 / 各海外服 | `BH3.exe` |

*注：原神的国服与国际服采用了不同的可执行文件名，在选择注入项时必须严格区分。*

## 判断渠道的方法

如果无法确认当前客户端属于哪种渠道，可通过以下方式排查。

### 方法一：查看游戏目录下的 `config.ini`

这是最直接也最可靠的判断方式：

1. 进入游戏的安装文件夹（即包含上述 `.exe` 可执行文件的文件夹，例如 `Genshin Impact Game\` 或 `ZenlessZoneZero Game\`）。
2. 在该目录下找到名为 `config.ini` 的文本文件并用记事本打开。
3. 检查其中的 `cps`、`channel` 和 `sub_channel` 字段：

```ini
[General]
channel=1
cps=mihoyo
game_version=5.4.0
sub_channel=1
```

对应规则如下：

- **中国大陆官服**：`cps=mihoyo`，`channel=1`，`sub_channel=1`。
- **中国大陆哔哩哔哩服（B服）**：`cps=bilibili`，`channel=14`，`sub_channel=0`。
- **国际服（全球版本）**：`cps=hoyoverse`，`channel=1`（部分地区与联运客户端会带有特定标识，如 Epic 或海外联运代号）。

### 方法二：查看启动器与登录界面

- **启动器标识**：
  - 若使用的是中国大陆版米哈游启动器（HoYoPlay），游戏名称通常显示为中文官方名（如《原神》、《崩坏：星穹铁道》）。
  - 若使用的是全球版 HoYoPlay，启动器语言默认为英文或多语言，游戏显示为英文官方名（如 *Genshin Impact*、*Honkai: Star Rail*）。
- **登录界面验证**：
  - 打开游戏后，登录窗口如果是米哈游通行证（手机验证码/密码），则为国服官服。
  - 登录窗口如果是哔哩哔哩弹窗或二维码，则为 B 服。
  - 登录窗口提供 HoYoverse Account、Google、Apple ID、Facebook 等快捷登录选项，则为国际服。

### 方法三：在 Starward 启动器中查看

如果使用 Starward 启动器，在主界面选中对应游戏后，右上角会明确标注当前的服务器分区（例如“天空岛”、“世界树”、“America”或“Asia”），这与 HoYoShade 注入器中的选项直接对应。