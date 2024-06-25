'use client';

const TreandingSongsClient = ({ name, data }) => {

    // console.log(data);


    return (
        <div className="treanding_songs_wrapper punjabi_sogns index3_punjabi_songs m24_cover">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="m24_heading_wrapper white_heading_wrapper">
                            <h1>{name}</h1>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <div className="treanding_song_slider playlist_songs_list index3_featured_song_slider">
                            <div className="owl-carousel owl-theme">

                                {data.map((item) => (
                                    <div className="item" key={item.created_at}>
                                        <div className="treanding_slider_main_box m24_cover">
                                            <img src="images/td7.png" alt="img" />
                                            <div className="m24_treanding_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                {/* <div className="m24_tranding_more_icon">
                                                    <i className="flaticon-menu" />
                                                </div>
                                                <ul className="tranding_more_option">
                                                    <li>
                                                        <a href="#">
                                                            <span className="opt_icon">
                                                                <i className="flaticon-playlist" />
                                                            </span>
                                                            Add To playlist
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="opt_icon">
                                                                <i className="flaticon-star" />
                                                            </span>
                                                            favourite
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="opt_icon">
                                                                <i className="flaticon-share" />
                                                            </span>
                                                            share
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="opt_icon">
                                                                <i className="flaticon-files-and-folders" />
                                                            </span>
                                                            view lyrics
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="opt_icon">
                                                                <i className="flaticon-trash" />
                                                            </span>
                                                            delete
                                                        </a>
                                                    </li>
                                                </ul> */}
                                                <div className="tranding_play_icon various_concert_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="various_song_playlist">
                                                <p>
                                                    <a href="#">{item.song.name}</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TreandingSongsClient