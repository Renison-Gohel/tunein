import AlbumLists from "@/components/new/Album/AlbumLists";
import SongsWithoutNames from "@/components/new/SongsWithoutNames";
import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import FeaturedArtists from "@/components/new/FeaturedArtists";


export default async function Home() {

  const supabase = createServerComponentClient({ cookies })
  const { data: langData, error: langError } = await supabase.from('language').select('*')
  const { data: songData, error: songError } = await supabase.from('song').select('*')
  const { data: artistData, error: artistError } = await supabase.from('artist').select('*, song_artists(*)')

  // console.log(artistData);

  return (
    <main>
      {/* preloader Start */}
      {/* <Preloader/> */}
      {/* preloader End */}

      {/* top navi wrapper Start */}
      <div className="m24_main_wrapper">

        {/* top navi wrapper end */}


        {/* navi wrapper End */}

        {/* slider wrapper start */}
        <div className="main_slider_wrapper slider-area index3_slider_wrapper">
          <div className="slider_headphone">
            <img src="images/headphone.png" className="img-responsive" alt="img" />
          </div>
          <div
            id="carousel-example-generic"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="carousel-captions caption-1">
                  <div className="container jn_container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="content">
                          <h1 data-animation="animated fadeInUp">sound,</h1>
                          <h2 data-animation="animated fadeInUp">your world</h2>
                          <p data-animation="animated fadeInUp">
                            Even while listening to music, simply say “Olivia”
                            <br /> to interact with Olivia.
                          </p>
                          <div className="slider_btn m24_cover">
                            <div className="lang_apply_btn">
                              <ul>
                                <li data-animation="animated fadeInUp">
                                  <a href="#">
                                    {" "}
                                    <i className="flaticon-play-button" />
                                    browse
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="clear" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="content_img_wrapper">
                          <img src="images/slider3.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <ol className="carousel-indicators">
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to={0}
                  className="active"
                >
                  <span className="number" />
                </li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to={1}
                  className=""
                >
                  <span className="number" />
                </li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to={2}
                  className=""
                >
                  <span className="number" />
                </li>
              </ol> */}
              <div className="carousel-nevigation">
                <a
                  className="prev"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="prev"
                >
                  {" "}
                  <span>prev</span> <i className="flaticon-arrow-1" />
                </a>
                <a
                  className="next"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="next"
                >
                  {" "}
                  <span>next</span> <i className="flaticon-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*slider wrapper end*/}

        {/* treanding song wrapper start */}
        <SongsWithoutNames songData={songData} />
        {/* treanding song wrapper end */}

        {/* release album wrapper start */}
        <AlbumLists heading="New Release Albums" langData={langData} />
        {/* release album wrapper end */}

        {/* addvertisment wrapper start */}
        <div className="add_banner_wrapper index3_top_songs_wrapper m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="add_banner_img_wrapper m24_cover">
                  <a href="#">
                    <img
                      src="images/add2.png"
                      className="img-responsive"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* addvertisment wrapper end */}
        {/* top songs wrapper start */}
        <div className="top_songs_wrapper index3_top_songs_wrapper m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                <div className="song_heading_wrapper m24_cover">
                  <div className="m24_heading_wrapper white_heading_wrapper">
                    <h1>top songs</h1>
                  </div>
                  <div className="relaese_viewall_wrapper">
                    <a href="#">
                      {" "}
                      view all <i className="flaticon-right-arrow" />
                    </a>
                  </div>
                  <div className="top_songs_list index3_top_songs_list m24_cover">
                    <div className="top_songs_list_left">
                      <div className="treanding_slider_main_box top_lis_left_content">
                        <div className="top_songs_list0img">
                          <img src="images/tp1.png" alt="img" />
                          <div className="m24_treanding_box_overlay">
                            <div className="m24_tranding_box_overlay" />
                            <div className="tranding_play_icon">
                              <a href="#">
                                <i className="flaticon-play-button" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="release_content_artist top_list_content_artist">
                          <p>
                            <a href="#">Let me Love You</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Auguste Rodin</a>
                          </p>
                        </div>
                      </div>
                      <div className="top_list_tract_time">
                        <p>4:22</p>
                      </div>
                    </div>
                    <div className="top_songs_list_right">
                      <div className="top_list_tract_view">
                        <p>8M+ View</p>
                      </div>
                      <div className="top_song_list_picks">
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
                  <div className="top_songs_list index3_top_songs_list m24_cover">
                    <div className="top_songs_list_left">
                      <div className="treanding_slider_main_box top_lis_left_content">
                        <div className="top_songs_list0img">
                          <img src="images/tp2.png" alt="img" />
                          <div className="m24_treanding_box_overlay">
                            <div className="m24_tranding_box_overlay" />
                            <div className="tranding_play_icon">
                              <a href="#">
                                <i className="flaticon-play-button" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="release_content_artist top_list_content_artist">
                          <p>
                            <a href="#">Until I Met You</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Henry Moore</a>
                          </p>
                        </div>
                      </div>
                      <div className="top_list_tract_time">
                        <p>4:22</p>
                      </div>
                    </div>
                    <div className="top_songs_list_right">
                      <div className="top_list_tract_view">
                        <p>8M+ View</p>
                      </div>
                      <div className="top_song_list_picks">
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
                  <div className="top_songs_list index3_top_songs_list m24_cover">
                    <div className="top_songs_list_left">
                      <div className="treanding_slider_main_box top_lis_left_content">
                        <div className="top_songs_list0img">
                          <img src="images/tp3.png" alt="img" />
                          <div className="m24_treanding_box_overlay">
                            <div className="m24_tranding_box_overlay" />
                            <div className="tranding_play_icon">
                              <a href="#">
                                <i className="flaticon-play-button" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="release_content_artist top_list_content_artist">
                          <p>
                            <a href="#">Let me Love You</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Marc Chagall</a>
                          </p>
                        </div>
                      </div>
                      <div className="top_list_tract_time">
                        <p>4:22</p>
                      </div>
                    </div>
                    <div className="top_songs_list_right">
                      <div className="top_list_tract_view">
                        <p>8M+ View</p>
                      </div>
                      <div className="top_song_list_picks">
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
                  <div className="top_songs_list index3_top_songs_list m24_cover">
                    <div className="top_songs_list_left">
                      <div className="treanding_slider_main_box top_lis_left_content">
                        <div className="top_songs_list0img">
                          <img src="images/tp4.png" alt="img" />
                          <div className="m24_treanding_box_overlay">
                            <div className="m24_tranding_box_overlay" />
                            <div className="tranding_play_icon">
                              <a href="#">
                                <i className="flaticon-play-button" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="release_content_artist top_list_content_artist">
                          <p>
                            <a href="#">Dark Alley Acotic</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">brian hills</a>
                          </p>
                        </div>
                      </div>
                      <div className="top_list_tract_time">
                        <p>4:22</p>
                      </div>
                    </div>
                    <div className="top_songs_list_right">
                      <div className="top_list_tract_view">
                        <p>8M+ View</p>
                      </div>
                      <div className="top_song_list_picks">
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
                  <div className="top_songs_list index3_top_songs_list m24_cover">
                    <div className="top_songs_list_left">
                      <div className="treanding_slider_main_box top_lis_left_content">
                        <div className="top_songs_list0img">
                          <img src="images/tp5.png" alt="img" />
                          <div className="m24_treanding_box_overlay">
                            <div className="m24_tranding_box_overlay" />
                            <div className="tranding_play_icon">
                              <a href="#">
                                <i className="flaticon-play-button" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="release_content_artist top_list_content_artist">
                          <p>
                            <a href="#">Walking Promises</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Ava Cornish</a>
                          </p>
                        </div>
                      </div>
                      <div className="top_list_tract_time">
                        <p>4:22</p>
                      </div>
                    </div>
                    <div className="top_songs_list_right">
                      <div className="top_list_tract_view">
                        <p>8M+ View</p>
                      </div>
                      <div className="top_song_list_picks">
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
                  <div className="top_songs_list index3_top_songs_list m24_cover">
                    <div className="top_songs_list_left">
                      <div className="treanding_slider_main_box top_lis_left_content">
                        <div className="top_songs_list0img">
                          <img src="images/tp6.png" alt="img" />
                          <div className="m24_treanding_box_overlay">
                            <div className="m24_tranding_box_overlay" />
                            <div className="tranding_play_icon">
                              <a href="#">
                                <i className="flaticon-play-button" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="release_content_artist top_list_content_artist">
                          <p>
                            <a href="#">Gimme Sourage</a>
                          </p>
                          <p className="various_artist_text">
                            <a href="#">Chrissy Costanza</a>
                          </p>
                        </div>
                      </div>
                      <div className="top_list_tract_time">
                        <p>4:22</p>
                      </div>
                    </div>
                    <div className="top_songs_list_right">
                      <div className="top_list_tract_view">
                        <p>8M+ View</p>
                      </div>
                      <div className="top_song_list_picks">
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

              {/* Featured Artist Starts */}


              <FeaturedArtists artistData={artistData} />


              {/* Featured Artist Ends */}

            </div>
          </div>
        </div>
        {/* top songs wrapper end */}
        {/* concert wrapper start */}
        <div className="concert_wrapper m24_cover">
          <div className="concert_overlay" />
          <div className="concert_wrapper_slider">
            <div className="concert_shape_img">
              <img src="images/shape.png" alt="img" />
            </div>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="content">
                          <div className="slider_ball_img">
                            <img src="images/headphone.png" alt="img" />
                          </div>
                          <div className="os_frame_tt_toggle_first">
                            <a href="#!">
                              <i className="fa fa-plus" />
                            </a>
                            <div className="os_frame_tooltip_wrapper">
                              <h3>headphone Technology</h3>
                              <p>
                                Amazon’s cloud based voice service, play game and
                                more.
                              </p>
                            </div>
                          </div>
                          <div className="os_frame_tt_toggle_first os_frame_tt_toggle_second">
                            <img src="images/line.png" alt="img" />
                            <a href="#!">
                              <i className="fa fa-plus" />
                            </a>
                            <div className="os_frame_tooltip_wrapper">
                              <h3>noice concellation</h3>
                              <p>
                                Amazon’s cloud based voice service, play game and
                                more.
                              </p>
                            </div>
                          </div>
                          <div className="os_frame_tt_toggle_first os_frame_tt_toggle_third">
                            <a href="#!">
                              <i className="fa fa-plus" />
                            </a>
                            <div className="os_frame_tooltip_wrapper os_frame_tooltip_wrapper_third">
                              <h3>Diasil Cylinder</h3>
                              <p>
                                Amazon’s cloud based voice service, play game and
                                more.
                              </p>
                            </div>
                          </div>
                          <div className="clear" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="content">
                          <div className="slider_ball_img">
                            <img src="images/headphone.png" alt="img" />
                          </div>
                          <div className="os_frame_tt_toggle_first">
                            <a href="#!">
                              <i className="fa fa-plus" />
                            </a>
                            <div className="os_frame_tooltip_wrapper">
                              <h3>headphone Technology</h3>
                              <p>
                                Amazon’s cloud based voice service, play game and
                                more.
                              </p>
                            </div>
                          </div>
                          <div className="os_frame_tt_toggle_first os_frame_tt_toggle_second">
                            <img src="images/line.png" alt="img" />
                            <a href="#!">
                              <i className="fa fa-plus" />
                            </a>
                            <div className="os_frame_tooltip_wrapper">
                              <h3>noice concellation</h3>
                              <p>
                                Amazon’s cloud based voice service, play game and
                                more.
                              </p>
                            </div>
                          </div>
                          <div className="os_frame_tt_toggle_first os_frame_tt_toggle_third">
                            <a href="#!">
                              <i className="fa fa-plus" />
                            </a>
                            <div className="os_frame_tooltip_wrapper os_frame_tooltip_wrapper_third">
                              <h3>Diasil Cylinder</h3>
                              <p>
                                Amazon’s cloud based voice service, play game and
                                more.
                              </p>
                            </div>
                          </div>
                          <div className="clear" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="content">
                          <div className="slider_ball_img">
                            <img src="images/headphone.png" alt="img" />
                          </div>
                          <div className="os_frame_tt_toggle_first">
                            <a href="#!">
                              <i className="fa fa-plus" />
                            </a>
                            <div className="os_frame_tooltip_wrapper">
                              <h3>headphone Technology</h3>
                              <p>
                                Amazon’s cloud based voice service, play game and
                                more.
                              </p>
                            </div>
                          </div>
                          <div className="os_frame_tt_toggle_first os_frame_tt_toggle_second">
                            <img src="images/line.png" alt="img" />
                            <a href="#!">
                              <i className="fa fa-plus" />
                            </a>
                            <div className="os_frame_tooltip_wrapper">
                              <h3>noice concellation</h3>
                              <p>
                                Amazon’s cloud based voice service, play game and
                                more.
                              </p>
                            </div>
                          </div>
                          <div className="os_frame_tt_toggle_first os_frame_tt_toggle_third">
                            <a href="#!">
                              <i className="fa fa-plus" />
                            </a>
                            <div className="os_frame_tooltip_wrapper os_frame_tooltip_wrapper_third">
                              <h3>Diasil Cylinder</h3>
                              <p>
                                Amazon’s cloud based voice service, play game and
                                more.
                              </p>
                            </div>
                          </div>
                          <div className="clear" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
          <div className="concert_video_wrapper">
            <a
              className="test-popup-link button"
              rel="external"
              href="https://www.youtube.com/embed/ryzOXAO0Ss0"
              title="title"
            >
              <i className="fa fa-play" />
            </a>
            <div className="concert_content_wrap">
              <h1>Live Concert in </h1>
              <p>Avril Lavigne at California, 6:22pm</p>
            </div>
          </div>
        </div>
        {/* concert wrapper end */}
        {/* treanding song wrapper start */}
        <div className="treanding_songs_wrapper punjabi_sogns index3_punjabi_songs m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="m24_heading_wrapper white_heading_wrapper">
                  <h1>Punjabiyan Da Swag</h1>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="treanding_song_slider playlist_songs_list index3_featured_song_slider">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/td7.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Mind Broken</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/td8.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">yellow wood</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/td9.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">veere di wedding</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/td4.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Lambiyaan Si</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/td5.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Dilla Ther Jaa</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/td6.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">4 G Ka Jamana</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* treanding song wrapper end */}
        {/* treanding song wrapper start */}
        <div className="treanding_songs_wrapper punjabi_sogns index3_punjabi_songs m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="m24_heading_wrapper white_heading_wrapper">
                  <h1>Retro Playlists</h1>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="treanding_song_slider playlist_songs_list index3_featured_song_slider">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/rt1.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#"> Friendly Patience</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/rt2.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">yellow wood</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/rt3.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Hotshot Space</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/rt4.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Faking Freedom</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/rt5.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Just Another Lightning</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/rt6.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Rock Will Find</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* treanding song wrapper end */}
        {/* treanding song wrapper start */}
        <div className="treanding_songs_wrapper index3_punjabi_songs m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="m24_heading_wrapper white_heading_wrapper">
                  <h1>top english songs</h1>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="treanding_song_slider index3_featured_song_slider index3_border_none">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/jz1.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Reckless Ruin</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/jz2.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Sense Unleashed</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/jz3.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Lambiyaan Si</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/jz4.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Rocking Star</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/jz5.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#">Antique Sun</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="treanding_slider_main_box m24_cover">
                        <img src="images/jz6.png" alt="img" />
                        <div className="m24_treanding_box_overlay">
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
                          <div className="tranding_play_icon various_concert_icon">
                            <a href="#">
                              <i className="flaticon-play-button" />
                            </a>
                          </div>
                        </div>
                        <div className="various_song_playlist">
                          <p>
                            <a href="#"> Supernatural Feast</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* treanding song wrapper end */}
        {/* download wrapper start */}
        <div className="download_wrapper m24_cover">
          <div className="concert_overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="download_app_store m24_cover">
                  <h1>DOWNLOAD THIS APP</h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but passages of Lorem this is wow.
                  </p>
                  <div className="app_btn m24_cover">
                    <a href="#">get the app now</a>
                  </div>
                  <ul className="download_app_logo">
                    <li>
                      <a href="#">
                        <i className="flaticon-android-logo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-apple" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-windows" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="download_mockup_design m24_cover">
                  <img
                    src="images/mockup.png"
                    className="img-responsive"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* download wrapper end */}
        {/* pricing plan wrapper start*/}
        <div className="pricing_plan_wrapper index3_pricing_plans m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="pricing_box_wrapper index3_pricing_box m24_cover">
                  <h1>basic plan</h1>
                  <div className="main_pdet m24_cover">
                    <h2>
                      <span className="dollarr"> $ </span> 29{" "}
                    </h2>{" "}
                    <span className="monthly"> / per month</span>
                  </div>
                  <ul className="pricing_list22">
                    <li>10 Punjabi song</li>
                    <li>50 Old song</li>
                    <li>40 Trending Song</li>
                    <li>10 Days Duration</li>
                  </ul>
                  <a href="#" className="price_btn">
                    select plan
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="pricing_box_wrapper index3_pricing_box m24_cover">
                  <h1>premium plan</h1>
                  <div className="main_pdet m24_cover">
                    <h2>
                      <span className="dollarr"> $ </span> 49{" "}
                    </h2>
                    <span className="monthly"> / per month</span>
                  </div>
                  <ul className="pricing_list22">
                    <li>150 Punjabi song</li>
                    <li>100 Old song</li>
                    <li>100 Trending Song</li>
                    <li>60 Days Duration</li>
                  </ul>
                  <a href="#" className="price_btn">
                    select plan
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="pricing_box_wrapper index3_pricing_box m24_cover">
                  <h1>advanced plan</h1>
                  <div className="main_pdet m24_cover">
                    <h2>
                      <span className="dollarr"> $ </span> 69{" "}
                    </h2>{" "}
                    <span className="monthly"> / per month</span>
                  </div>
                  <ul className="pricing_list22">
                    <li>250 Punjabi song</li>
                    <li>250 Old song</li>
                    <li>250 Trending Song</li>
                    <li>6 months Duration</li>
                  </ul>
                  <a href="#" className="price_btn">
                    select plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pricing plan wrapper end*/}
        {/* addvertisment wrapper start */}
        <div className="add_banner_wrapper index3_top_songs_wrapper  m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="add_banner_img_wrapper m24_cover">
                  <a href="#">
                    <img
                      src="images/add7.png"
                      className="img-responsive"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* addvertisment wrapper end */}
        {/* blog wrapper start */}
        <div className="blog_wrapper index3_blog_wrapper m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="m24_heading_wrapper white_heading_wrapper">
                  <h1>latest from blog</h1>
                </div>
                <div className="relaese_viewall_wrapper">
                  <a href="#">
                    {" "}
                    view all <i className="flaticon-right-arrow" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="featured_artist_list blog_img_content index3_blog_img_content m24_cover">
                  <img
                    src="images/blog1.png"
                    className="img-responsive"
                    alt="img"
                  />
                  <div className="featured_artist_detail blog_content_box">
                    <span>
                      {" "}
                      <i className="flaticon-calendar" />3 May, 2019
                    </span>
                    <p>
                      <a href="#">Celebrating Winter Holidays</a>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed
                      do this dolor sit..
                    </p>
                    <a href="#"> read more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="featured_artist_list blog_img_content index3_blog_img_content m24_cover">
                  <img
                    src="images/blog2.png"
                    className="img-responsive"
                    alt="img"
                  />
                  <div className="featured_artist_detail blog_content_box">
                    <span>
                      {" "}
                      <i className="flaticon-calendar" />3 May, 2019
                    </span>
                    <p>
                      <a href="#">Dance with DJ Nowan</a>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed
                      do this dolor sit..
                    </p>
                    <a href="#"> read more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="featured_artist_list blog_img_content index3_blog_img_content m24_cover">
                  <img
                    src="images/blog3.png"
                    className="img-responsive"
                    alt="img"
                  />
                  <div className="featured_artist_detail blog_content_box">
                    <span>
                      {" "}
                      <i className="flaticon-calendar" />3 May, 2019
                    </span>
                    <p>
                      <a href="#">Celebrating Winter Holidays</a>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed
                      do this dolor sit..
                    </p>
                    <a href="#"> read more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="featured_artist_list blog_img_content index3_blog_img_content m24_cover">
                  <img
                    src="images/blog4.png"
                    className="img-responsive"
                    alt="img"
                  />
                  <div className="featured_artist_detail blog_content_box">
                    <span>
                      {" "}
                      <i className="flaticon-calendar" />3 May, 2019
                    </span>
                    <p>
                      <a href="#">electus dolorum facere illo</a>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed
                      do this dolor sit..
                    </p>
                    <a href="#"> read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blog wrapper end */}
        <div className="add_banner_wrapper index3_top_songs_wrapper m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="add_banner_img_wrapper m24_cover">
                  <a href="#">
                    <img
                      src="images/add1.png"
                      className="img-responsive"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* partners slider  wrapper Start*/}
        <div className="partners_Section index3_partners_section m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="partner_slider_wraper index3_partners_slider">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="lr_prt_img_wrapper">
                        <img src="images/part1.png" alt="partner_img" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="lr_prt_img_wrapper">
                        <img src="images/part2.png" alt="partner_img" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="lr_prt_img_wrapper">
                        <img src="images/part3.png" alt="partner_img" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="lr_prt_img_wrapper">
                        <img src="images/part4.png" alt="partner_img" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="lr_prt_img_wrapper">
                        <img src="images/part1.png" alt="partner_img" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="lr_prt_img_wrapper">
                        <img src="images/part2.png" alt="partner_img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* partners slider  wrapper end*/}
        {/* quick link wrapper start*/}
        <div className="quick_link_wrapper index3_quick_wrapper m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div id="accordion" role="tablist">
                  <div className="card">
                    {/* Card Title */}
                    <div className="card_pagee" role="tab" id="headingOne">
                      <h5 className="h5-md">
                        <a
                          data-toggle="collapse"
                          href="#collapseOne"
                          role="button"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          QUICK LINKS <span>Help us make a difference. </span>
                        </a>
                      </h5>
                    </div>
                    {/* Card Content */}
                    <div
                      id="collapseOne"
                      className="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="quick_list_songs index3_quick_song_list m24_cover">
                              <h1>albums</h1>
                              <ul>
                                <li>
                                  <a href="#">Hindi Songs</a>
                                </li>
                                <li>
                                  <a href="#">English Songs</a>
                                </li>
                                <li>
                                  <a href="#">Tamil Songs</a>
                                </li>
                                <li>
                                  <a href="#">Telugu Songs</a>
                                </li>
                                <li>
                                  <a href="#">Punjabi Songs</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="quick_list_songs index3_quick_song_list m24_cover">
                              <h1>old songs</h1>
                              <ul>
                                <li>
                                  <a href="#">Old English Songs</a>
                                </li>
                                <li>
                                  <a href="#">Old Rajasthani Songs</a>
                                </li>
                                <li>
                                  <a href="#">Old Kannada Songs</a>
                                </li>
                                <li>
                                  <a href="#">Old Hindi Songs</a>
                                </li>
                                <li>
                                  <a href="#">Old Haryanvi Songs</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="quick_list_songs index3_quick_song_list m24_cover">
                              <h1>new release</h1>
                              <ul>
                                <li>
                                  <a href="#">Punjabi Songs</a>
                                </li>
                                <li>
                                  <a href="#">Hindi Songs</a>
                                </li>
                                <li>
                                  <a href="#">English Songs</a>
                                </li>
                                <li>
                                  <a href="#">Telugu Songs</a>
                                </li>
                                <li>
                                  <a href="#">Kannada Songs</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="quick_list_songs index3_quick_song_list m24_cover">
                              <h1>trending songs</h1>
                              <ul>
                                <li>
                                  <a href="#">Vaaste</a>
                                </li>
                                <li>
                                  <a href="#">Despacito</a>
                                </li>
                                <li>
                                  <a href="#">First Class</a>
                                </li>
                                <li>
                                  <a href="#">my love song</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="quick_list_songs index3_quick_song_list m24_cover">
                              <h1>trending albums</h1>
                              <ul>
                                <li>
                                  <a href="#">Happy Birthday</a>
                                </li>
                                <li>
                                  <a href="#">Sad Songs</a>
                                </li>
                                <li>
                                  <a href="#">Taki Taki</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="quick_list_songs index3_quick_song_list m24_cover">
                              <h1>lyrics</h1>
                              <ul>
                                <li>
                                  <a href="#">Duniyaa</a>
                                </li>
                                <li>
                                  <a href="#">Leja Re</a>
                                </li>
                                <li>
                                  <a href="#">Nazm Nazm</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="quick_list_songs index3_quick_song_list m24_cover">
                              <h1>radio</h1>
                              <ul>
                                <li>
                                  <a href="#">Hindi Radio </a>
                                </li>
                                <li>
                                  <a href="#">English Radio</a>
                                </li>
                                <li>
                                  <a href="#">Tamil Radio</a>
                                </li>
                                <li>
                                  <a href="#">Punjabi Radio</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="quick_list_songs index3_quick_song_list m24_cover">
                              <h1>artists</h1>
                              <ul>
                                <li>
                                  <a href="#">Arijit Singh</a>
                                </li>
                                <li>
                                  <a href="#">Neha Kakkar</a>
                                </li>
                                <li>
                                  <a href="#">Justin Bieber</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-12 col-sm-12">
                            <div className="more_playlist_wrapper index_more m24_cover">
                              <h1>
                                Do you have what it takes? Show us your skills at{" "}
                                <a href="#">Tunein@example.com</a>{" "}
                              </h1>
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
        {/* quick link wrapper end*/}
        {/* footer Wrapper start */}
        <div className="footer_wrapper index3_footer_wrapper  m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_about_wrapper m24_cover">
                  <div className="wrapper_first_image">
                    <a href="index.html">
                      <img
                        src="images/logo3.png"
                        className="img-responsive"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="abotus_content">
                    <p>
                      Sed do eiusmod tempor unt ut labore et dolore magna liqua. Ut
                      enim ad minim veniam...
                    </p>
                  </div>
                  <ul className="footer_about_link_wrapper index3_footer_abt_link m24_cover">
                    <li>
                      {" "}
                      <i className="fa fa-phone" />
                      808 - 111 - 9999
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <i className="fa fa-envelope" />
                        Tunein@example.com
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <i className="fas fa-user-alt" />
                        Tunein@support.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_blog_wrapper ft_heading m24_cover">
                  <h4>usefull links</h4>
                  <ul className="footer_about_link_wrapper usefull_linkx index3_usefull_link m24_cover">
                    <li>
                      {" "}
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Privacy Policy </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Feedback </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Report an issue </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Sitemap </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">FAQ </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">advertise </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_contact_wrapper ft_heading m24_cover">
                  <h4>download app </h4>
                  <p>All type of app’s available for download</p>
                  <span>
                    <a href="#">
                      <img
                        src="images/app_btn1.png"
                        className="img-responsive"
                        alt="img"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        src="images/app_btn2.png"
                        className="img-responsive"
                        alt="img"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        src="images/app_btn3.png"
                        className="img-responsive"
                        alt="img"
                      />
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_contact_wrapper ft_heading m24_cover">
                  <h4>newsletter</h4>
                  <p>Our latest news &amp; Special Offers </p>
                  <div className="contect_form_footer m24_cover">
                    <input type="text" name="name" placeholder="name" />
                  </div>
                  <div className="contect_form_footer m24_cover">
                    <input type="text" name="email" placeholder="Email" />
                  </div>
                  <div className="lang_apply_btn footer_cont_btn">
                    <ul>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="flaticon-play-button" />
                          subscribe
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foter_top_wrapper index3_index_top_wrapper  m24_cover">
          <div className="container">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>{" "}
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-google-plus-g" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-tumblr" />
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <i className="fab fa-behance" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <i className="fab fa-dribbble" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <i className="fab fa-whatsapp" />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="section2_bottom_wrapper index3_bottom_footer m24_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="btm_foter_box">
                  <p>
                    Copyright © 2019 <a href="index.html"> Tunein </a> Template
                    designed by <a href="#">Webstrot.</a>
                  </p>
                  <div className="aboutus_social_icons">
                    <a href="#">
                      Get Tunein <i className="flaticon-play-button" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*footer wrapper end*/}
        {/* language modal section */}
      </div>
      <div
        className="modal fade lang_m24_banner index3_lang_wrapper"
        id="myModal"
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
                  <h1>Language Selection</h1>
                  <p>Please select the language(s) of the music you listen to.</p>
                </div>
                <div className="lang_list_checkbox">
                  <ul>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c1" name="cb" />
                        <label htmlFor="c1">
                          हिंदी <span>Hindi</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c2" name="cb" />
                        <label htmlFor="c2">
                          English <span>English</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c3" name="cb" />
                        <label htmlFor="c3">
                          पंजाबी <span>Punjabi</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c4" name="cb" />
                        <label htmlFor="c4">
                          தமிழ் <span>tamil</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c5" name="cb" />
                        <label htmlFor="c5">
                          राजस्थानी <span>Rajasthani</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c6" name="cb" />
                        <label htmlFor="c6">
                          हरयाणवी <span>Haryanvi</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c7" name="cb" />
                        <label htmlFor="c7">
                          ગુજરાતી <span>Gujarati</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c8" name="cb" />
                        <label htmlFor="c8">
                          भोजपुरी <span>Bhojpuri</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c9" name="cb" />
                        <label htmlFor="c9">
                          മലയാളം <span>Malayalam</span>
                        </label>
                      </p>
                    </li>
                    <li>
                      <p className="music_field_box">
                        <input type="checkbox" id="c10" name="cb" />
                        <label htmlFor="c10">
                          मराठी <span>marathi</span>
                        </label>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="lang_apply_btn_wrapper m24_cover">
                  <div className="lang_apply_btn">
                    <a href="#">apply</a>
                  </div>
                  <div className="cancel_wrapper">
                    <a href="#" className="" data-dismiss="modal">
                      cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login register  modal section */}
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
                      placeholder="Enter Email Address*"
                    />
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="icon_form comments_form">
                    <input
                      type="password"
                      className="form-control"
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
                    <a href="#">login now</a>
                  </div>
                  <div className="cancel_wrapper">
                    <a href="#" className="" data-dismiss="modal">
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
                      name="first_name"
                      placeholder="Enter your name"
                    />
                    <i className="fas fa-user" />
                  </div>
                  <div className="icon_form comments_form">
                    <input
                      type="text"
                      className="form-control"
                      name="full_name"
                      placeholder="Enter Email Address*"
                    />
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="icon_form comments_form">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password *"
                    />
                    <i className="fas fa-lock" />
                  </div>
                  <div className="icon_form comments_form">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="confirm password*"
                    />
                    <i className="fas fa-lock" />
                  </div>
                </div>
                <div className="lang_apply_btn_wrapper m24_cover">
                  <div className="lang_apply_btn">
                    <a href="#">register</a>
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
      {/* login register  modal end */}

      {/* playllist wrapper start */}

    </main>
  )
}
