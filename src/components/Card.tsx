'use client'

import styles from '@/components/card.module.css'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Card({ restaurantName, imgSrc, address, tel, time, rid }:
    { restaurantName: string, imgSrc: string, address: string, tel: string, time: string, rid:string }) {
    if (imgSrc === null) {
        imgSrc = '/image_1.png';
    }
    console.log("here "+imgSrc);
        return (
        <InteractiveCard>
            <div className='flex flex-col'>
                <div className="w-[298px] h-[496px]">
                    <div className="p-2">
                        {
                            <Image src={imgSrc}
                                alt='Hospital Picture'
                                width={284} // Set the width of the image
                                height={181} // Set the height of the image
                                className='bg-cover w-[284px] h-[181px]'
                            />
                        }
                    </div>
                    <div className="p-2 flex flex-col">
                        <p className='text-2xl text-left mb-4'>
                            {restaurantName}
                        </p>
                        <div className="flex-row flex justify-between items-center mb-4">
                            <p className='text-xs text-green-700 font-bold'>
                                OPENED
                            </p>
                            <p className='text-xs'>
                                {time}
                            </p>
                        </div>
                        <p className='text-base text-left mb-4'>
                            Address
                        </p>
                        <p className='text-xs text-left pb-4'>
                            {address}
                        </p>
                    </div>
                    <div className='flex flex-row m-2'>
                        <Link href={`/restaurant/${rid}`}>
                        <button className='w-[141px] h-[37px] border border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
                        hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 hover:bg-stone-800 text-stone-800 hover:text-stone-100 transform 
                        hover:-translate-x-1 hover:-translate-y-1' onClick={(e) => { e.stopPropagation;}}>
                            Details
                        </button>
                        </Link>
                        <Link href={`/reserve?id=${rid}&name=${restaurantName}`}>
                        <button className='w-[141px] h-[37px] border border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
                        hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 hover:bg-stone-800 text-stone-800 hover:text-stone-100 transform 
                        hover:-translate-x-1 hover:-translate-y-1' onClick={(e) => { e.stopPropagation;}}>
                            Reserve 
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </InteractiveCard>
    );
}
