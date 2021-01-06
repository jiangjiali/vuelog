/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */
window.Vuelog = {
  database: {
    config: {
      // The name of your site, will be displayed in browser tab and site header.
      brand: {
        'en-US': 'Know It',
        'zh-CN': '知之简史'
      },

      // Put the site brand behind current page in `document.title`.
      brandTrailing: false,

      // The image displayed in site header right beside the brand.
      logo: 'logo.png',

      // Path to the domain root that serves your site, starts and ends with slash (`/`).
      // Set to `'/'` if your site is under domain root.
      base: '/',

      // The path to route to when you visit `/`.
      // Set to `/home`, `/blog` or a valid path at your need.
      homePath: '/home',

      // Whether footer is visible on `homePath` or not.
      homeFooter: false,

      // Vuelog interface language. Currently supports 'en-US', 'zh-CN'.
      defaultLang: 'zh-CN',

      // Allow/disallow visitors to switch interface language.
      switchLang: true,

      // Available languages for switching. Must be a subset of supported languages, or leave empty.
      selectedLangs: [],

      // Number of posts listed in a blog/category view.
      postsCount: 3,

      // Options for marked, see https://github.com/chjj/marked#options-1 for detail
      markedOptions: {}
    },

    navigation: [
      {
        label: {
          'en-US': 'Blog',
          'zh-CN': '博客'
        },
        type: 'archive',
        path: '/archive'
      },
      {
        label: {
          'en-US': 'About',
          'zh-CN': '关于'
        },
        type: 'page',
        path: '/page/about'
      }
    ],

    pages: [
      {
        title: {
          'en-US': 'About',
          'zh-CN': '关于'
        },
        slug: 'about',
        exclude: true, // (OPTIONAL) `true` to exclude the page from archive view
        titleless: false, // (OPTIONAL) `true` to hide the title in page view
        commentless: false, // (OPTIONAL) `true` to disable comments for the page
        draft: false // (OPTIONAL) `true` to make the page temporarily inaccessible
      }
    ],

    categories: [
      {
        title: {
          'en-US': 'Finance',
          'zh-CN': '金融学'
        },
        slug: 'finance'
      },
      {
        title: {
          'en-US': 'Book',
          'zh-CN': '书籍阅读'
        },
        slug: 'bookreading'
      },
      {
        title: {
          'en-US': 'Wiki',
          'zh-CN': '学习百科'
        },
        slug: 'wiki'
      },
      {
        title: {
          'en-US': 'Family',
          'zh-CN': '家族管理'
        },
        slug: 'familymanagement'
      }
    ],

    posts: [
      {
        title: {
          'en-US': 'Family Key Management',
          'zh-CN': '家族钥匙管理'
        },
        slug: '家族钥匙管理',
        category: 'familymanagement',
        date: '2020-1-1',
        titleless: false,   // (可选) `true` 在页面视图中隐藏标题
        commentless: false, // (可选) `true` 禁用页的注释
        draft: false        // (可选) `true` 使页面暂时无法访问
      },
      {
        title: {
          'en-US': 'KV SecretEngine Version1',
          'zh-CN': 'KV机密引擎 - 版本1'
        },
        slug: 'KV机密引擎-版本1',
        category: 'familymanagement',
        date: '2020-1-2',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'KV SecretEngine Version2',
          'zh-CN': 'KV机密引擎 - 版本2'
        },
        slug: 'KV机密引擎-版本2',
        category: 'familymanagement',
        date: '2020-1-3',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'KV SecretEngine',
          'zh-CN': 'KV机密引擎'
        },
        slug: 'KV机密引擎',
        category: 'familymanagement',
        date: '2020-2-1',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'TOTP Secret Engine',
          'zh-CN': 'TOTP机密引擎'
        },
        slug: 'TOTP机密引擎',
        category: 'familymanagement',
        date: '2020-2-2',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'Transit Secret Engine',
          'zh-CN': 'Transit机密引擎'
        },
        slug: 'transit-secret-engine',
        category: 'familymanagement',
        date: '2020-2-3',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'Userpass Authentication Method',
          'zh-CN': 'UserPass 身份验证方法'
        },
        slug: 'UserPass身份验证方法',
        category: 'familymanagement',
        date: '2020-2-4',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'English Sayings - Collection Edition',
          'zh-CN': '英语名言 - 收藏版'
        },
        slug: '英语名言-收藏版',
        category: 'wiki',
        date: '2020-3-1',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': '18 Things 33 Taught Me',
          'zh-CN': '33岁教给我的18件事'
        },
        slug: '33岁教给我的18件事',
        category: 'bookreading',
        date: '2020-4-1',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'Rich habits',
          'zh-CN': '富有的习惯'
        },
        slug: '富有的习惯',
        category: 'bookreading',
        date: '2020-4-2',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'Wharton‘s most popular negotiation class',
          'zh-CN': '沃顿商学院最受欢迎的谈判课'
        },
        slug: '沃顿商学院最受欢迎的谈判课',
        category: 'bookreading',
        date: '2020-4-3',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'Bretton Woods System',
          'zh-CN': '布雷顿森林体系'
        },
        slug: '布雷顿森林体系',
        category: 'finance',
        date: '2020-5-1',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'Jamaica System',
          'zh-CN': '牙买加体系'
        },
        slug: '牙买加体系',
        category: 'finance',
        date: '2020-5-2',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'Scale and management of foreign exchange reserve',
          'zh-CN': '外汇储备规模与管理'
        },
        slug: '外汇储备规模与管理',
        category: 'finance',
        date: '2020-5-3',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'Political Economy Test Points',
          'zh-CN': '[政治经济学] 考点'
        },
        slug: '[政治经济学]-考点',
        category: 'finance',
        date: '2021-1-4',
        titleless: false,
        commentless: false,
        draft: false
      },
      {
        title: {
          'en-US': 'Political Economy Introduction',
          'zh-CN': '[政治经济学] 导论'
        },
        slug: '[政治经济学]-导论',
        category: 'finance',
        date: '2021-1-6',
        titleless: false,
        commentless: false,
        draft: false
      },

    ]
  }
}
