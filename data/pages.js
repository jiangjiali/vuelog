const pages = [
  {
    title: '个人简介',
    summary: '略谈自己对学习、工作、生活等的观点、看法。',
    slug: 'about',
    exclude: false, // (可选) `true` 从归档视图中排除该页
    titleless: false, // (可选) `true` 在页面视图中隐藏标题
    commentless: false, // (可选) `true` 禁用页的注释
    draft: false // (可选) `true` 使页面暂时无法访问
  },
  {
    title: '年度计划',
    summary: '方法、技术、工具，科学量化的系统方法。',
    slug: 'yearly-plan',
    exclude: false,
    titleless: false,
    commentless: false,
    draft: false
  },
  {
    title: '网站收藏',
    summary: '收藏一些常用网址跟一些重要网址。',
    slug: 'marks',
    exclude: false,
    titleless: false,
    commentless: false,
    draft: false
  }
]

export default pages
