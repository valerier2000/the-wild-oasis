import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tgmcgyjdpbsdjrzcghmh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnbWNneWpkcGJzZGpyemNnaG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4ODA3NzMsImV4cCI6MjAzOTQ1Njc3M30.4NCRY9HQsG0RZw49Mzluy1liv2otJKMTxUB6TH_Gfvk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
