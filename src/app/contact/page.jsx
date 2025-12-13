import React from 'react'
import banner from '../../../public/hero-bg.jpg'
import BannerReuse from '@/component/ui/BannerReuse'
import ContactSection from '@/component/PageComponent/Contact/ContactSection'
function page() {
  return (
    <div>
<BannerReuse title="Contact" image={banner} />
<ContactSection />
    </div>
  )
}

export default page