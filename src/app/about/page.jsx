import AboutSection from '@/component/PageComponent/Home/AboutSection'
import React from 'react'
import pizza from '../../../public/hero-bg.jpg'
import BannerReuse from '@/component/ui/BannerReuse'
function page() {
  return (
    <div className='flex flex-col gap-20 '>
<BannerReuse title='about' image={pizza} />
<AboutSection />
    </div>
  )
}

export default page