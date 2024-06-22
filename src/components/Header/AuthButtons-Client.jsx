'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"
import { useRouter } from "next/navigation"

const AuthButtonsClient = ({ session }) => {
    const supabase = createClientComponentClient()
    const router = useRouter()

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        router.refresh();
    }

    return session ? (
        <a>
            <img src={session?.user?.user_metadata?.avatar_url} alt="img" />
            <div className="login_top_wrapper">
                <p onClick={signOut}>logout</p>
            </div>
        </a>
    ) : (
        <a href="#" data-toggle="modal" data-target="#login_modal">
            <img src="images/pf.png" alt="img" />
            <div className="login_top_wrapper">
                <p>login/register</p>
            </div>
        </a>
    )
}

export default AuthButtonsClient