'use client'

import Image from 'next/image'
import React from 'react'

function FeaturedArtists({ artistData }) {
  // console.log("YOOO:  ", artistData);

  // Function to chunk the array into groups of 3 items
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  // Chunk the items array into groups of 3
  const chunkedItems = chunkArray(artistData, 3);

  return (
    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
      <div className="m24_heading_wrapper white_heading_wrapper">
        <h1>Featured Artists</h1>
      </div>
      <div className="featured_song_slider index3_featured_song_slider">
        <div className="owl-carousel owl-theme">

          {chunkedItems.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="item">
              {chunk.map((item) => (
                // <div key={item.id} className="item">
                //   <Image src={item.img} alt={item.name} />
                //   <h2>{item.name}</h2>
                //   <p>{item.description}</p>
                //   <p>Gender: {item.gender}</p>
                //   <p>Date of Birth: {item.dob}</p>
                //   {item.dod && <p>Date of Death: {item.dod}</p>}
                // </div>

                <div key={item.id} className="featured_artist_list index3_featured_list m24_cover">
                  <Image
                    width={100}
                    height={100}
                    src={item.img}
                    className="img-responsive"
                    alt="img"
                  />
                  <div className="featured_artist_detail" tabIndex={2}>
                    <p>
                      <a href="#">{item.name}</a>
                    </p>
                    <p className="various_artist_text">
                      <a href="#">{item.song_artists.length} tracks</a> 8M+ View
                    </p>
                    <div className="lang_apply_btn">
                      <ul>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="flaticon-play-button" />
                            play now
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="top_song_list_picks featured_list_dropdown">
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="item">
            <div className="featured_artist_list index3_featured_list m24_cover">
              <Image
                width={100}
                height={100}
                src="/images/fa1.png"
                className="img-responsive"
                alt="img"
              />
              <div className="featured_artist_detail" tabIndex={2}>
                <p>
                  <a href="#">Rihanna Fenty 1 </a>
                </p>
                <p className="various_artist_text">
                  <a href="#">51 tracks</a> 8M+ View
                </p>
                <div className="lang_apply_btn">
                  <ul>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="flaticon-play-button" />
                        play now
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="top_song_list_picks featured_list_dropdown">
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
                </div>
              </div>
            </div>
            <div className="featured_artist_list index3_featured_list m24_cover">
              <img
                src="images/fa2.png"
                className="img-responsive"
                alt="img"
              />
              <div className="featured_artist_detail">
                <p>
                  <a href="#">Beyonce Giselle</a>
                </p>
                <p className="various_artist_text">
                  <a href="#">51 tracks</a> 8M+ View
                </p>
                <div className="lang_apply_btn">
                  <ul>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="flaticon-play-button" />
                        play now
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="top_song_list_picks featured_list_dropdown">
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
                </div>
              </div>
            </div>
            <div className="featured_artist_list index3_featured_list m24_cover">
              <img
                src="images/fa3.png"
                className="img-responsive"
                alt="img"
              />
              <div className="featured_artist_detail">
                <p>
                  <a href="#">taylor swift </a>
                </p>
                <p className="various_artist_text">
                  <a href="#">51 tracks</a> 8M+ View
                </p>
                <div className="lang_apply_btn">
                  <ul>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="flaticon-play-button" />
                        play now
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="top_song_list_picks featured_list_dropdown">
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
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default FeaturedArtists