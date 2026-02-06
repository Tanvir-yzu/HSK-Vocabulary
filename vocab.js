
function vocabApp() {
            return {
                vocab: [
                    // HSK Level 1 words with Bangla meanings
                    { id: 1, character: '爱', pinyin: 'ài', meaning: 'love / to love', bangla: 'ভালবাসা / ভালোবাসা', level: '1', favorite: false },
                    { id: 2, character: '吧', pinyin: 'ba', meaning: '(modal particle)', bangla: '(সুপারিশ বা নরম স্বরের জন্য)', level: '1', favorite: false },
                    { id: 3, character: '八', pinyin: 'bā', meaning: 'eight', bangla: 'আট', level: '1', favorite: false },
                    { id: 4, character: '爸爸', pinyin: 'bà ba', meaning: 'father / dad', bangla: 'বাবা', level: '1', favorite: false },
                    { id: 5, character: '百', pinyin: 'bǎi', meaning: 'hundred', bangla: 'একশো', level: '1', favorite: false },
                    { id: 6, character: '白天', pinyin: 'bái tiān', meaning: 'daytime', bangla: 'দিনের বেলা', level: '1', favorite: false },
                    { id: 7, character: '半', pinyin: 'bàn', meaning: 'half', bangla: 'অর্ধেক', level: '1', favorite: false },
                    { id: 8, character: '包子', pinyin: 'bāo zi', meaning: 'steamed bun', bangla: 'স্টিমড বান (বাওজি)', level: '1', favorite: false },
                    { id: 9, character: '杯子', pinyin: 'bēi zi', meaning: 'cup / glass', bangla: 'কাপ / গ্লাস', level: '1', favorite: false },
                    { id: 10, character: '本', pinyin: 'běn', meaning: '(classifier for books)', bangla: '(বইয়ের জন্য শ্রেণিবাচক)', level: '1', favorite: false },
                    { id: 11, character: '边', pinyin: 'biān', meaning: 'side / edge', bangla: 'পাশ / প্রান্ত', level: '1', favorite: false },
                    { id: 12, character: '病', pinyin: 'bìng', meaning: 'illness / to be sick', bangla: 'অসুস্থতা / অসুস্থ হওয়া', level: '1', favorite: false },
                    { id: 13, character: '不', pinyin: 'bù', meaning: 'not / no', bangla: 'না / না (অস্বীকৃতি)', level: '1', favorite: false },
                    { id: 14, character: '不客气', pinyin: 'bú kè qi', meaning: "you're welcome", bangla: 'অনুগ্রহ করা হলো', level: '1', favorite: false },
                    { id: 15, character: '不要', pinyin: 'bú yào', meaning: 'do not / don’t want', bangla: 'করবেন না / চাই না', level: '1', favorite: false },
                    { id: 16, character: '菜', pinyin: 'cài', meaning: 'dish / vegetable', bangla: 'খাবার / সবজি', level: '1', favorite: false },
                    { id: 17, character: '茶', pinyin: 'chá', meaning: 'tea', bangla: 'চা', level: '1', favorite: false },
                    { id: 18, character: '唱', pinyin: 'chàng', meaning: 'to sing', bangla: 'গান গাওয়া', level: '1', favorite: false },
                    { id: 19, character: '超市', pinyin: 'chāo shì', meaning: 'supermarket', bangla: 'সুপারমার্কেট', level: '1', favorite: false },
                    { id: 20, character: '车', pinyin: 'chē', meaning: 'car / vehicle', bangla: 'গাড়ি / যানবাহন', level: '1', favorite: false },
                    { id: 21, character: '吃', pinyin: 'chī', meaning: 'to eat', bangla: 'খাওয়া', level: '1', favorite: false },
                    { id: 22, character: '穿', pinyin: 'chuān', meaning: 'to wear', bangla: 'পরা', level: '1', favorite: false },
                    { id: 23, character: '出租车', pinyin: 'chū zū chē', meaning: 'taxi', bangla: 'ট্যাক্সি', level: '1', favorite: false },
                    { id: 24, character: '大', pinyin: 'dà', meaning: 'big / large', bangla: 'বড়', level: '1', favorite: false },
                    { id: 25, character: '打电话', pinyin: 'dǎ diàn huà', meaning: 'to make a phone call', bangla: 'ফোন করা', level: '1', favorite: false },
                    { id: 26, character: '大家', pinyin: 'dà jiā', meaning: 'everyone / all', bangla: 'সবাই', level: '1', favorite: false },
                    { id: 27, character: '到', pinyin: 'dào', meaning: 'to arrive / to reach', bangla: 'পৌঁছানো / যাওয়া', level: '1', favorite: false },
                    { id: 28, character: '大学', pinyin: 'dà xué', meaning: 'university', bangla: 'বিশ্ববিদ্যালয়', level: '1', favorite: false },
                    { id: 29, character: '大学生', pinyin: 'dà xué shēng', meaning: 'university student', bangla: 'বিশ্ববিদ্যালয়ের শিক্ষার্থী', level: '1', favorite: false },
                    { id: 30, character: '的', pinyin: 'de', meaning: '(possessive particle)', bangla: '(সম্পর্কবাচক ব্যঞ্জনবর্ণ)', level: '1', favorite: false },
                    { id: 31, character: '第', pinyin: 'dì', meaning: '(ordinal prefix)', bangla: '(ক্রমিক বিভক্তি)', level: '1', favorite: false },
                    { id: 32, character: '店', pinyin: 'diàn', meaning: 'shop / store', bangla: 'দোকান', level: '1', favorite: false },
                    { id: 33, character: '点', pinyin: 'diǎn', meaning: 'o’clock / point / dot', bangla: 'ঘন্টা / বিন্দু / স্থান', level: '1', favorite: false },
                    { id: 34, character: '电话', pinyin: 'diàn huà', meaning: 'telephone', bangla: 'ফোন', level: '1', favorite: false },
                    { id: 35, character: '电脑', pinyin: 'diàn nǎo', meaning: 'computer', bangla: 'কম্পিউটার', level: '1', favorite: false },
                    { id: 36, character: '电视', pinyin: 'diàn shì', meaning: 'television', bangla: 'টেলিভিশন', level: '1', favorite: false },
                    { id: 37, character: '电影', pinyin: 'diàn yǐng', meaning: 'movie / film', bangla: 'সিনেমা / চলচ্চিত্র', level: '1', favorite: false },
                    { id: 38, character: '电影院', pinyin: 'diàn yǐng yuàn', meaning: 'cinema', bangla: 'সিনেমা হল', level: '1', favorite: false },
                    { id: 39, character: '弟弟', pinyin: 'dì di', meaning: 'younger brother', bangla: 'ছোট ভাই', level: '1', favorite: false },
                    { id: 40, character: '东西', pinyin: 'dōng xi', meaning: 'thing / stuff', bangla: 'জিনিস', level: '1', favorite: false },
                    { id: 41, character: '都', pinyin: 'dōu', meaning: 'all / both', bangla: 'সব / উভয়', level: '1', favorite: false },
                    { id: 42, character: '读', pinyin: 'dú', meaning: 'to read', bangla: 'পড়া', level: '1', favorite: false },
                    { id: 43, character: '对', pinyin: 'duì', meaning: 'right / correct / towards', bangla: 'সঠিক / কথা / দিকে', level: '1', favorite: false },
                    { id: 44, character: '对不起', pinyin: 'duì bu qǐ', meaning: "I'm sorry / excuse me", bangla: 'মাফ করুন / ক্ষমা চাইছি', level: '1', favorite: false },
                    { id: 45, character: '多', pinyin: 'duō', meaning: 'many / much', bangla: 'অনেক', level: '1', favorite: false },
                    { id: 46, character: '多少', pinyin: 'duō shǎo', meaning: 'how many / how much', bangla: 'কত', level: '1', favorite: false },
                    { id: 47, character: '读书', pinyin: 'dú shū', meaning: 'to study / to read (books)', bangla: 'পড়াশোনা / বই পড়া', level: '1', favorite: false },
                    { id: 48, character: '二', pinyin: 'èr', meaning: 'two', bangla: 'দুই', level: '1', favorite: false },
                    { id: 49, character: '儿子', pinyin: 'ér zi', meaning: 'son', bangla: 'ছেলে', level: '1', favorite: false },
                    { id: 50, character: '饭', pinyin: 'fàn', meaning: 'meal / cooked rice', bangla: 'খাবার / রান্না করা চাল', level: '1', favorite: false },
                    { id: 51, character: '饭店', pinyin: 'fàn diàn', meaning: 'restaurant', bangla: 'রেস্টুরেন্ট', level: '1', favorite: false },
                    { id: 52, character: '房间', pinyin: 'fáng jiān', meaning: 'room', bangla: 'ঘর', level: '1', favorite: false },
                    { id: 53, character: '非常', pinyin: 'fēi cháng', meaning: 'very / extremely', bangla: 'খুব', level: '1', favorite: false },
                    { id: 54, character: '飞机', pinyin: 'fēi jī', meaning: 'airplane / plane', bangla: 'বিমান', level: '1', favorite: false },
                    { id: 55, character: '分', pinyin: 'fēn', meaning: 'minute / to divide', bangla: 'মিনিট / বিভাজন', level: '1', favorite: false },
                    { id: 56, character: '分钟', pinyin: 'fēn zhōng', meaning: 'minute', bangla: 'মিনিট', level: '1', favorite: false },
                    { id: 57, character: '高兴', pinyin: 'gāo xìng', meaning: 'happy / glad', bangla: 'খুশি / আনন্দিত', level: '1', favorite: false },
                    { id: 58, character: '个', pinyin: 'gè', meaning: '(general classifier)', bangla: '(সাধারণ শ্রেণিবাচক)', level: '1', favorite: false },
                    { id: 59, character: '歌', pinyin: 'gē', meaning: 'song', bangla: 'গান', level: '1', favorite: false },
                    { id: 60, character: '哥哥', pinyin: 'gē ge', meaning: 'elder brother', bangla: 'বড় ভাই', level: '1', favorite: false },
                    { id: 61, character: '给', pinyin: 'gěi', meaning: 'to give', bangla: 'দেওয়া', level: '1', favorite: false },
                    { id: 62, character: '公司', pinyin: 'gōng sī', meaning: 'company', bangla: 'কোম্পানি', level: '1', favorite: false },
                    { id: 63, character: '工作', pinyin: 'gōng zuò', meaning: 'work / job', bangla: 'কাজ / চাকরি', level: '1', favorite: false },
                    { id: 64, character: '狗', pinyin: 'gǒu', meaning: 'dog', bangla: 'কুকুর', level: '1', favorite: false },
                    { id: 65, character: '贵', pinyin: 'guì', meaning: 'expensive', bangla: 'দামী', level: '1', favorite: false },
                    { id: 66, character: '国', pinyin: 'guó', meaning: 'country / nation', bangla: 'দেশ', level: '1', favorite: false },
                    { id: 67, character: '还', pinyin: 'hái', meaning: 'still / yet / also', bangla: 'এখনও / শুরু করা হয়নি / আবার', level: '1', favorite: false },
                    { id: 68, character: '孩子', pinyin: 'hái zi', meaning: 'child', bangla: 'শিশু', level: '1', favorite: false },
                    { id: 69, character: '汉语', pinyin: 'Hànyǔ', meaning: 'Chinese language', bangla: 'চীনা ভাষা', level: '1', favorite: false },
                    { id: 70, character: '汉字', pinyin: 'Hànzì', meaning: 'Chinese character', bangla: 'চীনা লিপি', level: '1', favorite: false },
                    { id: 71, character: '号', pinyin: 'hào', meaning: 'number / date / sign', bangla: 'সংখ্যা / তারিখ / নাম / সংকেত', level: '1', favorite: false },
                    { id: 72, character: '好', pinyin: 'hǎo', meaning: 'good / well', bangla: 'ভাল', level: '1', favorite: false },
                    { id: 73, character: '好吃', pinyin: 'hǎo chī', meaning: 'tasty / delicious', bangla: 'সুস্বাদু', level: '1', favorite: false },
                    { id: 74, character: '好看', pinyin: 'hǎo kàn', meaning: 'good-looking / attractive', bangla: 'সুন্দর / আকর্ষণীয়', level: '1', favorite: false },
                    { id: 75, character: '好听', pinyin: 'hǎo tīng', meaning: 'pleasant to hear', bangla: 'শ্রবণযোগ্য', level: '1', favorite: false },
                    { id: 76, character: '好玩儿', pinyin: 'hǎo wánr', meaning: 'fun / interesting', bangla: 'মজার / মজবুত', level: '1', favorite: false },
                    { id: 77, character: '和', pinyin: 'hé', meaning: 'and / with', bangla: 'এবং', level: '1', favorite: false },
                    { id: 78, character: '喝', pinyin: 'hē', meaning: 'to drink', bangla: 'পান করা', level: '1', favorite: false },
                    { id: 79, character: '很', pinyin: 'hěn', meaning: 'very', bangla: 'খুব', level: '1', favorite: false },
                    { id: 80, character: '后', pinyin: 'hòu', meaning: 'behind / after', bangla: 'পিছনে / পরে', level: '1', favorite: false },
                    { id: 81, character: '回', pinyin: 'huí', meaning: 'to return / back', bangla: 'ফিরে আসা / পেছনে', level: '1', favorite: false },
                    { id: 82, character: '会', pinyin: 'huì', meaning: 'can / will / meeting', bangla: 'করতে পারে / হবে / সভা', level: '1', favorite: false },
                    { id: 83, character: '火车', pinyin: 'huǒ chē', meaning: 'train', bangla: 'ট্রেন', level: '1', favorite: false },
                    { id: 84, character: '几', pinyin: 'jǐ', meaning: 'how many / several', bangla: 'কত / কয়েক', level: '1', favorite: false },
                    { id: 85, character: '家', pinyin: 'jiā', meaning: 'home / family', bangla: 'বাড়ি / পরিবার', level: '1', favorite: false },
                    { id: 86, character: '见', pinyin: 'jiàn', meaning: 'to see / to meet', bangla: 'দেখা / দেখা করা', level: '1', favorite: false },
                    { id: 87, character: '件', pinyin: 'jiàn', meaning: '(classifier for clothing, events)', bangla: '(পোশাক, ঘটনার শ্রেণিবাচক)', level: '1', favorite: false },
                    { id: 88, character: '叫', pinyin: 'jiào', meaning: 'to call / to shout', bangla: 'ডাকা / চিৎকার করা', level: '1', favorite: false },
                    { id: 89, character: '饺子', pinyin: 'jiǎo zi', meaning: 'dumpling', bangla: 'ডাম্পলিং (জিয়াওজি)', level: '1', favorite: false },
                    { id: 90, character: '家人', pinyin: 'jiā rén', meaning: 'family members', bangla: 'পরিবারের সদস্য', level: '1', favorite: false },
                    { id: 91, character: '鸡蛋', pinyin: 'jī dàn', meaning: 'egg', bangla: 'ডিম', level: '1', favorite: false },
                    { id: 92, character: '姐姐', pinyin: 'jiě jie', meaning: 'elder sister', bangla: 'বড় বোন', level: '1', favorite: false },
                    { id: 93, character: '今年', pinyin: 'jīn nián', meaning: 'this year', bangla: 'এই বছর', level: '1', favorite: false },
                    { id: 94, character: '今天', pinyin: 'jīn tiān', meaning: 'today', bangla: 'আজ', level: '1', favorite: false },
                    { id: 95, character: '九', pinyin: 'jiǔ', meaning: 'nine', bangla: 'নয়', level: '1', favorite: false },
                    { id: 96, character: '觉得', pinyin: 'jué de', meaning: 'to feel / to think', bangla: 'অনুভব করা / মনে করা', level: '1', favorite: false },
                    { id: 97, character: '开', pinyin: 'kāi', meaning: 'to open / to drive', bangla: 'খোলা / চালানো', level: '1', favorite: false },
                    { id: 98, character: '开车', pinyin: 'kāi chē', meaning: 'to drive a car', bangla: 'গাড়ি চালানো', level: '1', favorite: false },
                    { id: 99, character: '看', pinyin: 'kàn', meaning: 'to look / to see', bangla: 'দেখা', level: '1', favorite: false },
                    { id: 100, character: '看病', pinyin: 'kàn bìng', meaning: 'to see a doctor', bangla: 'ডাক্তার দেখানো', level: '1', favorite: false },
                    { id: 101, character: '看见', pinyin: 'kàn jiàn', meaning: 'to see / to catch sight of', bangla: 'দেখতে পাওয়া / দৃষ্টিগোচর', level: '1', favorite: false },
                    { id: 102, character: '课', pinyin: 'kè', meaning: 'class / lesson', bangla: 'ক্লাস / পাঠ', level: '1', favorite: false },
                    { id: 103, character: '可以', pinyin: 'kěyǐ', meaning: 'can / may', bangla: 'পারা / অনুমতি', level: '1', favorite: false },
                    { id: 104, character: '口', pinyin: 'kǒu', meaning: 'mouth / opening', bangla: 'মুখ / খোলা', level: '1', favorite: false },
                    { id: 105, character: '块', pinyin: 'kuài', meaning: 'piece / (colloquial for yuan)', bangla: 'টুকরা / (ইউয়ান অর্থে)', level: '1', favorite: false },
                    { id: 106, character: '来', pinyin: 'lái', meaning: 'to come', bangla: 'আসা', level: '1', favorite: false },
                    { id: 107, character: '老师', pinyin: 'lǎo shī', meaning: 'teacher', bangla: 'শিক্ষক', level: '1', favorite: false },
                    { id: 108, character: '了', pinyin: 'le', meaning: '(particle for completed action)', bangla: '(সম্পূর্ণ ক্রিয়ার ব্যঞ্জনবর্ণ)', level: '1', favorite: false },
                    { id: 109, character: '冷', pinyin: 'lěng', meaning: 'cold', bangla: 'ঠান্ডা', level: '1', favorite: false },
                    { id: 110, character: '里', pinyin: 'lǐ', meaning: 'inside / in', bangla: 'ভিতরে / মধ্যে', level: '1', favorite: false },
                    { id: 111, character: '两', pinyin: 'liǎng', meaning: 'two (for measure words)', bangla: 'দুই (শ্রেণিবাচকের সাথে)', level: '1', favorite: false },
                    { id: 112, character: '零', pinyin: 'líng', meaning: 'zero', bangla: 'শূন্য', level: '1', favorite: false },
                    { id: 113, character: '六', pinyin: 'liù', meaning: 'six', bangla: 'ছয়', level: '1', favorite: false },
                    { id: 114, character: '吗', pinyin: 'ma', meaning: '(question particle)', bangla: '(প্রশ্নবাচক)', level: '1', favorite: false },
                    { id: 115, character: '卖', pinyin: 'mài', meaning: 'to sell', bangla: 'বিক্রি করা', level: '1', favorite: false },
                    { id: 116, character: '买', pinyin: 'mǎi', meaning: 'to buy', bangla: 'কেনা', level: '1', favorite: false },
                    { id: 117, character: '妈妈', pinyin: 'mā ma', meaning: 'mother / mom', bangla: 'মা', level: '1', favorite: false },
                    { id: 118, character: '忙', pinyin: 'máng', meaning: 'busy', bangla: 'ব্যস্ত', level: '1', favorite: false },
                    { id: 119, character: '猫', pinyin: 'māo', meaning: 'cat', bangla: 'বিড়াল', level: '1', favorite: false },
                    { id: 120, character: '没关系', pinyin: 'méi guān xi', meaning: "it doesn't matter / never mind", bangla: 'কিছু হয়নি / চিন্তা করবেন না', level: '1', favorite: false },
                    { id: 121, character: '妹妹', pinyin: 'mèi mei', meaning: 'younger sister', bangla: 'ছোট বোন', level: '1', favorite: false },
                    { id: 122, character: '没事', pinyin: 'méi shì', meaning: "it's nothing / no problem", bangla: 'কিছু না / সমস্যা নেই', level: '1', favorite: false },
                    { id: 123, character: '没有', pinyin: 'méi yǒu', meaning: 'to not have / there is not', bangla: 'নেই / নেই', level: '1', favorite: false },
                    { id: 124, character: '们', pinyin: 'men', meaning: '(plural suffix for pronouns/people)', bangla: '(বহুবচন প্রত্যয়)', level: '1', favorite: false },
                    { id: 125, character: '面包', pinyin: 'miàn bāo', meaning: 'bread', bangla: 'পাউরুটি', level: '1', favorite: false },
                    { id: 126, character: '面条儿', pinyin: 'miàn tiáor', meaning: 'noodles', bangla: 'নুডুলস', level: '1', favorite: false },
                    { id: 127, character: '米饭', pinyin: 'mǐ fàn', meaning: '(cooked) rice', bangla: '(রান্না করা) চাল / ভাত', level: '1', favorite: false },
                    { id: 128, character: '明年', pinyin: 'míng nián', meaning: 'next year', bangla: 'আগামী বছর', level: '1', favorite: false },
                    { id: 129, character: '明天', pinyin: 'míng tiān', meaning: 'tomorrow', bangla: 'আগামীকাল', level: '1', favorite: false },
                    { id: 130, character: '名字', pinyin: 'míng zi', meaning: 'name', bangla: 'নাম', level: '1', favorite: false },
                    { id: 131, character: '那', pinyin: 'nà', meaning: 'that', bangla: 'ওইটা / সেই', level: '1', favorite: false },
                    { id: 132, character: '哪', pinyin: 'nǎ', meaning: 'which', bangla: 'কোনটি', level: '1', favorite: false },
                    { id: 133, character: '那边', pinyin: 'nà biān', meaning: 'over there', bangla: 'ওই দিকে', level: '1', favorite: false },
                    { id: 134, character: '哪儿', pinyin: 'nǎ er', meaning: 'where', bangla: 'কোথায়', level: '1', favorite: false },
                    { id: 135, character: '那个', pinyin: 'nà ge', meaning: 'that one', bangla: 'ওইটা', level: '1', favorite: false },
                    { id: 136, character: '哪个', pinyin: 'nǎ ge', meaning: 'which one', bangla: 'কোনটি', level: '1', favorite: false },
                    { id: 137, character: '那里', pinyin: 'nà lǐ', meaning: 'there', bangla: 'সেখানে', level: '1', favorite: false },
                    { id: 138, character: '哪里', pinyin: 'nǎ lǐ', meaning: 'where', bangla: 'কোথায়', level: '1', favorite: false },
                    { id: 139, character: '男', pinyin: 'nán', meaning: 'male / man', bangla: 'পুরুষ / ছেলে', level: '1', favorite: false },
                    { id: 140, character: '男朋友', pinyin: 'nán péngyou', meaning: 'boyfriend', bangla: 'প্রেমিক', level: '1', favorite: false },
                    { id: 141, character: '那儿', pinyin: 'nàr', meaning: 'there', bangla: 'ওখানে', level: '1', favorite: false },
                    { id: 142, character: '那些', pinyin: 'nà xiē', meaning: 'those', bangla: 'ওগুলো', level: '1', favorite: false },
                    { id: 143, character: '哪些', pinyin: 'nǎ xiē', meaning: 'which ones', bangla: 'কোনগুলো', level: '1', favorite: false },
                    { id: 144, character: '呢', pinyin: 'ne', meaning: '(particle for follow-up/questions)', bangla: '(প্রশ্ন বা অনুসরণের জন্য)', level: '1', favorite: false },
                    { id: 145, character: '能', pinyin: 'néng', meaning: 'can / able to', bangla: 'পারা / সক্ষম', level: '1', favorite: false },
                    { id: 146, character: '你', pinyin: 'nǐ', meaning: 'you (singular)', bangla: 'তুমি / আপনি', level: '1', favorite: false },
                    { id: 147, character: '年', pinyin: 'nián', meaning: 'year', bangla: 'বছর', level: '1', favorite: false },
                    { id: 148, character: '你好', pinyin: 'nǐ hǎo', meaning: 'hello', bangla: 'হ্যালো', level: '1', favorite: false },
                    { id: 149, character: '你们', pinyin: 'nǐ men', meaning: 'you (plural)', bangla: 'তোমরা / আপনারা', level: '1', favorite: false },
                    { id: 150, character: '您', pinyin: 'nín', meaning: 'you (polite)', bangla: 'আপনি (সম্মানসূচক)', level: '1', favorite: false },
                    { id: 151, character: '牛奶', pinyin: 'niú nǎi', meaning: 'milk', bangla: 'দুধ', level: '1', favorite: false },
                    { id: 152, character: '女', pinyin: 'nǚ', meaning: 'female / woman', bangla: 'মহিলা / মেয়ে', level: '1', favorite: false },
                    { id: 153, character: '女儿', pinyin: 'nǚ ér', meaning: 'daughter', bangla: 'মেয়ে (সন্তান)', level: '1', favorite: false },
                    { id: 154, character: '女朋友', pinyin: 'nǚ péngyou', meaning: 'girlfriend', bangla: 'প্রেমিকা', level: '1', favorite: false },
                    { id: 155, character: '女士', pinyin: 'nǚ shì', meaning: 'lady / madam / Ms.', bangla: 'মহিলা / ম্যাডাম / জনাবা', level: '1', favorite: false },
                    { id: 156, character: '朋友', pinyin: 'péng you', meaning: 'friend', bangla: 'বন্ধু', level: '1', favorite: false },
                    { id: 157, character: '便宜', pinyin: 'pián yi', meaning: 'cheap', bangla: 'সস্তা', level: '1', favorite: false },
                    { id: 158, character: '漂亮', pinyin: 'piào liang', meaning: 'pretty / beautiful', bangla: 'সুন্দর / সুন্দরী', level: '1', favorite: false },
                    { id: 159, character: '苹果', pinyin: 'píng guǒ', meaning: 'apple', bangla: 'আপেল', level: '1', favorite: false },
                    { id: 160, character: '七', pinyin: 'qī', meaning: 'seven', bangla: 'সাত', level: '1', favorite: false },
                    { id: 161, character: '前', pinyin: 'qián', meaning: 'front / before / ago', bangla: 'সামনে / আগে / পূর্বে', level: '1', favorite: false },
                    { id: 162, character: '钱', pinyin: 'qián', meaning: 'money', bangla: 'টাকা', level: '1', favorite: false },
                    { id: 163, character: '千', pinyin: 'qiān', meaning: 'thousand', bangla: 'হাজার', level: '1', favorite: false },
                    { id: 164, character: '起床', pinyin: 'qǐ chuáng', meaning: 'to get up / to get out of bed', bangla: 'ঘুম থেকে ওঠা', level: '1', favorite: false },
                    { id: 165, character: '请', pinyin: 'qǐng', meaning: 'please / to invite', bangla: 'দয়া করে / আমন্ত্রণ করা', level: '1', favorite: false },
                    { id: 166, character: '请问', pinyin: 'qǐng wèn', meaning: 'excuse me / may I ask...', bangla: 'মাফ করবেন / জিজ্ঞাসা করি...', level: '1', favorite: false },
                    { id: 167, character: '去', pinyin: 'qù', meaning: 'to go', bangla: 'যাওয়া', level: '1', favorite: false },
                    { id: 168, character: '去年', pinyin: 'qù nián', meaning: 'last year', bangla: 'গত বছর', level: '1', favorite: false },
                    { id: 169, character: '热', pinyin: 'rè', meaning: 'hot', bangla: 'গরম', level: '1', favorite: false },
                    { id: 170, character: '人', pinyin: 'rén', meaning: 'person / people', bangla: 'মানুষ', level: '1', favorite: false },
                    { id: 171, character: '认识', pinyin: 'rèn shi', meaning: 'to know / to recognize', bangla: 'চেনা / জানা', level: '1', favorite: false },
                    { id: 172, character: '日', pinyin: 'rì', meaning: 'sun / day / Japan', bangla: 'সূর্য / দিন / জাপান', level: '1', favorite: false },
                    { id: 173, character: '三', pinyin: 'sān', meaning: 'three', bangla: 'তিন', level: '1', favorite: false },
                    { id: 174, character: '上', pinyin: 'shàng', meaning: 'up / on / above / to go up', bangla: 'উপরে / উপর / ওপর / ওঠা', level: '1', favorite: false },
                    { id: 175, character: '上班', pinyin: 'shàng bān', meaning: 'to go to work / to be on duty', bangla: 'কাজে যাওয়া / ডিউটিতে থাকা', level: '1', favorite: false },
                    { id: 176, character: '商店', pinyin: 'shāng diàn', meaning: 'shop / store', bangla: 'দোকান', level: '1', favorite: false },
                    { id: 177, character: '上课', pinyin: 'shàng kè', meaning: 'to attend class / to have class', bangla: 'ক্লাসে যাওয়া / ক্লাস নেওয়া', level: '1', favorite: false },
                    { id: 178, character: '上午', pinyin: 'shàng wǔ', meaning: 'morning', bangla: 'সকাল', level: '1', favorite: false },
                    { id: 179, character: '上学', pinyin: 'shàng xué', meaning: 'to go to school', bangla: 'স্কুলে যাওয়া', level: '1', favorite: false },
                    { id: 180, character: '少', pinyin: 'shǎo', meaning: 'few / little / to be less', bangla: 'অল্প / কম / কম হওয়া', level: '1', favorite: false },
                    { id: 181, character: '谁', pinyin: 'shéi', meaning: 'who', bangla: 'কে', level: '1', favorite: false },
                    { id: 182, character: '生病', pinyin: 'shēng bìng', meaning: 'to fall ill / to get sick', bangla: 'অসুস্থ হওয়া', level: '1', favorite: false },
                    { id: 183, character: '什么', pinyin: 'shén me', meaning: 'what', bangla: 'কী', level: '1', favorite: false },
                    { id: 184, character: '十', pinyin: 'shí', meaning: 'ten', bangla: 'দশ', level: '1', favorite: false },
                    { id: 185, character: '是', pinyin: 'shì', meaning: 'to be', bangla: 'হওয়া', level: '1', favorite: false },
                    { id: 186, character: '事', pinyin: 'shì', meaning: 'matter / affair / thing', bangla: 'বিষয় / ঘটনা / জিনিস', level: '1', favorite: false },
                    { id: 187, character: '时候', pinyin: 'shí hou', meaning: 'time / moment', bangla: 'সময় / মুহূর্ত', level: '1', favorite: false },
                    { id: 188, character: '时间', pinyin: 'shí jiān', meaning: 'time', bangla: 'সময়', level: '1', favorite: false },
                    { id: 189, character: '手机', pinyin: 'shǒu jī', meaning: 'mobile phone / cell phone', bangla: 'মোবাইল ফোন', level: '1', favorite: false },
                    { id: 190, character: '书', pinyin: 'shū', meaning: 'book', bangla: 'বই', level: '1', favorite: false },
                    { id: 191, character: '书店', pinyin: 'shū diàn', meaning: 'bookstore', bangla: 'বইয়ের দোকান', level: '1', favorite: false },
                    { id: 192, character: '睡', pinyin: 'shuì', meaning: 'to sleep', bangla: 'ঘুমানো', level: '1', favorite: false },
                    { id: 193, character: '水', pinyin: 'shuǐ', meaning: 'water', bangla: 'পানি', level: '1', favorite: false },
                    { id: 194, character: '水果', pinyin: 'shuǐ guǒ', meaning: 'fruit', bangla: 'ফল', level: '1', favorite: false },
                    { id: 195, character: '睡觉', pinyin: 'shuì jiào', meaning: 'to sleep / to go to bed', bangla: 'ঘুমাতে যাওয়া', level: '1', favorite: false },
                    { id: 196, character: '说', pinyin: 'shuō', meaning: 'to say / to speak', bangla: 'বলা', level: '1', favorite: false },
                    { id: 197, character: '说话', pinyin: 'shuō huà', meaning: 'to talk / to speak', bangla: 'কথা বলা', level: '1', favorite: false },
                    { id: 198, character: '四', pinyin: 'sì', meaning: 'four', bangla: 'চার', level: '1', favorite: false },
                    { id: 199, character: '岁', pinyin: 'suì', meaning: 'year (of age)', bangla: 'বছর (বয়স)', level: '1', favorite: false },
                    { id: 200, character: '他', pinyin: 'tā', meaning: 'he / him', bangla: 'সে (পুরুষ) / তাকে', level: '1', favorite: false },
                    { id: 201, character: '它', pinyin: 'tā', meaning: 'it', bangla: 'এটি (প্রাণীহীন/প্রাণী)', level: '1', favorite: false },
                    { id: 202, character: '她', pinyin: 'tā', meaning: 'she / her', bangla: 'সে (মহিলা) / তাকে', level: '1', favorite: false },
                    { id: 203, character: '太', pinyin: 'tài', meaning: 'too / extremely', bangla: 'খুব / অত্যন্ত', level: '1', favorite: false },
                    { id: 204, character: '她们', pinyin: 'tā men', meaning: 'they / them (female)', bangla: 'তারা / তাদের (মহিলা)', level: '1', favorite: false },
                    { id: 205, character: '它们', pinyin: 'tā men', meaning: 'they / them (inanimate/animals)', bangla: 'তারা / তাদের (প্রাণীহীন/প্রাণী)', level: '1', favorite: false },
                    { id: 206, character: '他们', pinyin: 'tā men', meaning: 'they / them (male/mixed)', bangla: 'তারা / তাদের (পুরুষ/মিশ্র)', level: '1', favorite: false },
                    { id: 207, character: '天', pinyin: 'tiān', meaning: 'day / sky', bangla: 'দিন / আকাশ', level: '1', favorite: false },
                    { id: 208, character: '天气', pinyin: 'tiān qì', meaning: 'weather', bangla: 'আবহাওয়া', level: '1', favorite: false },
                    { id: 209, character: '听', pinyin: 'tīng', meaning: 'to listen / to hear', bangla: 'শোনা', level: '1', favorite: false },
                    { id: 210, character: '听见', pinyin: 'tīng jiàn', meaning: 'to hear', bangla: 'শুনতে পাওয়া', level: '1', favorite: false },
                    { id: 211, character: '同学', pinyin: 'tóng xué', meaning: 'classmate / fellow student', bangla: 'সহপাঠী', level: '1', favorite: false },
                    { id: 212, character: '外', pinyin: 'wài', meaning: 'outside / foreign', bangla: 'বাইরে / বিদেশী', level: '1', favorite: false },
                    { id: 213, character: '外边', pinyin: 'wài biān', meaning: 'outside / exterior', bangla: 'বাইরে / বাহির', level: '1', favorite: false },
                    { id: 214, character: '玩', pinyin: 'wán', meaning: 'to play / to have fun', bangla: 'খেলা করা / মজা করা', level: '1', favorite: false },
                    { id: 215, character: '晚', pinyin: 'wǎn', meaning: 'late / evening', bangla: 'দেরি / সন্ধ্যা', level: '1', favorite: false },
                    { id: 216, character: '晚饭', pinyin: 'wǎn fàn', meaning: 'dinner / supper', bangla: 'রাতের খাবার', level: '1', favorite: false },
                    { id: 217, character: '晚上', pinyin: 'wǎn shang', meaning: 'evening / night', bangla: 'সন্ধ্যা / রাত', level: '1', favorite: false },
                    { id: 218, character: '喂', pinyin: 'wèi', meaning: 'hello (on phone) / hey', bangla: 'হ্যালো (ফোনে) / আরে', level: '1', favorite: false },
                    { id: 219, character: '问', pinyin: 'wèn', meaning: 'to ask', bangla: 'জিজ্ঞাসা করা', level: '1', favorite: false },
                    { id: 220, character: '问题', pinyin: 'wèn tí', meaning: 'question / problem', bangla: 'প্রশ্ন / সমস্যা', level: '1', favorite: false },
                    { id: 221, character: '我', pinyin: 'wǒ', meaning: 'I / me', bangla: 'আমি / আমাকে', level: '1', favorite: false },
                    { id: 222, character: '我们', pinyin: 'wǒ men', meaning: 'we / us', bangla: 'আমরা / আমাদের', level: '1', favorite: false },
                    { id: 223, character: '五', pinyin: 'wǔ', meaning: 'five', bangla: 'পাঁচ', level: '1', favorite: false },
                    { id: 224, character: '午饭', pinyin: 'wǔ fàn', meaning: 'lunch', bangla: 'দুপুরের খাবার', level: '1', favorite: false },
                    { id: 225, character: '下', pinyin: 'xià', meaning: 'down / under / next / to go down', bangla: 'নিচে / নীচে / পরবর্তী / নামা', level: '1', favorite: false },
                    { id: 226, character: '下班', pinyin: 'xià bān', meaning: 'to get off work / to finish work', bangla: 'কাজ থেকে ফেরা / কাজ শেষ করা', level: '1', favorite: false },
                    { id: 227, character: '下课', pinyin: 'xià kè', meaning: 'to finish class / to get out of class', bangla: 'ক্লাস শেষ করা / ক্লাস থেকে বেরোনো', level: '1', favorite: false },
                    { id: 228, character: '想', pinyin: 'xiǎng', meaning: 'to think / to want to / to miss', bangla: 'ভাবা / ইচ্ছা করা / মিস করা', level: '1', favorite: false },
                    { id: 229, character: '先生', pinyin: 'xiān sheng', meaning: 'Mr. / sir / husband', bangla: 'জনাব / স্বামী', level: '1', favorite: false },
                    { id: 230, character: '现在', pinyin: 'xiàn zài', meaning: 'now', bangla: 'এখন', level: '1', favorite: false },
                    { id: 231, character: '小', pinyin: 'xiǎo', meaning: 'small / little', bangla: 'ছোট', level: '1', favorite: false },
                    { id: 232, character: '小朋友', pinyin: 'xiǎo péngyǒu', meaning: 'child / little friend', bangla: 'শিশু / ছোট বন্ধু', level: '1', favorite: false },
                    { id: 233, character: '小时', pinyin: 'xiǎo shí', meaning: 'hour', bangla: 'ঘন্টা', level: '1', favorite: false },
                    { id: 234, character: '小学', pinyin: 'xiǎo xué', meaning: 'elementary school', bangla: 'প্রাথমিক বিদ্যালয়', level: '1', favorite: false },
                    { id: 235, character: '小学生', pinyin: 'xiǎo xué shēng', meaning: 'elementary school student', bangla: 'প্রাথমিক বিদ্যালয়ের ছাত্র', level: '1', favorite: false },
                    { id: 236, character: '下午', pinyin: 'xià wǔ', meaning: 'afternoon', bangla: 'বিকাল', level: '1', favorite: false },
                    { id: 237, character: '下雨', pinyin: 'xià yǔ', meaning: 'to rain', bangla: 'বৃষ্টি পড়া', level: '1', favorite: false },
                    { id: 238, character: '写', pinyin: 'xiě', meaning: 'to write', bangla: 'লেখা', level: '1', favorite: false },
                    { id: 239, character: '些', pinyin: 'xiē', meaning: 'some / a few', bangla: 'কিছু / কয়েকটি', level: '1', favorite: false },
                    { id: 240, character: '谢谢', pinyin: 'xiè xie', meaning: 'thank you', bangla: 'ধন্যবাদ', level: '1', favorite: false },
                    { id: 241, character: '喜欢', pinyin: 'xǐ huan', meaning: 'to like / to be fond of', bangla: 'পছন্দ করা', level: '1', favorite: false },
                    { id: 242, character: '新', pinyin: 'xīn', meaning: 'new', bangla: 'নতুন', level: '1', favorite: false },
                    { id: 243, character: '星期', pinyin: 'xīng qī', meaning: 'week', bangla: 'সপ্তাহ', level: '1', favorite: false },
                    { id: 244, character: '星期日', pinyin: 'xīng qī rì', meaning: 'Sunday', bangla: 'রবিবার', level: '1', favorite: false },
                    { id: 245, character: '星期天', pinyin: 'xīng qī tiān', meaning: 'Sunday', bangla: 'রবিবার', level: '1', favorite: false },
                    { id: 246, character: '休息', pinyin: 'xiū xi', meaning: 'to rest / to take a break', bangla: 'বিশ্রাম নেওয়া', level: '1', favorite: false },
                    { id: 247, character: '学', pinyin: 'xué', meaning: 'to study / to learn', bangla: 'পড়াশোনা করা / শেখা', level: '1', favorite: false },
                    { id: 248, character: '雪', pinyin: 'xuě', meaning: 'snow', bangla: 'তুষার', level: '1', favorite: false },
                    { id: 249, character: '学生', pinyin: 'xué sheng', meaning: 'student', bangla: 'ছাত্র', level: '1', favorite: false },
                    { id: 250, character: '学习', pinyin: 'xué xí', meaning: 'to study / to learn', bangla: 'অধ্যয়ন করা / শেখা', level: '1', favorite: false },
                    { id: 251, character: '学校', pinyin: 'xué xiào', meaning: 'school', bangla: 'স্কুল', level: '1', favorite: false },
                    { id: 252, character: '要', pinyin: 'yào', meaning: 'to want / will / need', bangla: 'চাওয়া / ইচ্ছা / প্রয়োজন', level: '1', favorite: false },
                    { id: 253, character: '也', pinyin: 'yě', meaning: 'also / too', bangla: 'ও / আরও', level: '1', favorite: false },
                    { id: 254, character: '一', pinyin: 'yī', meaning: 'one', bangla: 'এক', level: '1', favorite: false },
                    { id: 255, character: '一半', pinyin: 'yī bàn', meaning: 'half', bangla: 'অর্ধেক', level: '1', favorite: false },
                    { id: 256, character: '一点儿', pinyin: 'yī diǎn er', meaning: 'a little / a bit', bangla: 'একটু / সামান্য', level: '1', favorite: false },
                    { id: 257, character: '衣服', pinyin: 'yī fu', meaning: 'clothes / clothing', bangla: 'কাপড়', level: '1', favorite: false },
                    { id: 258, character: '医生', pinyin: 'yī shēng', meaning: 'doctor', bangla: 'ডাক্তার', level: '1', favorite: false },
                    { id: 259, character: '一下', pinyin: 'yī xià', meaning: '(brief action indicator)', bangla: '(একটু সময়ের ক্রিয়া নির্দেশক)', level: '1', favorite: false },
                    { id: 260, character: '一些', pinyin: 'yì xiē', meaning: 'some / a few', bangla: 'কিছু / কয়েকটি', level: '1', favorite: false },
                    { id: 261, character: '医院', pinyin: 'yī yuàn', meaning: 'hospital', bangla: 'হাসপাতাল', level: '1', favorite: false },
                    { id: 262, character: '椅子', pinyin: 'yǐ zi', meaning: 'chair', bangla: 'চেয়ার', level: '1', favorite: false },
                    { id: 263, character: '有', pinyin: 'yǒu', meaning: 'to have / there is', bangla: 'থাকা / আছে', level: '1', favorite: false },
                    { id: 264, character: '有的', pinyin: 'yǒu de', meaning: 'some', bangla: 'কিছু', level: '1', favorite: false },
                    { id: 265, character: '有点儿', pinyin: 'yǒu diǎnr', meaning: 'a little bit / somewhat', bangla: 'একটু / কিছুটা', level: '1', favorite: false },
                    { id: 266, character: '有些', pinyin: 'yǒu xiē', meaning: 'some / a few', bangla: 'কিছু / কয়েকটি', level: '1', favorite: false },
                    { id: 267, character: '雨', pinyin: 'yǔ', meaning: 'rain', bangla: 'বৃষ্টি', level: '1', favorite: false },
                    { id: 268, character: '元', pinyin: 'yuán', meaning: 'yuan (Chinese currency)', bangla: 'ইউয়ান (চীনা মুদ্রা)', level: '1', favorite: false },
                    { id: 269, character: '月', pinyin: 'yuè', meaning: 'month / moon', bangla: 'মাস / চাঁদ', level: '1', favorite: false },
                    { id: 270, character: '在', pinyin: 'zài', meaning: 'at / in / on (indicates action in progress)', bangla: 'এ / তে / (চলমান ক্রিয়া নির্দেশক)', level: '1', favorite: false },
                    { id: 271, character: '再', pinyin: 'zài', meaning: 'again / once more', bangla: 'আবার / আরেকবার', level: '1', favorite: false },
                    { id: 272, character: '再见', pinyin: 'zài jiàn', meaning: 'goodbye', bangla: 'বিদায়', level: '1', favorite: false },
                    { id: 273, character: '早', pinyin: 'zǎo', meaning: 'early / morning', bangla: 'সকাল / তাড়াতাড়ি', level: '1', favorite: false },
                    { id: 274, character: '早饭', pinyin: 'zǎo fàn', meaning: 'breakfast', bangla: 'সকালের নাস্তা', level: '1', favorite: false },
                    { id: 275, character: '早上', pinyin: 'zǎo shang', meaning: 'morning', bangla: 'সকাল', level: '1', favorite: false },
                    { id: 276, character: '怎么', pinyin: 'zěn me', meaning: 'how / why', bangla: 'কিভাবে / কেন', level: '1', favorite: false },
                    { id: 277, character: '怎么样', pinyin: 'zěn me yàng', meaning: 'how about / how is it?', bangla: 'কেমন / কেমন আছে?', level: '1', favorite: false },
                    { id: 278, character: '找', pinyin: 'zhǎo', meaning: 'to look for / to find / to give change', bangla: 'খোঁজা / পাওয়া / খুচরা দেওয়া', level: '1', favorite: false },
                    { id: 279, character: '这', pinyin: 'zhè', meaning: 'this', bangla: 'এই', level: '1', favorite: false },
                    { id: 280, character: '这边', pinyin: 'zhè biān', meaning: 'this side / over here', bangla: 'এই দিকে / এখানে', level: '1', favorite: false },
                    { id: 281, character: '这个', pinyin: 'zhè ge', meaning: 'this one', bangla: 'এইটা', level: '1', favorite: false },
                    { id: 282, character: '这里', pinyin: 'zhè lǐ', meaning: 'here', bangla: 'এখানে', level: '1', favorite: false },
                    { id: 283, character: '真', pinyin: 'zhēn', meaning: 'real / true / really', bangla: 'সত্যি / আসল / সত্যিই', level: '1', favorite: false },
                    { id: 284, character: '正在', pinyin: 'zhèng zài', meaning: 'in the process of (doing)', bangla: '(কোনো কাজ) করার প্রক্রিয়ায়', level: '1', favorite: false },
                    { id: 285, character: '这儿', pinyin: 'zhèr', meaning: 'here', bangla: 'এখানে', level: '1', favorite: false },
                    { id: 286, character: '这些', pinyin: 'zhè xiē', meaning: 'these', bangla: 'এইগুলো', level: '1', favorite: false },
                    { id: 287, character: '只', pinyin: 'zhǐ', meaning: 'only / merely', bangla: 'শুধুমাত্র', level: '1', favorite: false },
                    { id: 288, character: '知道', pinyin: 'zhī dào', meaning: 'to know', bangla: 'জানা', level: '1', favorite: false },
                    { id: 289, character: '中国', pinyin: 'Zhōngguó', meaning: 'China', bangla: 'চীন', level: '1', favorite: false },
                    { id: 290, character: '中文', pinyin: 'Zhōngwén', meaning: 'Chinese (language)', bangla: 'চীনা (ভাষা)', level: '1', favorite: false },
                    { id: 291, character: '中午', pinyin: 'zhōng wǔ', meaning: 'noon / midday', bangla: 'দুপুর', level: '1', favorite: false },
                    { id: 292, character: '中学', pinyin: 'zhōng xué', meaning: 'middle school / secondary school', bangla: 'মাধ্যমিক বিদ্যালয়', level: '1', favorite: false },
                    { id: 293, character: '中学生', pinyin: 'zhōng xué shēng', meaning: 'middle school student', bangla: 'মাধ্যমিক বিদ্যালয়ের ছাত্র', level: '1', favorite: false },
                    { id: 294, character: '住', pinyin: 'zhù', meaning: 'to live / to reside', bangla: 'থাকা / বাস করা', level: '1', favorite: false },
                    { id: 295, character: '桌子', pinyin: 'zhuō zi', meaning: 'table / desk', bangla: 'টেবিল', level: '1', favorite: false },
                    { id: 296, character: '字', pinyin: 'zì', meaning: 'character / word', bangla: 'অক্ষর / শব্দ', level: '1', favorite: false },
                    { id: 297, character: '坐', pinyin: 'zuò', meaning: 'to sit', bangla: 'বসা', level: '1', favorite: false },
                    { id: 298, character: '做', pinyin: 'zuò', meaning: 'to do / to make', bangla: 'করা / তৈরি করা', level: '1', favorite: false },
                    { id: 299, character: '做饭', pinyin: 'zuò fàn', meaning: 'to cook / to prepare a meal', bangla: 'রান্না করা', level: '1', favorite: false },
                    { id: 300, character: '昨天', pinyin: 'zuó tiān', meaning: 'yesterday', bangla: 'গতকাল', level: '1', favorite: false },
                    
                    // HSK Level 2 words with Bangla meanings
                    { id: 301, character: '爱好', pinyin: 'ài hào', meaning: 'hobby', bangla: 'শখ; আগ্রহ', level: '2', favorite: false },
                    { id: 302, character: '白色', pinyin: 'bái sè', meaning: 'white', bangla: 'সাদা', level: '2', favorite: false },
                    { id: 303, character: '班', pinyin: 'bān', meaning: 'class', bangla: 'ক্লাস; শ্রেণী', level: '2', favorite: false },
                    { id: 304, character: '帮', pinyin: 'bāng', meaning: 'help', bangla: 'সাহায্য করা', level: '2', favorite: false },
                    { id: 305, character: '帮忙', pinyin: 'bāng máng', meaning: 'help', bangla: 'সাহায্য', level: '2', favorite: false },
                    { id: 306, character: '包', pinyin: 'bāo', meaning: 'bag', bangla: 'ব্যাগ', level: '2', favorite: false },
                    { id: 307, character: '本子', pinyin: 'běn zi', meaning: 'notebook', bangla: 'খাতা; নোটবুক', level: '2', favorite: false },
                    { id: 308, character: '比', pinyin: 'bǐ', meaning: 'compare', bangla: 'তুলনা করা', level: '2', favorite: false },
                    { id: 309, character: '笔', pinyin: 'bǐ', meaning: 'pen', bangla: 'কলম', level: '2', favorite: false },
                    { id: 310, character: '别', pinyin: 'bié', meaning: "don't", bangla: 'করো না', level: '2', favorite: false },
                    { id: 311, character: '不错', pinyin: 'bù cuò', meaning: 'not bad', bangla: 'খারাপ নয়', level: '2', favorite: false },
                    { id: 312, character: '不好意思', pinyin: 'bù hǎo yì si', meaning: 'sorry', bangla: 'দুঃখিত', level: '2', favorite: false },
                    { id: 313, character: '长', pinyin: 'cháng', meaning: 'long', bangla: 'লম্বা', level: '2', favorite: false },
                    { id: 314, character: '车站', pinyin: 'chē zhàn', meaning: 'bus stop/station', bangla: 'বাস স্টপ; স্টেশন', level: '2', favorite: false },
                    { id: 315, character: '出', pinyin: 'chū', meaning: 'go out', bangla: 'বের হওয়া', level: '2', favorite: false },
                    { id: 316, character: '出国', pinyin: 'chū guó', meaning: 'go abroad', bangla: 'বিদেশ যাওয়া', level: '2', favorite: false },
                    { id: 317, character: '出来', pinyin: 'chū lái', meaning: 'come out', bangla: 'বেরিয়ে আসা', level: '2', favorite: false },
                    { id: 318, character: '出门', pinyin: 'chū mén', meaning: 'go out', bangla: 'বাইরে বেরোনো', level: '2', favorite: false },
                    { id: 319, character: '出去', pinyin: 'chū qù', meaning: 'go out', bangla: 'বাইরে যাওয়া', level: '2', favorite: false },
                    { id: 320, character: '出租车', pinyin: 'chū zū chē', meaning: 'taxi', bangla: 'ট্যাক্সি', level: '2', favorite: false },
                    { id: 321, character: '穿', pinyin: 'chuān', meaning: 'wear', bangla: 'পরা', level: '2', favorite: false },
                    { id: 322, character: '窗户', pinyin: 'chuāng hu', meaning: 'window', bangla: 'জানালা', level: '2', favorite: false },
                    { id: 323, character: '床', pinyin: 'chuáng', meaning: 'bed', bangla: 'বিছানা', level: '2', favorite: false },
                    { id: 324, character: '春天', pinyin: 'chūn tiān', meaning: 'spring', bangla: 'বসন্ত', level: '2', favorite: false },
                    { id: 325, character: '词典', pinyin: 'cí diǎn', meaning: 'dictionary', bangla: 'অভিধান', level: '2', favorite: false },
                    { id: 326, character: '超市', pinyin: 'chāo shì', meaning: 'supermarket', bangla: 'সুপারমার্কেট', level: '2', favorite: false },
                    { id: 327, character: '迟到', pinyin: 'chí dào', meaning: 'be late', bangla: 'দেরি করা', level: '2', favorite: false },
                    { id: 328, character: '吃', pinyin: 'chī', meaning: 'eat', bangla: 'খাওয়া', level: '2', favorite: false },
                    { id: 329, character: '厨房', pinyin: 'chú fáng', meaning: 'kitchen', bangla: 'রান্নাঘর', level: '2', favorite: false },
                    { id: 330, character: '打电话', pinyin: 'dǎ diàn huà', meaning: 'make a phone call', bangla: 'ফোন করা', level: '2', favorite: false },
                    { id: 331, character: '打扫', pinyin: 'dǎ sǎo', meaning: 'clean', bangla: 'পরিষ্কার করা', level: '2', favorite: false },
                    { id: 332, character: '大部分', pinyin: 'dà bù fen', meaning: 'most', bangla: 'অধিকাংশ', level: '2', favorite: false },
                    { id: 333, character: '大家', pinyin: 'dà jiā', meaning: 'everyone', bangla: 'সবাই', level: '2', favorite: false },
                    { id: 334, character: '大米', pinyin: 'dà mǐ', meaning: 'rice', bangla: 'চাল', level: '2', favorite: false },
                    { id: 335, character: '大陆', pinyin: 'dà lù', meaning: 'mainland', bangla: 'মূল ভূখণ্ড', level: '2', favorite: false },
                    { id: 336, character: '大街', pinyin: 'dà jiē', meaning: 'street', bangla: 'রাস্তা', level: '2', favorite: false },
                    { id: 337, character: '带', pinyin: 'dài', meaning: 'take', bangla: 'নিয়ে যাওয়া', level: '2', favorite: false },
                    { id: 338, character: '蛋糕', pinyin: 'dàn gāo', meaning: 'cake', bangla: 'কেক', level: '2', favorite: false },
                    { id: 339, character: '当然', pinyin: 'dāng rán', meaning: 'of course', bangla: 'অবশ্যই', level: '2', favorite: false },
                    { id: 340, character: '当时', pinyin: 'dāng shí', meaning: 'at that time', bangla: 'সেই সময়', level: '2', favorite: false },
                    { id: 341, character: '当', pinyin: 'dàng', meaning: 'work as', bangla: 'হিসেবে কাজ করা', level: '2', favorite: false },
                    { id: 342, character: '刀', pinyin: 'dāo', meaning: 'knife', bangla: 'ছুরি', level: '2', favorite: false },
                    { id: 343, character: '岛', pinyin: 'dǎo', meaning: 'island', bangla: 'দ্বীপ', level: '2', favorite: false },
                    { id: 344, character: '倒', pinyin: 'dào', meaning: 'pour', bangla: 'ঢালা', level: '2', favorite: false },
                    { id: 345, character: '到底', pinyin: 'dào dǐ', meaning: 'on earth', bangla: 'আসলে', level: '2', favorite: false },
                    { id: 346, character: '到处', pinyin: 'dào chù', meaning: 'everywhere', bangla: 'সর্বত্র', level: '2', favorite: false },
                    { id: 347, character: '到达', pinyin: 'dào dá', meaning: 'arrive', bangla: 'পৌঁছানো', level: '2', favorite: false },
                    { id: 348, character: '得', pinyin: 'děi', meaning: 'have to', bangla: 'করতে হবে', level: '2', favorite: false },
                    { id: 349, character: '得', pinyin: 'dé', meaning: 'get', bangla: 'পাওয়া', level: '2', favorite: false },
                    { id: 350, character: '等', pinyin: 'děng', meaning: 'wait', bangla: 'অপেক্ষা করা', level: '2', favorite: false },
                    { id: 351, character: '等等', pinyin: 'děng děng', meaning: 'wait a minute', bangla: 'একটু দাঁড়াও', level: '2', favorite: false },
                    { id: 352, character: '低', pinyin: 'dī', meaning: 'low', bangla: 'নিচু', level: '2', favorite: false },
                    { id: 353, character: '弟弟', pinyin: 'dì di', meaning: 'younger brother', bangla: 'ছোট ভাই', level: '2', favorite: false },
                    { id: 354, character: '地方', pinyin: 'dì fāng', meaning: 'place', bangla: 'জায়গা', level: '2', favorite: false },
                    { id: 355, character: '地板', pinyin: 'dì bǎn', meaning: 'floor', bangla: 'মেঝে', level: '2', favorite: false },
                    { id: 356, character: '地铁', pinyin: 'dì tiě', meaning: 'subway', bangla: 'মেট্রো', level: '2', favorite: false },
                    { id: 357, character: '地上', pinyin: 'dì shàng', meaning: 'on the ground', bangla: 'মাটিতে', level: '2', favorite: false },
                    { id: 358, character: '地球', pinyin: 'dì qiú', meaning: 'earth', bangla: 'পৃথিবী', level: '2', favorite: false },
                    { id: 359, character: '地图', pinyin: 'dì tú', meaning: 'map', bangla: 'মানচিত্র', level: '2', favorite: false },
                    { id: 360, character: '回来', pinyin: 'huí lái', meaning: 'come back', bangla: 'ফিরে আসা', level: '2', favorite: false },
                    { id: 361, character: '回去', pinyin: 'huí qù', meaning: 'go back', bangla: 'ফিরে যাওয়া', level: '2', favorite: false },
                    { id: 362, character: '机场', pinyin: 'jī chǎng', meaning: 'airport', bangla: 'বিমানবন্দর', level: '2', favorite: false },
                    { id: 363, character: '机票', pinyin: 'jī piào', meaning: 'plane ticket', bangla: 'বিমানের টিকিট', level: '2', favorite: false },
                    { id: 364, character: '记得', pinyin: 'jì de', meaning: 'remember', bangla: 'মনে রাখা', level: '2', favorite: false },
                    { id: 365, character: '间', pinyin: 'jiān', meaning: '(measure word for rooms)', bangla: 'কক্ষের পরিমাপক', level: '2', favorite: false },
                    { id: 366, character: '教', pinyin: 'jiāo', meaning: 'teach', bangla: 'শেখানো', level: '2', favorite: false },
                    { id: 367, character: '教室', pinyin: 'jiào shì', meaning: 'classroom', bangla: 'ক্লাসরুম', level: '2', favorite: false },
                    { id: 368, character: '介绍', pinyin: 'jiè shào', meaning: 'introduce', bangla: 'পরিচয় করানো', level: '2', favorite: false },
                    { id: 369, character: '进', pinyin: 'jìn', meaning: 'enter', bangla: 'প্রবেশ করা', level: '2', favorite: false },
                    { id: 370, character: '近', pinyin: 'jìn', meaning: 'near', bangla: 'কাছে', level: '2', favorite: false },
                    { id: 371, character: '进来', pinyin: 'jìn lái', meaning: 'come in', bangla: 'ভিতরে আসা', level: '2', favorite: false },
                    { id: 372, character: '进去', pinyin: 'jìn qù', meaning: 'go in', bangla: 'ভিতরে যাওয়া', level: '2', favorite: false },
                    { id: 373, character: '经常', pinyin: 'jīng cháng', meaning: 'often', bangla: 'প্রায়ই', level: '2', favorite: false },
                    { id: 374, character: '酒店', pinyin: 'jiǔ diàn', meaning: 'hotel', bangla: 'হোটেল', level: '2', favorite: false },
                    { id: 375, character: '就', pinyin: 'jiù', meaning: 'just', bangla: 'ঠিক', level: '2', favorite: false },
                    { id: 376, character: '咖啡', pinyin: 'kā fēi', meaning: 'coffee', bangla: 'কফি', level: '2', favorite: false },
                    { id: 377, character: '开始', pinyin: 'kāi shǐ', meaning: 'start', bangla: 'শুরু করা', level: '2', favorite: false },
                    { id: 378, character: '开学', pinyin: 'kāi xué', meaning: 'start school', bangla: 'স্কুল শুরু', level: '2', favorite: false },
                    { id: 379, character: '考', pinyin: 'kǎo', meaning: 'take (an exam)', bangla: 'পরীক্ষা দেওয়া', level: '2', favorite: false },
                    { id: 380, character: '考试', pinyin: 'kǎo shì', meaning: 'exam', bangla: 'পরীক্ষা', level: '2', favorite: false },
                    { id: 381, character: '可能', pinyin: 'kě néng', meaning: 'possible', bangla: 'সম্ভব', level: '2', favorite: false },
                    { id: 382, character: '裤子', pinyin: 'kù zi', meaning: 'pants', bangla: 'প্যান্ট', level: '2', favorite: false },
                    { id: 383, character: '快', pinyin: 'kuài', meaning: 'fast', bangla: 'দ্রুত', level: '2', favorite: false },
                    { id: 384, character: '快乐', pinyin: 'kuài lè', meaning: 'happy', bangla: 'খুশি', level: '2', favorite: false },
                    { id: 385, character: '快要', pinyin: 'kuài yào', meaning: 'about to', bangla: 'প্রায়', level: '2', favorite: false },
                    { id: 386, character: '篮球', pinyin: 'lán qiú', meaning: 'basketball', bangla: 'বাস্কেটবল', level: '2', favorite: false },
                    { id: 387, character: '累', pinyin: 'lèi', meaning: 'tired', bangla: 'ক্লান্ত', level: '2', favorite: false },
                    { id: 388, character: '离', pinyin: 'lí', meaning: 'be away from', bangla: 'দূরে', level: '2', favorite: false },
                    { id: 389, character: '里面', pinyin: 'lǐ miàn', meaning: 'inside', bangla: 'ভিতরে', level: '2', favorite: false },
                    { id: 390, character: '楼', pinyin: 'lóu', meaning: 'building', bangla: 'বিল্ডিং', level: '2', favorite: false },
                    { id: 391, character: '路', pinyin: 'lù', meaning: 'road', bangla: 'রাস্তা', level: '2', favorite: false },
                    { id: 392, character: '路上', pinyin: 'lù shàng', meaning: 'on the way', bangla: 'পথে', level: '2', favorite: false },
                    { id: 393, character: '旅游', pinyin: 'lǚ yóu', meaning: 'travel', bangla: 'ভ্রমণ', level: '2', favorite: false },
                    { id: 394, character: '绿茶', pinyin: 'lǜ chá', meaning: 'green tea', bangla: 'সবুজ চা', level: '2', favorite: false },
                    { id: 395, character: '绿色', pinyin: 'lǜ sè', meaning: 'green', bangla: 'সবুজ', level: '2', favorite: false },
                    { id: 396, character: '慢', pinyin: 'màn', meaning: 'slow', bangla: 'ধীরে', level: '2', favorite: false },
                    { id: 397, character: '没意思', pinyin: 'méi yì si', meaning: 'boring', bangla: 'বিরক্তিকর', level: '2', favorite: false },
                    { id: 398, character: '每', pinyin: 'měi', meaning: 'every', bangla: 'প্রতি', level: '2', favorite: false },
                    { id: 399, character: '门', pinyin: 'mén', meaning: 'door', bangla: 'দরজা', level: '2', favorite: false },
                    { id: 400, character: '门口', pinyin: 'mén kǒu', meaning: 'doorway', bangla: 'দরজার সামনে', level: '2', favorite: false },
                    { id: 401, character: '门票', pinyin: 'mén piào', meaning: 'ticket', bangla: 'টিকিট', level: '2', favorite: false },
                    { id: 402, character: '面', pinyin: 'miàn', meaning: 'noodle', bangla: 'নুডলস', level: '2', favorite: false },
                    { id: 403, character: '名', pinyin: 'míng', meaning: 'name', bangla: 'নাম', level: '2', favorite: false },
                    { id: 404, character: '拿', pinyin: 'ná', meaning: 'take', bangla: 'নেওয়া', level: '2', favorite: false },
                    { id: 405, character: '那么', pinyin: 'nà me', meaning: 'so', bangla: 'এত', level: '2', favorite: false },
                    { id: 406, character: '那样', pinyin: 'nà yàng', meaning: 'like that', bangla: 'ওরকম', level: '2', favorite: false },
                    { id: 407, character: '奶茶', pinyin: 'nǎi chá', meaning: 'milk tea', bangla: 'মিল্ক টি', level: '2', favorite: false },
                    { id: 408, character: '奶奶', pinyin: 'nǎi nai', meaning: 'grandma', bangla: 'দাদি', level: '2', favorite: false },
                    { id: 409, character: '男孩儿', pinyin: 'nán hái ér', meaning: 'boy', bangla: 'ছেলে', level: '2', favorite: false },
                    { id: 410, character: '鸟', pinyin: 'niǎo', meaning: 'bird', bangla: 'পাখি', level: '2', favorite: false },
                    { id: 411, character: '女孩儿', pinyin: 'nǚ hái ér', meaning: 'girl', bangla: 'মেয়ে', level: '2', favorite: false },
                    { id: 412, character: '旁边', pinyin: 'páng biān', meaning: 'beside', bangla: 'পাশে', level: '2', favorite: false },
                    { id: 413, character: '跑', pinyin: 'pǎo', meaning: 'run', bangla: 'দৌড়ানো', level: '2', favorite: false },
                    { id: 414, character: '跑步', pinyin: 'pǎo bù', meaning: 'jog', bangla: 'জগিং করা', level: '2', favorite: false },
                    { id: 415, character: '票', pinyin: 'piào', meaning: 'ticket', bangla: 'টিকিট', level: '2', favorite: false },
                    { id: 416, character: '妻子', pinyin: 'qī zi', meaning: 'wife', bangla: 'স্ত্রী', level: '2', favorite: false },
                    { id: 417, character: '起来', pinyin: 'qǐ lái', meaning: 'get up', bangla: 'উঠে দাঁড়ানো', level: '2', favorite: false },
                    { id: 418, character: '前面', pinyin: 'qián miàn', meaning: 'front', bangla: 'সামনে', level: '2', favorite: false },
                    { id: 419, character: '晴', pinyin: 'qíng', meaning: 'sunny', bangla: 'রোদেলা', level: '2', favorite: false },
                    { id: 420, character: '球', pinyin: 'qiú', meaning: 'ball', bangla: 'বল', level: '2', favorite: false },
                    { id: 421, character: '让', pinyin: 'ràng', meaning: 'let', bangla: 'দেওয়া', level: '2', favorite: false },
                    { id: 422, character: '肉', pinyin: 'ròu', meaning: 'meat', bangla: 'মাংস', level: '2', favorite: false },
                    { id: 423, character: '商场', pinyin: 'shāng chǎng', meaning: 'mall', bangla: 'মল', level: '2', favorite: false },
                    { id: 424, character: '上来', pinyin: 'shàng lái', meaning: 'come up', bangla: 'উপরে আসা', level: '2', favorite: false },
                    { id: 425, character: '上面', pinyin: 'shàng miàn', meaning: 'above', bangla: 'উপরে', level: '2', favorite: false },
                    { id: 426, character: '上去', pinyin: 'shàng qù', meaning: 'go up', bangla: 'উপরে যাওয়া', level: '2', favorite: false },
                    { id: 427, character: '上网', pinyin: 'shàng wǎng', meaning: 'surf the internet', bangla: 'ইন্টারনেট ব্রাউজ করা', level: '2', favorite: false },
                    { id: 428, character: '身体', pinyin: 'shēn tǐ', meaning: 'body', bangla: 'শরীর', level: '2', favorite: false },
                    { id: 429, character: '生日', pinyin: 'shēng rì', meaning: 'birthday', bangla: 'জন্মদিন', level: '2', favorite: false },
                    { id: 430, character: '时', pinyin: 'shí', meaning: 'time', bangla: 'সময়', level: '2', favorite: false },
                    { id: 431, character: '事情', pinyin: 'shì qing', meaning: 'thing', bangla: 'বিষয়', level: '2', favorite: false },
                    { id: 432, character: '手', pinyin: 'shǒu', meaning: 'hand', bangla: 'হাত', level: '2', favorite: false },
                    { id: 433, character: '手表', pinyin: 'shǒu biǎo', meaning: 'watch', bangla: 'ঘড়ি', level: '2', favorite: false },
                    { id: 434, character: '书包', pinyin: 'shū bāo', meaning: 'schoolbag', bangla: 'স্কুল ব্যাগ', level: '2', favorite: false },
                    { id: 435, character: '舒服', pinyin: 'shū fu', meaning: 'comfortable', bangla: 'আরামদায়ক', level: '2', favorite: false },
                    { id: 436, character: '送', pinyin: 'sòng', meaning: 'send', bangla: 'পাঠানো', level: '2', favorite: false },
                    { id: 437, character: '虽然', pinyin: 'suī rán', meaning: 'although', bangla: 'যদিও', level: '2', favorite: false },
                    { id: 438, character: '所以', pinyin: 'suǒ yǐ', meaning: 'so', bangla: 'তাই', level: '2', favorite: false },
                    { id: 439, character: '疼', pinyin: 'téng', meaning: 'hurt', bangla: 'ব্যথা করা', level: '2', favorite: false },
                    { id: 440, character: '踢', pinyin: 'tī', meaning: 'kick', bangla: 'লাথি মারা', level: '2', favorite: false },
                    { id: 441, character: '题', pinyin: 'tí', meaning: 'question', bangla: 'প্রশ্ন', level: '2', favorite: false },
                    { id: 442, character: '条', pinyin: 'tiáo', meaning: '(measure word)', bangla: 'পরিমাপক শব্দ', level: '2', favorite: false },
                    { id: 443, character: '跳舞', pinyin: 'tiào wǔ', meaning: 'dance', bangla: 'নাচ', level: '2', favorite: false },
                    { id: 444, character: '头', pinyin: 'tóu', meaning: 'head', bangla: 'মাথা', level: '2', favorite: false },
                    { id: 445, character: '外国', pinyin: 'wài guó', meaning: 'foreign country', bangla: 'বিদেশ', level: '2', favorite: false },
                    { id: 446, character: '外面', pinyin: 'wài miàn', meaning: 'outside', bangla: 'বাইরে', level: '2', favorite: false },
                    { id: 447, character: '完', pinyin: 'wán', meaning: 'finish', bangla: 'শেষ করা', level: '2', favorite: false },
                    { id: 448, character: '万', pinyin: 'wàn', meaning: 'ten thousand', bangla: 'দশ হাজার', level: '2', favorite: false },
                    { id: 449, character: '往', pinyin: 'wǎng', meaning: 'toward', bangla: 'দিকে', level: '2', favorite: false },
                    { id: 450, character: '网上', pinyin: 'wǎng shàng', meaning: 'online', bangla: 'অনলাইনে', level: '2', favorite: false },
                    { id: 451, character: '忘', pinyin: 'wàng', meaning: 'forget', bangla: 'ভুলে যাওয়া', level: '2', favorite: false },
                    { id: 452, character: '位', pinyin: 'wèi', meaning: '(honorific measure word for people)', bangla: 'ব্যক্তির সম্মানসূচক পরিমাপক', level: '2', favorite: false },
                    { id: 453, character: '为什么', pinyin: 'wèi shén me', meaning: 'why', bangla: 'কেন', level: '2', favorite: false },
                    { id: 454, character: '希望', pinyin: 'xī wàng', meaning: 'hope', bangla: 'আশা করা', level: '2', favorite: false },
                    { id: 455, character: '洗', pinyin: 'xǐ', meaning: 'wash', bangla: 'ধোয়া', level: '2', favorite: false },
                    { id: 456, character: '洗手间', pinyin: 'xǐ shǒu jiān', meaning: 'restroom', bangla: 'টয়লেট', level: '2', favorite: false },
                    { id: 457, character: '下来', pinyin: 'xià lái', meaning: 'come down', bangla: 'নিচে আসা', level: '2', favorite: false },
                    { id: 458, character: '下面', pinyin: 'xià miàn', meaning: 'below', bangla: 'নিচে', level: '2', favorite: false },
                    { id: 459, character: '下去', pinyin: 'xià qù', meaning: 'go down', bangla: 'নিচে যাওয়া', level: '2', favorite: false },
                    { id: 460, character: '小孩儿', pinyin: 'xiǎo hái ér', meaning: 'child', bangla: 'শিশু', level: '2', favorite: false },
                    { id: 461, character: '小时候', pinyin: 'xiǎo shí hou', meaning: 'childhood', bangla: 'শৈশব', level: '2', favorite: false },
                    { id: 462, character: '笑', pinyin: 'xiào', meaning: 'laugh', bangla: 'হাসা', level: '2', favorite: false },
                    { id: 463, character: '姓', pinyin: 'xìng', meaning: 'surname', bangla: 'পদবি', level: '2', favorite: false },
                    { id: 464, character: '姓名', pinyin: 'xìng míng', meaning: 'full name', bangla: 'পুরো নাম', level: '2', favorite: false },
                    { id: 465, character: '颜色', pinyin: 'yán sè', meaning: 'color', bangla: 'রং', level: '2', favorite: false },
                    { id: 466, character: '眼睛', pinyin: 'yǎn jing', meaning: 'eye', bangla: 'চোখ', level: '2', favorite: false },
                    { id: 467, character: '药', pinyin: 'yào', meaning: 'medicine', bangla: 'ওষুধ', level: '2', favorite: false },
                    { id: 468, character: '药店', pinyin: 'yào diàn', meaning: 'pharmacy', bangla: 'ঔষধের দোকান', level: '2', favorite: false },
                    { id: 469, character: '爷爷', pinyin: 'yé ye', meaning: 'grandpa', bangla: 'দাদু', level: '2', favorite: false },
                    { id: 470, character: '一会儿', pinyin: 'yī huìr', meaning: 'a while', bangla: 'একটু পরে', level: '2', favorite: false },
                    { id: 471, character: '已经', pinyin: 'yǐ jīng', meaning: 'already', bangla: 'ইতিমধ্যে', level: '2', favorite: false },
                    { id: 472, character: '一起', pinyin: 'yī qǐ', meaning: 'together', bangla: 'একসাথে', level: '2', favorite: false },
                    { id: 473, character: '意思', pinyin: 'yì si', meaning: 'meaning', bangla: 'অর্থ', level: '2', favorite: false },
                    { id: 474, character: '阴', pinyin: 'yīn', meaning: 'overcast', bangla: 'মেঘলা', level: '2', favorite: false },
                    { id: 475, character: '因为', pinyin: 'yīn wèi', meaning: 'because', bangla: 'কারণ', level: '2', favorite: false },
                    { id: 476, character: '游', pinyin: 'yóu', meaning: 'swim', bangla: 'সাঁতার কাটা', level: '2', favorite: false },
                    { id: 477, character: '游泳', pinyin: 'yóu yǒng', meaning: 'swim', bangla: 'সাঁতার', level: '2', favorite: false },
                    { id: 478, character: '有意思', pinyin: 'yǒu yì si', meaning: 'interesting', bangla: 'মজার', level: '2', favorite: false },
                    { id: 479, character: '有时', pinyin: 'yǒu shí', meaning: 'sometimes', bangla: 'কখনো কখনো', level: '2', favorite: false },
                    { id: 480, character: '右', pinyin: 'yòu', meaning: 'right', bangla: 'ডান', level: '2', favorite: false },
                    { id: 481, character: '右边', pinyin: 'yòu biān', meaning: 'right side', bangla: 'ডান দিক', level: '2', favorite: false },
                    { id: 482, character: '鱼', pinyin: 'yú', meaning: 'fish', bangla: 'মাছ', level: '2', favorite: false },
                    { id: 483, character: '远', pinyin: 'yuǎn', meaning: 'far', bangla: 'দূরে', level: '2', favorite: false },
                    { id: 484, character: '运动', pinyin: 'yùn dòng', meaning: 'exercise', bangla: 'ব্যায়াম', level: '2', favorite: false },
                    { id: 485, character: '站', pinyin: 'zhàn', meaning: 'stand', bangla: 'দাঁড়ানো', level: '2', favorite: false },
                    { id: 486, character: '丈夫', pinyin: 'zhàng fu', meaning: 'husband', bangla: 'স্বামী', level: '2', favorite: false },
                    { id: 487, character: '这么', pinyin: 'zhè me', meaning: 'this way', bangla: 'এভাবে', level: '2', favorite: false },
                    { id: 488, character: '这样', pinyin: 'zhè yàng', meaning: 'like this', bangla: 'এরকম', level: '2', favorite: false },
                    { id: 489, character: '着', pinyin: 'zhe', meaning: '(aspect particle)', bangla: 'চলমান অবস্থা', level: '2', favorite: false },
                    { id: 490, character: '正', pinyin: 'zhèng', meaning: 'just', bangla: 'ঠিক', level: '2', favorite: false },
                    { id: 491, character: '周', pinyin: 'zhōu', meaning: 'week', bangla: 'সপ্তাহ', level: '2', favorite: false },
                    { id: 492, character: '准备', pinyin: 'zhǔn bèi', meaning: 'prepare', bangla: 'প্রস্তুত করা', level: '2', favorite: false },
                    { id: 493, character: '自己', pinyin: 'zì jǐ', meaning: 'oneself', bangla: 'নিজে', level: '2', favorite: false },
                    { id: 494, character: '走', pinyin: 'zǒu', meaning: 'walk', bangla: 'হাঁটা', level: '2', favorite: false },
                    { id: 495, character: '走路', pinyin: 'zǒu lù', meaning: 'walk', bangla: 'হেঁটে যাওয়া', level: '2', favorite: false },
                    { id: 496, character: '足球', pinyin: 'zú qiú', meaning: 'football', bangla: 'ফুটবল', level: '2', favorite: false },
                    { id: 497, character: '最', pinyin: 'zuì', meaning: 'most', bangla: 'সবচেয়ে', level: '2', favorite: false },
                    { id: 498, character: '左', pinyin: 'zuǒ', meaning: 'left', bangla: 'বাম', level: '2', favorite: false },
                    { id: 499, character: '左边', pinyin: 'zuǒ biān', meaning: 'left side', bangla: 'বাম দিক', level: '2', favorite: false },
                    { id: 500, character: '啊', pinyin: 'ā', meaning: 'ah', bangla: 'আহ', level: '2', favorite: false },
                    
                    // HSK Level 3 words with Bangla meanings
                    { id: 1, character: '爱心', pinyin: 'àixīn', meaning: 'love', bangla: 'ভালোবাসা', level: '3', favorite: false },

                    { id: 2, character: '安排', pinyin: 'ānpái', meaning: 'arrange', bangla: 'ব্যবস্থা করা', level: '3', favorite: false },

                    { id: 3, character: '安装', pinyin: 'ānzhuāng', meaning: 'install', bangla: 'ইনস্টল করা', level: '3', favorite: false },

                    { id: 4, character: '按', pinyin: 'àn', meaning: 'press; push; check; restrain', bangla: 'চাপ দেওয়া; নিয়ন্ত্রণ করা', level: '3', favorite: false },

                    { id: 5, character: '按照', pinyin: 'ànzhào', meaning: 'according to', bangla: 'অনুযায়ী', level: '3', favorite: false },

                    { id: 6, character: '把', pinyin: 'bǎ', meaning: '(particle marking direct object)', bangla: '(কর্তৃক/কে)', level: '3', favorite: false },

                    { id: 7, character: '把', pinyin: 'bǎ', meaning: '(measure word)', bangla: 'খণ্ড; পিস', level: '3', favorite: false },

                    { id: 8, character: '把握', pinyin: 'bǎwò', meaning: 'grasp', bangla: 'আঁকড়ানো; বুঝতে পারা', level: '3', favorite: false },

                    { id: 9, character: '白', pinyin: 'bái', meaning: 'without results; in vain', bangla: 'বৃথা; বিফলে যাওয়া', level: '3', favorite: false },

                    { id: 10, character: '白菜', pinyin: 'bái cài', meaning: 'Chinese cabbage', bangla: 'চাইনিজ ক্যাবেজ', level: '3', favorite: false },

                    { id: 11, character: '班级', pinyin: 'bān jí', meaning: 'class', bangla: 'শ্রেণি', level: '3', favorite: false },

                    { id: 12, character: '搬', pinyin: 'bān', meaning: 'turn; move', bangla: 'সরানো', level: '3', favorite: false },

                    { id: 13, character: '搬家', pinyin: 'bān jiā', meaning: 'move; move house', bangla: 'বাড়ি সরানো', level: '3', favorite: false },

                    { id: 14, character: '板', pinyin: 'bǎn', meaning: 'board; plank; shutter', bangla: 'বোর্ড; পাটাতন', level: '3', favorite: false },

                    { id: 15, character: '办理', pinyin: 'bànlǐ', meaning: 'handle', bangla: 'পরিচালনা করা', level: '3', favorite: false },

                    { id: 16, character: '保', pinyin: 'bǎo', meaning: 'defend; protect; keep; guarantee', bangla: 'রক্ষা করা; নিশ্চিত করা', level: '3', favorite: false },

                    { id: 17, character: '保安', pinyin: 'bǎo ān', meaning: 'security guard; public security', bangla: 'নিরাপত্তা প্রহরী', level: '3', favorite: false },

                    { id: 18, character: '保持', pinyin: 'bǎochí', meaning: 'keep', bangla: 'ধরে রাখা', level: '3', favorite: false },

                    { id: 19, character: '保存', pinyin: 'bǎocún', meaning: 'preservation', bangla: 'সংরক্ষণ করা', level: '3', favorite: false },

                    { id: 20, character: '保护', pinyin: 'bǎohù', meaning: 'protect', bangla: 'রক্ষা করা', level: '3', favorite: false },

                    { id: 21, character: '保留', pinyin: 'bǎoliú', meaning: 'retain', bangla: 'ধরে রাখা', level: '3', favorite: false },

                    { id: 22, character: '保险', pinyin: 'bǎoxiǎn', meaning: 'insurance', bangla: 'বীমা', level: '3', favorite: false },

                    { id: 23, character: '保证', pinyin: 'bǎozhèng', meaning: 'ensure', bangla: 'নিশ্চিত করা', level: '3', favorite: false },

                    { id: 24, character: '报', pinyin: 'bào', meaning: 'newspaper; report; telegram', bangla: 'পত্রিকা; রিপোর্ট', level: '3', favorite: false },

                    { id: 25, character: '报到', pinyin: 'bàodào', meaning: 'register; check in', bangla: 'নিবন্ধন করা', level: '3', favorite: false },

                    { id: 26, character: '报道', pinyin: 'bàodào', meaning: 'report', bangla: 'প্রতিবেদন দেওয়া', level: '3', favorite: false },

                    { id: 27, character: '报告', pinyin: 'bàogào', meaning: 'presentation', bangla: 'প্রতিবেদন', level: '3', favorite: false },

                    { id: 28, character: '背', pinyin: 'bèi', meaning: 'back', bangla: 'পিঠ', level: '3', favorite: false },

                    { id: 29, character: '北部', pinyin: 'běi bù', meaning: 'north', bangla: 'উত্তরাঞ্চল', level: '3', favorite: false },

                    { id: 30, character: '背', pinyin: 'bèi', meaning: 'back of body/object', bangla: 'পিছনের দিক', level: '3', favorite: false },

                    { id: 31, character: '背后', pinyin: 'bèi hòu', meaning: 'behind; at the back', bangla: 'পিছনে', level: '3', favorite: false },

                    { id: 32, character: '被', pinyin: 'bèi', meaning: 'cover', bangla: 'ঢাকা', level: '3', favorite: false },

                    { id: 33, character: '被子', pinyin: 'bèizi', meaning: 'quilt', bangla: 'লেপ', level: '3', favorite: false },

                    { id: 34, character: '本来', pinyin: 'běnlái', meaning: 'originally', bangla: 'মূলত; প্রথমে', level: '3', favorite: false },

                    { id: 35, character: '本领', pinyin: 'běnlǐng', meaning: 'ability', bangla: 'দক্ষতা', level: '3', favorite: false },

                    { id: 36, character: '本事', pinyin: 'běnshi', meaning: 'skill', bangla: 'ক্ষমতা', level: '3', favorite: false },

                    { id: 37, character: '比较', pinyin: 'bǐjiào', meaning: 'compare', bangla: 'তুলনা করা', level: '3', favorite: false },

                    { id: 38, character: '比例', pinyin: 'bǐlì', meaning: 'proportion', bangla: 'অনুপাত', level: '3', favorite: false },

                    { id: 39, character: '比赛', pinyin: 'bǐsài', meaning: 'match', bangla: 'প্রতিযোগিতা', level: '3', favorite: false },

                    { id: 40, character: '必然', pinyin: 'bìrán', meaning: 'inevitable', bangla: 'অবশ্যম্ভাবী', level: '3', favorite: false },

                    { id: 41, character: '必要', pinyin: 'bìyào', meaning: 'necessary', bangla: 'প্রয়োজনীয়', level: '3', favorite: false },

                    { id: 42, character: '变化', pinyin: 'biànhuà', meaning: 'change', bangla: 'পরিবর্তন', level: '3', favorite: false },

                    { id: 43, character: '变为', pinyin: 'biàn wéi', meaning: 'become; turn into', bangla: 'হয়ে যাওয়া', level: '3', favorite: false },

                    { id: 44, character: '标题', pinyin: 'biāotí', meaning: 'title; heading', bangla: 'শিরোনাম', level: '3', favorite: false },

                    { id: 45, character: '标准', pinyin: 'biāozhǔn', meaning: 'standard', bangla: 'মানদণ্ড', level: '3', favorite: false },

                    { id: 46, character: '表达', pinyin: 'biǎodá', meaning: 'expression', bangla: 'প্রকাশ', level: '3', favorite: false },

                    { id: 47, character: '表格', pinyin: 'biǎogé', meaning: 'form', bangla: 'ফর্ম; টেবিল', level: '3', favorite: false },

                    { id: 48, character: '表面', pinyin: 'biǎomiàn', meaning: 'surface', bangla: 'পৃষ্ঠতল', level: '3', favorite: false },

                    { id: 49, character: '表明', pinyin: 'biǎomíng', meaning: 'indicate', bangla: 'ইঙ্গিত করা', level: '3', favorite: false },

                    { id: 50, character: '表现', pinyin: 'biǎoxiàn', meaning: 'performance', bangla: 'কর্মক্ষমতা', level: '3', favorite: false },
                    { id: 51, character: '表演', pinyin: 'biǎoyǎn', meaning: 'perform', bangla: 'পরিবেশন করা', level: '3', favorite: false },

                    { id: 52, character: '并', pinyin: 'bìng', meaning: 'and; also; equally; simultaneously', bangla: 'এবং; ও', level: '3', favorite: false },

                    { id: 53, character: '并且', pinyin: 'bìngqiě', meaning: 'also', bangla: 'এবং', level: '3', favorite: false },

                    { id: 54, character: '播出', pinyin: 'bō chū', meaning: 'broadcast; on the air', bangla: 'সম্প্রচার করা', level: '3', favorite: false },

                    { id: 55, character: '播放', pinyin: 'bōfàng', meaning: 'play (audio/video)', bangla: 'বাজানো', level: '3', favorite: false },

                    { id: 56, character: '不必', pinyin: 'bú bì', meaning: 'need not; not have to', bangla: 'উচিত নয়', level: '3', favorite: false },

                    { id: 57, character: '不断', pinyin: 'búduàn', meaning: 'constantly', bangla: 'অবিরাম', level: '3', favorite: false },

                    { id: 58, character: '不论', pinyin: 'bú lùn', meaning: 'whether; no matter', bangla: 'যাই হোক না কেন', level: '3', favorite: false },

                    { id: 59, character: '补', pinyin: 'bǔ', meaning: 'repair; mend; supplement', bangla: 'মেরামত করা; পূরণ করা', level: '3', favorite: false },

                    { id: 60, character: '补充', pinyin: 'bǔchōng', meaning: 'supplement', bangla: 'পূরণ করা', level: '3', favorite: false },

                    { id: 61, character: '不安', pinyin: 'bù ān', meaning: 'uneasy', bangla: 'উদ্বেগজনক', level: '3', favorite: false },

                    { id: 62, character: '不得不', pinyin: 'bùdébù', meaning: 'cannot but', bangla: 'বাধ্য হতে হয়', level: '3', favorite: false },

                    { id: 63, character: '不光', pinyin: 'bù guāng', meaning: 'not only', bangla: 'শুধু নয়', level: '3', favorite: false },

                    { id: 64, character: '不仅', pinyin: 'bùjǐn', meaning: 'not only', bangla: 'শুধু নয়', level: '3', favorite: false },

                    { id: 65, character: '布', pinyin: 'bù', meaning: 'cloth', bangla: 'কাপড়', level: '3', favorite: false },

                    { id: 66, character: '步', pinyin: 'bù', meaning: 'step; stage; walk', bangla: 'পদক্ষেপ; ধাপ', level: '3', favorite: false },

                    { id: 67, character: '部', pinyin: 'bù', meaning: 'unit; ministry; department', bangla: 'অংশ; বিভাগ', level: '3', favorite: false },

                    { id: 68, character: '部门', pinyin: 'bùmén', meaning: 'department', bangla: 'বিভাগ', level: '3', favorite: false },

                    { id: 69, character: '部长', pinyin: 'bù zhǎng', meaning: 'minister; head of department', bangla: 'মন্ত্রী; বিভাগীয় প্রধান', level: '3', favorite: false },

                    { id: 70, character: '才能', pinyin: 'cái néng', meaning: 'talent; ability; gift', bangla: 'প্রতিভা; দক্ষতা', level: '3', favorite: false },

                    { id: 71, character: '采取', pinyin: 'cǎiqǔ', meaning: 'take; adopt', bangla: 'গ্রহণ করা', level: '3', favorite: false },

                    { id: 72, character: '采用', pinyin: 'cǎi yòng', meaning: 'adopt; use; employ', bangla: 'গ্রহণ করা; ব্যবহার করা', level: '3', favorite: false },

                    { id: 73, character: '彩色', pinyin: 'cǎi sè', meaning: 'multicolor; color', bangla: 'বর্ণহীন', level: '3', favorite: false },

                    { id: 74, character: '曾经', pinyin: 'céngjīng', meaning: 'once; ever', bangla: 'একবার; আগে', level: '3', favorite: false },

                    { id: 75, character: '产生', pinyin: 'chǎnshēng', meaning: 'produce; arise', bangla: 'সৃষ্টি করা', level: '3', favorite: false },

                    { id: 76, character: '长城', pinyin: 'Chángchéng', meaning: 'The Great Wall', bangla: 'গ্রেট ওয়াল', level: '3', favorite: false },

                    { id: 77, character: '长处', pinyin: 'cháng chù', meaning: 'strength; strong point', bangla: 'শক্তিমত্তা', level: '3', favorite: false },

                    { id: 78, character: '长期', pinyin: 'cháng qī', meaning: 'long-term; over a long time', bangla: 'দীর্ঘমেয়াদী', level: '3', favorite: false },

                    { id: 79, character: '厂', pinyin: 'chǎng', meaning: 'factory; mill; plant', bangla: 'কারখানা', level: '3', favorite: false },

                    { id: 80, character: '场合', pinyin: 'chǎnghé', meaning: 'occasion; situation', bangla: 'অনুষ্ঠান', level: '3', favorite: false },

                    { id: 81, character: '场所', pinyin: 'chǎngsuǒ', meaning: 'place; location', bangla: 'স্থান', level: '3', favorite: false },

                    { id: 82, character: '超级', pinyin: 'chāojí', meaning: 'super', bangla: 'সুপার', level: '3', favorite: false },

                    { id: 83, character: '朝', pinyin: 'cháo', meaning: 'towards; face', bangla: 'দিকে', level: '3', favorite: false },

                    { id: 84, character: '吵', pinyin: 'chǎo', meaning: 'noisy; quarrelsome', bangla: 'শোরগোল; গোলমাল', level: '3', favorite: false },

                    { id: 85, character: '吵架', pinyin: 'chǎojià', meaning: 'quarrel; argue', bangla: 'ঝগড়া করা', level: '3', favorite: false },

                    { id: 86, character: '衬衫', pinyin: 'chènshān', meaning: 'shirt', bangla: 'শার্ট', level: '3', favorite: false },

                    { id: 87, character: '衬衣', pinyin: 'chèn yī', meaning: 'shirt; undergarment', bangla: 'শার্ট', level: '3', favorite: false },

                    { id: 88, character: '称为', pinyin: 'chēng wéi', meaning: 'be called; be known as', bangla: 'বলা হয়; পরিচিত', level: '3', favorite: false },

                    { id: 89, character: '成功', pinyin: 'chénggōng', meaning: 'success', bangla: 'সাফল্য', level: '3', favorite: false },

                    { id: 90, character: '成果', pinyin: 'chéngguǒ', meaning: 'achievement; result', bangla: 'অর্জন', level: '3', favorite: false },

                    { id: 91, character: '成就', pinyin: 'chéngjiù', meaning: 'accomplishment; success', bangla: 'সাফল্য', level: '3', favorite: false },

                    { id: 92, character: '成立', pinyin: 'chénglì', meaning: 'establish; found', bangla: 'প্রতিষ্ঠা করা', level: '3', favorite: false },

                    { id: 93, character: '成熟', pinyin: 'chéngshú', meaning: 'mature; ripe', bangla: 'পরিণত', level: '3', favorite: false },

                    { id: 94, character: '成员', pinyin: 'chéngyuán', meaning: 'member', bangla: 'সদস্য', level: '3', favorite: false },

                    { id: 95, character: '成长', pinyin: 'chéngzhǎng', meaning: 'grow up; develop', bangla: 'বেড়ে উঠা', level: '3', favorite: false },

                    { id: 96, character: '城', pinyin: 'chéng', meaning: 'city; town', bangla: 'শহর', level: '3', favorite: false },

                    { id: 97, character: '城市', pinyin: 'chéngshì', meaning: 'city', bangla: 'শহর', level: '3', favorite: false },

                    { id: 98, character: '程度', pinyin: 'chéngdù', meaning: 'degree; extent', bangla: 'মাত্রা', level: '3', favorite: false },

                    { id: 99, character: '持续', pinyin: 'chíxù', meaning: 'continue; last', bangla: 'চলমান; অব্যাহত', level: '3', favorite: false },

                    { id: 100, character: '充满', pinyin: 'chōngmǎn', meaning: 'full of; filled with', bangla: 'পূর্ণ; ভরা', level: '3', favorite: false },

                    { id: 101, character: '重', pinyin: 'zhòng', meaning: 'heavy; important', bangla: 'ভারী; গুরুত্বপূর্ণ', level: '3', favorite: false },

                    { id: 102, character: '初', pinyin: 'chū', meaning: 'beginning; initially', bangla: 'শুরু; প্রথমে', level: '3', favorite: false },

                    { id: 103, character: '初', pinyin: 'chū', meaning: 'prefix (first grade of junior high)', bangla: 'উপসর্গ (জুনিয়র হাই প্রথম শ্রেণি)', level: '3', favorite: false },

                    { id: 104, character: '初步', pinyin: 'chūbù', meaning: 'preliminary; initial', bangla: 'প্রাথমিক', level: '3', favorite: false },

                    { id: 105, character: '初级', pinyin: 'chūjí', meaning: 'primary; elementary', bangla: 'প্রাথমিক', level: '3', favorite: false },

                    { id: 106, character: '初中', pinyin: 'chū zhōng', meaning: 'junior high school', bangla: 'জুনিয়র হাই স্কুল', level: '3', favorite: false },

                    { id: 107, character: '除了', pinyin: 'chúle', meaning: 'except; besides', bangla: 'ব্যতীত', level: '3', favorite: false },

                    { id: 108, character: '处理', pinyin: 'chǔlǐ', meaning: 'handle; deal with', bangla: 'পরিচালনা করা', level: '3', favorite: false },

                    { id: 109, character: '传', pinyin: 'chuán', meaning: 'pass; transmit; spread', bangla: 'প্রেরণ করা; ছড়িয়ে দেওয়া', level: '3', favorite: false },

                    { id: 110, character: '传播', pinyin: 'chuánbō', meaning: 'spread; disseminate', bangla: 'ছড়িয়ে দেওয়া', level: '3', favorite: false },

                    { id: 111, character: '传来', pinyin: 'chuán lái', meaning: 'come through; arrive', bangla: 'আসা; পৌঁছানো', level: '3', favorite: false },

                    { id: 112, character: '传说', pinyin: 'chuánshuō', meaning: 'legend; tradition', bangla: 'কিংবদন্তি', level: '3', favorite: false },

                    { id: 113, character: '创新', pinyin: 'chuàngxīn', meaning: 'innovate; innovation', bangla: 'উদ্ভাবন', level: '3', favorite: false },

                    { id: 114, character: '创业', pinyin: 'chuàngyè', meaning: 'start a business', bangla: 'ব্যবসা শুরু করা', level: '3', favorite: false },

                    { id: 115, character: '创造', pinyin: 'chuàngzào', meaning: 'create; produce', bangla: 'সৃষ্টি করা', level: '3', favorite: false },

                    { id: 116, character: '创作', pinyin: 'chuàngzuò', meaning: 'create (literary/artistic work)', bangla: 'সৃষ্টি; রচনা', level: '3', favorite: false },

                    { id: 117, character: '从来', pinyin: 'cónglái', meaning: 'always; at all times', bangla: 'সবসময়; কখনো না', level: '3', favorite: false },

                    { id: 118, character: '从前', pinyin: 'cóngqián', meaning: 'before; formerly', bangla: 'আগে; পূর্বে', level: '3', favorite: false },

                    { id: 119, character: '从事', pinyin: 'cóngshì', meaning: 'be engaged in; work on', bangla: 'জড়িত থাকা', level: '3', favorite: false },

                    { id: 120, character: '村', pinyin: 'cūn', meaning: 'village; hamlet', bangla: 'গ্রাম', level: '3', favorite: false },

                    { id: 121, character: '存', pinyin: 'cún', meaning: 'save; deposit; exist', bangla: 'জমা করা; থাকা', level: '3', favorite: false },

                    { id: 122, character: '存在', pinyin: 'cúnzài', meaning: 'exist; existence', bangla: 'অস্তিত্ব', level: '3', favorite: false },

                    { id: 123, character: '错误', pinyin: 'cuòwù', meaning: 'mistake; error', bangla: 'ভুল', level: '3', favorite: false },

                    { id: 124, character: '达到', pinyin: 'dádào', meaning: 'reach; achieve', bangla: 'পৌঁছানো; অর্জন করা', level: '3', favorite: false },

                    { id: 125, character: '打破', pinyin: 'dǎ pò', meaning: 'break; smash', bangla: 'ভাঙা', level: '3', favorite: false },

                    { id: 126, character: '打听', pinyin: 'dǎting', meaning: 'inquire; ask about', bangla: 'জিজ্ঞেস করা', level: '3', favorite: false },

                    { id: 127, character: '大概', pinyin: 'dàgài', meaning: 'probably; roughly', bangla: 'সম্ভবত; আন্দাজে', level: '3', favorite: false },

                    { id: 128, character: '大使馆', pinyin: 'dàshǐguǎn', meaning: 'embassy', bangla: 'দূতাবাস', level: '3', favorite: false },

                    { id: 129, character: '大约', pinyin: 'dàyuē', meaning: 'about; approximately', bangla: 'প্রায়', level: '3', favorite: false },

                    { id: 130, character: '大夫', pinyin: 'dàifu', meaning: 'doctor (traditional term)', bangla: 'ডাক্তার', level: '3', favorite: false },
                    { id: 131, character: '代', pinyin: 'dài', meaning: 'substitute; replace; generation', bangla: 'প্রতিনিধি; প্রজন্ম', level: '3', favorite: false },

                    { id: 132, character: '代表', pinyin: 'dàibiǎo', meaning: 'representative; represent', bangla: 'প্রতিনিধি; প্রতিনিধিত্ব করা', level: '3', favorite: false },

                    { id: 133, character: '代表团', pinyin: 'dài biǎo tuán', meaning: 'delegation; mission', bangla: 'প্রতিনিধি দল', level: '3', favorite: false },

                    { id: 134, character: '带动', pinyin: 'dài dòng', meaning: 'drive; spur; lead', bangla: 'চালনা করা; উদ্বুদ্ধ করা', level: '3', favorite: false },

                    { id: 135, character: '带领', pinyin: 'dàilǐng', meaning: 'lead; guide', bangla: 'নেতৃত্ব দেওয়া', level: '3', favorite: false },

                    { id: 136, character: '单元', pinyin: 'dānyuán', meaning: 'unit; module', bangla: 'একক; ইউনিট', level: '3', favorite: false },

                    { id: 137, character: '当初', pinyin: 'dāngchū', meaning: 'originally; at that time', bangla: 'শুরুতে; তখন', level: '3', favorite: false },

                    { id: 138, character: '当地', pinyin: 'dāngdì', meaning: 'local; local area', bangla: 'স্থানীয়', level: '3', favorite: false },

                    { id: 139, character: '当然', pinyin: 'dāngrán', meaning: 'of course; naturally', bangla: 'অবশ্যই', level: '3', favorite: false },

                    { id: 140, character: '当中', pinyin: 'dāng zhōng', meaning: 'among; in the middle', bangla: 'মাঝখানে; এর মধ্যে', level: '3', favorite: false },

                    { id: 141, character: '刀', pinyin: 'dāo', meaning: 'knife', bangla: 'ছুরি', level: '3', favorite: false },

                    { id: 142, character: '导演', pinyin: 'dǎoyǎn', meaning: 'director (film/theater)', bangla: 'পরিচালক', level: '3', favorite: false },

                    { id: 143, character: '到达', pinyin: 'dàodá', meaning: 'arrive', bangla: 'পৌঁছানো', level: '3', favorite: false },

                    { id: 144, character: '到底', pinyin: 'dàodǐ', meaning: 'finally; after all', bangla: 'শেষ পর্যন্ত; সবশেষে', level: '3', favorite: false },

                    { id: 145, character: '得分', pinyin: 'dé fēn', meaning: 'score points', bangla: 'স্কোর করা', level: '3', favorite: false },

                    { id: 146, character: '等待', pinyin: 'děngdài', meaning: 'wait for', bangla: 'অপেক্ষা করা', level: '3', favorite: false },

                    { id: 147, character: '底下', pinyin: 'dǐ xià', meaning: 'under; below', bangla: 'নিচে', level: '3', favorite: false },

                    { id: 148, character: '地区', pinyin: 'dìqū', meaning: 'region; area', bangla: 'অঞ্চল', level: '3', favorite: false },

                    { id: 149, character: '电视剧', pinyin: 'diàn shì jù', meaning: 'TV series; drama', bangla: 'টিভি ধারাবাহিক', level: '3', favorite: false },

                    { id: 150, character: '电视台', pinyin: 'diàn shì tái', meaning: 'television station', bangla: 'টেলিভিশন স্টেশন', level: '3', favorite: false },

                    { id: 151, character: '电台', pinyin: 'diàntái', meaning: 'radio station', bangla: 'রেডিও স্টেশন', level: '3', favorite: false },

                    { id: 152, character: '电子邮件', pinyin: 'diànzǐyóujiàn', meaning: 'email; e-mail', bangla: 'ইমেইল', level: '3', favorite: false },

                    { id: 153, character: '调', pinyin: 'diào', meaning: 'transfer; shift; adjust', bangla: 'স্থানান্তর; সামঞ্জস্য করা', level: '3', favorite: false },

                    { id: 154, character: '调查', pinyin: 'diàochá', meaning: 'investigation; survey', bangla: 'তদন্ত; জরিপ', level: '3', favorite: false },

                    { id: 155, character: '订', pinyin: 'dìng', meaning: 'order; book; conclude', bangla: 'অর্ডার করা; নির্ধারণ করা', level: '3', favorite: false },

                    { id: 156, character: '定期', pinyin: 'dìngqī', meaning: 'regular; on a schedule', bangla: 'নিয়মিত', level: '3', favorite: false },

                    { id: 157, character: '东部', pinyin: 'dōng bù', meaning: 'eastern part', bangla: 'পূর্বাঞ্চল', level: '3', favorite: false },

                    { id: 158, character: '动力', pinyin: 'dònglì', meaning: 'power; motivation', bangla: 'শক্তি; প্রেরণা', level: '3', favorite: false },

                    { id: 159, character: '动人', pinyin: 'dòng rén', meaning: 'moving; touching', bangla: 'অনুপ্রাণিত করা; মর্মস্পর্শী', level: '3', favorite: false },

                    { id: 160, character: '读者', pinyin: 'dú zhě', meaning: 'reader', bangla: 'পাঠক', level: '3', favorite: false },

                    { id: 161, character: '短处', pinyin: 'duǎn chù', meaning: 'shortcoming; weakness', bangla: 'খাপছাড়া; দুর্বলতা', level: '3', favorite: false },

                    { id: 162, character: '短裤', pinyin: 'duǎn kù', meaning: 'shorts', bangla: 'হাফপ্যান্ট', level: '3', favorite: false },

                    { id: 163, character: '短期', pinyin: 'duǎn qī', meaning: 'short-term', bangla: 'স্বল্পমেয়াদী', level: '3', favorite: false },

                    { id: 164, character: '断', pinyin: 'duàn', meaning: 'break; cut off', bangla: 'ভাঙা; বিচ্ছিন্ন করা', level: '3', favorite: false },

                    { id: 165, character: '队员', pinyin: 'duì yuán', meaning: 'team member', bangla: 'দলের সদস্য', level: '3', favorite: false },

                    { id: 166, character: '对待', pinyin: 'duìdài', meaning: 'treat; deal with', bangla: 'ব্যবহার করা; আচরণ করা', level: '3', favorite: false },

                    { id: 167, character: '对方', pinyin: 'duìfāng', meaning: 'other party; opponent', bangla: 'প্রতিপক্ষ', level: '3', favorite: false },

                    { id: 168, character: '对手', pinyin: 'duìshǒu', meaning: 'opponent; rival', bangla: 'প্রতিদ্বন্দ্বী', level: '3', favorite: false },

                    { id: 169, character: '对象', pinyin: 'duìxiàng', meaning: 'target; object; partner', bangla: 'লক্ষ্য; ব্যক্তি; সঙ্গী', level: '3', favorite: false },

                    { id: 170, character: '顿', pinyin: 'dùn', meaning: 'meal; bout', bangla: 'বার; খাওয়া', level: '3', favorite: false },

                    { id: 171, character: '发表', pinyin: 'fābiǎo', meaning: 'publish; announce', bangla: 'প্রকাশ করা', level: '3', favorite: false },

                    { id: 172, character: '发出', pinyin: 'fā chū', meaning: 'send out; emit', bangla: 'প্রেরণ করা; নির্গত করা', level: '3', favorite: false },

                    { id: 173, character: '发达', pinyin: 'fādá', meaning: 'developed; flourishing', bangla: 'উন্নত', level: '3', favorite: false },

                    { id: 174, character: '发动', pinyin: 'fādòng', meaning: 'launch; start; mobilize', bangla: 'শুরু করা; উদ্দীপ্ত করা', level: '3', favorite: false },

                    { id: 175, character: '发明', pinyin: 'fāmíng', meaning: 'invention', bangla: 'উদ্ভাবন', level: '3', favorite: false },

                    { id: 176, character: '发生', pinyin: 'fāshēng', meaning: 'happen; occur', bangla: 'ঘটা', level: '3', favorite: false },

                    { id: 177, character: '发送', pinyin: 'fā sòng', meaning: 'send; transmit', bangla: 'প্রেরণ করা', level: '3', favorite: false },

                    { id: 178, character: '发言', pinyin: 'fāyán', meaning: 'speak; make a speech', bangla: 'বক্তব্য রাখা', level: '3', favorite: false },

                    { id: 179, character: '发展', pinyin: 'fāzhǎn', meaning: 'develop; development', bangla: 'উন্নয়ন', level: '3', favorite: false },

                    { id: 180, character: '反对', pinyin: 'fǎnduì', meaning: 'oppose; object to', bangla: 'বিরোধিতা করা', level: '3', favorite: false },

                    { id: 181, character: '反复', pinyin: 'fǎnfù', meaning: 'repeatedly; again and again', bangla: 'বারবার', level: '3', favorite: false },

                    { id: 182, character: '反应', pinyin: 'fǎnyìng', meaning: 'reaction; response', bangla: 'প্রতিক্রিয়া', level: '3', favorite: false },

                    { id: 183, character: '反正', pinyin: 'fǎnzhèng', meaning: 'anyway; in any case', bangla: 'যাই হোক', level: '3', favorite: false },

                    { id: 184, character: '范围', pinyin: 'fànwéi', meaning: 'range; scope', bangla: 'পরিধি; সীমা', level: '3', favorite: false },

                    { id: 185, character: '方式', pinyin: 'fāngshì', meaning: 'method; manner; mode', bangla: 'পদ্ধতি; ধরন', level: '3', favorite: false },

                    { id: 186, character: '防', pinyin: 'fáng', meaning: 'guard against; defend', bangla: 'রক্ষা করা; প্রতিরক্ষা', level: '3', favorite: false },

                    { id: 187, character: '防止', pinyin: 'fángzhǐ', meaning: 'prevent; avoid', bangla: 'প্রতিরোধ করা', level: '3', favorite: false },

                    { id: 188, character: '房东', pinyin: 'fángdōng', meaning: 'landlord', bangla: 'মালিক; বাড়িওয়ালা', level: '3', favorite: false },

                    { id: 189, character: '房屋', pinyin: 'fáng wū', meaning: 'house; building', bangla: 'বাড়ি; ভবন', level: '3', favorite: false },

                    { id: 190, character: '房租', pinyin: 'fáng zū', meaning: 'rent', bangla: 'ভাড়া', level: '3', favorite: false },

                    { id: 191, character: '访问', pinyin: 'fǎngwèn', meaning: 'visit; call on', bangla: 'ভ্রমণ; সফর', level: '3', favorite: false },

                    { id: 192, character: '放到', pinyin: 'fàng dào', meaning: 'put into; place in', bangla: 'রাখা; স্থাপন করা', level: '3', favorite: false },

                    { id: 193, character: '飞行', pinyin: 'fēi xíng', meaning: 'flight; flying', bangla: 'উড্ডয়ন', level: '3', favorite: false },

                    { id: 194, character: '费', pinyin: 'fèi', meaning: 'fee; cost; expense', bangla: 'খরচ; ফি', level: '3', favorite: false },

                    { id: 195, character: '费用', pinyin: 'fèi yòng', meaning: 'cost; expenses', bangla: 'খরচ', level: '3', favorite: false },

                    { id: 196, character: '分别', pinyin: 'fēnbié', meaning: 'part; separate; distinguish', bangla: 'বিভক্ত করা; পৃথক', level: '3', favorite: false },

                    { id: 197, character: '分配', pinyin: 'fēnpèi', meaning: 'distribute; allocate', bangla: 'বণ্টন করা', level: '3', favorite: false },

                    { id: 198, character: '分组', pinyin: 'fēn zǔ', meaning: 'grouping; divide into groups', bangla: 'গোষ্ঠীভুক্ত করা', level: '3', favorite: false },

                    { id: 199, character: '丰富', pinyin: 'fēngfù', meaning: 'rich; abundant', bangla: 'সমৃদ্ধ', level: '3', favorite: false },

                    { id: 200, character: '风险', pinyin: 'fēngxiǎn', meaning: 'risk', bangla: 'ঝুঁকি', level: '3', favorite: false },

                    { id: 201, character: '否定', pinyin: 'fǒudìng', meaning: 'negate; deny', bangla: 'নির্ভর করা; অস্বীকার', level: '3', favorite: false },

                    { id: 202, character: '否认', pinyin: 'fǒurèn', meaning: 'deny; disclaim', bangla: 'অস্বীকার করা', level: '3', favorite: false },

                    { id: 203, character: '服装', pinyin: 'fúzhuāng', meaning: 'clothing; costume', bangla: 'পোশাক', level: '3', favorite: false },

                    { id: 204, character: '福', pinyin: 'fú', meaning: 'blessing; good fortune', bangla: 'ভাগ্য; কল্যাণ', level: '3', favorite: false },

                    { id: 205, character: '父母', pinyin: 'fù mǔ', meaning: 'parents', bangla: 'পিতামাতা', level: '3', favorite: false },

                    { id: 206, character: '父亲', pinyin: 'fùqīn', meaning: 'father', bangla: 'বাবা', level: '3', favorite: false },

                    { id: 207, character: '付', pinyin: 'fù', meaning: 'pay; hand over', bangla: 'প্রদান করা', level: '3', favorite: false },

                    { id: 208, character: '负责', pinyin: 'fùzé', meaning: 'be responsible for', bangla: 'দায়িত্ব নেওয়া', level: '3', favorite: false },

                    { id: 209, character: '复印', pinyin: 'fùyìn', meaning: 'photocopy', bangla: 'ফটোকপি করা', level: '3', favorite: false },

                    { id: 210, character: '复杂', pinyin: 'fùzá', meaning: 'complex; complicated', bangla: 'জটিল', level: '3', favorite: false },

                    { id: 211, character: '富', pinyin: 'fù', meaning: 'rich; wealthy', bangla: 'ধনী', level: '3', favorite: false },

                    { id: 212, character: '改进', pinyin: 'gǎijìn', meaning: 'improve; make better', bangla: 'উন্নতি করা', level: '3', favorite: false },

                    { id: 213, character: '改造', pinyin: 'gǎi zào', meaning: 'transform; remake', bangla: 'পরিবর্তন করা', level: '3', favorite: false },

                    { id: 214, character: '概念', pinyin: 'gàiniàn', meaning: 'concept; notion', bangla: 'ধারণা', level: '3', favorite: false },

                    { id: 215, character: '赶', pinyin: 'gǎn', meaning: 'catch up; hurry', bangla: 'ধাওয়া করা; তাড়াতাড়ি', level: '3', favorite: false },

                    { id: 216, character: '赶到', pinyin: 'gǎn dào', meaning: 'arrive; reach in time', bangla: 'পৌঁছানো', level: '3', favorite: false },

                    { id: 217, character: '赶紧', pinyin: 'gǎnjǐn', meaning: 'quickly; without delay', bangla: 'তাড়াতাড়ি', level: '3', favorite: false },

                    { id: 218, character: '赶快', pinyin: 'gǎnkuài', meaning: 'hurry up; quickly', bangla: 'দ্রুত; চটপট', level: '3', favorite: false },

                    { id: 219, character: '敢', pinyin: 'gǎn', meaning: 'dare; have courage', bangla: 'সাহস করা', level: '3', favorite: false },

                    { id: 220, character: '感冒', pinyin: 'gǎnmào', meaning: 'cold (illness)', bangla: 'সর্দি', level: '3', favorite: false },

                    { id: 221, character: '感情', pinyin: 'gǎnqíng', meaning: 'emotion; feeling', bangla: 'অনুভূতি; ভালোবাসা', level: '3', favorite: false },

                    { id: 222, character: '感受', pinyin: 'gǎnshòu', meaning: 'feel; experience', bangla: 'অনুভব করা', level: '3', favorite: false },

                    { id: 223, character: '干吗', pinyin: 'gàn má', meaning: 'why; what are you doing', bangla: 'কেন; কী করছো', level: '3', favorite: false },

                    { id: 224, character: '高速', pinyin: 'gāo sù', meaning: 'high speed', bangla: 'উচ্চ গতি', level: '3', favorite: false },

                    { id: 225, character: '高速公路', pinyin: 'gāosùgōnglù', meaning: 'expressway; highway', bangla: 'এক্সপ্রেসওয়ে', level: '3', favorite: false },

                    { id: 226, character: '告别', pinyin: 'gàobié', meaning: 'say goodbye; bid farewell', bangla: 'বিদায় নেওয়া', level: '3', favorite: false },

                    { id: 227, character: '歌迷', pinyin: 'gē mí', meaning: 'fan (of a singer)', bangla: 'ভক্ত; ফ্যান', level: '3', favorite: false },

                    { id: 228, character: '歌声', pinyin: 'gē shēng', meaning: 'singing voice', bangla: 'গানের কণ্ঠস্বর', level: '3', favorite: false },

                    { id: 229, character: '歌手', pinyin: 'gē shǒu', meaning: 'singer; vocalist', bangla: 'গায়ক', level: '3', favorite: false },

                    { id: 230, character: '个人', pinyin: 'gèrén', meaning: 'individual; personal', bangla: 'ব্যক্তিগত', level: '3', favorite: false },

                    { id: 231, character: '个性', pinyin: 'gèxìng', meaning: 'personality; individuality', bangla: 'ব্যক্তিত্ব', level: '3', favorite: false },

                    { id: 232, character: '各', pinyin: 'gè', meaning: 'each; every; various', bangla: 'প্রত্যেক; বিভিন্ন', level: '3', favorite: false },

                    { id: 233, character: '各地', pinyin: 'gè dì', meaning: 'various places; everywhere', bangla: 'বিভিন্ন স্থান', level: '3', favorite: false },

                    { id: 234, character: '各位', pinyin: 'gè wèi', meaning: 'everyone; ladies and gentlemen', bangla: 'সবাই; ভদ্রলোকবৃন্দ', level: '3', favorite: false },

                    { id: 235, character: '各种', pinyin: 'gè zhǒng', meaning: 'all kinds; various', bangla: 'বিভিন্ন ধরণের', level: '3', favorite: false },

                    { id: 236, character: '各自', pinyin: 'gèzì', meaning: 'each; respective', bangla: 'নিজ নিজ', level: '3', favorite: false },

                    { id: 237, character: '根本', pinyin: 'gēnběn', meaning: 'fundamental; root; at all', bangla: 'মূল; সম্পূর্ণভাবে', level: '3', favorite: false },

                    { id: 238, character: '更加', pinyin: 'gèng jiā', meaning: 'more; even more', bangla: 'আরও বেশি', level: '3', favorite: false },

                    { id: 239, character: '工厂', pinyin: 'gōngchǎng', meaning: 'factory; plant', bangla: 'কারখানা', level: '3', favorite: false },

                    { id: 240, character: '工程师', pinyin: 'gōngchéngshī', meaning: 'engineer', bangla: 'ইঞ্জিনিয়ার', level: '3', favorite: false },

                    { id: 241, character: '工夫', pinyin: 'gōng fu', meaning: 'time; effort; skill', bangla: 'সময়; দক্ষতা', level: '3', favorite: false },

                    { id: 242, character: '工具', pinyin: 'gōngjù', meaning: 'tool; instrument', bangla: 'যন্ত্র; সরঞ্জাম', level: '3', favorite: false },

                    { id: 243, character: '工业', pinyin: 'gōngyè', meaning: 'industry', bangla: 'শিল্প', level: '3', favorite: false },

                    { id: 244, character: '工资', pinyin: 'gōngzī', meaning: 'wages; salary', bangla: 'মজুরি', level: '3', favorite: false },

                    { id: 245, character: '公布', pinyin: 'gōngbù', meaning: 'announce publicly', bangla: 'প্রকাশ করা', level: '3', favorite: false },

                    { id: 246, character: '公共', pinyin: 'gōng gòng', meaning: 'public; communal', bangla: 'সর্বজনীন', level: '3', favorite: false },

                    { id: 247, character: '公开', pinyin: 'gōngkāi', meaning: 'open; public', bangla: 'খোলামেলা', level: '3', favorite: false },

                    { id: 248, character: '公民', pinyin: 'gōngmín', meaning: 'citizen', bangla: 'নাগরিক', level: '3', favorite: false },

                    { id: 249, character: '公务员', pinyin: 'gōng wù yuán', meaning: 'civil servant; government worker', bangla: 'সরকারি কর্মচারী', level: '3', favorite: false },

                    { id: 250, character: '功夫', pinyin: 'gōngfu', meaning: 'kung fu; effort', bangla: 'কুংফু; পরিশ্রম', level: '3', favorite: false },

                    { id: 251, character: '功课', pinyin: 'gōng kè', meaning: 'homework; lessons', bangla: 'পড়া; হোমওয়ার্ক', level: '3', favorite: false },

                    { id: 252, character: '功能', pinyin: 'gōngnéng', meaning: 'function; capability', bangla: 'কার্য; ক্ষমতা', level: '3', favorite: false },

                    { id: 253, character: '共同', pinyin: 'gòngtóng', meaning: 'common; shared', bangla: 'সাধারণ; যৌথ', level: '3', favorite: false },

                    { id: 254, character: '共有', pinyin: 'gòng yǒu', meaning: 'jointly owned; shared', bangla: 'যৌথ মালিকানা', level: '3', favorite: false },

                    { id: 255, character: '姑娘', pinyin: 'gūniang', meaning: 'girl; young woman', bangla: 'মেয়ে; তরুণী', level: '3', favorite: false },

                    { id: 256, character: '古', pinyin: 'gǔ', meaning: 'ancient; old', bangla: 'প্রাচীন', level: '3', favorite: false },

                    { id: 257, character: '古代', pinyin: 'gǔdài', meaning: 'ancient times', bangla: 'প্রাচীন যুগ', level: '3', favorite: false },

                    { id: 258, character: '故乡', pinyin: 'gùxiāng', meaning: 'hometown; native place', bangla: 'জন্মভূমি', level: '3', favorite: false },

                    { id: 259, character: '挂', pinyin: 'guà', meaning: 'hang; suspend', bangla: 'ঝুলানো', level: '3', favorite: false },

                    { id: 260, character: '关系', pinyin: 'guānxì', meaning: 'relationship; relation', bangla: 'সম্পর্ক', level: '3', favorite: false },

                    { id: 261, character: '关注', pinyin: 'guān zhù', meaning: 'pay attention to; follow', bangla: 'মনোযোগ দেওয়া', level: '3', favorite: false },

                    { id: 262, character: '观察', pinyin: 'guānchá', meaning: 'observe; watch carefully', bangla: 'পর্যবেক্ষণ করা', level: '3', favorite: false },

                    { id: 263, character: '观看', pinyin: 'guān kàn', meaning: 'watch; view', bangla: 'দেখা; প্রত্যক্ষ করা', level: '3', favorite: false },

                    { id: 264, character: '观念', pinyin: 'guānniàn', meaning: 'concept; idea', bangla: 'ধারণা', level: '3', favorite: false },

                    { id: 265, character: '观众', pinyin: 'guānzhòng', meaning: 'audience; spectators', bangla: 'দর্শক', level: '3', favorite: false },

                    { id: 266, character: '管', pinyin: 'guǎn', meaning: 'control; manage; tube', bangla: 'নিয়ন্ত্রণ করা; পাইপ', level: '3', favorite: false },

                    { id: 267, character: '管理', pinyin: 'guǎnlǐ', meaning: 'manage; administer', bangla: 'ব্যবস্থাপনা', level: '3', favorite: false },

                    { id: 268, character: '光', pinyin: 'guāng', meaning: 'light; bright; only', bangla: 'আলো; শুধু', level: '3', favorite: false },

                    { id: 269, character: '光明', pinyin: 'guāngmíng', meaning: 'light; bright; hopeful', bangla: 'আলোকিত; আশাবাদী', level: '3', favorite: false },

                    { id: 270, character: '广播', pinyin: 'guǎngbō', meaning: 'broadcast; radio', bangla: 'সম্প্রচার', level: '3', favorite: false },

                    { id: 271, character: '广大', pinyin: 'guǎngdà', meaning: 'vast; extensive', bangla: 'বিস্তৃত', level: '3', favorite: false },

                    { id: 272, character: '规定', pinyin: 'guīdìng', meaning: 'regulation; rule', bangla: 'নিয়ম', level: '3', favorite: false },

                    { id: 273, character: '规范', pinyin: 'guīfàn', meaning: 'standard; norm', bangla: 'মান; নির্দেশিকা', level: '3', favorite: false },

                    { id: 274, character: '国内', pinyin: 'guó nèi', meaning: 'domestic; internal', bangla: 'অভ্যন্তরীণ', level: '3', favorite: false },

                    { id: 275, character: '国庆', pinyin: 'guó qìng', meaning: 'National Day', bangla: 'জাতীয় দিবস', level: '3', favorite: false },

                    { id: 276, character: '果然', pinyin: 'guǒrán', meaning: 'sure enough; as expected', bangla: 'ঠিকই; অনুমানমত', level: '3', favorite: false },

                    { id: 277, character: '果汁', pinyin: 'guǒzhī', meaning: 'fruit juice', bangla: 'ফলের রস', level: '3', favorite: false },

                    { id: 278, character: '过程', pinyin: 'guòchéng', meaning: 'process; course', bangla: 'প্রক্রিয়া', level: '3', favorite: false },

                    { id: 279, character: '过去', pinyin: 'guò qù', meaning: 'past; former times', bangla: 'অতীত', level: '3', favorite: false },

                    { id: 280, character: '哈哈', pinyin: 'hā hā', meaning: 'ha-ha; laughter', bangla: 'হা হা', level: '3', favorite: false },

                    { id: 281, character: '海关', pinyin: 'hǎiguān', meaning: 'customs', bangla: 'কাস্টমস', level: '3', favorite: false },

                    { id: 282, character: '害怕', pinyin: 'hàipà', meaning: 'fear; be afraid', bangla: 'ভয় পাওয়া', level: '3', favorite: false },

                    { id: 283, character: '行', pinyin: 'háng', meaning: 'row; line; profession', bangla: 'সারি; পেশা', level: '3', favorite: false },

                    { id: 284, character: '好好', pinyin: 'hǎo hǎo', meaning: 'very well; properly', bangla: 'ভালোভাবে', level: '3', favorite: false },

                    { id: 285, character: '好奇', pinyin: 'hàoqí', meaning: 'curious', bangla: 'অনুসন্ধানী', level: '3', favorite: false },

                    { id: 286, character: '合', pinyin: 'hé', meaning: 'close; join; combine', bangla: 'বন্ধ করা; একত্রিত করা', level: '3', favorite: false },

                    { id: 287, character: '合法', pinyin: 'héfǎ', meaning: 'legal; lawful', bangla: 'বৈধ', level: '3', favorite: false },

                    { id: 288, character: '合格', pinyin: 'hégé', meaning: 'qualified; up to standard', bangla: 'যোগ্য', level: '3', favorite: false },

                    { id: 289, character: '合理', pinyin: 'hélǐ', meaning: 'reasonable; rational', bangla: 'যুক্তিসঙ্গত', level: '3', favorite: false },

                    { id: 290, character: '合作', pinyin: 'hézuò', meaning: 'cooperate; collaboration', bangla: 'সহযোগিতা', level: '3', favorite: false },

                    { id: 291, character: '和平', pinyin: 'hépíng', meaning: 'peace', bangla: 'শান্তি', level: '3', favorite: false },

                    { id: 292, character: '红茶', pinyin: 'hóng chá', meaning: 'black tea', bangla: 'কালো চা', level: '3', favorite: false },

                    { id: 293, character: '红酒', pinyin: 'hóng jiǔ', meaning: 'red wine', bangla: 'লাল ওয়াইন', level: '3', favorite: false },

                    { id: 294, character: '后果', pinyin: 'hòuguǒ', meaning: 'consequence; result', bangla: 'ফলাফল', level: '3', favorite: false },

                    { id: 295, character: '后面', pinyin: 'hòumiàn', meaning: 'behind; back', bangla: 'পিছনে', level: '3', favorite: false },

                    { id: 296, character: '后年', pinyin: 'hòu nián', meaning: 'the year after next', bangla: 'আগামী বছরের পরের বছর', level: '3', favorite: false },

                    { id: 297, character: '互联网', pinyin: 'hùliánwǎng', meaning: 'Internet', bangla: 'ইন্টারনেট', level: '3', favorite: false },

                    { id: 298, character: '互相', pinyin: 'hùxiāng', meaning: 'mutually; each other', bangla: 'পরস্পর', level: '3', favorite: false },
                    { id: 299, character: '划船', pinyin: 'huá chuán', meaning: 'row a boat; boating', bangla: 'নৌকা চালানো', level: '3', favorite: false },

                    { id: 300, character: '华人', pinyin: 'huá rén', meaning: 'ethnic Chinese; Chinese person', bangla: 'চীনা বংশোদ্ভূত ব্যক্তি', level: '3', favorite: false },

                    { id: 301, character: '化', pinyin: 'huà', meaning: 'suffix (modernize; modernization)', bangla: 'প্রত্যয় (আধুনিকীকরণ)', level: '3', favorite: false },

                    { id: 302, character: '话剧', pinyin: 'huà jù', meaning: 'drama; stage play', bangla: 'নাটক', level: '3', favorite: false },

                    { id: 303, character: '话题', pinyin: 'huàtí', meaning: 'topic; subject of conversation', bangla: 'আলোচ্য বিষয়', level: '3', favorite: false },

                    { id: 304, character: '欢乐', pinyin: 'huānlè', meaning: 'happy; joyful', bangla: 'আনন্দ', level: '3', favorite: false },

                    { id: 305, character: '环', pinyin: 'huán', meaning: 'ring; loop; link', bangla: 'বৃত্ত; চক্র', level: '3', favorite: false },

                    { id: 306, character: '环保', pinyin: 'huán bǎo', meaning: 'environmental protection', bangla: 'পরিবেশ সুরক্ষা', level: '3', favorite: false },

                    { id: 307, character: '环境', pinyin: 'huánjìng', meaning: 'environment; surroundings', bangla: 'পরিবেশ', level: '3', favorite: false },

                    { id: 308, character: '会议', pinyin: 'huìyì', meaning: 'meeting; conference', bangla: 'সভা; মিটিং', level: '3', favorite: false },

                    { id: 309, character: '会员', pinyin: 'huì yuán', meaning: 'member (of an organization)', bangla: 'সদস্য', level: '3', favorite: false },

                    { id: 310, character: '活', pinyin: 'huó', meaning: 'live; alive; work', bangla: 'জীবিত; কাজ', level: '3', favorite: false },

                    { id: 311, character: '火', pinyin: 'huǒ', meaning: 'fire; anger', bangla: 'আগুন; রাগ', level: '3', favorite: false },

                    { id: 312, character: '机器', pinyin: 'jīqì', meaning: 'machine; machinery', bangla: 'মেশিন', level: '3', favorite: false },

                    { id: 313, character: '积极', pinyin: 'jījí', meaning: 'positive; active', bangla: 'ইতিবাচক; সক্রিয়', level: '3', favorite: false },

                    { id: 314, character: '基本', pinyin: 'jīběn', meaning: 'basic; fundamental', bangla: 'মৌলিক', level: '3', favorite: false },

                    { id: 315, character: '基本上', pinyin: 'jī běn shàng', meaning: 'basically; generally', bangla: 'মূলত; সাধারণভাবে', level: '3', favorite: false },

                    { id: 316, character: '基础', pinyin: 'jīchǔ', meaning: 'foundation; base', bangla: 'ভিত্তি', level: '3', favorite: false },

                    { id: 317, character: '及时', pinyin: 'jíshí', meaning: 'timely; in time', bangla: 'সময়োপযোগী', level: '3', favorite: false },

                    { id: 318, character: '极了', pinyin: 'jí le', meaning: 'extremely; exceedingly', bangla: 'অত্যন্ত', level: '3', favorite: false },

                    { id: 319, character: '集体', pinyin: 'jítǐ', meaning: 'collective; group', bangla: 'সমষ্টি; দল', level: '3', favorite: false },

                    { id: 320, character: '集中', pinyin: 'jízhōng', meaning: 'focus; concentrate', bangla: 'কেন্দ্রীভূত করা', level: '3', favorite: false },

                    { id: 321, character: '计算', pinyin: 'jìsuàn', meaning: 'calculate; compute', bangla: 'গণনা করা', level: '3', favorite: false },

                    { id: 322, character: '记录', pinyin: 'jìlù', meaning: 'record; note down', bangla: 'রেকর্ড করা', level: '3', favorite: false },

                    { id: 323, character: '记者', pinyin: 'jìzhě', meaning: 'journalist; reporter', bangla: 'সাংবাদিক', level: '3', favorite: false },

                    { id: 324, character: '纪录', pinyin: 'jìlù', meaning: 'record (achievement)', bangla: 'রেকর্ড', level: '3', favorite: false },

                    { id: 325, character: '纪念', pinyin: 'jìniàn', meaning: 'commemorate; memory', bangla: 'স্মরণ', level: '3', favorite: false },

                    { id: 326, character: '技术', pinyin: 'jìshù', meaning: 'technology; skill', bangla: 'প্রযুক্তি; দক্ষতা', level: '3', favorite: false },

                    { id: 327, character: '继续', pinyin: 'jìxù', meaning: 'continue; go on', bangla: 'চালিয়ে যাওয়া', level: '3', favorite: false },

                    { id: 328, character: '加工', pinyin: 'jiāgōng', meaning: 'process; machining', bangla: 'প্রক্রিয়াজাত করা', level: '3', favorite: false },

                    { id: 329, character: '加快', pinyin: 'jiā kuài', meaning: 'speed up; accelerate', bangla: 'গতি বাড়ানো', level: '3', favorite: false },

                    { id: 330, character: '加强', pinyin: 'jiā qiáng', meaning: 'strengthen; reinforce', bangla: 'শক্তিশালী করা', level: '3', favorite: false },

                    { id: 331, character: '家具', pinyin: 'jiājù', meaning: 'furniture', bangla: 'আসবাবপত্র', level: '3', favorite: false },

                    { id: 332, character: '家属', pinyin: 'jiāshǔ', meaning: 'family members', bangla: 'পরিবারের সদস্য', level: '3', favorite: false },

                    { id: 333, character: '家乡', pinyin: 'jiāxiāng', meaning: 'hometown', bangla: 'জন্মভূমি', level: '3', favorite: false },

                    { id: 334, character: '价格', pinyin: 'jiàgé', meaning: 'price', bangla: 'মূল্য', level: '3', favorite: false },

                    { id: 335, character: '价钱', pinyin: 'jià qián', meaning: 'price', bangla: 'দাম', level: '3', favorite: false },

                    { id: 336, character: '价值', pinyin: 'jiàzhí', meaning: 'value; worth', bangla: 'মূল্য', level: '3', favorite: false },

                    { id: 337, character: '架', pinyin: 'jià', meaning: 'frame; rack; shelf', bangla: 'আলমারি; ফ্রেম', level: '3', favorite: false },

                    { id: 338, character: '坚持', pinyin: 'jiānchí', meaning: 'persist; insist', bangla: 'আটকাতে থাকা; জোর দেওয়া', level: '3', favorite: false },

                    { id: 339, character: '坚决', pinyin: 'jiānjué', meaning: 'firm; resolute', bangla: 'দৃঢ়', level: '3', favorite: false },

                    { id: 340, character: '坚强', pinyin: 'jiānqiáng', meaning: 'strong; tough', bangla: 'শক্তিশালী', level: '3', favorite: false },

                    { id: 341, character: '简单', pinyin: 'jiǎndān', meaning: 'simple', bangla: 'সহজ', level: '3', favorite: false },

                    { id: 342, character: '简直', pinyin: 'jiǎnzhí', meaning: 'simply; literally', bangla: 'প্রায়; নাকি', level: '3', favorite: false },

                    { id: 343, character: '建', pinyin: 'jiàn', meaning: 'build; construct; establish', bangla: 'নির্মাণ করা', level: '3', favorite: false },

                    { id: 344, character: '建成', pinyin: 'jiàn chéng', meaning: 'be completed; be built', bangla: 'নির্মাণ সম্পন্ন', level: '3', favorite: false },

                    { id: 345, character: '建立', pinyin: 'jiànlì', meaning: 'establish; set up', bangla: 'প্রতিষ্ঠা করা', level: '3', favorite: false },

                    { id: 346, character: '建设', pinyin: 'jiànshè', meaning: 'build; construction', bangla: 'নির্মাণ', level: '3', favorite: false },

                    { id: 347, character: '建议', pinyin: 'jiànyì', meaning: 'suggest; proposal', bangla: 'পরামর্শ; প্রস্তাব', level: '3', favorite: false },

                    { id: 348, character: '将近', pinyin: 'jiāngjìn', meaning: 'nearly; almost', bangla: 'প্রায়', level: '3', favorite: false },

                    { id: 349, character: '将来', pinyin: 'jiānglái', meaning: 'future', bangla: 'ভবিষ্যৎ', level: '3', favorite: false },

                    { id: 350, character: '交费', pinyin: 'jiāo fèi', meaning: 'pay (a fee)', bangla: 'ফি প্রদান করা', level: '3', favorite: false },

                    { id: 351, character: '交警', pinyin: 'jiāo jǐng', meaning: 'traffic police', bangla: 'ট্রাফিক পুলিশ', level: '3', favorite: false },

                    { id: 352, character: '交流', pinyin: 'jiāoliú', meaning: 'communicate; exchange', bangla: 'আদান-প্রদান', level: '3', favorite: false },

                    { id: 353, character: '交往', pinyin: 'jiāowǎng', meaning: 'associate with; contact', bangla: 'যোগাযোগ করা', level: '3', favorite: false },

                    { id: 354, character: '交易', pinyin: 'jiāoyì', meaning: 'transaction; trade', bangla: 'লেনদেন', level: '3', favorite: false },

                    { id: 355, character: '叫', pinyin: 'jiào', meaning: 'call; shout; (preposition)', bangla: 'ডাকা; চিৎকার করা', level: '3', favorite: false },

                    { id: 356, character: '较', pinyin: 'jiào', meaning: 'compare; relatively', bangla: 'তুলনামূলকভাবে', level: '3', favorite: false },

                    { id: 357, character: '教材', pinyin: 'jiàocái', meaning: 'teaching material', bangla: 'পাঠ্যবই', level: '3', favorite: false },

                    { id: 358, character: '教练', pinyin: 'jiàoliàn', meaning: 'coach; instructor', bangla: 'কোচ', level: '3', favorite: false },

                    { id: 359, character: '结实', pinyin: 'jiēshi', meaning: 'strong; sturdy', bangla: 'মজবুত', level: '3', favorite: false },

                    { id: 360, character: '接待', pinyin: 'jiēdài', meaning: 'receive; host', bangla: 'অভ্যর্থনা করা', level: '3', favorite: false },

                    { id: 361, character: '接见', pinyin: 'jiējiàn', meaning: 'receive (a visitor); meet', bangla: 'সাক্ষাৎকার দেওয়া', level: '3', favorite: false },

                    { id: 362, character: '接受', pinyin: 'jiēshòu', meaning: 'accept; receive', bangla: 'গ্রহণ করা', level: '3', favorite: false },

                    { id: 363, character: '接着', pinyin: 'jiēzhe', meaning: 'then; after that; continue', bangla: 'এরপর; ধারাবাহিকভাবে', level: '3', favorite: false },

                    { id: 364, character: '节', pinyin: 'jié', meaning: 'festival; section; node', bangla: 'উৎসব; অধ্যায়', level: '3', favorite: false },

                    { id: 365, character: '节约', pinyin: 'jiéyuē', meaning: 'save; economize', bangla: 'সাশ্রয় করা', level: '3', favorite: false },

                    { id: 366, character: '介绍', pinyin: 'jièshào', meaning: 'introduce', bangla: 'পরিচয় করিয়ে দেওয়া', level: '3', favorite: false },

                    { id: 367, character: '界', pinyin: 'jiè', meaning: 'boundary; scope; circle', bangla: 'সীমা; পরিধি', level: '3', favorite: false },

                    { id: 368, character: '界', pinyin: 'jiè', meaning: 'world; domain', bangla: 'জগৎ; ক্ষেত্র', level: '3', favorite: false },

                    { id: 369, character: '今天', pinyin: 'jīntiān', meaning: 'today', bangla: 'আজ', level: '3', favorite: false },

                    { id: 370, character: '尽管', pinyin: 'jǐnguǎn', meaning: 'although; even though', bangla: 'যদিও', level: '3', favorite: false },

                    { id: 371, character: '尽量', pinyin: 'jǐnliàng', meaning: 'as much as possible', bangla: 'যতটা সম্ভব', level: '3', favorite: false },

                    { id: 372, character: '进步', pinyin: 'jìnbù', meaning: 'progress; improve', bangla: 'উন্নতি', level: '3', favorite: false },

                    { id: 373, character: '禁止', pinyin: 'jìnzhǐ', meaning: 'forbid; prohibit', bangla: 'নিষিদ্ধ করা', level: '3', favorite: false },

                    { id: 374, character: '京剧', pinyin: 'jīngjù', meaning: 'Beijing opera', bangla: 'বেইজিং অপেরা', level: '3', favorite: false },

                    { id: 375, character: '经济', pinyin: 'jīngjì', meaning: 'economy; economic', bangla: 'অর্থনীতি', level: '3', favorite: false },

                    { id: 376, character: '经历', pinyin: 'jīnglì', meaning: 'experience; go through', bangla: 'অভিজ্ঞতা; উপলব্ধি', level: '3', favorite: false },

                    { id: 377, character: '经验', pinyin: 'jīngyàn', meaning: 'experience; lesson', bangla: 'অভিজ্ঞতা', level: '3', favorite: false },

                    { id: 378, character: '精彩', pinyin: 'jīngcǎi', meaning: 'brilliant; wonderful', bangla: 'চমৎকার', level: '3', favorite: false },

                    { id: 379, character: '精神', pinyin: 'jīngshén', meaning: 'spirit; mind; energy', bangla: 'আত্মা; মনোভাব', level: '3', favorite: false },

                    { id: 380, character: '精彩', pinyin: 'jīngcǎi', meaning: 'splendid; excellent', bangla: 'অতুলনীয়', level: '3', favorite: false },

                    { id: 381, character: '景点', pinyin: 'jǐng diǎn', meaning: 'scenic spot; tourist attraction', bangla: 'দর্শনীয় স্থান', level: '3', favorite: false },

                    { id: 382, character: '警察', pinyin: 'jǐngchá', meaning: 'police; policeman', bangla: 'পুলিশ', level: '3', favorite: false },

                    { id: 383, character: '竞争', pinyin: 'jìngzhēng', meaning: 'compete; competition', bangla: 'প্রতিযোগিতা', level: '3', favorite: false },

                    { id: 384, character: '竟然', pinyin: 'jìngrán', meaning: 'unexpectedly; surprisingly', bangla: 'আশ্চর্যজনকভাবে', level: '3', favorite: false },

                    { id: 385, character: '镜子', pinyin: 'jìngzi', meaning: 'mirror', bangla: 'আয়না', level: '3', favorite: false },

                    { id: 386, character: '究竟', pinyin: 'jiūjìng', meaning: 'after all; exactly', bangla: 'চূড়ান্তভাবে; সত্যিই', level: '3', favorite: false },

                    { id: 387, character: '九', pinyin: 'jiǔ', meaning: 'nine', bangla: 'নয়', level: '3', favorite: false },

                    { id: 388, character: '久', pinyin: 'jiǔ', meaning: 'long (time); for a long time', bangla: 'দীর্ঘ; দীর্ঘসময়', level: '3', favorite: false },

                    { id: 389, character: '酒', pinyin: 'jiǔ', meaning: 'alcohol; liquor; wine', bangla: 'অ্যালকোহল; ওয়াইন', level: '3', favorite: false },

                    { id: 390, character: '旧', pinyin: 'jiù', meaning: 'old; past; used', bangla: 'পুরাতন; প্রাক্তন', level: '3', favorite: false },

                    { id: 391, character: '就', pinyin: 'jiù', meaning: 'just; exactly; then; as soon as', bangla: 'ঠিক; তখন; শুধু', level: '3', favorite: false },

                    { id: 392, character: '就是', pinyin: 'jiùshì', meaning: 'exactly; precisely; even if', bangla: 'ঠিকই; এমনকি', level: '3', favorite: false },

                    { id: 393, character: '举办', pinyin: 'jǔbàn', meaning: 'hold; conduct; organize', bangla: 'আয়োজন করা', level: '3', favorite: false },

                    { id: 394, character: '举行', pinyin: 'jǔxíng', meaning: 'hold; take place', bangla: 'অনুষ্ঠিত হওয়া', level: '3', favorite: false },

                    { id: 395, character: '巨大', pinyin: 'jùdà', meaning: 'enormous; huge', bangla: 'বিশাল', level: '3', favorite: false },

                    { id: 396, character: '拒绝', pinyin: 'jùjué', meaning: 'refuse; reject', bangla: 'প্রত্যাখ্যান করা', level: '3', favorite: false },

                    { id: 397, character: '距离', pinyin: 'jùlí', meaning: 'distance; apart', bangla: 'দূরত্ব', level: '3', favorite: false },

                    { id: 398, character: '具体', pinyin: 'jùtǐ', meaning: 'specific; concrete', bangla: 'নির্দিষ্ট', level: '3', favorite: false },

                    { id: 399, character: '具有', pinyin: 'jùyǒu', meaning: 'have; possess', bangla: 'আছে; ধারণ করা', level: '3', favorite: false },

                    { id: 400, character: '决定', pinyin: 'juédìng', meaning: 'decide; decision', bangla: 'সিদ্ধান্ত নেওয়া', level: '3', favorite: false },

                    { id: 401, character: '决心', pinyin: 'juéxīn', meaning: 'determination; resolution', bangla: 'সংকল্প', level: '3', favorite: false },

                    { id: 402, character: '觉得', pinyin: 'juéde', meaning: 'think; feel; find', bangla: 'মনে হওয়া; অনুভব করা', level: '3', favorite: false },

                    { id: 403, character: '军', pinyin: 'jūn', meaning: 'army; military', bangla: 'সেনাবাহিনী', level: '3', favorite: false },

                    { id: 404, character: '军事', pinyin: 'jūnshì', meaning: 'military affairs', bangla: 'সামরিক বিষয়', level: '3', favorite: false },

                    { id: 405, character: '咖啡', pinyin: 'kāfēi', meaning: 'coffee', bangla: 'কফি', level: '3', favorite: false },

                    { id: 406, character: '开', pinyin: 'kāi', meaning: 'open; drive; operate', bangla: 'খুলা; চালানো', level: '3', favorite: false },

                    { id: 407, character: '开放', pinyin: 'kāifàng', meaning: 'open; open up', bangla: 'উন্মুক্ত করা', level: '3', favorite: false },

                    { id: 408, character: '开关', pinyin: 'kāi guān', meaning: 'switch; on-off', bangla: 'সুইচ', level: '3', favorite: false },

                    { id: 409, character: '开通', pinyin: 'kāitōng', meaning: 'open; clear; open-minded', bangla: 'খোলা; সুগম', level: '3', favorite: false },

                    { id: 410, character: '开心', pinyin: 'kāixīn', meaning: 'happy; delighted', bangla: 'খুশি', level: '3', favorite: false },

                    { id: 411, character: '开始', pinyin: 'kāishǐ', meaning: 'begin; start', bangla: 'শুরু করা', level: '3', favorite: false },

                    { id: 412, character: '开水', pinyin: 'kāishuǐ', meaning: 'boiled water', bangla: 'সিদ্ধ পানি', level: '3', favorite: false },

                    { id: 413, character: '看不起', pinyin: 'kànbuqǐ', meaning: 'look down upon; despise', bangla: 'তুচ্ছ করা', level: '3', favorite: false },

                    { id: 414, character: '看法', pinyin: 'kànfǎ', meaning: 'view; opinion', bangla: 'মতামত', level: '3', favorite: false },

                    { id: 415, character: '看来', pinyin: 'kànlái', meaning: 'it seems; apparently', bangla: 'মনে হচ্ছে', level: '3', favorite: false },

                    { id: 416, character: '看作', pinyin: 'kàn zuò', meaning: 'regard as; treat as', bangla: 'হিসেবে বিবেচনা করা', level: '3', favorite: false },

                    { id: 417, character: '考虑', pinyin: 'kǎolǜ', meaning: 'consider; think over', bangla: 'বিবেচনা করা', level: '3', favorite: false },

                    { id: 418, character: '科学', pinyin: 'kēxué', meaning: 'science; scientific', bangla: 'বিজ্ঞান', level: '3', favorite: false },

                    { id: 419, character: '科学家', pinyin: 'kēxuéjiā', meaning: 'scientist', bangla: 'বিজ্ঞানী', level: '3', favorite: false },

                    { id: 420, character: '棵', pinyin: 'kē', meaning: 'measure word for plants', bangla: 'গাছের পরিমাপ', level: '3', favorite: false },

                    { id: 421, character: '咳嗽', pinyin: 'ké sou', meaning: 'cough', bangla: 'কাশি', level: '3', favorite: false },

                    { id: 422, character: '可', pinyin: 'kě', meaning: 'can; may; approve', bangla: 'পারা; সম্ভব', level: '3', favorite: false },

                    { id: 423, character: '可爱', pinyin: 'kě’ài', meaning: 'cute; lovable', bangla: 'আদর্শ; ভালোবাসার যোগ্য', level: '3', favorite: false },

                    { id: 424, character: '可怜', pinyin: 'kělán', meaning: 'pitiful; poor', bangla: 'দয়ালু; দরিদ্র', level: '3', favorite: false },

                    { id: 425, character: '可能', pinyin: 'kěnéng', meaning: 'possible; maybe', bangla: 'সম্ভব; হতে পারে', level: '3', favorite: false },

                    { id: 426, character: '可是', pinyin: 'kěshì', meaning: 'but; however', bangla: 'কিন্তু', level: '3', favorite: false },

                    { id: 427, character: '可惜', pinyin: 'kěxī', meaning: 'a pity; unfortunately', bangla: 'দুঃখজনক', level: '3', favorite: false },

                    { id: 428, character: '可以', pinyin: 'kěyǐ', meaning: 'can; may; OK', bangla: 'পারা; ঠিক আছে', level: '3', favorite: false },

                    { id: 429, character: '刻', pinyin: 'kè', meaning: 'carve; quarter (hour)', bangla: 'খোদাই করা; চতুর্থাংশ', level: '3', favorite: false },

                    { id: 430, character: '客户', pinyin: 'kèhù', meaning: 'client; customer', bangla: 'গ্রাহক', level: '3', favorite: false },

                    { id: 431, character: '客气', pinyin: 'kèqi', meaning: 'polite; courteous', bangla: 'ভদ্র; নম্র', level: '3', favorite: false },

                    { id: 432, character: '客厅', pinyin: 'kètīng', meaning: 'living room', bangla: 'বসার ঘর', level: '3', favorite: false },

                    { id: 433, character: '空', pinyin: 'kōng', meaning: 'empty; sky; air', bangla: 'খালি; আকাশ', level: '3', favorite: false },

                    { id: 434, character: '空气', pinyin: 'kōngqì', meaning: 'air; atmosphere', bangla: 'বাতাস', level: '3', favorite: false },

                    { id: 435, character: '空调', pinyin: 'kōngtiáo', meaning: 'air conditioner', bangla: 'এয়ার কন্ডিশনার', level: '3', favorite: false },

                    { id: 436, character: '空儿', pinyin: 'kòngr', meaning: 'free time; spare moment', bangla: 'ফাঁকা সময়', level: '3', favorite: false },

                    { id: 437, character: '空中', pinyin: 'kōngzhōng', meaning: 'in the air; sky', bangla: 'আকাশে', level: '3', favorite: false },

                    { id: 438, character: '控制', pinyin: 'kòngzhì', meaning: 'control; regulate', bangla: 'নিয়ন্ত্রণ করা', level: '3', favorite: false },

                    { id: 439, character: '口', pinyin: 'kǒu', meaning: 'mouth; opening; (measure word)', bangla: 'মুখ; খোলা; পরিমাপ', level: '3', favorite: false },

                    { id: 440, character: '扣', pinyin: 'kòu', meaning: 'button; buckle; deduct', bangla: 'বোতাম; ফাঁকা; কাটা', level: '3', favorite: false },

                    { id: 441, character: '苦', pinyin: 'kǔ', meaning: 'bitter; suffering; hard', bangla: 'তিক্ত; কষ্ট; কঠিন', level: '3', favorite: false },

                    { id: 442, character: '裤子', pinyin: 'kùzi', meaning: 'trousers; pants', bangla: 'প্যান্ট', level: '3', favorite: false },

                    { id: 443, character: '快餐', pinyin: 'kuàicān', meaning: 'fast food', bangla: 'ফাস্টফুড', level: '3', favorite: false },

                    { id: 444, character: '筷子', pinyin: 'kuàizi', meaning: 'chopsticks', bangla: 'চপস্টিক', level: '3', favorite: false },

                    { id: 445, character: '宽', pinyin: 'kuān', meaning: 'wide; broad; lenient', bangla: 'চওড়া; প্রশস্ত', level: '3', favorite: false },

                    { id: 446, character: '款', pinyin: 'kuǎn', meaning: 'style; fund; item', bangla: 'শৈলী; তহবিল', level: '3', favorite: false },

                    { id: 447, character: '困', pinyin: 'kùn', meaning: 'sleepy; tired; trap', bangla: 'ঘুমন্ত; ক্লান্ত; জড়িয়ে ধরা', level: '3', favorite: false },

                    { id: 448, character: '困难', pinyin: 'kùnnan', meaning: 'difficulty; trouble', bangla: 'কষ্ট; সমস্যা', level: '3', favorite: false },

                    { id: 449, character: '拉', pinyin: 'lā', meaning: 'pull; drag; play (instrument)', bangla: 'টানা; টেনে আনা', level: '3', favorite: false },

                    { id: 450, character: '垃圾', pinyin: 'lājī', meaning: 'trash; garbage', bangla: 'আবর্জনা', level: '3', favorite: false },

                    { id: 451, character: '辣', pinyin: 'là', meaning: 'spicy; hot (flavor)', bangla: 'তীব্র; মশলাদার', level: '3', favorite: false },

                    { id: 452, character: '来', pinyin: 'lái', meaning: 'come; arrive; future tense marker', bangla: 'আসা; ভবিষ্যৎ চিহ্ন', level: '3', favorite: false },

                    { id: 453, character: '来不及', pinyin: 'lái bu jí', meaning: 'there’s not enough time; too late', bangla: 'সময় পাওয়া যায় না', level: '3', favorite: false },

                    { id: 454, character: '来得及', pinyin: 'lái de jí', meaning: 'have enough time', bangla: 'সময় পাওয়া যায়', level: '3', favorite: false },

                    { id: 455, character: '来源', pinyin: 'láiyuán', meaning: 'source; origin', bangla: 'উৎস', level: '3', favorite: false },

                    { id: 456, character: '蓝', pinyin: 'lán', meaning: 'blue', bangla: 'নীল', level: '3', favorite: false },

                    { id: 457, character: '篮球', pinyin: 'lánqiú', meaning: 'basketball', bangla: 'বাস্কেটবল', level: '3', favorite: false },

                    { id: 458, character: '懒', pinyin: 'lǎn', meaning: 'lazy', bangla: 'অলস', level: '3', favorite: false },

                    { id: 459, character: '浪费', pinyin: 'làngfèi', meaning: 'waste', bangla: 'অপচয়', level: '3', favorite: false },

                    { id: 460, character: '浪漫', pinyin: 'làngmàn', meaning: 'romantic', bangla: 'রোমান্টিক', level: '3', favorite: false },

                    { id: 461, character: '老', pinyin: 'lǎo', meaning: 'old; always; experienced', bangla: 'বৃদ্ধ; সবসময়; অভিজ্ঞ', level: '3', favorite: false },

                    { id: 462, character: '老板', pinyin: 'lǎobǎn', meaning: 'boss; shop owner', bangla: 'মালিক; বস', level: '3', favorite: false },

                    { id: 463, character: '老人', pinyin: 'lǎorén', meaning: 'elderly person; senior', bangla: 'বৃদ্ধ', level: '3', favorite: false },

                    { id: 464, character: '老师', pinyin: 'lǎoshī', meaning: 'teacher', bangla: 'শিক্ষক', level: '3', favorite: false },

                    { id: 465, character: '老实', pinyin: 'lǎoshi', meaning: 'honest; sincere', bangla: 'সৎ; নির্ভরযোগ্য', level: '3', favorite: false },

                    { id: 466, character: '乐趣', pinyin: 'lèqù', meaning: 'pleasure; joy', bangla: 'আনন্দ', level: '3', favorite: false },

                    { id: 467, character: '了', pinyin: 'le', meaning: 'particle indicating completion', bangla: 'ক্রিয়া সম্পন্নের চিহ্ন', level: '3', favorite: false },

                    { id: 468, character: '累', pinyin: 'lèi', meaning: 'tired; exhausted', bangla: 'ক্লান্ত', level: '3', favorite: false },

                    { id: 469, character: '冷', pinyin: 'lěng', meaning: 'cold; unfriendly', bangla: 'ঠান্ডা; বিরুদ্ধাচরণ', level: '3', favorite: false },

                    { id: 470, character: '离', pinyin: 'lí', meaning: 'leave; depart; from', bangla: 'ছেড়ে যাওয়া; থেকে', level: '3', favorite: false },

                    { id: 471, character: '离婚', pinyin: 'líhūn', meaning: 'divorce', bangla: 'তালাক', level: '3', favorite: false },

                    { id: 472, character: '离开', pinyin: 'líkāi', meaning: 'leave; depart', bangla: 'ছেড়ে চলে যাওয়া', level: '3', favorite: false },

                    { id: 473, character: '礼物', pinyin: 'lǐwù', meaning: 'gift; present', bangla: 'উপহার', level: '3', favorite: false },

                    { id: 474, character: '礼貌', pinyin: 'lǐmào', meaning: 'politeness; courtesy', bangla: 'ভদ্রতা', level: '3', favorite: false },

                    { id: 475, character: '里', pinyin: 'lǐ', meaning: 'inside; li (unit of distance)', bangla: 'ভিতরে; লি (দূরত্ব)', level: '3', favorite: false },

                    { id: 476, character: '理想', pinyin: 'lǐxiǎng', meaning: 'ideal; dream', bangla: 'আদর্শ; স্বপ্ন', level: '3', favorite: false },

                    { id: 477, character: '理解', pinyin: 'lǐjiě', meaning: 'understand; comprehend', bangla: 'বোঝা', level: '3', favorite: false },

                    { id: 478, character: '理论', pinyin: 'lǐlùn', meaning: 'theory', bangla: 'তত্ত্ব', level: '3', favorite: false },

                    { id: 479, character: '理由', pinyin: 'lǐyóu', meaning: 'reason; cause', bangla: 'কারণ', level: '3', favorite: false },

                    { id: 480, character: '力', pinyin: 'lì', meaning: 'force; strength; power', bangla: 'শক্তি', level: '3', favorite: false },

                    { id: 481, character: '力气', pinyin: 'lìqi', meaning: 'physical strength', bangla: 'শারীরিক শক্তি', level: '3', favorite: false },

                    { id: 482, character: '力量', pinyin: 'lìliàng', meaning: 'power; force; strength', bangla: 'শক্তি', level: '3', favorite: false },

                    { id: 483, character: '历史', pinyin: 'lìshǐ', meaning: 'history', bangla: 'ইতিহাস', level: '3', favorite: false },

                    { id: 484, character: '立', pinyin: 'lì', meaning: 'stand; erect; establish', bangla: 'দাঁড়ানো; প্রতিষ্ঠা করা', level: '3', favorite: false },

                    { id: 485, character: '立刻', pinyin: 'lìkè', meaning: 'immediately; at once', bangla: 'অবিলম্বে', level: '3', favorite: false },

                    { id: 486, character: '利', pinyin: 'lì', meaning: 'sharp; benefit; profit', bangla: 'লাভজনক; উপকার', level: '3', favorite: false },

                    { id: 487, character: '利息', pinyin: 'lìxī', meaning: 'interest (on money)', bangla: 'সুদ', level: '3', favorite: false },

                    { id: 488, character: '利益', pinyin: 'lìyì', meaning: 'benefit; interest', bangla: 'স্বার্থ; উপকার', level: '3', favorite: false },

                    { id: 489, character: '利用', pinyin: 'lìyòng', meaning: 'use; make use of', bangla: 'ব্যবহার করা', level: '3', favorite: false },

                    { id: 490, character: '连', pinyin: 'lián', meaning: 'connect; even; including', bangla: 'সংযুক্ত করা; এমনকি', level: '3', favorite: false },

                    { id: 491, character: '连忙', pinyin: 'liánmáng', meaning: 'promptly; at once', bangla: 'তাড়াতাড়ি', level: '3', favorite: false },

                    { id: 492, character: '联合', pinyin: 'liánhé', meaning: 'unite; joint', bangla: 'একত্রিত করা', level: '3', favorite: false },

                    { id: 493, character: '联系', pinyin: 'liánxì', meaning: 'contact; connect; relation', bangla: 'যোগাযোগ; সম্পর্ক', level: '3', favorite: false },

                    { id: 494, character: '脸', pinyin: 'liǎn', meaning: 'face', bangla: 'মুখ', level: '3', favorite: false },

                    { id: 495, character: '练习', pinyin: 'liànxí', meaning: 'practice; exercise', bangla: 'অনুশীলন', level: '3', favorite: false },

                    { id: 496, character: '辆', pinyin: 'liàng', meaning: 'measure word for vehicles', bangla: 'গাড়ির পরিমাপ', level: '3', favorite: false },

                    { id: 497, character: '聊天', pinyin: 'liáotiān', meaning: 'chat; talk casually', bangla: 'আড্ডা দেওয়া', level: '3', favorite: false },

                    { id: 498, character: '料', pinyin: 'liào', meaning: 'material; expect; predict', bangla: 'উপাদান; আশা করা', level: '3', favorite: false },

                    { id: 499, character: '列', pinyin: 'liè', meaning: 'list; arrange; row', bangla: 'তালিকা; সাজানো', level: '3', favorite: false },

                    { id: 500, character: '临', pinyin: 'lín', meaning: 'approach; face; just before', bangla: 'আসন্ন; সামনে', level: '3', favorite: false },

                    { id: 501, character: '临时', pinyin: 'línshí', meaning: 'temporary; provisional', bangla: 'অস্থায়ী', level: '3', favorite: false },

                    { id: 502, character: '另外', pinyin: 'lìngwài', meaning: 'besides; in addition; other', bangla: 'অতিরিক্ত; অন্য', level: '3', favorite: false },

                    { id: 503, character: '留', pinyin: 'liú', meaning: 'stay; remain; leave behind', bangla: 'থেকে যাওয়া; রেখে যাওয়া', level: '3', favorite: false },

                    { id: 504, character: '留学', pinyin: 'liúxué', meaning: 'study abroad', bangla: 'বিদেশে পড়াশোনা', level: '3', favorite: false },

                    { id: 505, character: '流', pinyin: 'liú', meaning: 'flow; stream; class (of people)', bangla: 'প্রবাহ; ধারা', level: '3', favorite: false },

                    { id: 506, character: '流行', pinyin: 'liúxíng', meaning: 'popular; fashionable; prevalent', bangla: 'জনপ্রিয়', level: '3', favorite: false },

                    { id: 507, character: '流利', pinyin: 'liúlì', meaning: 'fluent; smooth', bangla: 'ধারাবাহিক; স্বাচ্ছন্দ্য', level: '3', favorite: false },

                    { id: 508, character: '流泪', pinyin: 'liú lèi', meaning: 'shed tears; cry', bangla: 'চোখের জল ফেলা', level: '3', favorite: false },

                    { id: 509, character: '六', pinyin: 'liù', meaning: 'six', bangla: 'ছয়', level: '3', favorite: false },

                    { id: 510, character: '龙', pinyin: 'lóng', meaning: 'dragon', bangla: 'ড্রাগন', level: '3', favorite: false },

                    { id: 511, character: '楼', pinyin: 'lóu', meaning: 'building; floor; tower', bangla: 'ভবন; তলা', level: '3', favorite: false },

                    { id: 512, character: '路', pinyin: 'lù', meaning: 'road; path; route', bangla: 'রাস্তা', level: '3', favorite: false },

                    { id: 513, character: '录像', pinyin: 'lùxiàng', meaning: 'video recording', bangla: 'ভিডিও রেকর্ডিং', level: '3', favorite: false },

                    { id: 514, character: '录音', pinyin: 'lùyīn', meaning: 'sound recording', bangla: 'অডিও রেকর্ডিং', level: '3', favorite: false },

                    { id: 515, character: '律师', pinyin: 'lǜshī', meaning: 'lawyer', bangla: 'আইনজীবী', level: '3', favorite: false },

                    { id: 516, character: '乱', pinyin: 'luàn', meaning: 'chaotic; disorderly; mess up', bangla: 'অরাজক; বিশৃঙ্খল', level: '3', favorite: false },

                    { id: 517, character: '旅游', pinyin: 'lǚyóu', meaning: 'travel; tour; tourism', bangla: 'ভ্রমণ; পর্যটন', level: '3', favorite: false },

                    { id: 518, character: '绿', pinyin: 'lǜ', meaning: 'green', bangla: 'সবুজ', level: '3', favorite: false },

                    { id: 519, character: '绿色', pinyin: 'lǜsè', meaning: 'green (color); green (environmentally friendly)', bangla: 'সবুজ; পরিবেশবান্ধব', level: '3', favorite: false },

                    { id: 520, character: '马', pinyin: 'mǎ', meaning: 'horse', bangla: 'ঘোড়া', level: '3', favorite: false },

                    { id: 521, character: '马上', pinyin: 'mǎshàng', meaning: 'immediately; right away', bangla: 'অবিলম্বে', level: '3', favorite: false },

                    { id: 522, character: '满意', pinyin: 'mǎnyì', meaning: 'satisfied; pleased', bangla: 'সন্তুষ্ট', level: '3', favorite: false },

                    { id: 523, character: '满', pinyin: 'mǎn', meaning: 'full; filled; completely', bangla: 'পূর্ণ; সম্পূর্ণভাবে', level: '3', favorite: false },

                    { id: 524, character: '慢', pinyin: 'màn', meaning: 'slow', bangla: 'ধীর', level: '3', favorite: false },

                    { id: 525, character: '馒头', pinyin: 'mántou', meaning: 'steamed bun', bangla: 'স্টিম বান', level: '3', favorite: false },

                    { id: 526, character: '忙', pinyin: 'máng', meaning: 'busy', bangla: 'ব্যস্ত', level: '3', favorite: false },

                    { id: 527, character: '毛巾', pinyin: 'máojīn', meaning: 'towel', bangla: 'তোয়ালে', level: '3', favorite: false },

                    { id: 528, character: '帽子', pinyin: 'màozi', meaning: 'hat; cap', bangla: 'টুপি', level: '3', favorite: false },

                    { id: 529, character: '没', pinyin: 'méi', meaning: 'not have; did not', bangla: 'নেই; করেনি', level: '3', favorite: false },

                    { id: 530, character: '没关系', pinyin: 'méi guānxi', meaning: 'never mind; it doesn’t matter', bangla: 'কোনো সমস্যা নেই', level: '3', favorite: false },

                    { id: 531, character: '没有', pinyin: 'méiyǒu', meaning: 'do not have; there is not', bangla: 'নেই', level: '3', favorite: false },

                    { id: 532, character: '每', pinyin: 'měi', meaning: 'every; each', bangla: 'প্রতিটি', level: '3', favorite: false },

                    { id: 533, character: '美丽', pinyin: 'měilì', meaning: 'beautiful', bangla: 'সুন্দর', level: '3', favorite: false },

                    { id: 534, character: '美术', pinyin: 'měishù', meaning: 'fine arts', bangla: 'শিল্পকলা', level: '3', favorite: false },

                    { id: 535, character: '美元', pinyin: 'měiyuán', meaning: 'US dollar', bangla: 'মার্কিন ডলার', level: '3', favorite: false },

                    { id: 536, character: '门', pinyin: 'mén', meaning: 'door; gate; subject (school)', bangla: 'দরজা; বিষয়', level: '3', favorite: false },

                    { id: 537, character: '们', pinyin: 'men', meaning: 'plural suffix for pronouns/persons', bangla: 'বহুবচন প্রত্যয়', level: '3', favorite: false },

                    { id: 538, character: '梦', pinyin: 'mèng', meaning: 'dream', bangla: 'স্বপ্ন', level: '3', favorite: false },

                    { id: 539, character: '梦想', pinyin: 'mèngxiǎng', meaning: 'dream; aspiration', bangla: 'স্বপ্ন; লক্ষ্য', level: '3', favorite: false },

                    { id: 540, character: '秘密', pinyin: 'mìmì', meaning: 'secret', bangla: 'গোপন', level: '3', favorite: false },

                    { id: 541, character: '密码', pinyin: 'mìmǎ', meaning: 'password; code', bangla: 'পাসওয়ার্ড; কোড', level: '3', favorite: false },

                    { id: 542, character: '免费', pinyin: 'miǎnfèi', meaning: 'free of charge', bangla: 'বিনামূল্যে', level: '3', favorite: false },

                    { id: 543, character: '民族', pinyin: 'mínzú', meaning: 'nation; ethnic group', bangla: 'জাতি; গোষ্ঠী', level: '3', favorite: false },

                    { id: 544, character: '明白', pinyin: 'míngbai', meaning: 'understand; clear', bangla: 'বুঝতে পারা; স্পষ্ট', level: '3', favorite: false },

                    { id: 545, character: '明显', pinyin: 'míngxiǎn', meaning: 'obvious; evident', bangla: 'স্পষ্ট', level: '3', favorite: false },

                    { id: 546, character: '明星', pinyin: 'míngxīng', meaning: 'star (celebrity)', bangla: 'তারকা; সেলিব্রিটি', level: '3', favorite: false },

                    { id: 547, character: '摸', pinyin: 'mō', meaning: 'touch; feel', bangla: 'স্পর্শ করা', level: '3', favorite: false },

                    { id: 548, character: '模特', pinyin: 'mótè', meaning: 'model (fashion)', bangla: 'মডেল', level: '3', favorite: false },

                    { id: 549, character: '末', pinyin: 'mò', meaning: 'end; last; final', bangla: 'শেষ; শেষের', level: '3', favorite: false },

                    { id: 550, character: '母亲', pinyin: 'mǔqīn', meaning: 'mother', bangla: 'মা', level: '3', favorite: false },

                    { id: 551, character: '目', pinyin: 'mù', meaning: 'eye; look; item (in a list)', bangla: 'চোখ; দেখা; বিষয়', level: '3', favorite: false },

                    { id: 552, character: '目标', pinyin: 'mùbiāo', meaning: 'goal; target', bangla: 'লক্ষ্য', level: '3', favorite: false },

                    { id: 553, character: '目前', pinyin: 'mùqián', meaning: 'at present; currently', bangla: 'বর্তমানে', level: '3', favorite: false },

                    { id: 554, character: '拿', pinyin: 'ná', meaning: 'take; hold; bring', bangla: 'নেওয়া; ধরে রাখা', level: '3', favorite: false },

                    { id: 555, character: '耐心', pinyin: 'nàixīn', meaning: 'patient; patience', bangla: 'ধৈর্য', level: '3', favorite: false },

                    { id: 556, character: '男', pinyin: 'nán', meaning: 'male; man', bangla: 'পুরুষ', level: '3', favorite: false },

                    { id: 557, character: '男子', pinyin: 'nánzǐ', meaning: 'man; male person', bangla: 'পুরুষ ব্যক্তি', level: '3', favorite: false },

                    { id: 558, character: '难过', pinyin: 'nánguò', meaning: 'sad; upset', bangla: 'দুঃখিত; বিষণ্ণ', level: '3', favorite: false },

                    { id: 559, character: '难免', pinyin: 'nánmiǎn', meaning: 'hard to avoid; unavoidable', bangla: 'এড়ানো কঠিন', level: '3', favorite: false },

                    { id: 560, character: '脑子', pinyin: 'nǎozi', meaning: 'brain; mind', bangla: 'মগজ; মন', level: '3', favorite: false },

                    { id: 561, character: '闹', pinyin: 'nào', meaning: 'make noise; disturb; noisy', bangla: 'শব্দ করা; বিরক্ত করা', level: '3', favorite: false },

                    { id: 562, character: '闹钟', pinyin: 'nàozhōng', meaning: 'alarm clock', bangla: 'ঘড়ি (অ্যালার্ম)', level: '3', favorite: false },

                    { id: 563, character: '内部', pinyin: 'nèibù', meaning: 'internal; inside', bangla: 'অভ্যন্তরীণ', level: '3', favorite: false },

                    { id: 564, character: '内容', pinyin: 'nèiróng', meaning: 'content; substance', bangla: 'বিষয়বস্তু', level: '3', favorite: false },

                    { id: 565, character: '内心', pinyin: 'nèixīn', meaning: 'inner heart; inner feelings', bangla: 'অন্তরের অনুভূতি', level: '3', favorite: false },

                    { id: 566, character: '能力', pinyin: 'nénglì', meaning: 'ability; capability', bangla: 'ক্ষমতা', level: '3', favorite: false },

                    { id: 567, character: '能够', pinyin: 'nénggòu', meaning: 'can; be able to', bangla: 'পারা', level: '3', favorite: false },

                    { id: 568, character: '年龄', pinyin: 'niánlíng', meaning: 'age', bangla: 'বয়স', level: '3', favorite: false },

                    { id: 569, character: '年轻', pinyin: 'niánqīng', meaning: 'young', bangla: 'তরুণ', level: '3', favorite: false },

                    { id: 570, character: '鸟', pinyin: 'niǎo', meaning: 'bird', bangla: 'পাখি', level: '3', favorite: false },

                    { id: 571, character: '女士', pinyin: 'nǚshì', meaning: 'Ms.; lady', bangla: 'সুন্দরী; মহিলা', level: '3', favorite: false },

                    { id: 572, character: '女性', pinyin: 'nǚxìng', meaning: 'female; woman', bangla: 'নারী', level: '3', favorite: false },

                    { id: 573, character: '暖和', pinyin: 'nuǎnhuo', meaning: 'warm; nice and warm', bangla: 'উষ্ণ', level: '3', favorite: false },

                    { id: 574, character: '偶尔', pinyin: 'ǒu ěr', meaning: 'occasionally; once in a while', bangla: 'কখনো কখনো', level: '3', favorite: false },

                    { id: 575, character: '拍', pinyin: 'pāi', meaning: 'pat; clap; shoot (photo/film)', bangla: 'চাপ দেওয়া; ছবি তোলা', level: '3', favorite: false },

                    { id: 576, character: '拍照', pinyin: 'pāizhào', meaning: 'take a photo', bangla: 'ছবি তোলা', level: '3', favorite: false },

                    { id: 577, character: '排球', pinyin: 'páiqiú', meaning: 'volleyball', bangla: 'ভলিবল', level: '3', favorite: false },

                    { id: 578, character: '牌', pinyin: 'pái', meaning: 'plate; sign; card; brand', bangla: 'প্লেট; সাইন; কার্ড', level: '3', favorite: false },

                    { id: 579, character: '派', pinyin: 'pài', meaning: 'send; dispatch; faction', bangla: 'প্রেরণ করা; দল', level: '3', favorite: false },

                    { id: 580, character: '判断', pinyin: 'pànduàn', meaning: 'judge; determine', bangla: 'বিচার করা', level: '3', favorite: false },

                    { id: 581, character: '胖', pinyin: 'pàng', meaning: 'fat; overweight', bangla: 'মোটা', level: '3', favorite: false },

                    { id: 582, character: '跑步', pinyin: 'pǎobù', meaning: 'run; jogging', bangla: 'দৌড়', level: '3', favorite: false },

                    { id: 583, character: '陪', pinyin: 'péi', meaning: 'accompany; keep someone company', bangla: 'সঙ্গ দেওয়া', level: '3', favorite: false },

                    { id: 584, character: '赔', pinyin: 'péi', meaning: 'compensate; pay for loss', bangla: 'ক্ষতিপূরণ দেওয়া', level: '3', favorite: false },

                    { id: 585, character: '培训', pinyin: 'péixùn', meaning: 'training; coaching', bangla: 'প্রশিক্ষণ', level: '3', favorite: false },

                    { id: 586, character: '培养', pinyin: 'péiyǎng', meaning: 'cultivate; foster; train', bangla: 'প্রতিপালন করা', level: '3', favorite: false },

                    { id: 587, character: '培育', pinyin: 'péiyù', meaning: 'cultivate; nurture', bangla: 'উৎপাদন; লালন-পালন', level: '3', favorite: false },

                    { id: 588, character: '碰', pinyin: 'pèng', meaning: 'touch; bump into; meet by chance', bangla: 'আঘাত করা; সংঘর্ষ', level: '3', favorite: false },

                    { id: 589, character: '皮肤', pinyin: 'pífū', meaning: 'skin', bangla: 'ত্বক', level: '3', favorite: false },

                    { id: 590, character: '脾气', pinyin: 'píqi', meaning: 'temper; personality', bangla: 'মেজাজ', level: '3', favorite: false },

                    { id: 591, character: '篇', pinyin: 'piān', meaning: 'sheet (of paper); article', bangla: 'পাতা; প্রবন্ধ', level: '3', favorite: false },

                    { id: 592, character: '便宜', pinyin: 'piányí', meaning: 'cheap; inexpensive', bangla: 'সস্তা', level: '3', favorite: false },

                    { id: 593, character: '骗', pinyin: 'piàn', meaning: 'cheat; deceive', bangla: 'প্রতারণা করা', level: '3', favorite: false },

                    { id: 594, character: '乒乓球', pinyin: 'pīngpāngqiú', meaning: 'table tennis; ping-pong', bangla: 'টেবিল টেনিস', level: '3', favorite: false },

                    { id: 595, character: '苹果', pinyin: 'píngguǒ', meaning: 'apple', bangla: 'আপেল', level: '3', favorite: false },

                    { id: 596, character: '评论', pinyin: 'pínglùn', meaning: 'comment; review; criticize', bangla: 'মন্তব্য; পর্যালোচনা', level: '3', favorite: false },

                    { id: 597, character: '瓶', pinyin: 'píng', meaning: 'bottle; container', bangla: 'বোতল', level: '3', favorite: false },

                    { id: 598, character: '破', pinyin: 'pò', meaning: 'broken; damaged; tear', bangla: 'ভাঙা; ছিঁড়া', level: '3', favorite: false },

                    { id: 599, character: '葡萄', pinyin: 'pútáo', meaning: 'grape', bangla: 'আঙ্গুর', level: '3', favorite: false },

                    { id: 600, character: '普遍', pinyin: 'pǔbiàn', meaning: 'universal; widespread', bangla: 'সর্বব্যাপী', level: '3', favorite: false },

                    { id: 601, character: '普通话', pinyin: 'pǔtōnghuà', meaning: 'Mandarin (Chinese language)', bangla: 'ম্যান্ডারিন (চীনা ভাষা)', level: '3', favorite: false },

                    { id: 602, character: '其次', pinyin: 'qícì', meaning: 'next; secondly', bangla: 'এর পর; দ্বিতীয়ত', level: '3', favorite: false },

                    { id: 603, character: '其中', pinyin: 'qízhōng', meaning: 'among them; in which', bangla: 'এর মধ্যে; যার মধ্যে', level: '3', favorite: false },

                    { id: 604, character: '气候', pinyin: 'qìhòu', meaning: 'climate; weather conditions', bangla: 'আবহাওয়া; জলবায়ু', level: '3', favorite: false },

                    { id: 605, character: '千万', pinyin: 'qiānwàn', meaning: 'ten million; must; be sure to', bangla: 'কোটি; অবশ্যই', level: '3', favorite: false },

                    { id: 606, character: '签', pinyin: 'qiān', meaning: 'sign; autograph; sign a contract', bangla: 'সই করা; চুক্তি স্বাক্ষর', level: '3', favorite: false },

                    { id: 607, character: '签订', pinyin: 'qiāndìng', meaning: 'sign (a treaty/contract)', bangla: 'স্বাক্ষর করা', level: '3', favorite: false },

                    { id: 608, character: '签名', pinyin: 'qiānmíng', meaning: 'signature; sign one’s name', bangla: 'সই; নাম লেখা', level: '3', favorite: false },

                    { id: 609, character: '签证', pinyin: 'qiānzhèng', meaning: 'visa', bangla: 'ভিসা', level: '3', favorite: false },

                    { id: 610, character: '前', pinyin: 'qián', meaning: 'front; forward; ago', bangla: 'সামনে; আগে', level: '3', favorite: false },

                    { id: 611, character: '前后', pinyin: 'qiánhòu', meaning: 'around; about; front and back', bangla: 'সামনে-পিছনে; প্রায়', level: '3', favorite: false },

                    { id: 612, character: '前面', pinyin: 'qiánmiàn', meaning: 'in front; ahead', bangla: 'সামনে', level: '3', favorite: false },

                    { id: 613, character: '前往', pinyin: 'qiánwǎng', meaning: 'go to; proceed to', bangla: 'যাওয়া; অগ্রসর হওয়া', level: '3', favorite: false },

                    { id: 614, character: '欠', pinyin: 'qiàn', meaning: 'owe; lack', bangla: 'ঋণী; অভাব', level: '3', favorite: false },

                    { id: 615, character: '强调', pinyin: 'qiángdiào', meaning: 'stress; emphasize', bangla: 'জোর দেওয়া', level: '3', favorite: false },

                    { id: 616, character: '强烈', pinyin: 'qiángliè', meaning: 'intense; strong', bangla: 'তীব্র; শক্তিশালী', level: '3', favorite: false },

                    { id: 617, character: '墙', pinyin: 'qiáng', meaning: 'wall', bangla: 'দেয়াল', level: '3', favorite: false },

                    { id: 618, character: '抢', pinyin: 'qiǎng', meaning: 'snatch; rob; rush', bangla: 'ছিনিয়ে নেওয়া; ছুটে যাওয়া', level: '3', favorite: false },

                    { id: 619, character: '抢救', pinyin: 'qiǎngjiù', meaning: 'rescue; save urgently', bangla: 'আত্মরক্ষা; তাৎক্ষণিক উদ্ধার', level: '3', favorite: false },

                    { id: 620, character: '强迫', pinyin: 'qiǎngpò', meaning: 'force; compel', bangla: 'বাধ্য করা', level: '3', favorite: false },

                    { id: 621, character: '悄悄', pinyin: 'qiāoqiāo', meaning: 'quietly; secretly', bangla: 'চুপিচুপি', level: '3', favorite: false },

                    { id: 622, character: '敲', pinyin: 'qiāo', meaning: 'knock; tap', bangla: 'কড়া নাড়া', level: '3', favorite: false },

                    { id: 623, character: '桥', pinyin: 'qiáo', meaning: 'bridge', bangla: 'পুল', level: '3', favorite: false },

                    { id: 624, character: '巧克力', pinyin: 'qiǎokèlì', meaning: 'chocolate', bangla: 'চকোলেট', level: '3', favorite: false },

                    { id: 625, character: '亲戚', pinyin: 'qīnqi', meaning: 'relative; kin', bangla: 'আত্মীয়', level: '3', favorite: false },

                    { id: 626, character: '亲切', pinyin: 'qīnqiè', meaning: 'kind; cordial; close', bangla: 'আন্তরিক; স্নেহময়', level: '3', favorite: false },

                    { id: 627, character: '青春', pinyin: 'qīngchūn', meaning: 'youth; adolescence', bangla: 'যৌবন', level: '3', favorite: false },

                    { id: 628, character: '轻松', pinyin: 'qīngsōng', meaning: 'relaxed; light', bangla: 'আরামদায়ক', level: '3', favorite: false },

                    { id: 629, character: '情况', pinyin: 'qíngkuàng', meaning: 'situation; condition', bangla: 'পরিস্থিতি', level: '3', favorite: false },

                    { id: 630, character: '穷', pinyin: 'qióng', meaning: 'poor; impoverished', bangla: 'দরিদ্র', level: '3', favorite: false },

                    { id: 631, character: '区别', pinyin: 'qūbié', meaning: 'difference; distinction', bangla: 'পার্থক্য', level: '3', favorite: false },

                    { id: 632, character: '取', pinyin: 'qǔ', meaning: 'take; get; fetch', bangla: 'নেওয়া; অর্জন করা', level: '3', favorite: false },

                    { id: 633, character: '取消', pinyin: 'qǔxiāo', meaning: 'cancel; abolish', bangla: 'বাতিল করা', level: '3', favorite: false },

                    { id: 634, character: '娶', pinyin: 'qǔ', meaning: 'marry (a woman)', bangla: 'বিয়ে করা (নারীকে)', level: '3', favorite: false },

                    { id: 635, character: '去', pinyin: 'qù', meaning: 'go; leave; remove', bangla: 'যাওয়া; চলে যাওয়া', level: '3', favorite: false },

                    { id: 636, character: '去年', pinyin: 'qùnián', meaning: 'last year', bangla: 'গত বছর', level: '3', favorite: false },

                    { id: 637, character: '全部', pinyin: 'quánbù', meaning: 'all; whole; entirely', bangla: 'সব; সম্পূর্ণভাবে', level: '3', favorite: false },

                    { id: 638, character: '全面', pinyin: 'quánmiàn', meaning: 'overall; comprehensive', bangla: 'সর্বাত্মক; বিস্তৃত', level: '3', favorite: false },

                    { id: 639, character: '劝', pinyin: 'quàn', meaning: 'advise; urge; persuade', bangla: 'পরামর্শ দেওয়া; বোঝানো', level: '3', favorite: false },

                    { id: 640, character: '却', pinyin: 'què', meaning: 'but; yet; however', bangla: 'কিন্তু; তবুও', level: '3', favorite: false },

                    { id: 641, character: '确实', pinyin: 'quèshí', meaning: 'indeed; really; certainly', bangla: 'প্রকৃতই; নিশ্চয়', level: '3', favorite: false },

                    { id: 642, character: '群', pinyin: 'qún', meaning: 'group; crowd; flock', bangla: 'দল; ভিড়', level: '3', favorite: false },

                    { id: 643, character: '裙子', pinyin: 'qúnzi', meaning: 'skirt', bangla: 'স্কার্ট', level: '3', favorite: false },

                    { id: 644, character: '然而', pinyin: 'rán ér', meaning: 'however; yet; but', bangla: 'তবে; কিন্তু', level: '3', favorite: false },

                    { id: 645, character: '然后', pinyin: 'ránhòu', meaning: 'then; after that', bangla: 'তারপর', level: '3', favorite: false },

                    { id: 646, character: '让', pinyin: 'ràng', meaning: 'let; allow; yield', bangla: 'ছাড়া; অনুমতি দেওয়া', level: '3', favorite: false },

                    { id: 647, character: '热', pinyin: 'rè', meaning: 'hot; heat; popular', bangla: 'গরম; জনপ্রিয়', level: '3', favorite: false },

                    { id: 648, character: '热爱', pinyin: 'rè ài', meaning: 'love ardently; be fond of', bangla: 'ভালোবাসা', level: '3', favorite: false },

                    { id: 649, character: '热闹', pinyin: 'rènao', meaning: 'lively; bustling with activity', bangla: 'উৎসবমুখর', level: '3', favorite: false },

                    { id: 650, character: '热情', pinyin: 'rèqíng', meaning: 'enthusiasm; warm-hearted', bangla: 'উৎসাহ; আত্মীয়সুলভ', level: '3', favorite: false },

                    { id: 651, character: '人体', pinyin: 'réntǐ', meaning: 'human body', bangla: 'মানবদেহ', level: '3', favorite: false },

                    { id: 652, character: '人民', pinyin: 'rénmín', meaning: 'people; the public', bangla: 'জনগণ', level: '3', favorite: false },

                    { id: 653, character: '人民币', pinyin: 'rénmínbì', meaning: 'Renminbi (RMB; Chinese currency)', bangla: 'ইউয়ান (চীনা মুদ্রা)', level: '3', favorite: false },

                    { id: 654, character: '人数', pinyin: 'rénshù', meaning: 'number of people', bangla: 'লোকসংখ্যা', level: '3', favorite: false },

                    { id: 655, character: '人员', pinyin: 'rényuán', meaning: 'staff; personnel', bangla: 'কর্মী; সদস্য', level: '3', favorite: false },

                    { id: 656, character: '认为', pinyin: 'rènwéi', meaning: 'believe; think; consider', bangla: 'মনে করা', level: '3', favorite: false },

                    { id: 657, character: '认真', pinyin: 'rènzhēn', meaning: 'serious; earnest; careful', bangla: 'গুরুত্বপূর্ণ; গভীরভাবে', level: '3', favorite: false },

                    { id: 658, character: '任何', pinyin: 'rènhé', meaning: 'any; whatever', bangla: 'যে কোনো', level: '3', favorite: false },

                    { id: 659, character: '任务', pinyin: 'rènwu', meaning: 'task; mission', bangla: 'কাজ; দায়িত্ব', level: '3', favorite: false },

                    { id: 660, character: '仍然', pinyin: 'réngrán', meaning: 'still; yet; as before', bangla: 'এখনও; তবুও', level: '3', favorite: false },

                    { id: 661, character: '日', pinyin: 'rì', meaning: 'sun; day; date', bangla: 'সূর্য; দিন; তারিখ', level: '3', favorite: false },

                    { id: 662, character: '容易', pinyin: 'róngyì', meaning: 'easy; simple', bangla: 'সহজ', level: '3', favorite: false },

                    { id: 663, character: '如果', pinyin: 'rúguǒ', meaning: 'if; in case', bangla: 'যদি', level: '3', favorite: false },

                    { id: 664, character: '如何', pinyin: 'rúhé', meaning: 'how; what way', bangla: 'কিভাবে; কেমন', level: '3', favorite: false },

                    { id: 665, character: '入', pinyin: 'rù', meaning: 'enter; come in; join', bangla: 'প্রবেশ করা; যোগদান করা', level: '3', favorite: false },

                    { id: 666, character: '入口', pinyin: 'rùkǒu', meaning: 'entrance; entry point', bangla: 'প্রবেশপথ', level: '3', favorite: false },

                    { id: 667, character: '软', pinyin: 'ruǎn', meaning: 'soft; flexible; weak', bangla: 'নরম; শিথিল', level: '3', favorite: false },

                    { id: 668, character: '软件', pinyin: 'ruǎnjiàn', meaning: 'software', bangla: 'সফটওয়্যার', level: '3', favorite: false },

                    { id: 669, character: '润', pinyin: 'rùn', meaning: 'moist; smooth; enrich', bangla: 'আর্দ্র; মসৃণ; সমৃদ্ধ', level: '3', favorite: false },

                    { id: 670, character: '若', pinyin: 'ruò', meaning: 'if; like; seem', bangla: 'যদি; যেন', level: '3', favorite: false },

                    { id: 671, character: '赛', pinyin: 'sài', meaning: 'match; competition; contest', bangla: 'প্রতিযোগিতা', level: '3', favorite: false },

                    { id: 672, character: '三', pinyin: 'sān', meaning: 'three', bangla: 'তিন', level: '3', favorite: false },

                    { id: 673, character: '伞', pinyin: 'sǎn', meaning: 'umbrella', bangla: 'ছাতা', level: '3', favorite: false },

                    { id: 674, character: '散', pinyin: 'sàn', meaning: 'disperse; scatter; break up', bangla: 'ছড়িয়ে পড়া', level: '3', favorite: false },

                    { id: 675, character: '散步', pinyin: 'sànbù', meaning: 'take a walk; stroll', bangla: 'ঘুরে বেড়ানো', level: '3', favorite: false },

                    { id: 676, character: '嗓子', pinyin: 'sǎngzi', meaning: 'throat; voice', bangla: 'গলা; কণ্ঠস্বর', level: '3', favorite: false },

                    { id: 677, character: '扫', pinyin: 'sǎo', meaning: 'sweep; clean', bangla: 'ঝাঁটা মারা; পরিষ্কার', level: '3', favorite: false },

                    { id: 678, character: '色', pinyin: 'sè', meaning: 'color; look; expression', bangla: 'রং; চেহারা', level: '3', favorite: false },

                    { id: 679, character: '森林', pinyin: 'sēnlín', meaning: 'forest', bangla: 'বন', level: '3', favorite: false },

                    { id: 680, character: '沙发', pinyin: 'shāfā', meaning: 'sofa', bangla: 'সোফা', level: '3', favorite: false },

                    { id: 681, character: '山', pinyin: 'shān', meaning: 'mountain; hill', bangla: 'পাহাড়', level: '3', favorite: false },

                    { id: 682, character: '扇', pinyin: 'shàn', meaning: 'fan; door leaf; measure word', bangla: 'পাখা; দরজার পাল্লা', level: '3', favorite: false },

                    { id: 683, character: '扇', pinyin: 'shān', meaning: 'to fan; flap', bangla: 'পাখা ঝাপটানো', level: '3', favorite: false },

                    { id: 684, character: '伤', pinyin: 'shāng', meaning: 'injury; wound; hurt', bangla: 'আঘাত; ক্ষত', level: '3', favorite: false },

                    { id: 685, character: '伤心', pinyin: 'shāngxīn', meaning: 'heartbroken; sad', bangla: 'বিষণ্ণ; মর্মাহত', level: '3', favorite: false },

                    { id: 686, character: '商品', pinyin: 'shāngpǐn', meaning: 'commodity; goods', bangla: 'পণ্য', level: '3', favorite: false },

                    { id: 687, character: '商业', pinyin: 'shāngyè', meaning: 'commerce; business', bangla: 'বাণিজ্য', level: '3', favorite: false },

                    { id: 688, character: '上', pinyin: 'shàng', meaning: 'up; above; go up; previous', bangla: 'উপরে; যাওয়া; আগের', level: '3', favorite: false },

                    { id: 689, character: '上班', pinyin: 'shàngbān', meaning: 'go to work', bangla: 'কাজে যাওয়া', level: '3', favorite: false },

                    { id: 690, character: '上网', pinyin: 'shàngwǎng', meaning: 'surf the Internet', bangla: 'ইন্টারনেট ব্যবহার করা', level: '3', favorite: false },

                    { id: 691, character: '上午', pinyin: 'shàngwǔ', meaning: 'morning', bangla: 'সকাল', level: '3', favorite: false },

                    { id: 692, character: '上学', pinyin: 'shàngxué', meaning: 'go to school', bangla: 'স্কুলে যাওয়া', level: '3', favorite: false },

                    { id: 693, character: '上衣', pinyin: 'shàngyī', meaning: 'upper garment; coat', bangla: 'উপরের পোশাক', level: '3', favorite: false },

                    { id: 694, character: '少', pinyin: 'shǎo', meaning: 'few; little; less', bangla: 'কম; অল্প', level: '3', favorite: false },

                    { id: 695, character: '少年', pinyin: 'shàonián', meaning: 'teenager; youth', bangla: 'কিশোর', level: '3', favorite: false },

                    { id: 696, character: '少数', pinyin: 'shǎoshù', meaning: 'small number; minority', bangla: 'অল্প সংখ্যক', level: '3', favorite: false },

                    { id: 697, character: '社会', pinyin: 'shèhuì', meaning: 'society', bangla: 'সমাজ', level: '3', favorite: false },

                    { id: 698, character: '摄像机', pinyin: 'shèxiàngjī', meaning: 'video camera', bangla: 'ভিডিও ক্যামেরা', level: '3', favorite: false },

                    { id: 699, character: '摄影', pinyin: 'shèyǐng', meaning: 'photography', bangla: 'ফটোগ্রাফি', level: '3', favorite: false },

                    { id: 700, character: '谁', pinyin: 'shéi', meaning: 'who', bangla: 'কে', level: '3', favorite: false },

                    { id: 701, character: '申请', pinyin: 'shēnqǐng', meaning: 'apply for; request', bangla: 'আবেদন করা', level: '3', favorite: false },

                    { id: 702, character: '深', pinyin: 'shēn', meaning: 'deep; profound; dark (color)', bangla: 'গভীর; গাঢ়', level: '3', favorite: false },

                    { id: 703, character: '甚至', pinyin: 'shènzhì', meaning: 'even; so much so that', bangla: 'এমনকি; যে পর্যন্ত', level: '3', favorite: false },

                    { id: 704, character: '生活', pinyin: 'shēnghuó', meaning: 'life; live; livelihood', bangla: 'জীবন; বেঁচে থাকা', level: '3', favorite: false },

                    { id: 705, character: '生命', pinyin: 'shēngmìng', meaning: 'life; existence', bangla: 'জীবন', level: '3', favorite: false },

                    { id: 706, character: '生意', pinyin: 'shēngyi', meaning: 'business; trade', bangla: 'ব্যবসা', level: '3', favorite: false },

                    { id: 707, character: '省', pinyin: 'shěng', meaning: 'province; save; omit', bangla: 'প্রদেশ; সাশ্রয় করা', level: '3', favorite: false },

                    { id: 708, character: '剩', pinyin: 'shèng', meaning: 'remain; leftover', bangla: 'অবশিষ্ট', level: '3', favorite: false },

                    { id: 709, character: '失败', pinyin: 'shībài', meaning: 'fail; defeat', bangla: 'ব্যর্থতা', level: '3', favorite: false },

                    { id: 710, character: '失去', pinyin: 'shīqù', meaning: 'lose; miss', bangla: 'হারানো', level: '3', favorite: false },

                    { id: 711, character: '失望', pinyin: 'shīwàng', meaning: 'disappointed', bangla: 'হতাশ', level: '3', favorite: false },

                    { id: 712, character: '师傅', pinyin: 'shīfu', meaning: 'master; skilled worker', bangla: 'গুরু; দক্ষ শ্রমিক', level: '3', favorite: false },

                    { id: 713, character: '诗', pinyin: 'shī', meaning: 'poem; poetry', bangla: 'কবিতা', level: '3', favorite: false },

                    { id: 714, character: '湿', pinyin: 'shī', meaning: 'wet; damp', bangla: 'ভিজা', level: '3', favorite: false },

                    { id: 715, character: '十', pinyin: 'shí', meaning: 'ten', bangla: 'দশ', level: '3', favorite: false },

                    { id: 716, character: '十分', pinyin: 'shífēn', meaning: 'very; fully; extremely', bangla: 'অত্যন্ত', level: '3', favorite: false },

                    { id: 717, character: '时刻', pinyin: 'shíkè', meaning: 'moment; time; constantly', bangla: 'ক্ষণ; সময়', level: '3', favorite: false },

                    { id: 718, character: '时间', pinyin: 'shíjiān', meaning: 'time; period', bangla: 'সময়', level: '3', favorite: false },

                    { id: 719, character: '实际', pinyin: 'shíjì', meaning: 'actual; practical; reality', bangla: 'বাস্তব; ব্যবহারিক', level: '3', favorite: false },

                    { id: 720, character: '实践', pinyin: 'shíjiàn', meaning: 'practice; put into practice', bangla: 'অনুশীলন; বাস্তবায়ন', level: '3', favorite: false },

                    { id: 721, character: '实现', pinyin: 'shíxiàn', meaning: 'realize; achieve', bangla: 'বাস্তবায়ন করা', level: '3', favorite: false },

                    { id: 722, character: '实验', pinyin: 'shíyàn', meaning: 'experiment; test', bangla: 'পরীক্ষা', level: '3', favorite: false },

                    { id: 723, character: '实用', pinyin: 'shíyòng', meaning: 'practical; functional', bangla: 'ব্যবহারিক', level: '3', favorite: false },

                    { id: 724, character: '食品', pinyin: 'shípǐn', meaning: 'food; provisions', bangla: 'খাদ্য', level: '3', favorite: false },

                    { id: 725, character: '食堂', pinyin: 'shítáng', meaning: 'cafeteria; dining hall', bangla: 'ক্যান্টিন', level: '3', favorite: false },

                    { id: 726, character: '史', pinyin: 'shǐ', meaning: 'history; historical records', bangla: 'ইতিহাস', level: '3', favorite: false },

                    { id: 727, character: '使', pinyin: 'shǐ', meaning: 'cause; make; send', bangla: 'করানো; প্রেরণ করা', level: '3', favorite: false },

                    { id: 728, character: '使用', pinyin: 'shǐyòng', meaning: 'use; employ', bangla: 'ব্যবহার করা', level: '3', favorite: false },

                    { id: 729, character: '世界', pinyin: 'shìjiè', meaning: 'world', bangla: 'বিশ্ব', level: '3', favorite: false },

                    { id: 730, character: '市场', pinyin: 'shìchǎng', meaning: 'market; marketplace', bangla: 'বাজার', level: '3', favorite: false },

                    { id: 731, character: '市民', pinyin: 'shìmín', meaning: 'citizen; city resident', bangla: 'নাগরিক', level: '3', favorite: false },

                    { id: 732, character: '事', pinyin: 'shì', meaning: 'matter; thing; affair', bangla: 'বিষয়; কাজ', level: '3', favorite: false },

                    { id: 733, character: '事故', pinyin: 'shìgù', meaning: 'accident; incident', bangla: 'দুর্ঘটনা', level: '3', favorite: false },

                    { id: 734, character: '试', pinyin: 'shì', meaning: 'try; test; attempt', bangla: 'চেষ্টা করা; পরীক্ষা করা', level: '3', favorite: false },

                    { id: 735, character: '试卷', pinyin: 'shìjuàn', meaning: 'exam paper; test paper', bangla: 'পরীক্ষার পত্র', level: '3', favorite: false },

                    { id: 736, character: '试图', pinyin: 'shìtú', meaning: 'attempt; try', bangla: 'চেষ্টা করা', level: '3', favorite: false },

                    { id: 737, character: '试验', pinyin: 'shìyàn', meaning: 'test; experiment', bangla: 'পরীক্ষা', level: '3', favorite: false },

                    { id: 738, character: '视', pinyin: 'shì', meaning: 'see; regard; look at', bangla: 'দেখা; বিবেচনা করা', level: '3', favorite: false },

                    { id: 739, character: '视频', pinyin: 'shìpín', meaning: 'video clip; footage', bangla: 'ভিডিও', level: '3', favorite: false },

                    { id: 740, character: '视线', pinyin: 'shìxiàn', meaning: 'line of sight', bangla: 'দৃষ্টিসীমা', level: '3', favorite: false },

                    { id: 741, character: '试一试', pinyin: 'shì yí shì', meaning: 'give it a try', bangla: 'চেষ্টা করে দেখা', level: '3', favorite: false },

                    { id: 742, character: '室', pinyin: 'shì', meaning: 'room; chamber', bangla: 'কক্ষ; ঘর', level: '3', favorite: false },

                    { id: 743, character: '是', pinyin: 'shì', meaning: 'to be; yes', bangla: 'হওয়া; হ্যাঁ', level: '3', favorite: false },

                    { id: 744, character: '适合', pinyin: 'shìhé', meaning: 'suitable; fit', bangla: 'উপযুক্ত', level: '3', favorite: false },

                    { id: 745, character: '适应', pinyin: 'shìyìng', meaning: 'adapt to; accommodate', bangla: 'খাপ খাওয়ানো', level: '3', favorite: false },

                    { id: 746, character: '收', pinyin: 'shōu', meaning: 'receive; collect; harvest', bangla: 'গ্রহণ করা; সংগ্রহ করা', level: '3', favorite: false },

                    { id: 747, character: '收费', pinyin: 'shōufèi', meaning: 'charge (a fee)', bangla: 'ফি ধার্য করা', level: '3', favorite: false },

                    { id: 748, character: '收入', pinyin: 'shōurù', meaning: 'income; revenue', bangla: 'আয়', level: '3', favorite: false },

                    { id: 749, character: '收拾', pinyin: 'shōushi', meaning: 'tidy up; pack; repair', bangla: 'সাজিয়ে রাখা; মেরামত করা', level: '3', favorite: false },

                    { id: 750, character: '首都', pinyin: 'shǒudū', meaning: 'capital (city)', bangla: 'রাজধানী', level: '3', favorite: false },

                    { id: 751, character: '首先', pinyin: 'shǒuxiān', meaning: 'first; first of all', bangla: 'প্রথমে', level: '3', favorite: false },

                    { id: 752, character: '受不了', pinyin: 'shòubuliǎo', meaning: 'cannot bear; intolerable', bangla: 'সহ্য করতে পারা না', level: '3', favorite: false },

                    { id: 753, character: '受到', pinyin: 'shòudào', meaning: 'receive; suffer', bangla: 'প্রাপ্ত হওয়া', level: '3', favorite: false },

                    { id: 754, character: '售货员', pinyin: 'shòuhuòyuán', meaning: 'salesperson; clerk', bangla: 'বিক্রেতা', level: '3', favorite: false },

                    { id: 755, character: '输', pinyin: 'shū', meaning: 'lose; transport; input', bangla: 'হারানো; পরিবহন করা', level: '3', favorite: false },

                    { id: 756, character: '舒服', pinyin: 'shūfu', meaning: 'comfortable', bangla: 'আরামদায়ক', level: '3', favorite: false },

                    { id: 757, character: '熟练', pinyin: 'shúliàn', meaning: 'skilled; proficient', bangla: 'দক্ষ', level: '3', favorite: false },

                    { id: 758, character: '暑假', pinyin: 'shǔjià', meaning: 'summer vacation', bangla: 'গ্রীষ্মের ছুটি', level: '3', favorite: false },

                    { id: 759, character: '鼠标', pinyin: 'shǔbiāo', meaning: 'computer mouse', bangla: 'মাউস', level: '3', favorite: false },

                    { id: 760, character: '属于', pinyin: 'shǔyú', meaning: 'belong to', bangla: 'অন্তর্ভুক্ত', level: '3', favorite: false },

                    { id: 761, character: '数', pinyin: 'shù', meaning: 'number; count; several', bangla: 'সংখ্যা; গণনা', level: '3', favorite: false },

                    { id: 762, character: '数字', pinyin: 'shùzì', meaning: 'number; figure; digit', bangla: 'সংখ্যা', level: '3', favorite: false },

                    { id: 763, character: '帅', pinyin: 'shuài', meaning: 'handsome; smart', bangla: 'সুদর্শন', level: '3', favorite: false },

                    { id: 764, character: '双', pinyin: 'shuāng', meaning: 'pair; two; double', bangla: 'জোড়া; দ্বিগুণ', level: '3', favorite: false },

                    { id: 765, character: '爽', pinyin: 'shuǎng', meaning: 'refreshing; frank; clear', bangla: 'উজ্জ্বল; সত্যিকার', level: '3', favorite: false },

                    { id: 766, character: '水泥', pinyin: 'shuǐní', meaning: 'cement', bangla: 'সিমেন্ট', level: '3', favorite: false },

                    { id: 767, character: '水平', pinyin: 'shuǐpíng', meaning: 'level; standard', bangla: 'মান; স্তর', level: '3', favorite: false },

                    { id: 768, character: '税', pinyin: 'shuì', meaning: 'tax', bangla: 'কর', level: '3', favorite: false },

                    { id: 769, character: '顺', pinyin: 'shùn', meaning: 'along; with; obey; smooth', bangla: 'অনুসরণ করা; সহজ', level: '3', favorite: false },

                    { id: 770, character: '说明书', pinyin: 'shuōmíngshū', meaning: 'instruction manual', bangla: 'নির্দেশিকা; বই', level: '3', favorite: false },

                    { id: 771, character: '硕士', pinyin: 'shuòshì', meaning: 'master’s degree holder', bangla: 'স্নাতকোত্তর', level: '3', favorite: false },

                    { id: 772, character: '死', pinyin: 'sǐ', meaning: 'die; dead; fixed', bangla: 'মরা; মৃত; স্থির', level: '3', favorite: false },

                    { id: 773, character: '速度', pinyin: 'sùdù', meaning: 'speed', bangla: 'গতি', level: '3', favorite: false },

                    { id: 774, character: '塑料袋', pinyin: 'sùliàodài', meaning: 'plastic bag', bangla: 'প্লাস্টিকের ব্যাগ', level: '3', favorite: false },

                    { id: 775, character: '酸', pinyin: 'suān', meaning: 'sour; acid; tingle', bangla: 'ঝাঁজালো; অম্ল', level: '3', favorite: false },

                    { id: 776, character: '随便', pinyin: 'suíbiàn', meaning: 'casual; random; as one wishes', bangla: 'যেভাবে খুশি', level: '3', favorite: false },

                    { id: 777, character: '随着', pinyin: 'suízhe', meaning: 'along with; following', bangla: 'সঙ্গে সঙ্গে', level: '3', favorite: false },

                    { id: 778, character: '岁', pinyin: 'suì', meaning: 'year (of age); age', bangla: 'বছর (বয়স)', level: '3', favorite: false },

                    { id: 779, character: '孙子', pinyin: 'sūnzi', meaning: 'grandson', bangla: 'নাতি', level: '3', favorite: false },

                    { id: 780, character: '所有', pinyin: 'suǒyǒu', meaning: 'all; own; possess', bangla: 'সকল; ধারণ করা', level: '3', favorite: false },

                    { id: 781, character: '台', pinyin: 'tái', meaning: 'platform; desk; machine', bangla: 'মঞ্চ; ডেস্ক; যন্ত্র', level: '3', favorite: false },

                    { id: 782, character: '抬', pinyin: 'tái', meaning: 'lift; raise; carry', bangla: 'উত্তোলন করা', level: '3', favorite: false },

                    { id: 783, character: '太', pinyin: 'tài', meaning: 'too; very; extremely', bangla: 'অত্যধিক; খুব', level: '3', favorite: false },

                    { id: 784, character: '太阳', pinyin: 'tàiyáng', meaning: 'sun', bangla: 'সূর্য', level: '3', favorite: false },

                    { id: 785, character: '态度', pinyin: 'tàidù', meaning: 'attitude; manner', bangla: 'মনোভাব', level: '3', favorite: false },

                    { id: 786, character: '太太', pinyin: 'tàitai', meaning: 'Mrs.; madam', bangla: 'স্ত্রী; ম্যাডাম', level: '3', favorite: false },

                    { id: 787, character: '谈', pinyin: 'tán', meaning: 'talk; discuss; chat', bangla: 'কথা বলা', level: '3', favorite: false },

                    { id: 788, character: '弹钢琴', pinyin: 'tán gāngqín', meaning: 'play the piano', bangla: 'পিয়ানো বাজানো', level: '3', favorite: false },

                    { id: 789, character: '谈话', pinyin: 'tánhuà', meaning: 'talk; conversation', bangla: 'কথোপকথন', level: '3', favorite: false },

                    { id: 790, character: '谈判', pinyin: 'tánpàn', meaning: 'negotiate', bangla: 'আলোচনা করা', level: '3', favorite: false },

                    { id: 791, character: '套餐', pinyin: 'tàocān', meaning: 'set meal', bangla: 'সেট মেনু', level: '3', favorite: false },

                    { id: 792, character: '特别', pinyin: 'tèbié', meaning: 'special; especially', bangla: 'বিশেষভাবে', level: '3', favorite: false },

                    { id: 793, character: '特点', pinyin: 'tèdiǎn', meaning: 'characteristic; feature', bangla: 'বৈশিষ্ট্য', level: '3', favorite: false },

                    { id: 794, character: '特色', pinyin: 'tèsè', meaning: 'distinctive feature; characteristic', bangla: 'অনন্য বৈশিষ্ট্য', level: '3', favorite: false },

                    { id: 795, character: '特殊', pinyin: 'tèshū', meaning: 'special; particular', bangla: 'বিশেষ; অসাধারণ', level: '3', favorite: false },

                    { id: 796, character: '疼', pinyin: 'téng', meaning: 'pain; ache; love dearly', bangla: 'ব্যথা; খুব ভালোবাসা', level: '3', favorite: false },

                    { id: 797, character: '踢足球', pinyin: 'tī zúqiú', meaning: 'play football/soccer', bangla: 'ফুটবল খেলা', level: '3', favorite: false },

                    { id: 798, character: '提', pinyin: 'tí', meaning: 'lift; mention; bring up', bangla: 'উত্থাপন করা', level: '3', favorite: false },

                    { id: 799, character: '提高', pinyin: 'tígāo', meaning: 'raise; improve; enhance', bangla: 'উন্নতি করা', level: '3', favorite: false },

                    { id: 800, character: '提供', pinyin: 'tígōng', meaning: 'provide; supply', bangla: 'সরবরাহ করা', level: '3', favorite: false },
                    
                    // HSK Level 4 words with Bangla meanings
                    { id: 301, character: '爱情', pinyin: 'àiqíng', meaning: 'romantic love', bangla: 'রোমান্টিক ভালবাসা', level: '4', favorite: false },
                    { id: 302, character: '安排', pinyin: 'ānpái', meaning: 'to arrange; arrangement', bangla: 'ব্যবস্থা করা; ব্যবস্থা', level: '4', favorite: false },
                    { id: 303, character: '安全', pinyin: 'ānquán', meaning: 'safe; safety', bangla: 'নিরাপদ; নিরাপত্তা', level: '4', favorite: false },
                    { id: 304, character: '暗', pinyin: 'àn', meaning: 'dark; hidden', bangla: 'অন্ধকার; গোপন', level: '4', favorite: false },
                    { id: 305, character: '按时', pinyin: 'ànshí', meaning: 'on time; punctual', bangla: 'সময়মত; সময়নিষ্ঠ', level: '4', favorite: false },
                    { id: 306, character: '按照', pinyin: 'ànzhào', meaning: 'according to; in accordance with', bangla: 'অনুসারে; মোতাবেক', level: '4', favorite: false },
                    { id: 307, character: '包括', pinyin: 'bāokuò', meaning: 'to include; including', bangla: 'অন্তর্ভুক্ত করা; সহ', level: '4', favorite: false },
                    { id: 308, character: '保护', pinyin: 'bǎohù', meaning: 'to protect; protection', bangla: 'রক্ষা করা; সুরক্ষা', level: '4', favorite: false },
                    { id: 309, character: '保证', pinyin: 'bǎozhèng', meaning: 'to guarantee; guarantee', bangla: 'গ্যারান্টি দেওয়া; নিশ্চয়তা', level: '4', favorite: false },
                    { id: 310, character: '抱', pinyin: 'bào', meaning: 'to hold; to hug', bangla: 'ধরা; আলিঙ্গন করা', level: '4', favorite: false }
                ],
                searchTerm: '',
                currentLevel: 'all',
                currentLanguage: 'english',
                filteredVocab: [],
                favoriteCount: 0,
                searchTimeout: null,
                speakingWordId: null,
                showNotification: false,
                notificationMessage: '',
                notificationType: 'success',
                
                init() {
                    this.filteredVocab = [...this.vocab];
                    this.updateFavoriteCount();
                    this.checkSpeechSupport();
                },
                
                setLevel(level) {
                    this.currentLevel = level;
                    this.filterVocab();
                },
                
                debouncedSearch() {
                    clearTimeout(this.searchTimeout);
                    this.searchTimeout = setTimeout(() => {
                        this.filterVocab();
                    }, 300);
                },
                
                filterVocab() {
                    let filtered = this.vocab;
                    
                    if (this.currentLevel !== 'all') {
                        filtered = filtered.filter(word => word.level === this.currentLevel);
                    }
                    
                    if (this.searchTerm) {
                        const term = this.searchTerm.toLowerCase();
                        filtered = filtered.filter(word => 
                            word.character.toLowerCase().includes(term) ||
                            word.pinyin.toLowerCase().includes(term) ||
                            word.meaning.toLowerCase().includes(term) ||
                            word.bangla.toLowerCase().includes(term)
                        );
                    }
                    
                    this.filteredVocab = filtered;
                },
                
                toggleFavorite(id) {
                    const word = this.vocab.find(w => w.id === id);
                    if (word) {
                        word.favorite = !word.favorite;
                        this.updateFavoriteCount();
                        this.showNotification(
                            word.favorite ? 'Added to favorites' : 'Removed from favorites',
                            'success'
                        );
                    }
                },
                
                updateFavoriteCount() {
                    this.favoriteCount = this.vocab.filter(word => word.favorite).length;
                },
                
                getLevelCount(level) {
                    if (level === 'all') {
                        return this.vocab.length;
                    }
                    return this.vocab.filter(word => word.level === level).length;
                },
                
                speakWord(word) {
                    if (!('speechSynthesis' in window)) {
                        this.showNotification('Speech synthesis not supported in your browser', 'error');
                        return;
                    }
                    
                    // Stop any ongoing speech
                    speechSynthesis.cancel();
                    
                    const utterance = new SpeechSynthesisUtterance(word.character);
                    utterance.lang = 'zh-CN';
                    utterance.rate = 0.8;
                    utterance.pitch = 1;
                    
                    this.speakingWordId = word.id;
                    
                    utterance.onend = () => {
                        this.speakingWordId = null;
                    };
                    
                    utterance.onerror = (error) => {
                        this.speakingWordId = null;
                        this.showNotification('Speech synthesis failed: ' + error.error, 'error');
                    };
                    
                    try {
                        speechSynthesis.speak(utterance);
                        this.showNotification(`Playing pronunciation: ${word.character}`, 'success');
                    } catch (error) {
                        this.showNotification('Error playing speech: ' + error.message, 'error');
                    }
                },
                
                checkSpeechSupport() {
                    if (!('speechSynthesis' in window)) {
                        this.showNotification('Text-to-speech is not supported in your browser', 'error');
                    }
                },
                
                showNotification(message, type = 'success') {
                    this.notificationMessage = message;
                    this.notificationType = type;
                    this.showNotification = true;
                    
                    setTimeout(() => {
                        this.showNotification = false;
                    }, 3000);
                },
                
                scrollToTop() {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        }