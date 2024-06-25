import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import TreandingSongsClient from "./TreandingSongs-Client";

const TreandingSongsServer = async ({ name, id }) => {
    const supabase = createClientComponentClient({ cookies })

    const {data, error} = await supabase.from('PlaylistSongs').select(`*,song(*)`).or(`playlist_id.eq.${id}`)

    // console.log(data);

    return data ? (
        <>
            <TreandingSongsClient data={data} name={name}/>
        </>
    ) : null
}

export default TreandingSongsServer