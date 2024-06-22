import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getLanguages() {
    const supabase = createServerComponentClient({ cookies });
    const { data, error } = await supabase.from('language').select();

    return {
        languages: data,
        error: error
    }
}
