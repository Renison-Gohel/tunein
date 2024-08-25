import AlbumLists from "@/components/new/Album/AlbumLists";
import SongsWithoutNames from "@/components/new/SongsWithoutNames";
import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import FeaturedArtists from "@/components/new/FeaturedArtists";


export default async function Home() {

  const supabase = createServerComponentClient({ cookies })
  const { data: langData, error: langError } = await supabase.from('language').select('*')
  const { data: songData, error: songError } = await supabase.from('song').select('*')
  const { data: artistData, error: artistError } = await supabase.from('artist').select('*, song_artists(*)')

  console.log(artistData);

  return (
    <div>
      Hello
    </div>
    
  )
}
