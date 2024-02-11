import { db } from "@vercel/postgres";
import { meals } from "../app/lib/placeholder-data.js";



async function seedMeals(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "meals" table if it doesn't exist
    const createTable = client.sql`
        CREATE  TABLE  IF NOT EXISTS meals(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY
        name VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL
        );
        `;

    console.log("create a meal table");

    // insert values into meals table

    const insertedMeals = await Promise.all([
      meals.map(
        (meal) => client.sql`INSERT INTO meals(id,name,type,price,description)
        VALUES (${meal.id}, ${meal.name}, ${meal.type}, ${meal.price}, ${meal.description})
        ON CONFLICT (id) DO NOTHING;
        `
      ),
    ]);
    console.log(`Seeded ${insertedMeals.length} meals`);

    return {
      createTable,
      meals: insertedMeals,
    };
  } catch (err) {
    console.error('Error seeding meals:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedMeals(client);
}


main().catch((err)=>{
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
      );
})