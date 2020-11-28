# simple-mock
json-server 模擬api 
及註冊登入模擬驗證專案

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 簡單注意事項
1. db.json 新增資料的話，需重啟
2. 一定要開8080 port ，所以先開這包再開別包才能正常跑 json server
3. 【guideline : variable.scss】 主色變數 (只開這個共用style，其餘寫在component下方)
4. widgets 小部件(寫成插槽) / components  跑馬燈等大元件
5. 程式檔命名大駝峰，變數命名小駝峰，class命名 SMACSS (區塊-元素(狀態))

### 註冊登入系統
1. 第一次進入可點註冊，註冊一組帳號
2. 重整後再使用剛剛的帳號登入即可
3. 使用json-server 模擬帳號驗證及通過驗證後的登入