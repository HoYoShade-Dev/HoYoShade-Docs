# 使用 HoYoShade Hub 启动器

HoYoShade Hub 是为 HoYoShade 打造的现代化图形界面（WinUI 3）启动管理工具。它集成了框架与着色器组件的一键安装、网络加速配置、多游戏客户端管理与自动化注入功能。

---

## 步骤一：下载与获取 HoYoShade Hub

前往 [HoYoShade Hub GitHub Releases](https://github.com/DuolaD/HoYoShade-Hub/releases/latest) 获取最新发布的安装包或压缩包。

![GitHub Releases 资源列表](/images/hub/zh_cn/00-download-releases.png)

### 1. 选择匹配的处理器架构
- **`x64`**：适用于绝大多数搭载 Intel 或 AMD 64 位处理器的常规 Windows 台式机与笔记本。
- **`arm64`**：适用于搭载高通骁龙（如 Snapdragon X Elite / Plus 等）、Surface Pro ARM 版或 Mac 虚拟机（Parallels Desktop WOA）的 Windows on ARM 设备。

### 2. 选择安装形式
- **便携版 (`HoYoShadeHub_Portable_*.7z`)**：免安装绿色版。解压到任意非系统受限目录（建议全英文路径）后，直接运行 `HoYoShadeHub.exe`。所有数据与配置文件保存在程序同目录下，便于随身携带与备份。
- **安装版 (`HoYoShadeHub_Setup_*.exe`)**：标准 Windows 安装向导。运行后按提示安装，会自动在开始菜单与桌面创建快捷方式。

::: details 运行前置依赖环境
- **系统要求**：Windows 10 1809 (内部版本 17763) 或更高版本。
- **[WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2)**：现代 Windows 11 与多数已更新的 Windows 10 系统已预装。若启动时提示缺失，请前往微软官网下载安装。
- **[WebP 图像扩展 (WebP Image Extension)](https://apps.microsoft.com/detail/9pg2dk419drg)**：用于启动器内背景图渲染。若背景呈现黑屏，可前往微软应用商店（Microsoft Store）免费安装。
- 为获得最佳视觉效果，建议在 Windows 系统设置中开启「透明效果」与「动画效果」。
:::

---

## 步骤二：初次启动与运行环境检查

解压或安装完成后，运行 `HoYoShadeHub.exe`。首次启动会进入欢迎向导页面，启动器会自动检测系统运行环境（包括 WebView2 Runtime、WebP 解码器与网络连接状态）。

![欢迎界面](/images/hub/zh_cn/01-welcome.png)

界面右上角支持切换显示语言（支持简体中文、香港繁体、台湾繁体及英文）。页面中间会显示默认的数据存储目录，你也可以点击「选择文件夹」指定其他存储位置。

::: details 网络受限或连接异常？配置 DoH 与 ECH 加速
如果你的网络环境连接 GitHub 或海外源受阻，可以在欢迎界面点击「网络设置」超链接，开启 DNS over HTTPS (DoH) 与加密客户端问候 (ECH)。

<div style="display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap;">
  <img src="/images/hub/zh_cn/02-network-default.png" alt="网络设置默认状态" style="max-width: 48%; border-radius: 8px;" />
  <img src="/images/hub/zh_cn/02-network-doh.png" alt="开启 DoH 与 ECH" style="max-width: 48%; border-radius: 8px;" />
</div>

开启 DoH 后，可以在下拉列表中选择延迟较低的 DNS 提供商（如 Cloudflare、阿里云、腾讯云等），以绕过 DNS 污染并保证组件顺利下载：

![选择 DNS 提供商](/images/hub/zh_cn/02-network-doh-providers.png)
:::

确认各项环境检测通过后，点击右下角的「下一步」。

---

## 步骤三：快速开始与自动化安装

在「初露锋芒」快速配置页面，启动器默认勾选下载并配置最新稳定版 HoYoShade 框架与全量 ReShade 着色器包。

![快速配置页面](/images/hub/zh_cn/03-quick-start.png)

1. 点击「下载并安装」按钮。
2. 启动器将自动连接镜像服务器下载 HoYoShade 核心框架及常用 Shaders/Addons。

<div style="display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap;">
  <img src="/images/hub/zh_cn/03-downloading.png" alt="正在下载组件" style="max-width: 48%; border-radius: 8px;" />
  <img src="/images/hub/zh_cn/03-download-complete.png" alt="组件安装完成" style="max-width: 48%; border-radius: 8px;" />
</div>

安装完成后，右下角「HoYoShade Hub，启动！」按钮将高亮显示。点击该按钮即可进入主控制面板。

---

## 步骤四：游戏检测与路径配置

进入主界面后，左上角会提示自动查找本地已安装的游戏客户端：

![自动查找提示](/images/hub/zh_cn/04-main-auto-search.png)

点击「自动查找」，启动器将通过系统注册表自动识别 miHoYo / HoYoverse 客户端。

::: details 未能自动识别游戏？手动添加游戏目录
如果客户端存放在非默认路径、使用便携版、移动硬盘或虚拟机共享目录，注册表可能缺少对应信息。此时可以手动指定游戏路径：

1. 点击主界面左上角四宫格图标或游戏图标，切换到目标游戏（例如原神中国服）。
2. 点击右下角「开始游戏」旁的齿轮设置图标，进入游戏设置面板。
3. 点击「+ 添加游戏目录」或「重新定位游戏」，浏览并选择游戏可执行文件所在目录（例如包含 `YuanShen.exe` 的客户端文件夹）。

![手动配置游戏路径](/images/hub/zh_cn/05-manual-add-game.png)
:::

---

## 步骤五：配置启动选项并启动游戏

路径配置完成后，主界面会呈现对应游戏的仪表盘背景与操作面板。

![游戏主仪表盘](/images/hub/zh_cn/06-game-dashboard.png)

在左下角「启动选项」卡片中：
- 勾选 **启动游戏**：启动官方游戏客户端。
- 勾选 **启动 HoYoShade**：在游戏启动时自动挂载 HoYoShade 图形增强核心。
- （可选）按需勾选 **画质增强 (启用 DX12)** 等进阶启动项。

确认设置无误后，点击右下角的「开始游戏」。

---

## 步骤六：游戏内验证与效果调节

启动器唤起游戏客户端后，HoYoShade 将自动注入渲染管线。进入游戏初始加载画面时，屏幕顶端会弹出 ReShade 状态栏：

![游戏启动加载画面](/images/hub/zh_cn/07-launch-ingame.png)

着色器编译完成后，状态栏将提示安装成功：

![ReShade 加载成功](/images/hub/zh_cn/07-launch-ingame-loaded.png)

- 键盘按下 <kbd>Home</kbd> 键：呼出 ReShade 控制面板。
- 在控制面板顶部下拉菜单中选择自带的画面预设，即可体验实时光影与画质增强。
- 更多疑难排查与热键说明请查阅 [常见问题与排错](/zh_cn/Tutorial/troubleshooting)。
