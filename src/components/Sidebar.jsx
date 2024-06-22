const Sidebar = ({ children }) => {
    return (
        <div id="sidebar" className="bounce-to-right index3_sidebar">
            <div id="toggle_close">×</div>
            <div id="cssmenu">
                <a href="index.html">
                    <img src="images/logo3.png" alt="logo" />
                </a>
                <ul className="sidebb">
                    <li className="has-sub">
                        <a href="#">
                            <i className="flaticon-home" />
                            index
                        </a>
                        <ul>
                            <li>
                                <a href="index.html">
                                    {" "}
                                    <i className="flaticon-home" />
                                    index I
                                </a>
                            </li>
                            <li>
                                <a href="index2.html">
                                    <i className="flaticon-home" />
                                    index II
                                </a>
                            </li>
                            <li>
                                <a href="index3.html">
                                    <i className="flaticon-home" />
                                    index III
                                </a>
                            </li>
                            <li>
                                <a href="index4.html">
                                    <i className="flaticon-home" />
                                    index IV
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub">
                        <a href="#">
                            <i className="flaticon-album" />
                            albums
                        </a>
                        <ul>
                            <li>
                                <a href="album.html">
                                    {" "}
                                    <i className="flaticon-vinyl" />
                                    album
                                </a>
                            </li>
                            <li>
                                <a href="album_list.html">
                                    <i className="flaticon-playlist-1" />
                                    album list
                                </a>
                            </li>
                            <li>
                                <a href="artist.html">
                                    <i className="flaticon-headphones" />
                                    artist
                                </a>
                            </li>
                            <li>
                                <a href="artist_single.html">
                                    <i className="flaticon-speaker" />
                                    artist single
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub">
                        <a href="#">
                            <i className="flaticon-playlist-3" />
                            browse music
                        </a>
                        <ul>
                            <li>
                                <a href="add_playlist.html">
                                    <i className="flaticon-music" />
                                    add playlist
                                </a>
                            </li>
                            <li>
                                <a href="free_music.html">
                                    <i className="flaticon-music-1" />
                                    free music
                                </a>
                            </li>
                            <li>
                                <a href="genres.html">
                                    <i className="flaticon-files-and-folders" />
                                    genres
                                </a>
                            </li>
                            <li>
                                <a href="genres_single.html">
                                    <i className="flaticon-smartphone" />
                                    genres single
                                </a>
                            </li>
                            <li>
                                <a href="stations.html">
                                    <i className="flaticon-radio" />
                                    stations
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub">
                        <a href="#">
                            <i className="flaticon-clock" />
                            music events
                        </a>
                        <ul>
                            <li>
                                <a href="events.html">
                                    <i className="flaticon-calendar" />
                                    events
                                </a>
                            </li>
                            <li>
                                <a href="event_single.html">
                                    <i className="flaticon-files-and-folders" />
                                    event single
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub">
                        <a href="#">
                            <i className="flaticon-playlist-1" />
                            your music
                        </a>
                        <ul>
                            <li>
                                <a href="download.html">
                                    <i className="flaticon-download" />
                                    download
                                </a>
                            </li>
                            <li>
                                <a href="favourite.html">
                                    <i className="flaticon-heart" />
                                    favourite
                                </a>
                            </li>
                            <li>
                                <a href="history.html">
                                    <i className="flaticon-clock" />
                                    history
                                </a>
                            </li>
                            <li>
                                <a href="free_music.html">
                                    <i className="flaticon-music-1" />
                                    free_music
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub">
                        <a href="#">
                            <i className="flaticon-shopping-bag" /> shop
                        </a>
                        <ul>
                            <li>
                                <a href="shop_sidebar.html">
                                    <i className="flaticon-smartphone" />
                                    shop sidebar
                                </a>
                            </li>
                            <li>
                                <a href="shop_single.html">
                                    {" "}
                                    <i className="flaticon-info" />
                                    shop single
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub">
                        <a href="#">
                            <i className="flaticon-playlist" /> music blog
                        </a>
                        <ul>
                            <li>
                                <a href="blog_categories.html">
                                    <i className="flaticon-vinyl" />
                                    blog category I
                                </a>
                            </li>
                            <li>
                                <a href="blog_category2.html">
                                    {" "}
                                    <i className="flaticon-album" />
                                    blog category II
                                </a>
                            </li>
                            <li>
                                <a href="blog_single.html">
                                    {" "}
                                    <i className="flaticon-globe" />
                                    blog single
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact_us.html">
                            <i className="flaticon-internet" />
                            contact us
                        </a>
                    </li>
                    <li>
                        <a href="pricing_plan.html">
                            <i className="flaticon-bell" />
                            pricing plan
                        </a>
                    </li>
                    <li>
                        <a href="error_page.html">
                            <i className="flaticon-trash" />
                            error 404
                        </a>
                    </li>
                </ul>
                <div className="lang_apply_btn">
                    <ul>
                        <li>
                            <a href="#">
                                {" "}
                                <i className="flaticon-play-button" />
                                create
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Sidebar