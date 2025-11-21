import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("sports").del();

    // Inserts seed entries
    await knex("sports").insert([
        { id: 1, name_zh: "網球", name_en: "Tennis", icon_url: "test1", is_active: true },
        { id: 2, name_zh: "足球", name_en: "Football", icon_url: "test2", is_active: true },
        { id: 3, name_zh: "籃球", name_en: "Basketball", icon_url: "test3", is_active: true },
        { id: 4, name_zh: "羽毛球", name_en: "Badminton", icon_url: "test4", is_active: true },
        { id: 5, name_zh: "排球", name_en: "Volleyball", icon_url: "test5", is_active: true },
        { id: 6, name_zh: "乒乓球", name_en: "Table Tennis", icon_url: "test6", is_active: true },
        { id: 7, name_zh: "跑步", name_en: "Running", icon_url: "test7", is_active: true },
        { id: 8, name_zh: "健身", name_en: "Fitness", icon_url: "test8", is_active: true },
        { id: 9, name_zh: "游泳", name_en: "Swimming", icon_url: "test9", is_active: true },
        { id: 10, name_zh: "高爾夫球", name_en: "Golf", icon_url: "test10", is_active: true },
    ]);
};
