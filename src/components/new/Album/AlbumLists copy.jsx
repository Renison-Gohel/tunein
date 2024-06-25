'use client';

import React, { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

function AlbumLists({ heading, langData }) {

    const supabase = createClientComponentClient()

    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleClick = async (name) => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('song_languages')
                .select('*, song(*)')
                .eq('language_id', name);

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setSongs(data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
        finally {
            setLoading(false);
        }
    };


    return (
        <div className="treanding_songs_wrapper release_wrapper index3_release_wrapper m24_cover">
            <div className="container">
                <div className="row">

                    {/* Languages starts */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="m24_heading_wrapper white_heading_wrapper">
                            <h1>{heading}</h1>
                        </div>
                        <div className="relaese_viewall_wrapper">
                            <a href="#">
                                {" "}
                                view all <i className="flaticon-right-arrow" />
                            </a>
                        </div>
                        {/* ToDo: Loop over all leanguages */}
                        {langData.map(language => (
                            <div className="release_tabs_wrapper" key={language.id}>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <div className="nav-link active" data-toggle="tab" onClick={() => handleClick(language.id)}>
                                            {language.name}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* Languages ends */}

                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="tab-content">
                            <div id="home" className="tab-pane active">
                                <div className="row">

                                    {loading && <p>Loading...</p>}

                                    {/* Album List Starts */}
                                    {songs.length > 0 ? (
                                        songs.map((song) => (
                                            <Album key={song.song_id} imgPath={song.song.img_path} songName={song.song.name} songPath={song.song.songPath} />
                                        ))
                                    ) : (
                                        !loading && <p>No songs available for this language.</p>
                                    )}
                                    {/* Album List Ends */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const Album = ({ songName, imgPath, songPath }) => {

    const [overlayOpen, setOverlayOpen] = useState(false);

    const toggleOverlay = () => {
        setOverlayOpen(!overlayOpen);
    };

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
      <div className="treanding_slider_main_box release_box_main_content m24_cover">
        <img src={imgPath} alt="img" />
        <div className="release_content_artist release_content_artist2">
          <p>
            <a href="#">{songName}</a>
          </p>
          <p className="various_artist_text">
            <a href="#">Various Artists</a>
          </p>
        </div>
        <div className="m24_treanding_box_overlay release_box_overlay">
          <div className="m24_tranding_box_overlay" />
          <div className="m24_tranding_more_icon">
            <i className="flaticon-menu" onClick={toggleOverlay} />
          </div>
          {overlayOpen && (
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
                  Favourite
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="opt_icon">
                    <i className="flaticon-share" />
                  </span>
                  Share
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="opt_icon">
                    <i className="flaticon-files-and-folders" />
                  </span>
                  View lyrics
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="opt_icon">
                    <i className="flaticon-trash" />
                  </span>
                  Delete
                </a>
              </li>
            </ul>
          )}
          <div className="tranding_play_icon">
            <a href="#">
              <i className="flaticon-play-button" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumLists