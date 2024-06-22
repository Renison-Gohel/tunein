import Sidebar from "../Sidebar";
import AuthButtonsServer from '@/components/Header/AuthButtons-Server'
import Notifications from '@/components/Header/Notifications'
import Left from '@/components/Header/Left/Left'
import Search from '@/components/Header/Search/Search'

export default function Header() {
    return (
        <div>
            <Sidebar />
            <div className="m24_navi_main_wrapper index2_main_header index3_main_header m24_cover">
                <div className="container-fluid">
                    <div className="m24_logo_wrapper">
                        <div className="m24_logo_div">
                            <a href="index.html">
                                <img src="images/logo3.png" alt="logo" />
                            </a>
                        </div>
                        <div id="toggle">
                            <a href="#">
                                <i className="flaticon-menu-1" />
                            </a>
                        </div>
                    </div>

                    {/* Notification, Login/Register Starts */}
                    <div className="m24_header_right_Wrapper d-none d-sm-none d-md-none d-lg-none d-xl-block">

                        {/* Login/Register Starts */}
                        <div className="m24_signin_wrapper">
                            <AuthButtonsServer />
                        </div>
                        {/* Login/Register Ends */}

                        {/* Notification Starts */}
                        <div className="crm_message_dropbox_wrapper">
                            <Notifications />
                        </div>
                        {/* Notification Ends */}

                    </div>

                    {/* Header Left Side Starts */}
                    <div className="m24_navigation_wrapper">
                        <div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                            <Left />
                        </div>
                        {/* Header Left Side Ends */}
                        {/* mainmenu end */}

                        {/* Search bar Starts */}
                        <Search />
                        {/* Search bar Ends */}

                        {/* Notification for Mobile Starts */}
                        <div className="d-block d-sm-block d-md-block d-lg-block d-xl-none">
                            <Notifications />
                        </div>
                        {/* Notification for Mobile Ends */}

                        <div className="m24_navi_langauage_box d-none d-sm-none d-md-none d-lg-none d-xl-block">
                            <div className="lang_list_wrapper">
                                <a href="#" data-toggle="modal" data-target="#myModal">
                                    languages <i className="fas fa-language" />
                                </a>
                            </div>
                            <div className="theme-switch-wrapper d-none d-sm-none d-md-none d-lg-none d-xl-none">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <span className="slider round" />
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
