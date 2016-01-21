這是用 React/Redux 寫的政黨票計算機
[原作請參考](http://g0v.github.io/partyvote2016/?) (這是用 Angular 寫的)

# 執行
直接打開 index.html 即可

# 開發
這個程式是用 webpack 建置的, 如果要進入修改, 請執行
```
npm install  //install the develop dependencies
webpack --watch --color --progress  //execute webpack to watch file
```

如果有需要 live reload 功能, 也可以執行
```
webpack-dev-server --port 8000
```
並在瀏覽器中打開 `http://localhost:8000/webpack-dev-server/index.html`