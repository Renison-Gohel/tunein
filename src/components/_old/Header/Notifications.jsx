const Notifications = () => {
  return (
    <div className="nice-select budge_noti_wrapper" tabIndex={0}>
      {" "}
      <span className="current budge_noti">
        <i className="flaticon-bell" />
      </span>
      <ul className="list pullDown">
        <li>
          <a href="#">3 New notifications</a>
        </li>
        <li>
          <div className="crm_mess_main_box_wrapper">
            <div className="crm_mess_img_wrapper">
              <img src="images/nt1.jpg" alt="img" />
            </div>
            <div className="crm_mess_img_cont_wrapper">
              <h4>
                Walking Promises <span>01:30PM</span>
              </h4>
              <p>Avaaa Cornish</p>
            </div>
          </div>
        </li>
        <li>
          <div className="crm_mess_main_box_wrapper">
            <div className="crm_mess_img_wrapper">
              <img src="images/nt2.jpg" alt="img" />
            </div>
            <div className="crm_mess_img_cont_wrapper">
              <h4>
                Until I Met You <span>01:30PM</span>
              </h4>
              <p>diu pokal</p>
            </div>
          </div>
        </li>
        <li>
          <div className="crm_mess_main_box_wrapper">
            <div className="crm_mess_img_wrapper">
              <img src="images/nt3.jpg" alt="img" />
            </div>
            <div className="crm_mess_img_cont_wrapper">
              <h4>
                merry with you<span>01:30PM</span>
              </h4>
              <p>love song</p>
            </div>
          </div>
        </li>
        <li>
          <div className="crm_mess_all_main_box_wrapper">
            <p>
              <a href="#">See All</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Notifications