## 前置安裝 (Prerequisites)

- [Node.js](https://nodejs.org/)
- [MySQL](https://dev.mysql.com/downloads/mysql/)

ℹ️ *執行此專案前，需安裝 Node.js 與 MySQL。*

## 安裝 (Installation)
1. 開啟終端機 (Terminal)，cd 至存放本專案的資料夾，執行以下指令將本專案 clone 至本機電腦。

```
git clone https://github.com/Tommy0901/typhoon-day-mayor.git
```

2. 進入此專案資料夾

```
cd typhoon-day-mayor
```

3. 執行以下指令以安裝套件

```
npm install
```

4. 資料庫設定  

執行以下指令以快速建立資料庫、資料表，以及匯入種子資料：

```
npm run dbsetup
npm run seed
```
⚠️ **執行上述指令前，請先確認是否需更改預設設定**  
--- MySQL server 連線之預設設定如下：
```
host: '127.0.0.1'  // localhost
username: <your_username>
password: <user_password>
database: 'typhoon_day'
```
若欲更改設定，請編輯專案資料夾中 `/config/config.json` 中的 "development"  

5. 環境變數設定

請參照根目錄下的 `.env.example` 檔，於根目錄下新增 `.env` 檔並進行相關設定：
```
JWT_SECRET= 【 請自行設定 】
GOOGLE_CLIENT_ID=【 請自行設定 】
GOOGLE_CLIENT_SECRET=【 請自行設定 】
GOOGLE_CALLBACK_URL=【 請自行設定 】
```
Google Oauth 設定可參考: https://www.tsg.com.tw/blog-detail2-162-0-google-login.htm

6. 啟動伺服器

啟動伺服器前，請先確認環境變數 NODE_ENV **非** `production`，再執行以下指令以啟動伺服器：

```
npm run start
```

當 Terminal 出現以下字樣，即代表伺服器啟動成功：  
`App is running on http://localhost:3333`  
  
欲進行測試的可以使用的帳號密碼：
- 帳號 / 密碼（已解鎖全部遊戲進度）： demo / 123

7. Docker

在使用 docker 之前需要先安裝 docker 有沒有安裝好，如果是 GCP 可以按照這篇教學安裝

https://forum.gamer.com.tw/C.php?bsn=71458&snA=485

dockerfile 有指定環境變數是 NODE_ENV 是 production，
Build image 之前，要記得改 config.json 當中 production DB 的設定

build image，在 GCP 最低資源的 vm，第一次跑大概要跑 10 分鐘。

```
sudo docker build -t typhoon_day .
```

確認有沒有將 image build 出來

```
sudo docker images
```

run image

```
sudo docker run -d --env-file .env -p 3333:3333 --network="host" --name typhoon_day typhoon_day
```
```--network="host"``` 讓跑起來的 image 可以連到 localhost DB，只在 linux 環境有用

確認執行狀態

```
sudo docker ps -a
```