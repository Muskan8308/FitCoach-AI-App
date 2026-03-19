import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://slcsljsanfuboejuugni.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsY3NsanNhbmZ1Ym9lanV1Z25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MjA4NDgsImV4cCI6MjA4OTM5Njg0OH0.P2qha_NEOCyk_Ldt46fZYmUhc1vzmhnB90vjSQstQ78'

export const supabase = createClient(supabaseUrl, supabaseKey)