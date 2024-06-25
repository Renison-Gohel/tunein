import Item from "./Item"

const Left = () => {
    return (
        <ul className="main_nav_ul">
            {/* <Item/> */}
            <li className="has-mega gc_main_navigation">
                <a href="#" className="gc_main_navigation">
                    browse <i className="flaticon-down-arrow" />
                </a>
                <ul className="navi_2_dropdown">
                    <li className="parent">
                        <a href="add_playlist.html">
                            <i className="fas fa-caret-right" />
                            featured playlist
                        </a>
                    </li>
                    <li className="parent">
                        <a href="artist.html">
                            <i className="fas fa-caret-right" />
                            top artists
                        </a>
                    </li>
                    <li className="parent">
                        <a href="genres.html">
                            <i className="fas fa-caret-right" />
                            new genres
                        </a>
                    </li>
                    <li className="parent">
                        <a href="album.html">
                            <i className="fas fa-caret-right" />
                            all albums
                        </a>
                    </li>
                    <li className="parent">
                        <a href="album_list.html">
                            <i className="fas fa-caret-right" />
                            weekly tops
                        </a>
                    </li>
                    <Item/>
                </ul>
            </li>
            <li>
                <a href="stations.html" className="gc_main_navigation">
                    radio
                </a>
            </li>
            <li className="has-mega gc_main_navigation">
                <a href="#" className="gc_main_navigation">
                    more <i className="flaticon-down-arrow" />
                </a>
                <ul className="navi_2_dropdown">
                    <li className="parent">
                        <a href="contact_us.html">
                            <i className="fas fa-caret-right" />
                            contact
                        </a>
                    </li>
                    <li className="parent">
                        <a href="pricing_plan.html">
                            <i className="fas fa-caret-right" /> pricing plan{" "}
                        </a>
                    </li>
                    <li className="parent">
                        <a href="error_page.html">
                            <i className="fas fa-caret-right" /> error page{" "}
                        </a>
                    </li>
                    <li className="parent">
                        <a href="favourite.html">
                            <i className="fas fa-caret-right" /> favourite song{" "}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default Left