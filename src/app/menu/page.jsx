import BannerReuse from '@/component/ui/BannerReuse'
import React from 'react'
import banner from '../../../public/hero-bg.jpg'
import MenuDetail from '@/component/PageComponent/Menu/MenuDetail'
import DessertDetail from '@/component/PageComponent/Menu/DessertDetail'
function page() {
  return (
    <div className='flex flex-col gap-20'>
      <BannerReuse title="Menu" image={banner} />
      
     
      <MenuDetail />
      <DessertDetail />
     
    </div>
  )
}

export default page