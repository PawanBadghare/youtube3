import React from 'react'
import'./Navbar.css';
import { WhiteLogo } from '../../Assets/ImageIndex';
const Navbar = () => {
  return (
    <div>
        <header>
             <div className="headerDiv">
                <div>
                    <div className="humburger">
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <img src={WhiteLogo} alt="youtube logo" title='youtube' width={50}/>
                </div>
                <div className="searchContainer">
                  <div className="searchBox">
                    <input type="text" />
                    <span className='material-symbols-rounded'>
                      close
                    </span>
                  </div>
                  <div className="searchBtn">
                    <span className='material-symbols-rounded'>
                      search
                    </span>
                  </div>
                  <div className="searchMic">
                    <span className='material-symbols-rounded'>
                      Mic
                    </span>
                  </div>
                </div>
             </div>
        </header>
    </div>
  )
}

export default Navbar