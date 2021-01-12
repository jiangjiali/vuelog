const pages = [
  {
    title: {
      'en-US': 'Profile',
      'zh-CN': '个人简介'
    },
    summary: {
      'en-US': 'Talk about my views on study, work and life.',
      'zh-CN': '略谈自己对学习、工作、生活等的观点、看法。'
    },
    slug: 'about',
    exclude: false, // (可选) `true` 从归档视图中排除该页
    titleless: false, // (可选) `true` 在页面视图中隐藏标题
    commentless: false, // (可选) `true` 禁用页的注释
    draft: false // (可选) `true` 使页面暂时无法访问
  },
  {
    title: {
      'en-US': 'Yearly Plan',
      'zh-CN': '年度计划'
    },
    summary: {
      'en-US': 'Methods, techniques, tools, scientific quantitative system method.',
      'zh-CN': '方法、技术、工具，科学量化的系统方法。'
    },
    slug: 'yearly-plan',
    exclude: false, // (可选) `true` 从归档视图中排除该页
    titleless: false, // (可选) `true` 在页面视图中隐藏标题
    commentless: false, // (可选) `true` 禁用页的注释
    draft: false // (可选) `true` 使页面暂时无法访问
  },
  {
    title: {
      'en-US': 'Profile',
      'zh-CN': '网站收藏'
    },
    summary: {
      'en-US': 'Collect some common websites and some important websites.',
      'zh-CN': '收藏一些常用网址跟一些重要网址。'
    },
    slug: 'marks',
    exclude: false, // (可选) `true` 从归档视图中排除该页
    titleless: false, // (可选) `true` 在页面视图中隐藏标题
    commentless: false, // (可选) `true` 禁用页的注释
    draft: false // (可选) `true` 使页面暂时无法访问
  }
]

export default pages
