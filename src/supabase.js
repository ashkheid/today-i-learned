import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://uwpdwyhfhkhgkdgsxcsg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cGR3eWhmaGtoZ2tkZ3N4Y3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3MzU0OTksImV4cCI6MjAyODMxMTQ5OX0.dfJmpdVOt7jU1dfKyFQSHf0tjF04Uc2WZ2SPdT3qHac';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;