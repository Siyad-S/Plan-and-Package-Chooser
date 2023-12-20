import React from 'react'
import "./Sidebar.css"
import profile from "../../../assets/person_1.jpg"

const Sidebar = () => {
  return (
    <div className='side_bar'>
        <div className='profile'>
            <div className='profile_img'>
                <img src={profile} alt="" />
            </div>
            <div className='prifile_name'><h5>Ram Mohan</h5><i className="material-symbols-outlined">chevron_right</i></div>
            <p>rammohan2@gmail.com</p>
        </div>
        <div className='dashboard'>
            <div>
                <ul>
                    <li><i className="material-symbols-outlined">dashboard</i><p>Dashboard</p></li>
                    <li><i className="material-symbols-outlined">potted_plant</i><p>Perks</p></li>
                    <li><i className="material-symbols-outlined">toys_and_games</i><p>Addons</p></li>
                    <li><i className="material-symbols-outlined">contact_support</i><p>FAQ</p></li>
                    <li><i className="material-symbols-outlined">support_agent</i><p>Support</p></li>
                </ul>
            </div>
            <div className='logout_btn'>
                <button>
                    <p>Logout</p>
                    <i className="material-symbols-outlined">power_settings_new</i>
                </button>                
            </div>
        </div>

    </div>
  )
}

export default Sidebar