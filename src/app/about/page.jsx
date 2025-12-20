import AboutSection from '@/component/PageComponent/Home/AboutSection'
import React from 'react'
import banner from '../../../public/hero-bg.jpg'
import BannerReuse from '@/component/ui/BannerReuse'
import FeatureSection from '@/component/PageComponent/Home/FeatureSection'
import ReviewSection from '@/component/PageComponent/Home/ReviewSection'
function page() {
  return (
    <div className='flex flex-col gap-20'>
<BannerReuse title='about' image={banner} />

<AboutSection />
<FeatureSection />
<ReviewSection />
    </div>
  )
}

export default page