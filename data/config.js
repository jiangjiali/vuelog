const config = {
  // 网站名称将显示在浏览器选项卡和网站标题中。
  brand: {
    'en-US': 'Jolly Jiang',
    'zh-CN': '蒋佳李'
  },

  // 把网站品牌放在当前页面后面 `document.title`.
  brandTrailing: true,

  // 为站点提供服务的域根目录的路径，以斜杠（`/`）开头和结尾。
  // 如果您的站点位于域根目录下，请设置为“'/”。
  base: '/',

  // 访问“/”时要路由到的路径。
  // 根据需要设置为`/home`、`/blog`或有效路径。
  homePath: '/home',

  // Footer在“homePath”上是否可见。
  homeFooter: true,

  // 目前支持 'en-US', 'zh-CN'.
  defaultLang: 'zh-CN',

  // 允许/禁止访问者切换界面语言。
  switchLang: true,

  // 可供切换的语言。必须是受支持语言的子集，或保留为空。
  selectedLangs: [],

  // 博客/类别视图中列出的文章数。
  postsCount: 9,

  // 有关标记的选项，请参见https://github.com/chjj/marked#options-1 详细信息
  markedOptions: {}
}

export default config
