// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://twsfoahyditbzjitlpyk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3c2ZvYWh5ZGl0YnpqaXRscHlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjExNjksImV4cCI6MjA2NDEzNzE2OX0.itJSmMe64FWp82neVrCSB6pQa7YpTRfZrSfMIYFlwkk'
)