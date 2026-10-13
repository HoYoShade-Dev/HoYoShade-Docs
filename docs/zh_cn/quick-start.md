# 快速开始

欢迎查阅 HoYoShade 文档。本页提供核心概念说明与基础上手流程，帮助你了解并运行 HoYoShade。

## 什么是 HoYoShade？

HoYoShade 是基于官方开源 ReShade 二次开发的图形增强项目，专为 miHoYo / HoYoverse 旗下 PC 端游戏客户端定制。

ReShade 通过拦截 CPU 发往 GPU 的图形 API 调用与通信，在后处理阶段调节与增强渲染画面。HoYoShade 针对米哈游旗下游戏客户端的环境特点做了适配：

- **统一注入方案**：搭载 ⌈幻港之蝶⌋ 自研注入内核，提供跨游戏的适配能力，简化绕过反作弊与手动挂载的流程。
- **抗版本更新**：注入机制基于通用进程空间加载，理论上在游戏常规大版本更新与热补丁后无需等待软件适配，可直接继续使用。
- **生态与模组兼容**：针对常用的启动器（如 HoYoPlay、Starward）及辅助工具（如 FPS 解锁器、3DMigoto）保持良好的兼容性，支持链式启动。
- **开箱即用**：集成常用的游戏专用着色器库（Shaders）、本土化界面字体及预设配置（Presets）。
- **框架开源透明**：核心加载与注入逻辑完全开源，遵循 BSD-3 开源协议。

## 使用须知与安全规范

在使用前，请了解以下注意事项：

- **账号与环境安全**：虽然 HoYoShade 仅修改游戏本地后处理渲染画面，不修改游戏内存数据与逻辑数值，但官方反作弊系统随时可能调整策略。使用任何第三方注入工具均存在潜在的封号或风控风险，使用责任由用户个人承担。建议了解 [用户协议](/zh_cn/user-agreement)。
- **内容创作提示**：如需录制视频、直播或公开发布游戏画面，建议关闭游戏内 UID 显示，并避免在公开流媒体中直接展示模组注入配置界面。
- **非官方声明**：本项目由社区独立维护，与 miHoYo / HoYoverse 官方无隶属或经济关系。请勿向游戏官方客服反馈任何由模组引起的故障。
- **开源免费**：HoYoShade 开源版本永久免费分发。若你在任何电商平台、二手交易平台或社群中付费购买了本开源包，请及时向交易平台申请退款并举报。

## 运行环境要求

- **操作系统**：Windows 10 或 Windows 11（64 位系统）。不支持 macOS、Linux、HarmonyOS 及转译环境。
- **硬件配置**：
  - CPU 与内存：满足目标游戏客户端的最低官方运行要求。
  - 显卡（GPU）：支持 DirectX 11 或 DirectX 12 接口。建议性能不低于 NVIDIA GeForce GTX 1060 / AMD Radeon RX 580，并安装显卡厂商官方发布的最新稳定版驱动。
- **运行库**：需安装常见的 Microsoft Visual C++ 2015-2022 Redistributable（x64）。

## 三步上手流程

1. **准备与解压**：
   从 [GitHub Releases](https://github.com/DuolaD/HoYoShade/releases) 下载最新版本的发行包，将其解压至非系统根目录（例如 `D:\HoYoShade\`）。在解压前建议将该目录添加到系统杀毒软件的信任列表，详见 [杀毒软件排除设置](/zh_cn/Tutorial/antivirus)。

2. **启动注入器并选择客户端**：
   运行 HoYoShade 启动程序，在列表中选择你正在运行的游戏及客户端版本（若不确定具体渠道，请先查阅 [判断客户端类型](/zh_cn/Tutorial/check-your-client)）。注入器会进入等待监听状态。

3. **启动游戏并载入预设**：
   通过官方启动器或 Starward 启动游戏。游戏加载后，画面顶端会出现 ReShade 编译提示条。进入游戏后按下键盘的 <kbd>Home</kbd> 键即可呼出控制面板并选择画面预设。

详细图文操作步骤可参考对应启动器的安装教程：
- [使用 HoYoShade Hub 启动器 (推荐)](/zh_cn/Tutorial/hoyoshade-hub)
- [使用官方启动器 (HoYoPlay)](/zh_cn/Tutorial/mihoyo-launcher)
- [使用第三方启动器 (Starward)](/zh_cn/Tutorial/starward-launcher)