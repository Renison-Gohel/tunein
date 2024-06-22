import AuthButton from '@/components/misc/AuthButton';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import getPlaylists from '../../../actions/getPlaylists';

const page = async () => {

  const supabase = createClientComponentClient({ cookies })
  const { data, error } = await supabase.from('song').select('*');
  // console.log(data);

  return (
    <>
      {/* <AuthButton/> */}
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>

      {/* {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))} */}
    </>
  )
}

export default page