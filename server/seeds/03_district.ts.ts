import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("districts").del();

    // Inserts seed entries
    await knex('districts').insert([
        { id: 1, name_zh: "中西區", name_en: "Central and Western District", is_active: true, area_id: 1 },
        { id: 2, name_zh: "灣仔區", name_en: "Wan Chai District", is_active: true, area_id: 1 },
        { id: 3, name_zh: "東區", name_en: "Eastern District", is_active: true, area_id: 1 },
        { id: 4, name_zh: "南區", name_en: "Southern District", is_active: true, area_id: 1 },

        { id: 5, name_zh: "九龍城區", name_en: "Kowloon City District", is_active: true, area_id: 2 },
        { id: 6, name_zh: "觀塘區", name_en: "Kwun Tong District", is_active: true, area_id: 2 },
        { id: 7, name_zh: "深水埗區", name_en: "Sham Shui Po District", is_active: true, area_id: 2 },
        { id: 8, name_zh: "黃大仙區", name_en: "Wong Tai Sin District", is_active: true, area_id: 2 },
        { id: 9, name_zh: "油尖旺區", name_en: "Yau Tsim Mong District", is_active: true, area_id: 2 },

        { id: 10, name_zh: "北區", name_en: "North District", is_active: true, area_id: 3 },
        { id: 11, name_zh: "大埔區", name_en: "Tai Po District", is_active: true, area_id: 3 },
        { id: 12, name_zh: "沙田區", name_en: "Sha Tin District", is_active: true, area_id: 3 },
        { id: 13, name_zh: "西貢區", name_en: "Sai Kung District", is_active: true, area_id: 3 },
        { id: 14, name_zh: "荃灣區", name_en: "Tsuen Wan District", is_active: true, area_id: 3 },
        { id: 15, name_zh: "屯門區", name_en: "Tuen Mun District", is_active: true, area_id: 3 },
        { id: 16, name_zh: "元朗區", name_en: "Yuen Long District", is_active: true, area_id: 3 },
        { id: 17, name_zh: "葵青區", name_en: "Kwai Tsing District", is_active: true, area_id: 3 },
        { id: 18, name_zh: "離島區", name_en: "Islands District", is_active: true, area_id: 3 }
  ]);
};
