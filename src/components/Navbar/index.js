import React, { useContext, useEffect, useState } from 'react'
import styles from './navbar.module.sass'
import axios from "axios";
import Swal from 'sweetalert2'
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    
	const [title, setTitle] = useState("ADMIN")
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
		// 				 navigate("/")
		// 			},500) 
		// 		}
		// 		else{
		// 			Swal.fire({
		// 				title: 'Error!',
		// 				text: 'Failed to logged out',
		// 				icon: 'error',
		// 				confirmButtonText: 'Close'
		// 			  })
		// 		}
	}

  return (
    <>
        <div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Hello, <span>{title}</span>
					</h2>
					<p>welcome to the board.</p>
				</div>
				<div className={styles.profile}>
					<FontAwesomeIcon
						onClick={logoutHandler}
						icon={faSignOutAlt}
					/>
				</div>
			</div>
		</div>
    </>
  )
}

export default Navbar