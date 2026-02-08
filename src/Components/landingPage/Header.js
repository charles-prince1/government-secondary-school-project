import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/header.css'
import SchoolImage from '../../images/Name of school.jpg'




function Header({ change }) {

  const [indicatorPercentage, setIndicatorPercentage] = useState(0)
  const [navigate, setNavigate] = useState('')
  function handleScrollPercentage() {

    const HowMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const Height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setIndicatorPercentage((HowMuchScrolled / Height) * 100)

  }
  console.log(indicatorPercentage)
  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage)

    return () => { window.removeEventListener("scroll", handleScrollPercentage) }
  }, [])
  return (

    <header>
      <div className='fixed'>
        <div className='container-for-informatio-and-contact'>
          <div className='contact_Information'>
            <div className='info-container'>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="topnav-icons" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"></path></svg>
              <span className='collegeinfo'>No 1006 Okigwe road owerri municipal</span></div>
            <div className='info-container'>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="topnav-icons" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
              <span className='collegeinfo'>GovernmentSecondarySchool@gamil.com</span>
            </div>
            <div className='info-container'>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="topnav-icons" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"></path></svg>
              <span className='collegeinfo'>07078774159</span>
            </div>
          </div>
        </div>
        <div className='indicator_progress_bar'>
          <div className='indicator_progress' style={{ width: `${indicatorPercentage}%` }}></div>
        </div>
      </div>

      <nav className='Second_header_container'>

        <div className='School_image_container'>
          <img src={SchoolImage} alt='School-image and name' />
        </div>
        <div className='links_containers'>
          <div className='link_container'>
            <a href='/' target='_self' className='angle-tag' onClick={(e) => { setNavigate(navigate === 'About' ? null : "About"); e.preventDefault() }}>To know more</a>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setNavigate(navigate === 'About' ? null : "About") ? (e) => e.preventDefault() : null} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={navigate === "About" ? "rotate" : "bb"}><path d="m6 9 6 6 6-6"></path></svg>
            {navigate === 'About' && <ul id='About' className={navigate ? "dispaly_flex" : "display_none"}>
              <li><a href='/history' target='_self'>About Us</a></li>
              <li><a href='/Anthem'>College Anthem</a></li>
            </ul>}
          </div>
          <div className='link_container'>
            <a href='/' target='_self' className='angle-tag' onClick={(e) => { setNavigate(navigate === 'administration' ? null : "administration"); e.preventDefault() }}>Administration</a>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setNavigate(navigate === 'administration' ? null : "administration")} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={navigate === "administration" ? "rotate" : "bb"}><path d="m6 9 6 6 6-6"></path></svg>
            {navigate === 'administration' && <ul id='administration' className={navigate === 'administration' ? "dispaly_flex" : "display_none"}>
              <li><a href='/'>Principal office</a></li>
              <li><a href='/'>Teachers Office</a></li>
              <li><a href='/'>Staff's</a></li>

            </ul>}
          </div>

          <div className='link_container'>
            <a href='/' target='_self' className='angle-tag' onClick={(e) => { setNavigate(navigate === 'Students_portal' ? null : 'Students_portal'); e.preventDefault() }}>Students</a>
            <svg xmlns="http://www.w3" width="24" height="24" onClick={() => setNavigate(navigate === 'Students_portal' ? null : 'Students_portal')} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={navigate === 'Students_portal' ? "rotate" : "bb"}><path d="m6 9 6 6 6-6"></path></svg>
            {navigate === 'Students_portal' && <ul className={navigate === 'Students_portal' && "dispaly_flex"}>

               <li><Link to='/Login'>Students portal</Link></li>
              <li><a href='/'>Check Result</a></li>
              <li><a href='/'>Admission List</a></li>
             

              <li><Link to='/Login'>Students portal</Link></li>
              <li><a href='/'>Check Result</a></li>
              <li><a href='/'>Admission List</a></li>


            </ul>}
          </div>

          <div className='link_container'>
            <a href='/#News_and_Event' target='_self' className='angle-tag'>News & Events</a>
          </div>
          <div className='link_container'>
            <a href='#contact' target='_self' className='angle-tag'>Contact</a>
          </div>
        </div>

      </nav>

    </header>

  )
}

export default Header;
