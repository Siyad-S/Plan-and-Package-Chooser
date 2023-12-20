import React from 'react'
import "./Header.css"
import icon from "../../../assets/machineTestIconP.png"

const Header = () => {
  return (
    <div className='header'>
        <div className='page_icon'>
            <img src={icon} alt="" />
        </div>
        <div className='company'>
            <div className='company_name'>
                <div className='company_icon'>
                    <img src="https://t4.ftcdn.net/jpg/04/14/13/63/360_F_414136392_1HxAobZWtcgc5yuhUL05JNUwIQc9Ab41.jpg" alt="" />
                </div>
                <h6>XYZ Enterprises Pvt. Ltd.</h6>
            </div>
            <div className='company_selector'>
                <button><i className="material-symbols-outlined">expand_more</i></button>
            </div>
        </div>
    </div>
  )
}

export default Header