import React from "react";
import styles from "./sidebar.module.sass";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCog,
  faHeart,
  faNewspaper,
  faSignOutAlt,
  faTachometerAlt,
  faUser,
  faListAlt,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // let navigate = useNavigate();

  const logoutHandler = async () => {
    // const res_data = await  axios.get('https://api.staging.jobssil.xyz/api/keywords')
    // 		if(res_data.data.success === true){
    // 			Swal.fire({
    // 				title: 'Success!',
    // 				text: 'logged out Successfully',
    // 				icon: 'success',
    // 				confirmButtonText: 'Close'
    // 			  })
    // 			setTimeout(()=>{
    // 				navigate("/")
    // 			},500)
    // 		}else{
    // 			Swal.fire({
    // 				title: 'Error!',
    // 				text: 'Failed to logged out',
    // 				icon: 'error',
    // 				confirmButtonText: 'Close'
    // 			  })
    // 		}
  };

  return (
    <>
      <div className={styles.navcontainer}>
        <div className={styles.logo}>
          {/* <h1>JOB <span>VAULT</span></h1> */}
          <img src="logo2.png" alt="logopic" />
        </div>
        <div className={styles.wrapper}>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faTachometerAlt}
                style={{ width: "18px", cursor: "pointer", marginRight: "5px" }}
              />
              <Link to="/">
                <span>Dashboard</span>
              </Link>
            </li>
            {/* <li>
              <FontAwesomeIcon
                icon={faListAlt}
                style={{ width: "18px", cursor: "pointer", marginRight: "5px" }}
              />
              <Link to="/keywords">
                <span>Keywords</span>
              </Link>
            </li> */}
            <li>
              <FontAwesomeIcon
                icon={faListAlt}
                style={{ width: "18px", cursor: "pointer", marginRight: "5px" }}
              />
              <Link to="/Addfee">
                <span>Add Fee</span>
              </Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faNewspaper}
                style={{ width: "18px", cursor: "pointer", marginRight: "5px" }}
              />
              <Link to="/FeeDetail">
                <span>Fee Detail</span>
              </Link>
            </li>
            {/* <li>
              <FontAwesomeIcon
                icon={faCog}
                style={{ width: "18px", cursor: "pointer", marginRight: "5px" }}
              />
              <Link to="/keywords">
                <span>Settings</span>
              </Link>
            </li> */}
            <li>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ width: "18px", cursor: "pointer", marginRight: "5px" }}
                onClick={logoutHandler}
              />
              <Link to="/login">
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
