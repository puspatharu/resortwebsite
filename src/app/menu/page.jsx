import BannerReuse from '@/component/ui/BannerReuse'
import React from 'react'
import banner from '../../../public/hero-bg.jpg'
import MenuSection from '@/component/PageComponent/Home/MenuSection'
import AboutSection from '@/component/PageComponent/Home/AboutSection'
function page() {
  return (
    <div className='flex flex-col gap-20'>
      <BannerReuse title="Menu" image={banner} />
      <MenuSection />
      <AboutSection />
    </div>
  )
}

export default page