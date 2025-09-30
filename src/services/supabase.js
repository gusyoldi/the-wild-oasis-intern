import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_PUBLIC_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLIC_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
