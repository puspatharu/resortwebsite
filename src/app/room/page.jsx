
import RoomSection from '@/component/PageComponent/Home/RoomSection'
import React from 'react'
import banner from '../../../public/hero-bg.jpg'
import BannerReuse from '@/component/ui/BannerReuse'
import RoomDetail from '@/component/PageComponent/Room/RoomDetail'
function page() {
  return (
    <div className='flex flex-col gap-18'>
       <BannerReuse title="Room" image={banner} />
    <RoomDetail />
    </div>
  )
}

export default page