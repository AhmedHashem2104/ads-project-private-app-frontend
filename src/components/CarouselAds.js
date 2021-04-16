import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Lightbox } from "react-modal-image";
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css';
import APIS, { API_IMAGE } from '../api/axios'
const CarouselAds = ({ title , requestType , number }) => {
   const [latestAdsState , setLatestAdsState] = useState([])
   const [error , setError] = useState('')
   const [loading , setLoading] = useState(false)
   useEffect(() => {
      const latestAdsAPI = () => {
         APIS.homePageAds(requestType , number).then((res) => {
            setLatestAdsState(res.data)
            setLoading(true)
         }).catch(err => {
            setError(`No Data Found`)
         })
      }
      latestAdsAPI()
   }, [])

   const nFormatter = (num) => {
      console.log(typeof num)
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
                 <h4 className="gen-heading-title">{title}</h4>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                 <div className="gen-movie-action">
                    <div className="gen-btn-container text-right">
                       <Link to="tv-shows-pagination.html" className="gen-button gen-button-flat">
                          <span className="text">More Ads</span>
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
           <div className="row mt-3">
              <div className="col-12">
                 <div className="gen-style-2">
                    {/* <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4"
                       data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false"
                       data-loop="false" data-margin="30"> */}
                       {loading ?
                             <OwlCarousel className='owl-theme' 
                             items={4} 
                             margin={10} 
                             nav
                             autoplay 
                             animateIn={'bounceInRight'} 
                             animateOut={'bounceOutLeft'}
                             dots={false}
                             navText={['<i class="fas fa-chevron-left" style="font-size: 25px;"></i>' , '<i class="fas fa-chevron-right" style="font-size: 25px;"></i>']}
                             >
                                {
                                   !error ?
                                   latestAdsState ?
                                   latestAdsState.map((value , key) => (
                                    <div className="item" key={key}>
                                    <div
                                       className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                                       <div className="gen-carousel-movies-style-2 movie-grid style-2">
                                          <div className="gen-movie-contain">
                                             <div className="gen-movie-img">
                                                <img src={`${API_IMAGE}/${value.image}`} alt="owl-carousel-video" style={{ maxHeight : 250 }} />
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
                             </OwlCarousel>
                       
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

export default CarouselAds
