import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("sub_districts").del();

    // Inserts seed entries
    await knex("sub_districts").insert([
        // Central & Western District (district_id: 1)
        { id: 1, name_zh: "堅尼地城", name_en: "Kennedy Town", is_active: true, district_id: 1 },
        { id: 2, name_zh: "石塘咀", name_en: "Shek Tong Tsui", is_active: true, district_id: 1 },
        { id: 3, name_zh: "西營盤", name_en: "Sai Ying Pun", is_active: true, district_id: 1 },
        { id: 4, name_zh: "上環", name_en: "Sheung Wan", is_active: true, district_id: 1 },
        { id: 5, name_zh: "中環", name_en: "Central", is_active: true, district_id: 1 },
        { id: 6, name_zh: "金鐘", name_en: "Admiralty", is_active: true, district_id: 1 },
        { id: 7, name_zh: "半山區", name_en: "Mid-levels", is_active: true, district_id: 1 },
        { id: 8, name_zh: "山頂", name_en: "The Peak", is_active: true, district_id: 1 },

        // Wan Chai District (district_id: 2)
        { id: 9, name_zh: "灣仔", name_en: "Wan Chai", is_active: true, district_id: 2 },
        { id: 10, name_zh: "銅鑼灣", name_en: "Causeway Bay", is_active: true, district_id: 2 },
        { id: 11, name_zh: "跑馬地", name_en: "Happy Valley", is_active: true, district_id: 2 },
        { id: 12, name_zh: "大坑", name_en: "Tai Hang", is_active: true, district_id: 2 },
        { id: 13, name_zh: "掃桿埔", name_en: "So Kon Po", is_active: true, district_id: 2 },
        { id: 14, name_zh: "渣甸山", name_en: "Jardine’s Lookout", is_active: true, district_id: 2 },

        // Eastern District (district_id: 3)
        { id: 15, name_zh: "天后", name_en: "Tin Hau", is_active: true, district_id: 3 },
        { id: 16, name_zh: "寶馬山", name_en: "Braemar Hill", is_active: true, district_id: 3 },
        { id: 17, name_zh: "北角", name_en: "North Point", is_active: true, district_id: 3 },
        { id: 18, name_zh: "鰂魚涌", name_en: "Quarry Bay", is_active: true, district_id: 3 },
        { id: 19, name_zh: "西灣河", name_en: "Sai Wan Ho", is_active: true, district_id: 3 },
        { id: 20, name_zh: "筲箕灣", name_en: "Shau Kei Wan", is_active: true, district_id: 3 },
        { id: 21, name_zh: "柴灣", name_en: "Chai Wan", is_active: true, district_id: 3 },
        { id: 22, name_zh: "小西灣", name_en: "Siu Sai Wan", is_active: true, district_id: 3 },

        // Southern District (district_id: 4)
        { id: 23, name_zh: "薄扶林", name_en: "Pok Fu Lam", is_active: true, district_id: 4 },
        { id: 24, name_zh: "香港仔", name_en: "Aberdeen", is_active: true, district_id: 4 },
        { id: 25, name_zh: "鴨脷洲", name_en: "Ap Lei Chau", is_active: true, district_id: 4 },
        { id: 26, name_zh: "黃竹坑", name_en: "Wong Chuk Hang", is_active: true, district_id: 4 },
        { id: 27, name_zh: "壽臣山", name_en: "Shouson Hill", is_active: true, district_id: 4 },
        { id: 28, name_zh: "淺水灣", name_en: "Repulse Bay", is_active: true, district_id: 4 },
        { id: 29, name_zh: "舂坎角", name_en: "Chung Hom Kok", is_active: true, district_id: 4 },
        { id: 30, name_zh: "赤柱", name_en: "Stanley", is_active: true, district_id: 4 },
        { id: 31, name_zh: "大潭", name_en: "Tai Tam", is_active: true, district_id: 4 },
        { id: 32, name_zh: "石澳", name_en: "Shek O", is_active: true, district_id: 4 },


        // Kowloon City District (district_id: 5)
        { id: 33, name_zh: "土瓜灣", name_en: "To Kwa Wan", is_active: true, district_id: 5 },
        { id: 34, name_zh: "紅磡", name_en: "Hung Hom", is_active: true, district_id: 5 },
        { id: 35, name_zh: "九龍城", name_en: "Kowloon City", is_active: true, district_id: 5 },
        { id: 36, name_zh: "新蒲崗", name_en: "San Po Kong", is_active: true, district_id: 5 },
        { id: 37, name_zh: "啟德", name_en: "Kai Tak", is_active: true, district_id: 5 },

        // Kwun Tong District (district_id: 6)
        { id: 38, name_zh: "觀塘", name_en: "Kwun Tong", is_active: true, district_id: 6 },
        { id: 39, name_zh: "藍田", name_en: "Lam Tin", is_active: true, district_id: 6 },
        { id: 40, name_zh: "油塘", name_en: "Yau Tong", is_active: true, district_id: 6 },
        { id: 41, name_zh: "牛頭角", name_en: "Ngau Tau Kok", is_active: true, district_id: 6 },
        { id: 42, name_zh: "彩虹", name_en: "Choi Hung", is_active: true, district_id: 6 },

        // Sham Shui Po District (district_id: 7)
        { id: 43, name_zh: "深水埗", name_en: "Sham Shui Po", is_active: true, district_id: 7 },
        { id: 44, name_zh: "長沙灣", name_en: "Cheung Sha Wan", is_active: true, district_id: 7 },
        { id: 45, name_zh: "石硤尾", name_en: "Shek Kip Mei", is_active: true, district_id: 7 },
        { id: 46, name_zh: "美孚", name_en: "Mei Foo", is_active: true, district_id: 7 },

        // Wong Tai Sin District (district_id: 8)
        { id: 47, name_zh: "黃大仙", name_en: "Wong Tai Sin", is_active: true, district_id: 8 },
        { id: 48, name_zh: "樂富", name_en: "Lok Fu", is_active: true, district_id: 8 },
        { id: 49, name_zh: "慈雲山", name_en: "Tsz Wan Shan", is_active: true, district_id: 8 },
        { id: 50, name_zh: "新蒲崗", name_en: "San Po Kong", is_active: true, district_id: 8 },

        // Yau Tsim Mong District (district_id: 9)
        { id: 51, name_zh: "尖沙咀", name_en: "Tsim Sha Tsui", is_active: true, district_id: 9 },
        { id: 52, name_zh: "旺角", name_en: "Mong Kok", is_active: true, district_id: 9 },
        { id: 53, name_zh: "油麻地", name_en: "Yau Ma Tei", is_active: true, district_id: 9 },
        { id: 54, name_zh: "大角咀", name_en: "Tai Kok Tsui", is_active: true, district_id: 9 },


        // North District (district_id: 10)
        { id: 55, name_zh: "上水", name_en: "Sheung Shui", is_active: true, district_id: 10 },
        { id: 56, name_zh: "粉嶺", name_en: "Fanling", is_active: true, district_id: 10 },
        { id: 57, name_zh: "沙頭角", name_en: "Sha Tau Kok", is_active: true, district_id: 10 },

        // Tai Po District (district_id: 11)
        { id: 58, name_zh: "大埔墟", name_en: "Tai Po Market", is_active: true, district_id: 11 },
        { id: 59, name_zh: "大埔工業邨", name_en: "Tai Po Industrial Estate", is_active: true, district_id: 11 },
        { id: 60, name_zh: "船灣", name_en: "Shuen Wan", is_active: true, district_id: 11 },

        // Sha Tin District (district_id: 12)
        { id: 61, name_zh: "沙田市中心", name_en: "Sha Tin Town Centre", is_active: true, district_id: 12 },
        { id: 62, name_zh: "馬鞍山", name_en: "Ma On Shan", is_active: true, district_id: 12 },
        { id: 63, name_zh: "火炭", name_en: "Fo Tan", is_active: true, district_id: 12 },
        { id: 64, name_zh: "大圍", name_en: "Tai Wai", is_active: true, district_id: 12 },

        // Sai Kung District (district_id: 13)
        { id: 65, name_zh: "西貢市", name_en: "Sai Kung Town", is_active: true, district_id: 13 },
        { id: 66, name_zh: "將軍澳", name_en: "Tseung Kwan O", is_active: true, district_id: 13 },
        { id: 67, name_zh: "清水灣", name_en: "Clear Water Bay", is_active: true, district_id: 13 },

        // Tsuen Wan District (district_id: 14)
        { id: 68, name_zh: "荃灣市中心", name_en: "Tsuen Wan Town Centre", is_active: true, district_id: 14 },
        { id: 69, name_zh: "青衣", name_en: "Tsing Yi", is_active: true, district_id: 14 },

        // Tuen Mun District (district_id: 15)
        { id: 70, name_zh: "屯門市中心", name_en: "Tuen Mun Town Centre", is_active: true, district_id: 15 },
        { id: 71, name_zh: "三聖", name_en: "Sam Shing", is_active: true, district_id: 15 },
        { id: 72, name_zh: "大欖", name_en: "Tai Lam", is_active: true, district_id: 15 },

        // Yuen Long District (district_id: 16)
        { id: 73, name_zh: "元朗市", name_en: "Yuen Long Town", is_active: true, district_id: 16 },
        { id: 74, name_zh: "天水圍", name_en: "Tin Shui Wai", is_active: true, district_id: 16 },
        { id: 75, name_zh: "屏山", name_en: "Ping Shan", is_active: true, district_id: 16 },

        // Kwai Tsing District (district_id: 17)
        { id: 76, name_zh: "葵涌", name_en: "Kwai Chung", is_active: true, district_id: 17 },
        { id: 77, name_zh: "青衣", name_en: "Tsing Yi", is_active: true, district_id: 17 },

        // Islands District (district_id: 18)
        { id: 78, name_zh: "大嶼山", name_en: "Lantau Island", is_active: true, district_id: 18 },
        { id: 79, name_zh: "長洲", name_en: "Cheung Chau", is_active: true, district_id: 18 },
        { id: 80, name_zh: "南丫島", name_en: "Lamma Island", is_active: true, district_id: 18 },
        { id: 81, name_zh: "坪洲", name_en: "Peng Chau", is_active: true, district_id: 18 }

    ]);
};
