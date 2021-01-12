/* 不要更改全局变量名 */
const database = {
  config: {
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
        'en-US': 'Plan',
        'zh-CN': '计划'
      },
      type: 'page',
      path: '/page/yearly-plan'
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
  ],

  categories: [
    {
      title: {
        'en-US': 'Sound Design',
        'zh-CN': '声音设计'
      },
      summary: {
        'en-US': 'The theory of music is combined with the background.',
        'zh-CN': '音乐的理论和背景结合在一起。'
      },
      slug: 'sound-design'
    },
    {
      title: {
        'en-US': 'Wiki',
        'zh-CN': '学习百科'
      },
      summary: {
        'en-US': 'The process of acquiring knowledge and skills by reading, thinking and practicing.',
        'zh-CN': '阅读、思考、实践等获得知识和技能的过程。'
      },
      slug: 'wiki'
    },
    {
      title: {
        'en-US': 'Book',
        'zh-CN': '书籍阅读'
      },
      summary: {
        'en-US': 'Books can increase the knowledge palace of human wisdom and experience.',
        'zh-CN': '书籍能够增长人类智慧和经验的知识殿堂。'
      },
      slug: 'bookreading'
    },
    {
      title: {
        'en-US': 'Finance',
        'zh-CN': '金融学'
      },
      summary: {
        'en-US': 'The economic activity of financing money and monetary capital.',
        'zh-CN': '融通货币和货币资金的经济活动。'
      },
      slug: 'finance'
    },
    {
      title: {
        'en-US': 'Important Records',
        'zh-CN': '重要记录'
      },
      summary: {
        'en-US': 'Record the important things in life.',
        'zh-CN': '记录生命中的重要事物。'
      },
      slug: 'important-records'
    },
    {
      title: {
        'en-US': 'Family',
        'zh-CN': '家族管理'
      },
      summary: {
        'en-US': 'It is a kind of management mode in which ownership and management rights are integrated.',
        'zh-CN': '所有权与经营权合一的一种管理模式。'
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
      summary: {
        'en-US': 'Family key management',
        'zh-CN': '家族钥匙管理'
      },
      date: '2020-01-01',
      titleless: false, // (可选) `true` 在页面视图中隐藏标题
      commentless: false, // (可选) `true` 禁用页的注释
      draft: false // (可选) `true` 使页面暂时无法访问
    },
    {
      title: {
        'en-US': 'KV SecretEngine Version1',
        'zh-CN': 'KV机密引擎 - 版本1'
      },
      slug: 'KV机密引擎-版本1',
      category: 'familymanagement',
      summary: {
        'en-US': 'The kv secret engine is used to store arbitrary secrets in the physical storage configured for the vault.',
        'zh-CN': 'kv机密引擎用于在为保险库配置的物理存储中存储任意机密。'
      },
      date: '2020-01-02',
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
      summary: {
        'en-US': 'The kv secret engine is used to store arbitrary secrets in the physical storage configured for the vault.',
        'zh-CN': 'kv机密引擎用于在为保险库配置的物理存储中存储任意机密。'
      },
      date: '2020-01-03',
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
      summary: {
        'en-US': 'The kv secret engine is used to store arbitrary secrets in the physical storage configured for the vault. This backend can run in one of two modes. It can be a general key-value store that stores a value for the key. You can enable version control and store a configurable number of versions for each key.',
        'zh-CN': 'kv机密引擎用于在为保险库配置的物理存储中存储任意机密。这个后端可以以两种模式之一运行。它可以是为键存储一个值的通用键值存储区。可以启用版本控制，并为每个密钥存储可配置的版本数。'
      },
      date: '2020-02-01',
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
      summary: {
        'en-US': 'The TOTP confidential engine generates time-based credentials according to the TOTP standard. The secret engine can also be used to generate a new key and verify the password generated by the key.',
        'zh-CN': 'TOTP机密引擎根据TOTP标准生成基于时间的凭证。机密引擎还可以用来生成一个新的密钥，并验证由该密钥生成的密码。'
      },
      date: '2020-02-02',
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
      summary: {
        'en-US': 'The Transit confidential engine handles the encryption function of data in transit. The security library does not store data sent to the confidential engine. It can also be viewed as "encryption as a service" or "decryption as a service." The transit secret engine can also sign and verify data; generate hash and hmac of data; and act as a source of random bytes.',
        'zh-CN': 'Transit机密引擎处理传输中数据的加密功能。安全库不存储发送到机密引擎的数据。它也可以被视为“加密即服务”或“解密即服务”。transit机密引擎还可以对数据进行签名和验证；生成数据的哈希和hmac；并充当随机字节的源。'
      },
      date: '2020-02-03',
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
      summary: {
        'en-US': 'The userpass authentication method allows users to use a combination of username and password to authenticate to the security library.',
        'zh-CN': 'userpass身份验证方法允许用户使用用户名和密码组合对安全库进行身份验证。'
      },
      date: '2020-02-04',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'English Sayings · Collection Edition',
        'zh-CN': '英语名言·收藏版'
      },
      slug: '英语名言·收藏版',
      category: 'wiki',
      summary: {
        'en-US': 'English quotes, long-term collection.',
        'zh-CN': '英语名言，长期收藏'
      },
      date: '2020-03-01',
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
      summary: {
        'en-US': 'No hurry is the best life; being yourself is a path. Write to my 33-year-old.',
        'zh-CN': '不紧不慢就是最好的生活；做好自己就是一条路径。写给自己的33岁。'
      },
      date: '2020-04-01',
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
      summary: {
        'en-US': 'This book introduces some of the habits of self-discipline that rich people have, and helps us examine our own work and living habits to better close the gap.',
        'zh-CN': '本书介绍了一些富人会拥有的自律的习惯，助我们检视自身的工作生活习惯，以更好地缩短差距。'
      },
      date: '2020-04-02',
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
      summary: {
        'en-US': 'Interpretation of Professor Diamonds "The Most Popular Negotiation Class at The Wharton School".',
        'zh-CN': '戴蒙德教授的《沃顿商学院最受欢迎的谈判课》的解读。'
      },
      date: '2020-04-03',
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
      category: 'wiki',
      summary: {
        'en-US': 'The Bretton Woods system means that the U.S. dollar is linked to gold, and one ounce of gold is equal to 35 U.S. dollars; the currencies of various countries are linked to the U.S. dollar, and the currencies of other countries must establish a fixed price relationship with the U.S. dollar. It is a fixed exchange rate system.',
        'zh-CN': '布雷顿森林体系即美元与黄金挂钩，一盎司黄金等于35美元；各国货币与美元挂钩，其他国家的货币必须与美元建立固定的比价关系，它是一种固定汇率制度。'
      },
      date: '2020-05-01',
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
      category: 'wiki',
      summary: {
        'en-US': 'In 1976, the IMF "Interim Committee on the International Monetary System" convened a meeting in Jamaica and reached the "Jamaica Agreement." In April of the same year, the IMF Council passed the second amendment of the IMF, thus forming a new pattern of international currency relations.',
        'zh-CN': '1976年，IMF“国际货币制度临时委员会”在牙买加召开会议，并达成《牙买加协议》。同年4月，IMF理事会通过了IMF第二次修正案，从而形成了国际货币关系的新格局。'
      },
      date: '2020-05-02',
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
      category: 'wiki',
      summary: {
        'en-US': 'Maintaining a certain scale of foreign exchange reserves is an important means to regulate foreign exchange receipts and expenditures and the total market supply and demand. But foreign exchange reserves are not as much as possible.',
        'zh-CN': '保持一定规模的外汇储备是调节外汇收支和市场总供求的重要手段。但是外汇储备并非越多越好。'
      },
      date: '2020-05-03',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Political Economy - Test Points',
        'zh-CN': '政治经济学·考点'
      },
      slug: '政治经济学·考点',
      category: 'finance',
      summary: {
        'en-US': 'In the West, the first to use the term "economy" was the ancient Greek thinker Xenophon. The French mercantilist Ann de Montclair first used the term "political economy", political economy 17 Produced as an independent subject in the middle of the century.',
        'zh-CN': '在西方，最先使用“经济”一词的是古希腊思想家色诺芬，法国重商主义者安·德·蒙克莱田首次便用了“政治经济学”的提法，政治经济学17世纪中叶作为独立学科产生。'
      },
      date: '2021-01-04',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Political Economy - Introduction',
        'zh-CN': '政治经济学·导论'
      },
      slug: '政治经济学·导论',
      category: 'finance',
      summary: {
        'en-US': 'Political economy is a science that studies economic activities, economic relations, and economic laws of a certain social production, distribution, exchange, and consumption.',
        'zh-CN': '政治经济学是研究一定社会生产、分配、交换、消费等经济活动、经济关系、经济规律的科学。'
      },
      date: '2021-01-05',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'The universal template of English composition for degree',
        'zh-CN': '学位英语作文万能模板'
      },
      slug: '学位英语作文万能模板',
      category: 'finance',
      summary: {
        'en-US': 'The following is the review materials of degree English, the necessary template of degree English writing.',
        'zh-CN': '以下是学位英语复习资料,学位英语写作必备万能模板。'
      },
      date: '2021-01-06',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'DualChannel StereoJoint Stereo',
        'zh-CN': '双通道·立体声联合·立体声'
      },
      slug: '双通道·立体声联合·立体声',
      category: 'sound-design',
      summary: {
        'en-US': 'According to experience, when making general MP3 songs, it is more appropriate to use 128kbit/s bit rate and joint stereo mode.',
        'zh-CN': '根据经验，在制作一般的MP3歌曲时，使用128kbit/s的位率和联合立体声模式比较合适。'
      },
      date: '2021-01-01',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': '12 basic steps of Waves vocal mixing',
        'zh-CN': 'Waves人声混音的12个基本步骤'
      },
      slug: 'Waves人声混音的12个基本步骤',
      category: 'sound-design',
      summary: {
        'en-US': 'Follow these 12 steps to make the original dry sound more shiny and textured. Make sure you don`t miss any steps in the process of vocal mixing from editing, EQ to compression.',
        'zh-CN': '按照这12个步骤将原始干声变得更具光泽与质感。 请确保你不会错过人声混音过程中从编辑、EQ到压缩的任何步骤。'
      },
      date: '2021-01-02',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Arrange rich chords',
        'zh-CN': '编配丰富的和弦'
      },
      slug: '编配丰富的和弦',
      category: 'sound-design',
      summary: {
        'en-US': 'The same melody will have different feelings under different chord arrangements. Using the chords well will make the whole tune very nice. If you don`t use them well, it will feel like nursery rhymes.',
        'zh-CN': '同样一个旋律，在不同的和弦编配下，会呈现不同的感觉。和弦用得好会很让整个曲子变得非常好听，用不好的话，会感觉像儿歌的。'
      },
      date: '2021-01-03',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Financial hot spots',
        'zh-CN': '金融热点'
      },
      slug: '金融热点',
      category: 'wiki',
      summary: {
        'en-US': 'Financial hot spots are generally hot events in the last year (March November)',
        'zh-CN': '金融热点一般是在最近1年热点事件(3月-11月)'
      },
      date: '2021-01-07',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Libra digital currency',
        'zh-CN': 'Libra数字货币'
      },
      slug: 'Libra数字货币',
      category: 'wiki',
      summary: {
        'en-US': 'It`s a digital currency issued by Facebook, supported by blockchain technology, managed by a special association (the Library Association), and encrypted.',
        'zh-CN': 'Facebook主导发行的，以区块链技术支持的，由专门的协会管理(libra协会)，加密的数字货币。'
      },
      date: '2021-01-08',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Loan Prime Rate',
        'zh-CN': '贷款市场报价利率'
      },
      slug: '贷款市场报价利率',
      category: 'wiki',
      summary: {
        'en-US': 'Loan market quotation rate is determined by a representative quotation line.',
        'zh-CN': '贷款市场报价利率是由具有代表性的报价行。'
      },
      date: '2021-01-09',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Postgraduate enrollment of Sun Yat sen University',
        'zh-CN': '中山大学研究生招生介绍'
      },
      slug: '中山大学研究生招生介绍',
      category: 'finance',
      summary: {
        'en-US': 'Lingnan (University) College of Sun Yat sen University is subordinate to Sun Yat sen University. It adheres to Dr. Sun Yat Sen`s motto of "erudition, interrogation, careful thinking, discernment and practice".',
        'zh-CN': '中山大学岭南（大学）学院隶属于中山大学，秉承孙中山先生“博学、审问、慎思、明辨、笃行”的校训。'
      },
      date: '2021-01-10',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Triple Mental Model',
        'zh-CN': '三重心智模型'
      },
      slug: '三重心智模型',
      category: 'wiki',
      summary: {
        'en-US': 'We humans are irrational animals. The special thing is that we have the ability to believe in the weird things that our brains conceive.',
        'zh-CN': '我们人类是不理性的动物，特别之处在于我们有能力去相信自己大脑构思出来的稀奇古怪的东西。'
      },
      date: '2021-01-11',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Analysis of audio test parameters',
        'zh-CN': '音频测试参数解析'
      },
      slug: '音频测试参数解析',
      category: 'sound-design',
      summary: {
        'en-US': 'The frequency characteristic of sound system is usually described by the frequency response curve with the ordinate of decibel scale representing power and the abscissa of logarithmic scale representing frequency.',
        'zh-CN': '音响系统的频率特性常用分贝刻度的纵坐标表示功率和用对数刻度的横坐标表示频率的频率响应曲线来描述。'
      },
      date: '2021-01-12',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'System Thinking·From Restricted View to God`s Perspective',
        'zh-CN': '思维模型·系统思维·从管窥到上帝视角'
      },
      slug: '思维模型·系统思维·从管窥到上帝视角',
      category: 'bookreading',
      summary: {
        'en-US': 'The system is an organic whole that is composed of several elements that are interconnected and interacted with each other, which is expressed as a new function.',
        'zh-CN': '系统是由相互联系、相互作用的若干要素组成的表现为新功能的有机整体。'
      },
      date: '2021-01-13',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'International Finance - Single Choice',
        'zh-CN': '国际金融学·单选题'
      },
      slug: '国际金融学·单选题',
      category: 'finance',
      summary: {
        'en-US': 'International Finance - Single Choice',
        'zh-CN': '国际金融学·单选题'
      },
      date: '2020-09-01',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'International Finance - Multiple Choice',
        'zh-CN': '国际金融学·多选题'
      },
      slug: '国际金融学·多选题',
      category: 'finance',
      summary: {
        'en-US': 'International Finance - Multiple Choice',
        'zh-CN': '国际金融学·多选题'
      },
      date: '2020-09-02',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'International Finance - True or False',
        'zh-CN': '国际金融学·判断题'
      },
      slug: '国际金融学·判断题',
      category: 'finance',
      summary: {
        'en-US': 'International Finance - True or False',
        'zh-CN': '国际金融学·判断题'
      },
      date: '2020-09-03',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'International Finance - Short Answer',
        'zh-CN': '国际金融学·简答题'
      },
      slug: '国际金融学·简答题',
      category: 'finance',
      summary: {
        'en-US': 'International Finance - Short Answer',
        'zh-CN': '国际金融学·简答题'
      },
      date: '2020-09-04',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'International Finance - Essay',
        'zh-CN': '国际金融学·论述题'
      },
      slug: '国际金融学·论述题',
      category: 'finance',
      summary: {
        'en-US': 'International Finance - Essay',
        'zh-CN': '国际金融学·论述题'
      },
      date: '2020-09-05',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Bank Credit Management·1·Introduction',
        'zh-CN': '银行信贷管理学·1·绪论'
      },
      slug: '银行信贷管理学·1·绪论',
      category: 'finance',
      summary: {
        'en-US': 'Bank Credit Management·1·Introduction',
        'zh-CN': '银行信贷管理学·1·绪论'
      },
      date: '2020-10-01',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Bank Credit Management·2·Bank Deposit Management',
        'zh-CN': '银行信贷管理学·2·银行存款管理'
      },
      slug: '银行信贷管理学·2·银行存款管理',
      category: 'finance',
      summary: {
        'en-US': 'Bank Credit Management·2·Bank Deposit Management',
        'zh-CN': '银行信贷管理学·2·银行存款管理'
      },
      date: '2020-10-02',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Bank Credit Management·3·Bank Non-deposit Fund Management',
        'zh-CN': '银行信贷管理学·3·银行非存款资金管理'
      },
      slug: '银行信贷管理学·3·银行非存款资金管理',
      category: 'finance',
      summary: {
        'en-US': 'Bank Credit Management·3·Bank Non-deposit Fund Management',
        'zh-CN': '银行信贷管理学·3·银行非存款资金管理'
      },
      date: '2020-10-03',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Bank Credit Management·4·General Bank Loan Management',
        'zh-CN': '银行信贷管理学·4·银行贷款一般管理'
      },
      slug: '银行信贷管理学·4·银行贷款一般管理',
      category: 'finance',
      summary: {
        'en-US': 'Bank Credit Management·4·General Bank Loan Management',
        'zh-CN': '银行信贷管理学·4·银行贷款一般管理'
      },
      date: '2020-10-04',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Bank Credit Management·5·Bank Loan Management System',
        'zh-CN': '银行信贷管理学·5·银行贷款管理制度'
      },
      slug: '银行信贷管理学·5·银行贷款管理制度',
      category: 'finance',
      summary: {
        'en-US': 'Bank Credit Management·5·Bank Loan Management System',
        'zh-CN': '银行信贷管理学·5·银行贷款管理制度'
      },
      date: '2020-10-05',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Bank Credit Management·6·Analysis of Bank Loan Credit',
        'zh-CN': '银行信贷管理学·6·银行贷款信用分析'
      },
      slug: '银行信贷管理学·6·银行贷款信用分析',
      category: 'finance',
      summary: {
        'en-US': 'Bank Credit Management·6·Analysis of Bank Loan Credit',
        'zh-CN': '银行信贷管理学·6·银行贷款信用分析'
      },
      date: '2020-10-06',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Bank Credit Management·7·Bank Loan Guarantee Management',
        'zh-CN': '银行信贷管理学·7·银行贷款担保管理'
      },
      slug: '银行信贷管理学·7·银行贷款担保管理',
      category: 'finance',
      summary: {
        'en-US': 'Bank Credit Management·7·Bank Loan Guarantee Management',
        'zh-CN': '银行信贷管理学·7·银行贷款担保管理'
      },
      date: '2020-10-07',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Bank Credit Management·8·Bank Short-term Loan Management',
        'zh-CN': '银行信贷管理学·8·银行短期贷款管理'
      },
      slug: '银行信贷管理学·8·银行短期贷款管理',
      category: 'finance',
      summary: {
        'en-US': 'Bank Credit Management·8·Bank Short-term Loan Management',
        'zh-CN': '银行信贷管理学·8·银行短期贷款管理'
      },
      date: '2020-10-08',
      titleless: false,
      commentless: false,
      draft: false
    },
    {
      title: {
        'en-US': 'Bank Credit Management·9·Bank Long-term Loan Management',
        'zh-CN': '银行信贷管理学·9·银行中长期贷款管理'
      },
      slug: '银行信贷管理学·9·银行中长期贷款管理',
      category: 'finance',
      summary: {
        'en-US': 'Bank Credit Management·9·Bank Long-term Loan Management',
        'zh-CN': '银行信贷管理学·9·银行中长期贷款管理'
      },
      date: '2020-10-09',
      titleless: false,
      commentless: false,
      draft: false
    },

  ]
}
export default database