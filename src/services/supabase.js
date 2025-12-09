import { createClient } from "@supabase/supabase-js";

// Get all this from supabase.com in your project
export const supabaseUrl = "https://laiiljxbbwhmfvyylpzq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhaWlsanhiYndobWZ2eXlscHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyOTAzNzksImV4cCI6MjA4MDg2NjM3OX0.5LVDl1o85vZpvLVI4aJlCLCbfAOFg9XInB57EdYzLEU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
