import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vycuahmuhwllionoiukf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5Y3VhaG11aHdsbGlvbm9pdWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2NDM0OTIsImV4cCI6MjA0OTIxOTQ5Mn0.yITYUiAIfQkpIoOjfcx1otx6XPAjvs86-Ig4e21J1Ds";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
