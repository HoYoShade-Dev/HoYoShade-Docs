# 使用 HoYoShade Hub 啟動器

HoYoShade Hub 係專門為 HoYoShade 打造嘅現代化圖形介面（WinUI 3）啟動管理工具。佢整合咗框架同著色器組件嘅一鍵安裝、網絡加速設定、多遊戲客戶端管理同埋自動化注入功能。

---

## 步驟一：初次啟動與運行環境檢查

解壓並運行 `HoYoShadeHub.exe`。首次啟動會進入歡迎精靈頁面，啟動器會自動檢查系統環境（包括 WebView2 Runtime、WebP 解碼器同埋網絡連線狀態）。

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

## 步驟二：快速開始與自動化安裝

喺「初露鋒芒」快速設定頁面，啟動器預設會自動下載同配置最新穩定版 HoYoShade 框架同埋全量 ReShade 著色器包。

![快速設定頁面](/images/hub/zh_hk/03-quick-start.png)

1. 點擊「下載同埋安裝」掣。
2. 啟動器會自動連線鏡像伺服器下載 HoYoShade 核心框架及常用 Shaders/Addons。

<div style="display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap;">
  <img src="/images/hub/zh_hk/03-downloading.png" alt="下載組件中" style="max-width: 48%; border-radius: 8px;" />
  <img src="/images/hub/zh_hk/03-download-complete.png" alt="組件安裝完成" style="max-width: 48%; border-radius: 8px;" />
</div>

安裝完成後，右下角「HoYoShade Hub，啟動！」按鈕會亮起。點擊該掣即可進入主控制面板。

---

## 步驟三：遊戲偵測與路徑設定

進入主介面後，左上角會提示自動尋找本機已安裝嘅遊戲客戶端：

![自動尋找提示](/images/hub/zh_hk/04-main-auto-search.png)

點擊「自動查找」，啟動器會透過系統註冊表自動辨識 miHoYo / HoYoverse 客戶端。

::: details 未能自動識別遊戲？手動加入遊戲目錄
如果遊戲客戶端放咗喺非預設路徑、使用便攜版、外置硬碟或虛擬機共享目錄，註冊表可能冇對應資訊。呢個時候可以手動指定遊戲路徑：

1. 點擊主介面左上角四宮格圖示或者遊戲圖示，切換到目標遊戲（例如原神大陸版）。
2. 點擊右下角「啟動遊戲」隔離嘅齒輪設定掣，進入遊戲設定面板。
3. 點擊「+ 加遊戲目錄」或「重新定位遊戲」，瀏覽並選擇包含遊戲主執行檔嘅資料夾（例如放有 `YuanShen.exe` 嘅客戶端目錄）。

![手動配置遊戲路徑](/images/hub/zh_hk/05-manual-add-game.png)
:::

---

## 步驟四：設定啟動選項並開啟遊戲

路徑設定好之後，主介面會顯示對應遊戲嘅儀表板背景與控制面板。

![遊戲主儀表板](/images/hub/zh_hk/06-game-dashboard.png)

喺左下角「啟動選項」卡片入面：
- 勾選 **啟動遊戲**：啟動官方遊戲客戶端。
- 勾选 **啟動 HoYoShade**：喺遊戲啟動時自動掛載 HoYoShade 畫質增強核心。
- （可選）按需要勾選 **畫質增強 (啟用 DX12)** 等進階項目。

確定設定無誤之後，點擊右下角嘅「啟動遊戲」。

---

## 步驟五：遊戲內驗證與效果調校

啟動器喚起遊戲客戶端之後，HoYoShade 會自動注入渲染管線。進入遊戲初始加載畫面時，螢幕頂部會彈出 ReShade 狀態列：

![遊戲啟動加載畫面](/images/hub/zh_hk/07-launch-ingame.png)

著色器編譯完成後，狀態列會顯示安裝成功提示：

![ReShade 加載成功](/images/hub/zh_hk/07-launch-ingame-loaded.png)

- 鍵盤按下 <kbd>Home</kbd> 鍵：呼出 ReShade 控制面板。
- 喺控制面板頂部下拉選單選擇自帶嘅畫面預設，即可體驗即時光影與畫質增強。
- 更多疑難排解與快捷鍵說明請參閱 [常見問題與疑難排解](/zh_hk/Tutorial/troubleshooting)。
