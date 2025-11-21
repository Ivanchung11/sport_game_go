import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("messages").del();

    // Inserts seed entries
    await knex("messages").insert([
        {
            id: 1,
            content: "Hey, are you joining the tennis game tomorrow?",
            participation_id: 1,
            sender_id: 1,
            receiver_id: 2,
            reply_message_id: null
        },
        {
            id: 2,
            content: "Yes, I'll be there at 9am sharp!",
            participation_id: 2,
            sender_id: 2,
            receiver_id: 1,
            reply_message_id: 1
        },
        {
            id: 3,
            content: "Can we shift the basketball game to 4pm?",
            participation_id: 3,
            sender_id: 3,
            receiver_id: 1,
            reply_message_id: null
        },
        {
            id: 4,
            content: "4pm works better for me too.",
            participation_id: 1,
            sender_id: 1,
            receiver_id: 3,
            reply_message_id: 3
        },
        {
            id: 5,
            content: "Don't forget to bring water bottles!",
            participation_id: 2,
            sender_id: 2,
            receiver_id: 3,
            reply_message_id: null
        }
    ]);
};
