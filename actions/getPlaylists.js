import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getPlaylists() {
    const supabase = createServerComponentClient({ cookies });
    const {data , error} = await supabase.from('playlists').select('*');

    return {
        playlists : data,
        error : error
    }
}