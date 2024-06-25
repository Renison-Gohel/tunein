import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'
import AuthButtonsClient from './AuthButtons-Client';

const AuthButtonsServer = async () => {

    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.from('profile').select()
    
    const {
        data: {session}
    } = await supabase.auth.getSession();

    return (
        <AuthButtonsClient session={session}/>
    )
}

export default AuthButtonsServer