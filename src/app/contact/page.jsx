import React from 'react'
import banner from '../../../public/hero-bg.jpg'
import BannerReuse from '@/component/ui/BannerReuse'
import ContactSection from '@/component/PageComponent/Contact/ContactSection'
function page() {
  return (
    <div className='flex flex-col gap-18'>
<BannerReuse title="Contact" image={banner} />
<ContactSection />
 <div style={{ width: '100%', height: '450px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4347.407688203672!2d83.46669502045178!3d27.710900360955353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399686f71446a4b1%3A0x712e7c86b3c8d75!2sButwal%20Multiple%20Campus!5e0!3m2!1sen!2snp!4v1753435157580!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Butwal Multiple Campus Location"
      ></iframe>
    </div>
    </div>
  )
}

export default page