import React from 'react'
import Navbar from './Navbar'
import HomeImage from '../Assets/home-cover.png'
import Logo from '../Assets/Logo.svg'

const home = () => {
  return <div className='home-container'>
    <Navbar/>
    <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to <img className='logo-image' src={Logo} alt="" />
          </h1>
          <h2 className="secondary-heading">
            Apakah Anda ingin meningkatkan percaya diri dalam berbicara di depan umum?
          </h2>
          <p className="primary-text">
            Ness Comm Academy hadir untuk membantu Anda untuk mengembangkan keterampilan public speaking dan menjadi 
            content creator yang menginspirasi. Kemampuan berbicara di depan umum bukan hanya keterampilan, 
            tetapi investasi dalam diri Anda sendiri. Daftar sekarang untuk mendapatkan penawaran khusus dan mulai 
            perjalanan Anda menuju sukses bersama Ness Comm Academy!
          </p>
        </div>
        <div className="home-image-section">
          <img src={HomeImage} alt="" />
        </div>
      </div>
    </div>
}

export default home