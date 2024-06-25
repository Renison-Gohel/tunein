'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

const LoginRegisterForm = () => {

    const supabase = createClientComponentClient()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignUpWithEmail = async () => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                redirectTo: 'http://localhost:3000/auth/callback'
            }
        });
    }

    const SignInWithGithub = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://localhost:3000/auth/callback'
            }

        })
    }

    async function signInWithSpotify() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'spotify',
          options: {
            redirectTo: 'http://localhost:3000/auth/callback'
        }
        })
      }
      

    async function signInWithEmail() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
    }


    const CancelButton = () => {
        // Set "data-dismiss" attribute to "modal"
        console.log('Setting "data-dismiss" attribute to "modal"');
    }

    return (
        <>
            {/* Login Form Strats  */}
            <div>
                <div
                    className="modal fade lang_m24_banner index3_login_modal"
                    id="login_modal"
                    role="dialog"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                ×
                            </button>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="m24_language_box m24_cover">
                                        <h1>Login / Sign In</h1>
                                        <p>for unlimited music streaming &amp; a personalised experience</p>
                                    </div>
                                    <div className="login_form_wrapper">
                                        <div className="icon_form comments_form">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="full_name"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter Email Address*"
                                            />
                                            <i className="fas fa-envelope" />
                                        </div>
                                        <div className="icon_form comments_form">
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter Password *"
                                            />
                                            <i className="fas fa-lock" />
                                        </div>
                                        <div className="login_remember_box">
                                            <label className="control control--checkbox">
                                                keep me signed in
                                                <input type="checkbox" />
                                                <span className="control__indicator" />
                                            </label>
                                            <a href="#" className="forget_password">
                                                Forgot Password ?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="lang_apply_btn_wrapper m24_cover">
                                        <div className="lang_apply_btn">
                                            <a onClick={signInWithEmail}>login now</a>
                                        </div>
                                        <div className="lang_apply_btn">
                                            <a onClick={signInWithSpotify}>Spotify</a>
                                        </div>
                                        <div className="cancel_wrapper">
                                            <a onClick={CancelButton} className="" data-dismiss="modal">
                                                cancel
                                            </a>
                                        </div>
                                        <div className="dont_have_account m24_cover">
                                            <p>
                                                Don’t have an acount ?{" "}
                                                <a href="#register_modal" data-toggle="modal">
                                                    register here
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Register Form Strats  */}
            <div>
                <div
                    className="modal fade lang_m24_banner index3_login_modal"
                    id="register_modal"
                    role="dialog"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                ×
                            </button>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="m24_language_box m24_cover">
                                        <h1>Register / Sign Up</h1>
                                        <p>
                                            for unlimited music streaming &amp; a personalised experience
                                        </p>
                                    </div>
                                    <div className="login_form_wrapper">
                                        <div className="icon_form comments_form">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="full_name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter your name"
                                            />
                                            <i className="fas fa-user" />
                                        </div>
                                        <div className="icon_form comments_form">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter Email Address*"
                                            />
                                            <i className="fas fa-envelope" />
                                        </div>
                                        <div className="icon_form comments_form">
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter Password *"
                                            />
                                            <i className="fas fa-lock" />
                                        </div>
                                    </div>
                                    <div className="lang_apply_btn_wrapper m24_cover">
                                        <div className="lang_apply_btn">
                                            <a onClick={SignUpWithEmail}>register</a>
                                        </div>
                                        <div className="cancel_wrapper">
                                            <a href="#" className="" data-dismiss="modal">
                                                cancel
                                            </a>
                                        </div>
                                        <div className="dont_have_account m24_cover">
                                            <p>
                                                Don’t have an acount ?{" "}
                                                <a href="#login_modal" data-toggle="modal">
                                                    login here
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginRegisterForm