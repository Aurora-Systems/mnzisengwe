import { createClient } from "@supabase/supabase-js";

const supabase_url:string = "https://wydajmnykbvjicgnncqz.supabase.co"
const supabase_public_key:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5ZGFqbW55a2J2amljZ25uY3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3MTA1NDgsImV4cCI6MjA0MzI4NjU0OH0.DdyT8s6m_6cVmvJq0-KsV1y70rg2dC9KX6v4rzEcjro"
export const db = createClient(supabase_url,supabase_public_key)