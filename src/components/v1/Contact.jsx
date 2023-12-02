import React from 'react'
import contact from '../../../assets/contact.png'
import { Form } from 'react-router-dom'

const Contact=()=> {
  return (
    <div className='mx-0 sm:mx-14 lg:mx-28'>
      <div className='flex'>
        <div className='hidden sm:block'> 
          <img src={contact} className='h-full object-contain' alt="" />
        </div>
        <div className='mx-4 sm:mx-0'>
         <p className=' Text  text-cyan-900 text-4xl font-extrabold' >Simply dummy text of the printing </p>
         <p className='Small_letters text-xl mt-4 text-cyan-900 '>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          <div className='max-w-[300px] min-w-fit ml-8 my-8'> 
            <div className='flex pl-2 pr-4 items-center border rounded-md py-2 min-w-fit w-full'>
              <span className='bg-[#EFF6F1] rounded-md p-2 leading-[0] mr-2'><i class="icon-[wpf--message-outline] text-teal-800 text-5xl"></i></span>
              <div className=''>
                <p className='font-bold text-2xl text-teal-800'>Message</p>
                <p className='text-lg'>support@saasflow.com</p>
              </div>
            </div>

            <div className='flex pl-2 pr-4 items-center border rounded-md py-2 min-w-fit w-full my-4'>
              <span className='bg-[#EFF6F1] rounded-md p-2 leading-[0] mr-2'><i class="icon-[ion--call-outline] text-teal-800 text-5xl"></i></span>
              <div className=''>
                <p className='font-bold text-2xl text-teal-800 '>Contact Us</p>
                <p className='text-lg'>+01 123 456 789</p>
              </div>
            </div>
          </div>
          <div className='flex text-[#274C5B] text-2xl items-center ml-4'>
            <span className='mr-5 bg-[#EFF6F1] rounded-full p-2 leading-[0]'><i class="icon-[mdi--instagram]"></i></span>
            <span className='mx-5 bg-[#EFF6F1] rounded-full p-2 leading-[0]'><i class="icon-[ic--baseline-facebook]"></i></span>
            <span className='mx-5 bg-[#EFF6F1] rounded-full p-2 leading-[0]'><i class="icon-[mdi--linkedin]"></i></span>
            <span className='mx-5 bg-[#EFF6F1] rounded-full p-2 leading-[0]'><i class="icon-[mdi--twitter]"></i></span>
          </div>
        </div>
      </div>

      <div className='flex justify-center bg-gradient-to-r from-green-400 from-2% via-cyan-500 via-24% to-emerald-400 to-85% my-8' >

        <Form action="" className='py-8 flex justify-center flex-col w-full px-6 md:px-20'>

            <div className='flex justify-between mb-5'> 
              <span className='flex w-[48%] flex-col justify-between'>
                <p className='mb-4'>Full Name*</p>
                <input type="text" placeholder='Enter Your Name' className='px-2 rounded-lg py-3'/>
              </span>
              <span className='flex w-[48%] flex-col justify-between'>
                <p className='mb-4'>Your Email*</p>
                <input type="text" placeholder='Enter Your Email' className='px-2 rounded-lg py-3'/>
              </span>
            </div>

            <div className='flex justify-between mb-5'> 
              <span className='flex w-[48%] flex-col justify-between'>
                <p className='mb-4'>Phone No.*</p>
                <input type="text" placeholder='Enter Your Phone' className='px-2 rounded-lg py-3'/>
              </span>
              <span className='flex w-[48%] flex-col justify-between'>
                <p className='mb-4'>Branch*</p>
                <input type="text" placeholder='Enter Your Branch' className='px-2 rounded-lg py-3'/>
              </span>
            </div>

          <div className='flex-col mb-5'>
            <p className='mb-4'>Message*</p>
            <textarea name="Write" id="" cols="108" rows="6" placeholder='Hello there! I would like to talk about ...' className='w-full rounded-lg'></textarea>
          </div>

          <div className=''>
              <button className='px-8 py-4 bg-slate-800 text-slate-50 rounded-xl'>Send Message</button>
          </div>
        </Form>
      </div>
    </div>
  )
}
export default Contact