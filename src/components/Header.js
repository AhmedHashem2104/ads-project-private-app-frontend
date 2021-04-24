
import React , { useContext } from 'react'
import { ContextProvider } from '../context/Context'
// import API from '../api/axios'
import { Link } from 'react-router-dom'

function Header() {

    const { authenticated , setAuthenticated , username , setUsername } = useContext(ContextProvider)
    
    return (
      <div>
        {
        authenticated ?
        <header id="gen-header" className="gen-header-style-1 gen-has-sticky">
        <div className="gen-bottom-header">
           <div className="container">
              <div className="row">
                 <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                       <div className="navbar-brand" style={{ cursor : 'pointer' }} onClick={(e) => window.location.href = "/"}>
                          <img className="img-fluid logo" src="/images/logo-1.png" alt="streamlab" />
                       </div>
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <div id="gen-menu-contain" className="gen-menu-contain">
                             <ul id="gen-main-menu" className="navbar-nav ml-auto">
                                <li className="item active">
                                   <Link to="/" aria-current="page">Home</Link>
                                </li>
                                <li className="menu-item">
                                   <Link to="#">Movies</Link>
                                   <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                   <ul className="sub-menu">
                                      <li className="menu-item menu-item-has-children">
                                         <Link to="#">Movies List</Link>
                                         <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                         <ul className="sub-menu">
                                            <li className="menu-item">
                                               <Link to="movies-load-more.html">Load More</Link>
                                            </li>
                                            <li className="menu-item">
                                               <Link to="movies-infinite-scroll.html">Infinite scroll</Link>
                                            </li>
                                            <li className="menu-item">
                                               <Link to="movies-pagination.html">Pagination</Link>
                                            </li>
                                         </ul>
                                      </li>
                                      <li className="menu-item menu-item-has-children">
                                         <Link to="#">Movies Style</Link>
                                         <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                         <ul className="sub-menu">
                                            <li className="menu-item">
                                               <Link to="movies-style-1.html">Style 1</Link>
                                            </li>
                                            <li className="menu-item">
                                               <Link to="movies-style-2.html">Style 2</Link>
                                            </li>
                                            <li className="menu-item">
                                               <Link to="movies-style-3.html">Style 3</Link>
                                            </li>
                                         </ul>
                                      </li>
                                      <li className="menu-item">
                                         <Link to="single-movie.html">Single Movie</Link>
                                      </li>
                                   </ul>
                                </li>
                               <li className="menu-item">
                                   <Link to="#">Video</Link>
                                   <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                   <ul className="sub-menu">
                                      <li className="menu-item menu-item-has-children">
                                         <Link to="#">Video</Link>
                                         <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                         <ul className="sub-menu">
                                            <li className="menu-item">
                                               <Link to="video-load-more.html">Load More</Link>
                                            </li>
                                            <li className="menu-item">
                                               <Link to="video-infinite-scroll.html">Infinite scroll</Link>
                                            </li>
                                            <li className="menu-item">
                                               <Link to="video-pagination.html">Pagination</Link>
                                            </li>
                                         </ul>
                                      </li>
                                      <li className="menu-item menu-item-has-children">
                                         <Link to="#">Videos Style</Link>
                                         <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                         <ul className="sub-menu">
                                            <li className="menu-item">
                                               <Link to="videos-style-1.html">Style 1</Link>
                                            </li>
                                            <li className="menu-item">
                                               <Link to="videos-style-2.html">Style 2</Link>
                                            </li>
                                            <li className="menu-item">
                                               <Link to="videos-style-3.html">Style 3</Link>
                                            </li>
                                         </ul>
                                      </li>
                                      <li className="menu-item">
                                         <Link to="single-videos.html">Single videos</Link>
                                      </li>
                                   </ul>
                                </li>
                                <li className="item">
                                   <Link to="/about">Contact Us</Link>
                                </li>
                             </ul>
                          </div>
                       </div>
                       <div className="gen-header-info-box">
                          <div className="gen-menu-search-block">
                             <div style={{ cursor : 'pointer' }} id="gen-seacrh-btn"><i className="fa fa-search"></i></div>
                             <div className="gen-search-form">
                                <form role="search" method="get" className="search-form" action="#">
                                   <label>
                                      <span className="screen-reader-text"></span>
                                      <input type="search" className="search-field" placeholder="Search …" defaultValue="" name="s" />
                                   </label>
                                   <button type="submit" className="search-submit"><span
                                         className="screen-reader-text"></span></button>
                                </form>
                             </div>
                          </div>
                          <div className="gen-account-holder">
                             <div style={{ cursor : 'pointer' , backgroundColor : 'red' , height : 50 , display:'flex' , justifyContent : 'center' , alignItems : 'center' , width : 50 , borderRadius : 50 }} id="gen-user-btn"><i className="fa fa-user"></i></div>
                             <div className="gen-account-menu">
                                <ul className="gen-account-menu">
                                   {/* <li>
                                      <Link to="log-in.html"><i className="fas fa-sign-in-alt"></i>
                                         login </Link>
                                   </li>
                                   <li>
                                      <Link to="register.html"><i className="fa fa-user"></i>
                                         Register </Link>
                                   </li> */}
                                   <li>
                                      <Link to="/">
                                         <i className="fa fa-user"></i>
                                         {username} </Link>
                                   </li>
                                   <li>
                                      <Link to="/dashboard"><i className="fa fa-list"></i>
                                         Dashboard </Link>
                                   </li>
                                   <li>
                                      <Link to="/myads/1"><i className="fa fa-ad"></i>
                                         My Ads </Link>
                                   </li>
                                   <li>
                                      <Link to="/upload-ad"> <i className="fa fa-upload"></i>
                                         Upload Ad </Link>
                                   </li>
                                   <li>
                                      <Link to="#" onClick={async () => {
                                          await localStorage.clear()
                                          setAuthenticated(false)
                                          setUsername('')
                                      }}> <i className="fa fa-sign-out-alt"></i>
                                         Logout </Link>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          {/* <div className="gen-btn-container">
                             <Link to="register.html" className="gen-button">
                                <div className="gen-button-block">
                                   <span className="gen-button-line-left"></span>
                                   <span className="gen-button-text">Subscribe</span>
                                </div>
                             </Link>
                          </div> */}
                       </div>
                       <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                          <i className="fas fa-bars"></i>
                       </button>
                    </nav>
                 </div>
              </div>
           </div>
        </div>
     </header>
      :
      <></>
        }
      </div>
    )
}

export default Header