module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 9,
            minPixeValue: 3,
            //不轉換的屬性
            propList: ['*'],
            // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
            // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
            selectorBlackList: ["weui-"]
          })
        ]
      },
      scss: {
        prependData: `
           @import "@/assets/scss/variable.scss";
        `
      }
    }
  },
  devServer: {
		port: 8080,
		host: "0.0.0.0",
		https: false,
		open: false,
		proxy: {
			"/api": {
				target: "http://localhost:3000", //設置port
				changeOrigin: true, //是否跨域
				// ws:true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	}

}
/*----------------jsonServer---------*/
/*引入json-server*/
const jsonServer = require('json-server')
/*搭建一个server*/
const apiServer = jsonServer.create()
/*将db.json关联到server*/
const apiRouter = jsonServer.router('mock/db.json')
const middlewares = jsonServer.defaults()
apiServer.use(middlewares)
apiServer.use(apiRouter)
/*监听端口*/
apiServer.listen(3000, () => {
  console.log('JSON Server is running')
})

