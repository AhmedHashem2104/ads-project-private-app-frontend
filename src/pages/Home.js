import React , { useContext } from 'react'
import CarouselAds from '../components/CarouselAds'
import Slider from '../components/Slider'
import { ContextProvider } from '../context/Context'

const Home = () => {

  const { authenticated } = useContext(ContextProvider)

  return (
    authenticated ?
    <div>
      <Slider />
      <CarouselAds title="Latest Ads" requestType="latestAds" number={10} />
      <CarouselAds title="Most Liked" requestType="mostLiked" number={10} />
      {/* <CarouselAds title="Best Images Ads" />
      <CarouselAds title="Best Videos Ads" />
      <CarouselAds title="Best Youtube Ads" /> */}
    </div>
    :
    window.location.href = "/login"
  )
}

export default Home
