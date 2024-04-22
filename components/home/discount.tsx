import Image from 'next/image'
import React from 'react'
import { CustomButton } from '../common/button'
import { Labels } from '../common/labels'
import { ArrowRight2 } from 'iconsax-react'

const Discount = () => {
  return (
    <section className="gap-6 flex justify-between max-[700px]:flex-col">
        <figure className={`flex-1 flex flex-col justify-between bg-[url("/featured-shorts.png")] bg-cover rounded-[10px] bg-no-repeat h-auto p-10 text-white`}>
            <Labels heading="WORLD GIRLFRIEND&apos;S DAY" className="bg-[#F56630] "/>

            <div className="flex flex-col gap-6">
                <div>
                <h1 className="max-w-[442px] text-36 font-semibold leading-[150%]">Free Delivery on all dresses ordered until November 30</h1>
                <p className="max-w-[395px] text-sm">All the sleekest dress for you to twin with your girlfriends.</p>
                </div>
                <CustomButton text='Shop now' className='bg-btn-sec' rightSection={<ArrowRight2 size={24} />}/>
            </div>
        </figure>

        <div className="flex flex-col gap-6 flex-1">
            <figure className="flex-1">
                <Image src="/featured-sneakers.png" alt={""} width={596} height={250} className="w-full"/>
            </figure>
            <figure className="flex-1">
            <Image src="/featured-heels.png" alt={""} width={596} height={253} className="w-full"/>
            </figure>
        </div>
      </section>
  )
}