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

      // Fill in the shortname to integrate Disqus with your blog.
      disqusShortname: '',

      // Fill in the uid to integrate LiveRe with your blog.
      livereUid: '',

      // Options for marked, see https://github.com/chjj/marked#options-1 for detail
      markedOptions: {}
    },

    navigation: [
      {
        label: {
          'en-US': 'About',
          'zh-CN': '关于'
        },
        type: 'page',
        path: '/page/about'
      },
      {
        label: {
          'en-US': 'Blog',
          'zh-CN': '博客'
        },
        type: 'archive',
        path: '/archive'
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
          'en-US': 'Family',
          'zh-CN': '家族管理'
        },
        slug: 'familymanagement'
      },
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
        date: '2020-01-24',
        titleless: false,   // (OPTIONAL) `true` to hide the title in page view
        commentless: false, // (OPTIONAL) `true` to disable comments for the page
        draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
      },
      {
        title: {
          'en-US': 'KV SecretEngine Version1',
          'zh-CN': 'KV机密引擎 - 版本1'
        },
        slug: 'KV机密引擎-版本1',
        category: 'familymanagement',
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
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
        date: '2020-10-20',
        titleless: false,
        commentless: false,
        draft: false
      },

    ]
  }
}
