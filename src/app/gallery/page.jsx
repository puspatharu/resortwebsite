import React from 'react'
import BannerReuse from '@/component/ui/BannerReuse'
import banner from '../../../public/hero-bg.jpg'
import GallerySection from '@/component/PageComponent/Gallery/GallerySection'
function page() {
  return (
    <div>
      <BannerReuse title="Gallery" image={banner} />
      <GallerySection />
    </div>
  )
}

export default page