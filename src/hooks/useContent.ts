import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import type { Content } from '../types/admin';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export function useContent() {
  const [content, setContent] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const { data, error } = await supabase
          .from('content')
          .select('*')
          .order('updated_at', { ascending: false });

        if (error) throw error;
        setContent(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchContent();
  }, []);

  const createContent = async (newContent: Partial<Content>) => {
    try {
      const { data, error } = await supabase
        .from('content')
        .insert([newContent])
        .select()
        .single();

      if (error) throw error;
      setContent(prev => [data, ...prev]);
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err as Error };
    }
  };

  const updateContent = async (id: string, updates: Partial<Content>) => {
    try {
      const { data, error } = await supabase
        .from('content')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setContent(prev => prev.map(item => item.id === id ? data : item));
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err as Error };
    }
  };

  return {
    content,
    isLoading,
    error,
    createContent,
    updateContent,
  };
}