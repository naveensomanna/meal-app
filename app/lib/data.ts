import { sql } from "@vercel/postgres";

import { unstable_noStore as noStore } from "next/cache";

export async function getAllMeals() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'});
  noStore();
  try {
    const data = await sql`SELECT * from meals`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch meals");
  }
}
