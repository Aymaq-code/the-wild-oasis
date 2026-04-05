import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cgyolmogwgvavhcspvoh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNneW9sbW9nd2d2YXZoY3Nwdm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwNTExMjcsImV4cCI6MjA4NDYyNzEyN30.BUs5dTwBSLBAZEFo36MtGOK0IdWceu5NzuSKt5n1B6o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
