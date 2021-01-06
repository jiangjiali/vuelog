/* 不要更改全局变量名 */
window.Vuelog = {
  database: {
    config: {
      // 网站名称将显示在浏览器选项卡和网站标题中。
      brand: {
        'en-US': 'Know It',
        'zh-CN': '知之简史'
      },

      // 把网站品牌放在当前页面后面 `document.title`.
      brandTrailing: false,

      // 显示在站点标题中品牌旁边的图像。
      logo: 'logo.png',

      // 为站点提供服务的域根目录的路径，以斜杠（`/`）开头和结尾。
      // 如果您的站点位于域根目录下，请设置为“'/”。
      base: '/',

      // 访问“/”时要路由到的路径。
      // 根据需要设置为`/home`、`/blog`或有效路径。
      homePath: '/home',

      // Footer在“homePath”上是否可见。
      homeFooter: false,

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
    },

    navigation: [
      {
        label: {
          'en-US': 'Home',
          'zh-CN': '首页'
        },
        type: 'page',
        path: '/home'
      },
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
        exclude: true, // (可选) `true` 从存档视图中排除该页
        titleless: false, // (可选) `true` 在页面视图中隐藏标题
        commentless: false, // (可选) `true` 禁用页的注释
        draft: false // (可选) `true` 使页面暂时无法访问
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
        summary: '家族钥匙管理',
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
        summary: 'kv机密引擎用于在为保险库配置的物理存储中存储任意机密。',
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
        summary: 'kv机密引擎用于在为保险库配置的物理存储中存储任意机密。',
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
        summary: 'kv机密引擎用于在为保险库配置的物理存储中存储任意机密。这个后端可以以两种模式之一运行。它可以是为键存储一个值的通用键值存储区。可以启用版本控制，并为每个密钥存储可配置的版本数。',
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
        summary: 'TOTP机密引擎根据TOTP标准生成基于时间的凭证。机密引擎还可以用来生成一个新的密钥，并验证由该密钥生成的密码。',
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
        slug: 'Transit机密引擎',
        category: 'familymanagement',
        summary: 'Transit机密引擎处理传输中数据的加密功能。安全库不存储发送到机密引擎的数据。它也可以被视为“加密即服务”或“解密即服务”。transit机密引擎还可以对数据进行签名和验证；生成数据的哈希和hmac；并充当随机字节的源。',
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
        summary: 'userpass身份验证方法允许用户使用用户名和密码组合对安全库进行身份验证。',
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
        summary: '英语名言，长期收藏',
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
        summary: '不紧不慢就是最好的生活；做好自己就是一条路径。写给自己的33岁。',
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
        summary: '本书介绍了一些富人会拥有的自律的习惯，助我们检视自身的工作生活习惯，以更好地缩短差距。',
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
        summary: '戴蒙德教授的《沃顿商学院最受欢迎的谈判课》的解读。',
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
        summary: '布雷顿森林体系即美元与黄金挂钩，一盎司黄金等于35美元；各国货币与美元挂钩，其他国家的货币必须与美元建立固定的比价关系，它是一种固定汇率制度。',
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
        summary: '1976年，IMF“国际货币制度临时委员会”在牙买加召开会议，并达成《牙买加协议》。同年4月，IMF理事会通过了IMF第二次修正案，从而形成了国际货币关系的新格局。',
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
        summary: '保持一定规模的外汇储备是调节外汇收支和市场总供求的重要手段。但是外汇储备并非越多越好。',
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
        summary: '在西方，最先使用“经济”一词的是古希腊思想家色诺芬，法国重商主义者安·德·蒙克莱田首次便用了“政治经济学”的提法，政治经济学17世纪中叶作为独立学科产生。',
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
        summary: '政治经济学是研究一定社会生产、分配、交换、消费等经济活动、经济关系、经济规律的科学。',
        date: '2021-1-6',
        titleless: false,
        commentless: false,
        draft: false
      },

    ]
  }
}
