import Business from '@/components/Business'
import ToggleSwitch from '@/components/ToggleSwitch'
import React from 'react'

const BusinessPage = () => {
  return (
    <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center py-10">
          <ToggleSwitch />
          <div>
            <Business />
          </div>
        </div>
    </section>
  )
}

export default BusinessPage