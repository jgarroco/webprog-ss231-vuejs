import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://cwrmdwtkqzbhtkpbbqxu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3cm1kd3RrcXpiaHRrcGJicXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNDQ3NzIsImV4cCI6MjA1MzgyMDc3Mn0.mYwrNlz9ULF566xRcUOm4DGlk-h0UiX17g2fXGCG8jY')