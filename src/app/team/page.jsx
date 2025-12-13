import BannerReuse from '@/component/ui/BannerReuse'
import React from 'react'
import banner from '../../../public/hero-bg.jpg'
function page() {
  return (
    <div>
      <BannerReuse title="team" image={banner} />
    </div>
  )
}

export default page