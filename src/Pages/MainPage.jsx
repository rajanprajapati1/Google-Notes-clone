import React from 'react'
import Navbar from '../components/navbar'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <div className='main'>
    <Navbar/>
    <div className="img_box">
    <img src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
    </div>
    <SearchBar/>
    <div className="two_btn">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
    </div>
    <div className="language">
        <span>Google offered in:<a href=''> हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ</a></span>
    </div>
    <Footer/>
    </div>
  )
}

export default MainPage
