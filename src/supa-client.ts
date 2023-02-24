import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_API_URL;
const supabaseKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;
import { Database } from "./database.types";

export const supaClient = createClient<Database>(supabaseUrl, supabaseKey);

supaClient
  .from("user_profiles")
  .select("*")
  .then(({ data }) => {});
