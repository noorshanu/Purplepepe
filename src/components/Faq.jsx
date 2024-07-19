import React from 'react'
import Accordion from './Accordion'

function Faq() {
  return (
   <section>
    <div className=' container-wrapper'>
        <div className=' bg-[#171c22] border-4 border-purple-700   rounded-3xl p-4'>

            <h1 className=' text-3xl sm:text-7xl font-dream font-bold text-center text-white'>FAQ $PUPE</h1>

            <div className=' flex justify-around items-center flex-col sm:flex-row'>

              <div className=' border-4 rounded-3xl box-s2 border-purple-700 p-4'>

                

              </div>

            </div>

            <Accordion/>

        </div>

    </div>
   </section>
  )
}

export default Faq