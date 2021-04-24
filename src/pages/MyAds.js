import React , { useState , useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Lightbox } from "react-modal-image";
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css';
import APIS, { API_IMAGE } from '../api/axios'
const MyAds = () => {
    let params = useParams()
   const [ads , setAds] = useState([])
   const [error , setError] = useState('')
   const [loading , setLoading] = useState(false)
   useEffect(() => {
      const myAdsAPI = () => {
         APIS.myAdsFetch(params.page)
      }
      myAdsAPI()
   }, [params.page])

   const nFormatter = (num) => {
      if(num > 999 && num < 1000000){
         return (num/1000)+ 'K'; // convert to K for number from > 1000 < 1 million 
     }else if(num >= 1000000){
         return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
     }else if(num < 900){
         return num; // if value < 1000, nothing to do
     }
    }
   const [open , setOpen] = useState(false)
   const [isOpen, setIsOpen] = useState(false)
   const [previewImage , setPreviewImage] = useState('')
   const [previewVideo , setPreviewVideo] = useState('YozAF3-mIRg')
   const closeLightbox = () => {
      setPreviewImage('')
      setOpen(false)
    };
    const closeModalVideo = () => {
      setPreviewVideo('')
      setIsOpen(false)
    };
    return (
        <section className="gen-section-padding-2">
          {
             open ?
             <Lightbox
      medium={previewImage}
      large={previewImage}
      showRotate={true}
      onClose={(e) => closeLightbox()}
    />
    :
    <></>
          } 
            <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={previewVideo} onClose={() => closeModalVideo(false)} />
            </React.Fragment>
        <div className="container">
           <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                  <br />
                 <h4 className="gen-heading-title">My Ads</h4>
              </div>
           </div>
           <div className="row mt-3">
              <div className="col-12">
                 <div className="gen-style-2">
                    {/* <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4"
                       data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false"
                       data-loop="false" data-margin="30"> */}
                       {loading ?
                             <div className="row">
                                {
                                   !error ?
                                   ads ?
                                   ads.map((value , key) => (
                                    <div className="col col-4" key={key}>
                                    <div
                                       className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                                       <div className="gen-carousel-movies-style-2 movie-grid style-2">
                                          <div className="gen-movie-contain">
                                             <div className="gen-movie-img">
                                                <img src={`${API_IMAGE}/${value.image}`} alt="owl-carousel-video" style={{ maxHeight : 250 , width : '100%' }} />
                                                <div className="gen-movie-add">
                                                   <div className="wpulike wpulike-heart">
                                                      <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                            type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                                   </div>
                                                   <ul className="menu bottomRight">
                                                      <li className="share top">
                                                         <i className="fa fa-share-alt"></i>
                                                         <ul className="submenu">
                                                            <li><Link to="#" className="facebook"><i className="fab fa-facebook-f"></i></Link>
                                                            </li>
                                                            <li><Link to="#" className="facebook"><i className="fab fa-instagram"></i></Link>
                                                            </li>
                                                            <li><Link to="#" className="facebook"><i className="fab fa-twitter"></i></Link></li>
                                                         </ul>
                                                      </li>
                                                   </ul>
                                                
                                                </div>
                                                <div className="gen-movie-action">
                                                   <Link to="#" className="gen-button" onClick={(e) => {
                                                      e.preventDefault()
                                                      value.youtube ? setPreviewVideo(value.youtube) : setPreviewImage(`${API_IMAGE}/${value.image}`)
                                                      value.youtube ? setIsOpen(true) : setOpen(true)
                                                   }}>
                                                      <i className="fa fa-play"></i>
                                                   </Link>
                                                </div>
                                             </div>
                                             <div className="gen-info-contain">
                                                <div className="gen-movie-info">
                                                   <h3><Link to="single-movie.html">{value.name}</Link>
                                                   </h3>
                                                </div>
                                                <div className="gen-movie-meta-holder">
                                                   <ul>
                                                      <li>2hr 00mins</li>
                                                      <li>
                                                         <Link to="action.html"><span>{nFormatter(value.likes)} Likes</span></Link>
                                                      </li>
                                                   </ul>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                   ))
                                  
                                   :
                                   <></>
                                   :
                                   <></>
                                }
                             </div>
                       
                       :
                       <></>}
                 {/* </div> */}
              </div>
           </div>
        </div>
        </div>
     </section>
    )
}

export default MyAds
