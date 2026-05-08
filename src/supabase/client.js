import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://qquysbstbzdhtrhdepwe.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxdXlzYnN0YnpkaHRyaGRlcHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMzY5NzgsImV4cCI6MjA5MzgxMjk3OH0.0Nm6kXnj2sMdzdm-UThxt4RKlJ7EQ1ldXbtEbcx1z78";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);