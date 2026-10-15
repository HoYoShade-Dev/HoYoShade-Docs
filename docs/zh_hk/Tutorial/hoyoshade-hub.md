# 使用 HoYoShade Hub 啟動器

HoYoShade Hub 係專門為 HoYoShade 打造嘅現代化圖形介面（WinUI 3）啟動管理工具。佢整合咗框架同著色器組件嘅一鍵安裝、網絡加速設定、多遊戲客戶端管理同埋自動化注入功能。

---

## 步驟一：下載與安裝 / 解壓

前往 [HoYoShade Hub GitHub Releases](https://github.com/DuolaD/HoYoShade-Hub/releases/latest) 下載最新發布嘅安裝包或者壓縮檔。

![GitHub Releases 資源列表](/images/hub/zh_hk/00-download-releases.png)

### 1. 揀返啱你部機嘅處理器架構
- **`x64`**：適用於絕大多數用緊 Intel 或 AMD 64 位元處理器嘅常規 Windows 枱機同手提電腦。
- **`arm64`**：適用於配備高通驍龍（例如 Snapdragon X Elite / Plus 等）、Surface Pro ARM 版或者 Mac 虛擬機（Parallels Desktop WOA）嘅 Windows on ARM 裝置。

### 2. 揀返啱你嘅安裝形式
- **安裝版 (`HoYoShadeHub_Setup_*.exe`)（推薦）**：標準 Windows 安裝精靈。自動幫你佈署好環境同建立捷徑，適合絕大多數用家日常使用。
- **便攜版 (`HoYoShadeHub_Portable_*.7z`)**：免安裝綠色版。所有數據同個人設定檔都會留喺解壓後嘅資料夾入面，適合要擺入外置硬碟隨身攜帶，或者唔想寫入系統嘅用家。

### 3. 安裝同解壓指引

#### 選項 A：用安裝版（推薦）
1. Double-click 運行下載咗嘅 `HoYoShadeHub_Setup_*.exe`。
2. 啟動器會打開安裝精靈介面。確認或者撳「變更」指定安裝路徑（預設路徑係 `C:\Program Files\HoYoShade Hub`）。
3. 剔選同意《用戶協議及隱私政策》，點擊「安裝」。
4. 安裝完成之後，就可以直接經由桌面捷徑或者「開始」功能表打開「HoYoShade Hub」。

![HoYoShade Hub 安裝精靈](/images/hub/zh_hk/00-setup-installer.png)

#### 選項 B：用便攜版（解壓即用）
下載 `.7z` 壓縮檔之後，可以用以下方法解壓去任何冇系統權限限制嘅資料夾（建議全英文路徑）：
1. **系統自帶解壓縮功能**：現代 Windows 11 已經原生支援 `.7z` 格式。右鍵點擊壓縮檔，揀「全部解壓縮...」，揀好目標資料夾之後撳解壓就搞掂。
2. **用 7-Zip**：對於 Windows 10 或者想有更穩定解壓體驗嘅用家，推薦裝返個免費開源嘅 [7-Zip](https://www.7-zip.org/)。用 7-Zip 打開壓縮檔，撳工具列嘅「提取」掣（或者喺檔案撳右鍵揀「7-Zip」→「提取到...」）完成解壓。

![用 7-Zip 解壓壓縮包](/images/hub/zh_hk/00-extract-7zip.png)

解壓完之後入去資料夾，搵返並 double-click 運行 `HoYoShadeHub.exe`：

![解壓後嘅檔案目錄與主程序](/images/hub/zh_hk/00-extracted-folder.png)

::: details 運行前置環境需求
- **系統要求**：Windows 10 1809 (組建 17763) 或更高版本。
- **[WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2)**：現代 Windows 11 同大多數已更新嘅 Windows 10 通常已經內建。如果開嗰陣提示缺少，可以去微軟官網下載安裝返。
- **[WebP 影像擴充 (WebP Image Extension)](https://apps.microsoft.com/detail/9pg2dk419drg)**：啟動器用 WebP 格式渲染背景壁紙。如果背景黑咗或者顯示唔到，可以去微軟應用商店（Microsoft Store）免費裝返。
- 為咗獲得最好嘅視覺效果，建議喺 Windows 系統設定入面開返「透明效果」同「動畫效果」。
:::

---

## 步驟二：初次啟動與運行環境檢查

解壓或安裝好之後，運行 `HoYoShadeHub.exe`。首次啟動會進入歡迎精靈頁面，啟動器會自動檢查系統環境（包括 WebView2 Runtime、WebP 解碼器同埋網絡連線狀態）。

![歡迎介面](/images/hub/zh_hk/01-welcome.png)

介面右上角支援切換語言（包括簡體中文、香港繁體、台灣繁體同埋英文）。頁面中間會顯示預設嘅個人資料儲存資料夾，你亦都可以點擊「選擇資料夾」自訂儲存位置。

::: details 網絡受限或連線異常？設定 DoH 同 ECH 加速
如果喺你嘅網絡環境入面連線 GitHub 或海外節點唔穩定，可以喺歡迎介面點擊「網絡設定」超連結，啟用 DNS over HTTPS (DoH) 同埋加密客戶端 Hello (ECH)。

<div style="display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap;">
  <img src="/images/hub/zh_hk/02-network-default.png" alt="網絡設定預設狀態" style="max-width: 48%; border-radius: 8px;" />
  <img src="/images/hub/zh_hk/02-network-doh.png" alt="開啟 DoH 同 ECH" style="max-width: 48%; border-radius: 8px;" />
</div>

開啟 DoH 之後，可以喺下拉選單揀選延遲較低嘅 DNS 供應商（例如 Cloudflare、阿里雲、騰訊雲等），繞過 DNS 污染並確保組件順利下載：

![揀選 DNS 供應商](/images/hub/zh_hk/02-network-doh-providers.png)
:::

確認環境檢查通過之後，點擊右下角嘅「下一步」。

---

## 步驟三：快速開始與自動化安裝

喺「初露鋒芒」快速設定頁面，啟動器預設會自動下載同配置最新穩定版 HoYoShade 框架同埋全量 ReShade 著色器包。

![快速設定頁面](/images/hub/zh_hk/03-quick-start.png)

1. 點擊「下載同埋安裝」掣。
2. 啟動器會自動連線鏡像伺服器下載 HoYoShade 核心框架及常用 Shaders/Addons。

<div style="display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap;">
  <img src="/images/hub/zh_hk/03-downloading.png" alt="正在下載組件" style="max-width: 48%; border-radius: 8px;" />
  <img src="/images/hub/zh_hk/03-download-complete.png" alt="組件安裝完成" style="max-width: 48%; border-radius: 8px;" />
</div>

安裝完成之後，右下角「HoYoShade Hub，啟動！」掣會高亮顯示。撳呢個掣就可以進入主控制面板。

---

## 步驟四：遊戲檢測與路徑設定

進入主介面之後，左上角會提示自動尋找本地已安裝嘅遊戲客戶端：

![自動查找提示](/images/hub/zh_hk/04-main-auto-search.png)

點擊「自動尋找」，啟動器會經由系統註冊表自動識別 miHoYo / HoYoverse 客戶端。

::: details 搵唔到遊戲？手動加入遊戲資料夾
如果客戶端裝喺非預設路徑、用緊免安裝便攜版、外置硬碟或者虛擬機共享資料夾，註冊表可能冇對應資訊。呢個時候可以手動指定遊戲路徑：

1. 點擊主介面左上角四宮格圖示或者遊戲圖示，切換去目標遊戲（例如原神中國服）。
2. 點擊右下角「開始遊戲」隔離嘅齒輪設定掣，進入遊戲設定面板。
3. 點擊「+ 加入遊戲資料夾」或「重新定位遊戲」，瀏覽並選擇遊戲可執行檔所在嘅資料夾（例如包含 `YuanShen.exe` 嘅客戶端資料夾）。

![手動配置遊戲路徑](/images/hub/zh_hk/05-manual-add-game.png)
:::

---

## 步驟五：設定啟動選項並啟動遊戲

路徑設定好之後，主介面會顯示對應遊戲嘅儀表板背景同操作面板。

![遊戲主儀表板](/images/hub/zh_hk/06-game-dashboard.png)

喺左下角「啟動選項」卡片入面：
- 勾選 **啟動遊戲**：啟動官方遊戲客戶端。
- 勾選 **啟動 HoYoShade**：喺遊戲啟動嗰陣自動掛載 HoYoShade 圖形增強核心。
- （可選）按需要勾選 **畫質增強 (啟用 DX12)** 等進階啟動項。

確認設定冇問題之後，點擊右下角嘅「開始遊戲」。

---

## 步驟六：遊戲內驗證與效果調節

啟動器喚起遊戲客戶端之後，HoYoShade 會自動注入渲染管線。進入遊戲初始加載畫面嗰陣，螢幕頂部會彈出 ReShade 狀態欄：

![遊戲啟動加載畫面](/images/hub/zh_hk/07-launch-ingame.png)

著色器編譯完成之後，狀態欄會提示安裝成功：

![ReShade 加載成功](/images/hub/zh_hk/07-launch-ingame-loaded.png)

- 鍵盤按下 <kbd>Home</kbd> 掣：呼叫出 ReShade 控制面板。
- 喺控制面板頂部下拉選單中揀選自帶嘅畫面預設，即可體驗即日光影與畫質增強。
- 更多疑難排查同快捷鍵說明請參閱 [常見問題與排錯](/zh_hk/Tutorial/troubleshooting)。
