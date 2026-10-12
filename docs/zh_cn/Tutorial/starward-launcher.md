# 在 Starward 启动器中使用 HoYoShade

[Starward](https://github.com/Scighost/Starward) 是一款开源的第三方米哈游游戏启动器。本指南介绍如何在由 Starward 管理的游戏客户端中配合使用 HoYoShade。

## 准备工作

1. 确认 Starward 中已正确关联或安装目标游戏，且游戏可以脱机独立启动。
2. 确保在操作前游戏进程已完全退出。
3. 下载并解压 HoYoShade 发行包，建议提前完成 [杀毒软件排除设置](/zh_cn/Tutorial/antivirus)。

## 具体操作步骤

### 第一步：在 Starward 中获取游戏主程序目录

1. 打开 Starward 启动器，并在左侧导航栏选择你要增强画质的游戏。
2. 找到主界面底部的“开始游戏”按钮，点击其右侧的**齿轮图标（游戏设置）**。
3. 在设置面板中即可查看“游戏安装目录”。点击该路径旁边的文件夹图标，系统资源管理器将直接跳转至该目录。
4. 确认目录中存在主程序可执行文件（如 `YuanShen.exe`、`GenshinImpact.exe`、`StarRail.exe` 或 `ZenlessZoneZero.exe`）。

### 第二步：放置 `ReShade.ini` 配置文件

1. 打开解压后的 HoYoShade 文件夹，运行 HoYoShade 启动器生成 `ReShade.ini`。
2. 将该 `ReShade.ini` 复制并粘贴至第一步中打开的游戏主程序根目录。

### 第三步：运行 HoYoShade 注入器

1. 在 HoYoShade 启动器中输入目标游戏对应的序号。
2. 注入器进入监听状态，控制台提示：
   ```text
   Waiting for a '...' process to start ...
   ```
3. 保持控制台在后台运行。

### 第四步：从 Starward 启动游戏

1. 回到 Starward 界面，点击**开始游戏**。
2. 游戏进程被拉起后，HoYoShade 注入器会自动检测到进程并执行挂载，提示 `Injecting HoYoShade ... Succeeded!` 后自动关闭控制台。
3. 游戏内屏幕顶端载入着色器，加载完毕后按 <kbd>Home</kbd> 键即可打开调色配置菜单。

## Starward 特性与兼容性说明

### 1. 与 Starward 内置 FPS 解锁功能的兼容性
Starward 提供了针对部分游戏的帧率解锁功能。HoYoShade 与该功能完全兼容：
- FPS 解锁机制主要通过内存补丁调节引擎渲染时钟上限；
- HoYoShade 作用于 DirectX 图形后处理渲染管线；
- 两者工作在不同的模块层级，同时使用不会产生冲突。但需注意在使用 FPS 解锁器时，勿在游戏内设置中随意切换帧率选项。

### 2. 自定义启动参数支持
若在 Starward 中为游戏配置了窗口化启动参数（如 `-popupwindow`、`-screen-fullscreen 0`），HoYoShade 的注入逻辑不受任何影响。

### 3. 多区服切换注意事项
Starward 支持快速切换不同区服的客户端（例如从国服切换至国际服）。若在 Starward 中切换了区服，需确认 HoYoShade 注入器中选择的目标客户端同步更新（例如国服原神对应 `YuanShen.exe`，国际服对应 `GenshinImpact.exe`），否则注入器将无法捕获到进程。