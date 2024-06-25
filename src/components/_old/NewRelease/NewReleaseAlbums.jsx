'use client'
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const NewReleaseAlbums = () => {

    const supabase = createClientComponentClient()

    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('all');
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const { data: languagesData, error: languagesError } = await supabase.from('language').select('*');
                const { data: songsData, error: songsError } = await supabase.from('song').select(`name`);
                setLanguages(languagesData);
                setSongs(songsData);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
                console.log(songs);
            }
        };

        fetchData();
    }, []);

    // const handleLanguageClick = (language) => {
    //     setSelectedLanguage(language);
    //     const filteredSongs = songs.filter((song) => song.language_id === language.id);
    //     setSongs(filteredSongs); // Update the songs state
    // };

    const handleLanguageClick = async (language) => {
        setSelectedLanguage(language);
        try {
            const { data: songsData } = await supabase
                .from('song_languages')
                .select(`*, song(*)`)
                .eq('language_id', language.id);
            setSongs(songsData);
        } catch (error) {
            console.error('Error fetching songs:', error);
        }
    };



    return (
        <div className="treanding_songs_wrapper release_wrapper index3_release_wrapper m24_cover">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="m24_heading_wrapper white_heading_wrapper">
                            <h1>New Releases Albums</h1>
                        </div>
                        <div className="relaese_viewall_wrapper">
                            <a href="#">
                                {" "}
                                view all <i className="flaticon-right-arrow" />
                            </a>
                        </div>
                        <div className="release_tabs_wrapper">
                            <ul className="nav nav-tabs">

                                {/* {languages.map((item) => {
                                    <li className="nav-item">
                                        {" "}
                                        <a className="nav-link active" data-toggle="tab" href="#home">
                                            {" "}
                                            {item.name}
                                        </a>
                                    </li>
                                })} */}

                                {languages.map((language) => (
                                    <>
                                        {/* <a key={language.id} onClick={() => handleLanguageClick(language)}>
                                            {language.name}
                                        </a> */}

                                        <li className="nav-item">
                                            {" "}
                                            <div key={language.id} onClick={() => handleLanguageClick(language)} className="nav-link active" data-toggle="tab">
                                                {" "}
                                                {language.name}
                                            </div>
                                        </li>
                                    </>

                                ))}

                                {/* <li className="nav-item">
                                    {" "}
                                    <a className="nav-link active" data-toggle="tab" href="#home">
                                        {" "}
                                        hindiaa
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="tab-content">
                            <div id="home" className="tab-pane active">
                                <div className="row">

                                    {isLoading ? (
                                        <p>Loading songs...</p>
                                    ) : (
                                        <>
                                            {songs.map((song) => (
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1" key={song.id}>
                                                    <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                        <img src={song.img_path} alt="img" />

                                                        <div className="release_content_artist release_content_artist2">
                                                            <p>
                                                                <a href="#">{song.name}</a>
                                                            </p>
                                                            <p className="various_artist_text">
                                                                {/* ToDo Artists query join */}
                                                                {/* <a href="#">{song.artist.name}</a> */}
                                                            </p>
                                                        </div>

                                                        <div className="m24_treanding_box_overlay release_box_overlay">
                                                            <div className="m24_tranding_box_overlay" />
                                                            <div className="m24_tranding_more_icon">
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
                                                            </ul>
                                                            <div className="tranding_play_icon">
                                                                <a href="#">
                                                                    <i className="flaticon-play-button" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    )}

                                </div>    
                            </div>

                            <div id="menu1" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel3.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Sadda Move song</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Jabariya Jodi</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel1.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Dilla Ther Jaa</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel2.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Ik Vaari Aa jaa</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel4.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">me hoon don</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel6.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">tera chehra</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel5.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">wafa ne bewafai</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Jabariya Jodi</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu2" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel2.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Ik Vaari Aa jaa</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel3.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Sadda Move song</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Jabariya Jodi</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel1.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Dilla Ther Jaa</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel4.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">me hoon don</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel5.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">wafa ne bewafai</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel6.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">tera chehra</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Jabariya Jodi</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu3" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel3.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Sadda Move song</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel2.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Ik Vaari Aa jaa</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Jabariya Jodi</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel1.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Dilla Ther Jaa</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel5.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">wafa ne bewafai</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel4.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">me hoon don</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel6.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">tera chehra</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Jabariya Jodi</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu4" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel3.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Sadda Move song</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Jabariya Jodi</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel2.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Ik Vaari Aa jaa</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel1.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Dilla Ther Jaa</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel5.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">wafa ne bewafai</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel6.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">tera chehra</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel4.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">me hoon don</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Jabariya Jodi</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu5" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel3.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Sadda Move song</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel2.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Ik Vaari Aa jaa</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Jabariya Jodi</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel1.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Dilla Ther Jaa</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel5.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">wafa ne bewafai</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel4.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">me hoon don</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel6.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">tera chehra</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel.png" alt="img" />
                                            <div className="release_content_artist release_content_artist2">
                                                <p>
                                                    <a href="#">Jabariya Jodi</a>
                                                </p>
                                                <p className="various_artist_text">
                                                    <a href="#">Various Artists</a>
                                                </p>
                                            </div>
                                            <div className="m24_treanding_box_overlay release_box_overlay">
                                                <div className="m24_tranding_box_overlay" />
                                                <div className="m24_tranding_more_icon">
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
                                                </ul>
                                                <div className="tranding_play_icon">
                                                    <a href="#">
                                                        <i className="flaticon-play-button" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div>
        //     <h2>New Release Songs</h2>
        //     <div className="language-categories">
        //         {languages.map((language) => (
        //             <button key={language.id} onClick={() => handleLanguageClick(language)}>
        //                 {language.name}
        //             </button>
        //         ))}
        //     </div>
        //     {isLoading ? (
        //         <p>Loading songs...</p>
        //     ) : (
        //         <div className="song-list">
        //             {songs.map((song) => (
        //                 <div key={song.id}>
        //                     <h3>{song.name}</h3>
        //                     <p>Artist: {song.artist}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     )}
        // </div>
    )
}

export default NewReleaseAlbums