        const FIXED_CATEGORIES = [
// أضف هذا الكود في مصفوفة FIXED_CATEGORIES:
                // استخدم الروابط الجديدة للشعارات الأصلية:

                // أضف كاتيجوري Steam في مصفوفة FIXED_CATEGORIES:
                // أضف كاتيجوري iTunes Gift Cards بأيقونة Font Awesome:


{
    id: "free_fire",

    label: "Free Fire",

    icon: "https://seeklogo.com/vector-logo/371944/garena", // شعار Garena (Free Fire)

    keys: [
        "free fire",
        "فري فاير",
        "ff",
        "freefire",
        "جواهر فري فاير",
        "شحن فري فاير",
        "FreeFire",
        "Freefire",
        "العضوية",
        "diamonds"
    ],

    singleAccount: true, // ⬅️ الشحن يتم على حساب واحد

    description: "🔥 شحن جواهر Free Fire – شحن مباشر وآمن", // وصف الخدمة

    subGroups: [
        {
            id: "diamonds",
            label: "الجواهر",
            keys: ["diamond", "diamonds", "جواهر", "جوهرة"]
        },
        {
            id: "membership",
            label: "العضويات",
            keys: ["membership", "weekly", "monthly", "العضوية", "الاسبوعية", "الشهرية"]
        },
        {
            id: "codes",
            label: "أكواد",
            keys: ["code", "redeem", "كود", "رمز"]
        }
    ]
},
                
                
                
                {
    id: "blood_strike", 
    label: "Blood Strike", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/counter-strike.svg", // شعار Blood Strike الرسمي
    keys: ["blood strike", "بلود سترايك", "بلد سترايك", "شحن بلود سترايك", "جواهر بلود سترايك", "gold blood strike", "شحن جولد"],
    singleAccount: true, // شحن كميات (جواهر/جولد)، مش حساب واحد
    description: "🔫 شحن جواهر وجولد في Blood Strike - لعبة باتل رويال سريعة وممتعة",
    subGroups: [
        { id: "diamonds_gold", label: "شحن جواهر وجولد", keys: ["diamonds", "gold", "جواهر", "جولد", "شحن", "top up", "blood strike gold"] },
        { id: "mena", label: "سيرفر مينا (MENA)", keys: ["mena", "مينا", "middle east", "عربي"] },
        { id: "global", label: "سيرفر عالمي (Global)", keys: ["global", "عالمي", "worldwide"] }
    ]
},
                
                {

    id: "itunes_gift_cards", 

    label: "iTunes Gift Cards", 

    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apple.svg", // شعار Apple الرسمي

    keys: ["itunes", "ايتونز", "itunes card", "itunes gift", "بطاقة ايتونز", "بطاقة itunes", "apple gift card"],

    singleAccount: true,

    description: "🎁 بطاقات هدايا iTunes - شحن رصيد متجر Apple",

    subGroups: [

        { id: "gift_cards", label: "بطاقات هدايا", keys: ["gift card", "بطاقة", "card", "code", "voucher"] },

        { id: "codes", label: "أكواد", keys: ["code", "كود", "redeem", "شحن"] },

        { id: "balance", label: "رصيد", keys: ["balance", "رصيد", "funds", "credit"] }

    ]

},

{

    id: "steam", 

    label: "Steam", 

    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/steam.svg", // شعار Steam الرسمي

    keys: ["steam", "ستيم", "steam wallet", "steam card", "بطاقة ستيم", "رصيد ستيم"],

    singleAccount: true, // ⬅️ هذه الخدمات تباع بالرصيد وليست اشتراكات

    description: "🎮 رصيد Steam وبطاقات الهدايا - شحن محفظة ستيم", // ⬅️ وصف للخدمة

    subGroups: [

        { id: "wallet", label: "رصيد المحفظة", keys: ["wallet", "رصيد", "balance", "funds"] },

        { id: "gift_cards", label: "بطاقات هدايا", keys: ["gift card", "بطاقة", "card", "code"] },

        { id: "games", label: "ألعاب", keys: ["game", "لعبة", "games", "key"] }

    ]

},
{

    id: "netflix", 

    label: "Netflix", 

    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netflix.svg", // شعار Netflix الرسمي

    keys: ["netflix", "نيتفليكس", "netflix subscription", "اشتراك نيتفليكس"],

    singleAccount: true,

    description: "🎬 اشتراك Netflix Premium - مشاهدة غير محدودة لأفضل الأفلام والمسلسلات",

    subGroups: [

        { id: "subscription", label: "اشتراكات", keys: ["netflix", "اشتراك", "subscription", "premium"] }

    ]

},

{

    id: "shahid_vip", 

    label: "Shahid VIP", 

    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/primevideo.svg", // شعار Shahid الرسمي

    keys: ["shahid", "شاهد", "shahid vip", "شاهد vip", "شاهد نت"],

    singleAccount: true,

    description: "📺 اشتراك Shahid VIP - أفضل المحتوى العربي والحصري",

    subGroups: [

        { id: "subscription", label: "اشتراكات", keys: ["shahid", "vip", "اشتراك", "subscription"] }

    ]

},

{

    id: "canva_pro", 

    label: "Canva Pro", 

    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg", // شعار Canva الرسمي

    keys: ["canva pro", "كانفا برو", "canva subscription", "اشتراك كانفا"],

    singleAccount: true,

    description: "🎨 اشتراك Canva Pro - تصميم جرافيك محترف مع مكتبة موارد غير محدودة",

    subGroups: [

        { id: "subscription", label: "اشتراكات", keys: ["canva", "pro", "اشتراك", "subscription"] }

    ]

},

{

    id: "gemini_pro", 

    label: "Gemini Pro", 

    icon: "fa-solid fa-robot",

    keys: ["gemini", "gemini pro", "جيميني", "جيميني برو"],

    singleAccount: true, // ⬅️ هذه الخاصية الجديدة

    subGroups: [

        { id: "subscription", label: "اشتراكات", keys: ["gemini", "اشتراك", "subscription"] }

    ]

},
                
       
                {

id: "telegram",

label: "تيليغرام",

icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg", // شعار Telegram الرسمي

keys: ["telegram", "telegrame", "تيليغرام", "تلغرام", "تليغرام"],

subGroups: [

{

id: "members",

label: "أعضاء",

keys: ["members", "member", "عضو", "أعضاء", "مشتركين", "subscribers", "followers", "follower", "متابعين", "متابع"]

},

{

id: "views",

label: "مشاهدات",

keys: ["views", "view", "مشاهدة", "مشاهدات", "viewers", "viewer"]

},

{

id: "reactions",

label: "تفاعلات",

keys: ["reactions", "reaction", "تفاعل", "تفاعلات", "likes", "like", "لايكات", "لايك", "اعجابات", "اعجاب"]

},

{

id: "comments",

label: "تعليقات",

keys: ["comments", "comment", "تعليق", "تعليقات", "replies", "reply", "ردود", "رد"]

},

{

id: "stickers",

label: "ستيكرات",

keys: ["stickers", "sticker", "ستيكر", "ستيكرات"]

}

]

}  ,       
                { 

    id: "whatsapp", 

    label: "WhatsApp", 

    icon: "fa-brands fa-whatsapp", 

    keys: ["whatsapp","واتساب","وتساب","whats app"],

    subGroups: [

      

      { id: "members", label: "أعضاء", keys: ["members","member","عضو","أعضاء","مشتركين"] },

      { id: "reactions", label: "تفاعلات", keys: ["reactions","reaction","تفاعل","تفاعلات"] },

      { id: "messages", label: "رسائل", keys: ["messages","message","رسالة","رسائل"] }

    ]

  },
                
                { 
    id: "chatgpt", 
    label: "ChatGPT", 
    icon: "fa-solid fa-robot", 
    singleAccount: true,
    keys: ["GPT","chat gpt","gpt","ChatGPT","شات جبت","شات جي بي تي","1410 - اشتراك ChatGPT بلس | اشتراك لمده 3 اشهر -حساب مشترك - $6.00 لكل 1"],
    subGroups: [
      
      { id: "plus", label: "اشتراك Plus", keys: ["Chat Gpt plus🔥","اشتراك","subscription"] }
    ]
  },
  { 
    id: "tiktok", 
    label: "TikTok", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tiktok.svg", // شعار TikTok الرسمي 
    keys: ["tiktok","تيك توك"],
    subGroups: [
      { id: "views", label: "مشاهدات", keys: ["views","مشاهدة"] },
      { id: "followers", label: "متابعين", keys: ["follow","متابعين"] },
      { id: "likes", label: "لايكات", keys: ["likes","like"] },
      { id: "comments", label: "تعليقات", keys: ["comments","تعليق"] },
      { id: "coins", label: "كوينز", keys: ["coin","coins","كوينز"] }
    ]
  },
  { 
    id: "instagram", 
    label: "Instagram", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg", // شعار Instagram الرسمي 
    keys: ["instagram","انستغرام","ig ","انستقرام","انستاقرام"],
    subGroups: [
      { id: "followers", label: "متابعين", keys: ["followers","متابع","متابعين"] },
      { id: "likes", label: "لايكات", keys: ["likes","like","لايكات","لايك"] },
      { id: "views", label: "مشاهدات", keys: ["views","مشاهدة","مشاهدات"] },
      { id: "comments", label: "تعليقات", keys: ["comments","تعليق","تعليقات"] },
      { id: "stories", label: "ستوري", keys: ["story","stories","ستوري"] }
    ]
  },
    { 
    id: "youtube", 
    label: "YouTube", 
    icon: "fa-brands fa-youtube", 
    keys: ["youtube","يوتيب","YT"],
    subGroups: [
      { id: "followers", label: "متابعين", keys: ["subscribe","متابع"] },
      { id: "likes", label: "لايكات", keys: ["likes","like"] },
      { id: "views", label: "مشاهدات", keys: ["مشاهدات","views","مشاهدات","مشاهدات يوتيوب - سوبر مكس | مشاهدات عربية من الإعلانات |"] },
      { id: "comments", label: "تعليقات", keys: ["comments","تعليق"] },
      { id: "stories", label: "ستوري", keys: ["story","stories","ستوري"] }
    ]
  },
  { 
    id: "facebook", 
    label: "Facebook", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg", // شعار Facebook الرسمي 
    keys: ["facebook","فايسبوك","fb","فيس بوك","فايس بوك","فيسبوك","لايكات على تعليق فيسبوك"],
    subGroups: [
      { id: "followers", label: "متابعين", keys: ["followers","متابع","متابعين"] },
      { id: "likes", label: "لايكات على منشور", keys: ["likes","like","لايكات","لايك","اعجاب","اعجابات"] },
      { id: "comment likes", label: "لايكات على تعليق", keys: ["comment likes","comment like","لايكات على تعليق فيسبوك"] },
      { id: "views", label: "مشاهدات", keys: ["views","مشاهدة","مشاهدات"] },
      { id: "comments", label: "تعليقات", keys: ["comments","تعليق"] },
      { id: "stories", label: "ستوري", keys: ["story","stories","ستوري"] }
    ]
  },
  { 
    id: "canva", 
    label: "Canva Pro", 
    singleAccount: true,
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg", // شعار Canva الرسمي 
    keys: ["canva","كانفا","canva pro","كانفا برو"],
    subGroups: [
      { id: "accounts", label: "حسابات", keys: ["account","حساب"] },
      { id: "subscription", label: "اشتراكات", keys: ["اشتراك","subscription","pro"] },
      { id: "teams", label: "فرق عمل", keys: ["team","فرق","teams"] }
    ]
  },
  // الفئات الجديدة المضافة
  { 
    id: "instagram", 
    label: "Instagram likes", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg", // شعار Instagram الرسمي 
    keys: ["instagram likes","انستغرام لايك","ig likes"],
    subGroups: [{ id: "accounts", label: "زيارات لموقعك او مدنتك 💪💯 حقيقية", keys: ["Instagram like","Like Instagram"] },]
  },
  { 
    id: "google_visitors", 
    label: "Google Visitors", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg", // شعار Google الرسمي 
    keys: ["google visitors","زوار جوجل","google visitor"],
    subGroups: [
      { id: "accounts", label: " زيارات لموقعك او مدنتك 💪💯 حقيقية", keys: ["Google Visitor","visitor"] },
  ]},
  { 
    id: "kick_services", 
    label: "Kick Services", 
    icon: "fa-solid fa-kick", 
    keys: ["kick services","خدمات كيك","kick"],
    subGroups: []
  },
  { 
    id: "kick_chat_bots", 
    label: "Kick Chat Bots", 
    icon: "fa-solid fa-robot", 
    keys: ["kick chat bots","كيك شات بوت","kick bot"],
    subGroups: []
  },
  { 
    id: "kick_live_views", 
    label: "Kick Live Stream Views", 
    icon: "fa-solid fa-video", 
    keys: ["kick live stream views","مشاهدات كيك لايف","kick live"],
    subGroups: []
  },
  { 
    id: "kwai", 
    label: "Kwai", 
    icon: "fa-solid fa-k", 
    keys: ["kwai","كواي"],
    subGroups: [{ id: "accounts", label: "Kwai Like /", keys: ["Kwai","kwai"] },]
  },
  { 
    id: "likee", 
    label: "Likee", 
    icon: "fa-solid fa-l", 
    keys: ["likee","لايكي"],
    subGroups: [{ id: "accounts", label: "Likee Follow/like/views/", keys: ["Likee","likee"] },]
  },
  { 
    id: "line_voom_followers", 
    label: "Line Voom Followers", 
    icon: "fa-brands fa-line", 
    keys: ["line voom followers","متابعين لاين فوم","line voom"],
    subGroups: []
  },
  { 
    id: "line_voom_react", 
    label: "Line Voom React", 
    icon: "fa-brands fa-line", 
    keys: ["line voom react","تفاعل لاين فوم","line react"],
    subGroups: [{ id: "accounts", label: "زيارات لموقعك او مدنتك 💪💯 حقيقية", keys: ["line","Line"] },]
  },
  { 
    id: "medium", 
    label: "Medium", 
    icon: "fa-brands fa-medium", 
    keys: ["medium","ميديوم"],
    subGroups: []
  },
  { 
    id: "mobile_app_installs", 
    label: "Mobile App Installs", 
    icon: "fa-solid fa-mobile-alt", 
    keys: ["mobile app installs","تحميل تطبيقات","app install"],
    subGroups: [{ id: "accounts", label: "mobile App Install", keys: ["installs","keyword"] },]
  },
  { 
    id: "ok_ru", 
    label: "Ok.ru", 
    icon: "fa-solid fa-o", 
    keys: ["ok.ru","اوكي رو"],
    subGroups: []
  },
  { 
    id: "pinterest", 
    label: "Pinterest", 
    icon: "fa-brands fa-pinterest", 
    keys: ["pinterest","بينتيريست"],
    subGroups: [{ id: "accounts", label: "Pinterest Follow/ Like / Traffic", keys: ["Pinterest","pinterest"] },]
  },
  { 
    id: "quora", 
    label: "Quora", 
    icon: "fa-brands fa-quora", 
    keys: ["quora","كورا"],
    subGroups: []
  },
  { 
    id: "canva_pro", 
    label: "Canva Pro Subscriptions", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg", // شعار Canva الرسمي 
    singleAccount: true,
    keys: ["canva pro subscriptions","كانفا برو","canva pro"],
    subGroups: []
  },
  { 
    id: "seo", 
    label: "SEO ", 
    icon: "fa-solid fa-search", 
    keys: ["seo","سيو","تحسين محركات البحث"],
    
    
    
    subGroups: [
      { id: "followers", label: "تحسين محركات البحث Seo 🔥⚡💯💪", keys: ["Basic","silver","platinum","Gold"] },

    ]
  },
  { 
    id: "backlink", 
    label: "Backlink[SEO]", 
    icon: "fa-solid fa-link", 
    keys: ["backlink","باك لينك","روابط خلفية"],
    subGroups: []
  },
  { 
    id: "coinmarketcap", 
    label: "CoinMarketCap", 
    icon: "fa-solid fa-coins", 
    keys: ["coinmarketcap","كوين ماركت كاب","عملات رقمية"],
    subGroups: []
  },
  { 
    id: "audiomack", 
    label: "Audiomack", 
    icon: "fa-solid fa-music", 
    keys: ["audiomack","أوديوماك","audio mack"],
    subGroups: []
  },
  { 
    id: "bluesky", 
    label: "BlueSky", 
    icon: "fa-solid fa-cloud", 
    keys: ["bluesky","بلو سكاي","blue sky"],
    subGroups: []
  },
  { 
    id: "boomplay", 
    label: "BoomPlay", 
    icon: "fa-solid fa-play", 
    keys: ["boomplay","بوم بلاي","boom play"],
    subGroups: []
  },
  { 
    id: "bigo", 
    label: "Bigo", 
    icon: "fa-solid fa-b", 
    keys: ["bigo","بيغو"],
    subGroups: []
  },
  { 
    id: "clubhouse", 
    label: "Clubhouse", 
    icon: "fa-solid fa-microphone", 
    keys: ["clubhouse","كلوب هاوس","club house"],
    subGroups: []
  },
  { 
    id: "coub", 
    label: "Coub", 
    icon: "fa-solid fa-c", 
    keys: ["coub","كوب"],
    subGroups: []
  },
  { 
    id: "dailymotion", 
    label: "Dailymotion", 
    icon: "fa-brands fa-dailymotion", 
    keys: ["dailymotion","ديلي موشن","daily motion"],
    subGroups: []
  },
  { 
    id: "datpiff", 
    label: "Datpiff", 
    icon: "fa-solid fa-d", 
    keys: ["datpiff","دات بيف","dat piff"],
    subGroups: []
  }
                
  ,{     
    id: "chatgpt",     
    label: "ChatGPT",     
    icon: "fa-solid fa-robot",     
    singleAccount: true,
    keys: ["chat gpt","chatgpt","شات جبت","شات جي بي تي","gpt"],    
    subGroups: [    
      { id: "plus", label: "اشتراك Plus", keys: ["Chat Gpt plus🔥","اشتراك","subscription"] }    
    ]    
  },    
  {     
    id: "tiktok",     
    label: "TikTok",     
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tiktok.svg", // شعار TikTok الرسمي     
    keys: ["tiktok","تيك توك"],    
    subGroups: [    
      { id: "views", label: "مشاهدات", keys: ["views","مشاهدة"] },    
      { id: "followers", label: "متابعين", keys: ["follow","متابعين"] },    
      { id: "likes", label: "لايكات", keys: ["likes","like"] },    
      { id: "comments", label: "تعليقات", keys: ["comments","تعليق"] },    
      { id: "coins", label: "كوينز", keys: ["coin","coins","كوينز"] }    
    ]    
  },    
  {     
    id: "instagram",     
    label: "Instagram",     
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg", // شعار Instagram الرسمي     
    keys: ["instagram","انستغرام","ig "],    
    subGroups: [    
      { id: "followers", label: "متابعين", keys: ["followers","متابع"] },    
      { id: "likes", label: "لايكات", keys: ["likes","like"] },    
      { id: "views", label: "مشاهدات", keys: ["views","مشاهدة"] },    
      { id: "comments", label: "تعليقات", keys: ["comments","تعليق"] },    
      { id: "stories", label: "ستوري", keys: ["story","stories","ستوري"] }    
    ]    
  },    
  {     
    id: "youtube",     
    label: "YouTube",     
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg", // شعار YouTube الرسمي     
    keys: ["youtube","يوتيب","YT","يوتيوب"],    
    subGroups: [    
      { id: "followers", label: "متابعين", keys: ["subscribe","متابع"] },    
      { id: "likes", label: "لايكات", keys: ["likes","like"] },    
      { id: "views", label: "مشاهدات", keys: ["views","مشاهدة","مشاهدات","مشاهدات يوتيوب - سوبر مكس | مشاهدات عربية من الإعلانات |"] },    
      { id: "comments", label: "تعليقات", keys: ["comments","تعليق"] }    
    ]    
  },    
  
  {     
    id: "canva",     
    label: "Canva Pro",     
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg", // شعار Canva الرسمي     
    keys: ["canva","كانفا","canva pro","كانفا برو"],    
    subGroups: [    
      { id: "accounts", label: "حسابات", keys: ["account","حساب"] },    
      { id: "subscription", label: "اشتراكات", keys: ["اشتراك","subscription","pro"] }    
    ]    
  },    
  
  {     
    id: "google_visitors",     
    label: "Google Visitors",     
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg", // شعار Google الرسمي     
    keys: ["google visitors","زوار جوجل","google visitor"],    
    subGroups: [    
      { id: "accounts", label: " زيارات لموقعك او مدنتك 💪💯 حقيقية", keys: ["Google Visitor","visitor"] },    
    ]    
  },    
  {     
    id: "kick_services",     
    label: "Kick Services",     
    icon: "fa-solid fa-kick",     
    keys: ["kick services","خدمات كيك","kick"],    
    subGroups: []    
  },    
  {     
    id: "kick_chat_bots",     
    label: "Kick Chat Bots",     
    icon: "fa-solid fa-robot",     
    keys: ["kick chat bots","كيك شات بوت","kick bot"],    
    subGroups: []    
  },    
  {     
    id: "kick_live_views",     
    label: "Kick Live Stream Views",     
    icon: "fa-solid fa-video",     
    keys: ["kick live stream views","مشاهدات كيك لايف","kick live"],    
    subGroups: []    
  },    
  {     
    id: "kwai",     
    label: "Kwai",     
    icon: "fa-solid fa-k",     
    keys: ["kwai","كواي"],    
    subGroups: [{ id: "accounts", label: "Kwai Like /", keys: ["Kwai","kwai"] }]    
  },    
  {     
    id: "likee",     
    label: "Likee",     
    icon: "fa-solid fa-l",     
    keys: ["likee","لايكي"],    
    subGroups: [{ id: "accounts", label: "Likee Follow/like/views/", keys: ["Likee","likee"] }]    
  },    
  {     
    id: "line_voom_followers",     
    label: "Line Voom Followers",     
    icon: "fa-brands fa-line",     
    keys: ["line voom followers","متابعين لاين فوم","line voom"],    
    subGroups: []    
  },    
  {     
    id: "line_voom_react",     
    label: "Line Voom React",     
    icon: "fa-brands fa-line",     
    keys: ["line voom react","تفاعل لاين فوم","line react"],    
    subGroups: [{ id: "accounts", label: "زيارات لموقعك او مدنتك 💪💯 حقيقية", keys: ["line","Line"] }]    
  },    
  {     
    id: "medium",     
    label: "Medium",     
    icon: "fa-brands fa-medium",     
    keys: ["medium","ميديوم"],    
    subGroups: []    
  },    
  {     
    id: "mobile_app_installs",     
    label: "Mobile App Installs",     
    icon: "fa-solid fa-mobile-alt",     
    keys: ["mobile app installs","تحميل تطبيقات","app install"],    
    subGroups: [{ id: "accounts", label: "mobile App Install", keys: ["installs","keyword"] }]    
  },    
  {     
    id: "ok_ru",     
    label: "Ok.ru",     
    icon: "fa-solid fa-o",     
    keys: ["ok.ru","اوكي رو"],    
    subGroups: []    
  },    
  {     
    id: "pinterest",     
    label: "Pinterest",     
    icon: "fa-brands fa-pinterest",     
    keys: ["pinterest","بينتيريست"],    
    subGroups: [{ id: "accounts", label: "Pinterest Follow/ Like / Traffic", keys: ["Pinterest","pinterest"] }]    
  },    
  {     
    id: "quora",     
    label: "Quora",     
    icon: "fa-brands fa-quora",     
    keys: ["quora","كورا"],    
    subGroups: []    
  },    
  {     
    id: "canva_pro",     
    label: "Canva Pro Subscriptions",     
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg", // شعار Canva الرسمي     
    keys: ["canva pro subscriptions","كانفا برو","canva pro"],    
    subGroups: []    
  },    
  {     
    id: "seo",     
    label: "SEO ",     
    icon: "fa-solid fa-search",     
    keys: ["seo","سيو","تحسين محركات البحث"],    
    subGroups: [    
      { id: "followers", label: "تحسين محركات البحث Seo 🔥⚡💯💪", keys: ["Basic","silver","platinum","Gold"] }    
    ]    
  },    
  {     
    id: "backlink",     
    label: "Backlink[SEO]",     
    icon: "fa-solid fa-link",     
    keys: ["backlink","باك لينك","روابط خلفية"],    
    subGroups: []    
  },    
  {     
    id: "coinmarketcap",     
    label: "CoinMarketCap",     
    icon: "fa-solid fa-coins",     
    keys: ["coinmarketcap","كوين ماركت كاب","عملات رقمية"],    
    subGroups: []    
  },    
  {     
    id: "audiomack",     
    label: "Audiomack",     
    icon: "fa-solid fa-music",     
    keys: ["audiomack","أوديوماك","audio mack"],    
    subGroups: []    
  },    
  {     
    id: "bluesky",     
    label: "BlueSky",     
    icon: "fa-solid fa-cloud",     
    keys: ["bluesky","بلو سكاي","blue sky"],    
    subGroups: []    
  },    
  {     
    id: "boomplay",     
    label: "BoomPlay",     
    icon: "fa-solid fa-play",     
    keys: ["boomplay","بوم بلاي","boom play"],    
    subGroups: []    
  },    
  {     
    id: "bigo",     
    label: "Bigo",     
    icon: "fa-solid fa-b",     
    keys: ["bigo","بيغو"],    
    subGroups: []    
  },    
  {     
    id: "clubhouse",     
    label: "Clubhouse",     
    icon: "fa-solid fa-microphone",     
    keys: ["clubhouse","كلوب هاوس","club house"],    
    subGroups: []    
  },    
  {     
    id: "coub",     
    label: "Coub",     
    icon: "fa-solid fa-c",     
    keys: ["coub","كوب"],    
    subGroups: []    
  },    
  {     
    id: "dailymotion",     
    label: "Dailymotion",     
    icon: "fa-brands fa-dailymotion",     
    keys: ["dailymotion","ديلي موشن","daily motion"],    
    subGroups: []    
  },    
  {     
    id: "datpiff",     
    label: "Datpiff",     
    icon: "fa-solid fa-d",     
    keys: ["datpiff","دات بيف","dat piff"],    
    subGroups: []    
  },    
    
  // 🔥 الفئات الجديدة من الصورة    
  {     
    id: "pubg_mobile",     
    label: "شحن شدات ببجي موابل",     
    icon: "fa-solid fa-gamepad",    
          singleAccount: true,
    keys: ["pubg","ببجي","pubg mobile","شدات ببجي","شحن ببجي"],    
    subGroups: [    
      { id: "uc", label: "شحن شدات", keys: ["شدات","uc","points"] }    
    ]    
  },    
  {     
    id: "ludo_king",     
    label: "بلد لودو - مجوهرات",     
    icon: "fa-solid fa-dice",     
    keys: ["ludo","لودو","بلد لودو","ludo king","مجوهرات"],    
    subGroups: [    
      { id: "gems", label: "مجوهرات", keys: ["مجوهرات","gems","jewels"] }    
    ]    
  },    
  {     
    id: "eafc_mobile",     
    label: "EAFC Mobile نقاط",     
    icon: "fa-solid fa-futbol",     
    keys: ["eafc","fifa","ea sports","eafc mobile","نقاط eafc"],    
    subGroups: [    
      { id: "points", label: "نقاط", keys: ["نقاط","points","coins"] }    
    ]    
  },    
  {     
    id: "uber_eats",     
    label: "أوبر اوق كينغز",     
    icon: "fa-solid fa-utensils",     
    keys: ["uber","أوبر","uber eats","اوق كينغز"],    
    subGroups: [    
      { id: "vouchers", label: "قسائم", keys: ["voucher","قسائم","كوبون"] }    
    ]    
  },    
  {     
    id: "steam_cards",     
    label: "بطاقات ستبم",     
    icon: "fa-brands fa-steam",     
    keys: ["steam","ستيم","بطاقات ستبم","steam cards"],    
    subGroups: [    
      { id: "gift_cards", label: "بطاقات هدايا", keys: ["gift card","بطاقات","card"] }    
    ]    
  },    
  {     
    id: "netflix_cards",     
    label: "NETFLIX بطاقات",     
    icon: "fa-solid fa-tv",     
    keys: ["netflix","نيتفليكس","بطاقات نيتفليكس","netflix gift"],    
    subGroups: [    
      { id: "gift_cards", label: "بطاقات هدايا", keys: ["gift card","بطاقة","netflix card"] }    
    ]    
  },    
  {     
    id: "shahid_vip",     
    label: "شاهد نت VIP",     
    icon: "fa-solid fa-video",     
    keys: ["shahid","شاهد","شاهد نت","shahid vip"],    
    subGroups: [    
      { id: "subscriptions", label: "اشتراكات", keys: ["vip","اشتراك","subscription"] }    
    ]    
  },    
  {     
    id: "royal_cheese",     
    label: "بطاقات رويلخس",     
    icon: "fa-solid fa-chess",     
    keys: ["royal","رويل","رويلخس","royal cheese"],    
    subGroups: [    
      { id: "cards", label: "بطاقات", keys: ["card","بطاقة","cheese"] }    
    ]    
  },    
  {     
    id: "gpt4_access",     
    label: "GPT-4 الوصول",     
    icon: "fa-solid fa-robot",     
    keys: ["gpt-4","gpt4","gpt 4","وصول gpt4"],    
    subGroups: [    
      { id: "access", label: "الوصول المميز", keys: ["access","وصول","premium"] }    
    ]    
  },    
  {     
    id: "gpt5_access",     
    label: "GPT-5 الوصول",     
    icon: "fa-solid fa-robot",     
    keys: ["gpt-5","gpt5","gpt 5","وصول gpt5"],    
    subGroups: [    
      { id: "access", label: "الوصول الحصري", keys: ["gpt5","أحدث نموذج","advanced"] }    
    ]    
  },    
// 🔥 الفئات الجديدة من الصورة الثانية مع شعارات حقيقية    
{     
  id: "osn_plus",     
  label: "اشتراكات - أو إس أن بلدس",     
  icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/osmc.svg", // شعار OSN الرسمي     
  keys: ["osn","osn plus","أو إس أن","osn بلدس","osn subscription"],    
  subGroups: [    
    { id: "subscriptions", label: "اشتراكات OSN", keys: ["اشتراك","subscription","osn plus"] }    
  ]    
},    
{     
  id: "itunes_cards",     
  label: "بطاقات ايثورز (seem)",     
  icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apple.svg", // شعار Apple الرسمي     
  keys: ["itunes","ايثورز","itunes card","بطاقات itunes","apple itunes"],    
  subGroups: [    
    { id: "gift_cards", label: "بطاقات ايثورز", keys: ["gift card","بطاقة itunes","itunes code"] }    
  ]    
},    
{     
  id: "xbox_cards",     
  label: "بطاقات - اكس يوكس",     
  icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xbox.svg", // شعار Xbox الرسمي     
  keys: ["xbox","اكس بوكس","xbox card","بطاقات xbox","اكس يوكس"],    
  subGroups: [    
    { id: "gift_cards", label: "بطاقات اكس بوكس", keys: ["gift card","بطاقة xbox","xbox code"] }    
  ]    
},    
{     
  id: "playstation_cards",     
  label: "بطاقات بليستيشني",     
  icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/playstation.svg", // شعار PlayStation الرسمي     
  keys: ["playstation","بلايستيشن","playstation card","بطاقات playstation","بليستيشني"],    
  subGroups: [    
    { id: "gift_cards", label: "بطاقات بلايستيشن", keys: ["gift card","بطاقة playstation","psn code"] }    
  ]    
},    
{     
  id: "stc_cards",     
  label: "بطاقات سوا STC",     
  icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stmicroelectronics.svg", // شعار STC الرسمي     
  keys: ["stc","سوا","stc card","بطاقات stc","stc سوا"],    
  subGroups: [    
    { id: "gift_cards", label: "بطاقات STC", keys: ["gift card","بطاقة stc","stc code"] }    
  ]    
},    
{     
  id: "noon_cards",     
  label: "بطاقات نون",     
  icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazon.svg", // شعار Noon الرسمي     
  keys: ["noon","نون","noon card","بطاقات noon","noon vouchers"],    
  subGroups: [    
    { id: "gift_cards", label: "بطاقات نون", keys: ["gift card","بطاقة noon","noon code"] }    
  ]    
},    
{     
  id: "razer_gold",     
  label: "بطاقات - ريزر كولد",     
  icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/razer.svg", // شعار Razer الرسمي     
  keys: ["razer","ريزر","razer gold","ريزر كولد","razer card"],    
  subGroups: [    
    { id: "gift_cards", label: "بطاقات ريزر", keys: ["gift card","بطاقة razer","razer code"] }    
  ]    
},    
    
// 🔥 الفئات الجديدة من الصورة الثالثة مع شعارات حقيقية    
//{     
 // id: "blood_strike_mena",     
 // label: "شحن جواد - بلود ستزايك (Mena)",     
 // icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Blood_Strike_logo.png/120px-Blood_Strike_logo.png",     
//  keys: ["شحن بلود سترايك مينا","بلود ستزايك","blood strike mena","شحن بلود ستزايك","جواد بلود"],    
//  subGroups: [    
//    { id: "diamonds", label: "شحن جواد", keys: ["diamonds","جواد","شحن","blood strike diamonds"] }    
//  ]    
//},    
//{     
 // id: "blood_strike_global",     
 // label: "شحن جواد - بلود ستزايك (عالمي)",     
//  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Blood_Strike_logo.png/120px-Blood_Strike_logo.png",     
//  keys: ["blood strike global","شحن بلود سترايك عالمي","blood strike worldwide","شحن بلود عالمي"],    
//  subGroups: [    
//    { id: "شحن بلود سترايك عالمي", label: "شحن بلود سترايك عالمي", keys: ["شحن بلود سترايك عالم","شحن بلود سترايك عالمي"] }    
//  ]    
//},    
//{     
 // id: "free_fire",     
 // label: "شحن - فري فاير",     
 // icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Free_Fire_logo.svg/120px-Free_Fire_logo.svg.png",     
//  keys: ["free fire","فري فاير","free fire diamonds","شحن فري فاير","جواد فري فاير"],    
//  subGroups: [    
//    { id: "diamonds", label: "شحن جواد فري فاير", keys: ["diamonds","جواد","شحن","free fire topup"] }    
 // ]    
//},    
{     
  id: "canva_pro_premium",     
  label: "اشتراك كانفا برو المميز",     
  icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg", // شعار Canva الرسمي     
  keys: ["canva pro","كانفا برو","canva pro premium","اشتراك كانفا","canva مميز"],    
  subGroups: [    
    { id: "subscriptions", label: "اشتراكات مميزة", keys: ["premium","مميز","pro subscription"] }    
  ]    
}
];
