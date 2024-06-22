const AdsLayout1 = ({src="images/add1.png"}) => {
    return (
        <div className="add_banner_wrapper index3_top_songs_wrapper m24_cover">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="add_banner_img_wrapper m24_cover">
                            <a href="#">
                                <img
                                    src={src}
                                    className="img-responsive"
                                    alt="img"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdsLayout1