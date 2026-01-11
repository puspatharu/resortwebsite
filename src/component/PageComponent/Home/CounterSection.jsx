import { useInView ,motion} from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

function CounterSection() {
function CountUp({ end, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let current = 0
    setCount(0)

    const counter = setInterval(() => {
      current += 1
      setCount(current)

      if (current >= end) {
        clearInterval(counter)
      }
    }, 20)

    return () => clearInterval(counter)
  }, [end, start])

  return <span>{count}</span>
}


  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true })

  const stats = [
    { label: 'Happy Guests', value: 345 },
    { label: 'Events Hosted', value: 120 },
    { label: 'Luxury Rooms', value: 25 },
    { label: 'Years Experience', value: +15 },
  ]
  return (
     <div className=" py-18 bg-amber-100 flex items-center justify-center px-6">
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full"
      >
       
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Our Resort in Numbers
          </h2>
          <p className="text-gray-500">
            A glimpse of our hospitality & experience
          </p>
        </div>

      
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl py-8 shadow-md"
            >
              <h3 className="text-4xl font-bold text-amber-600 mb-2">
                +
                <CountUp end={item.value} start={isInView} />
              </h3>
              <p className="text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default CounterSection