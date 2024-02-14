export type Profile = {
  email?: string | null;
  email_verified?: boolean | null;
  name?: string | null;
  nickname?: string | null;
  picture?: string | null;
  sub?: string | null;
  updated_at?: string | null;
  org_id?: string | null;
  [key: string]: unknown; // Any custom claim which could be in the profile
};

export type MealInterface = {
  id: string;
  name: string;
  type: string;
  price: string;
  image: string;
};
