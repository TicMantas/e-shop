import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

function getEnvironmentVariables() {
  const supaBaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supaBaseAnnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supaBaseUrl || !supaBaseAnnonKey) {
    throw new Error(
      `Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY`
    );
  }
  return { supaBaseAnnonKey, supaBaseUrl };
}

export async function createSupabaseServerClient() {
  const { supaBaseUrl, supaBaseAnnonKey } = getEnvironmentVariables();
  const cookieStore = await cookies();

  return createServerClient(supaBaseUrl, supaBaseAnnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach((c) => cookieStore.set(c));
        } catch (error) {
          console.log(error);
        }
      },
    },
  });
}
