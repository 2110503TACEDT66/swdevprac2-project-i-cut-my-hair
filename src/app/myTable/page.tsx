import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import getReservations from '@/libs/getReservations';
import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';
import dayjs from 'dayjs';


export default async function Home() {
  interface RestaurantItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    region: string,
    tel: string,
    opentime: string,
    closetime: string,
    imageUrl: string,
    map: string,
    __v: number,
    id: string
  }

  interface reserveItem {
    user: string;
    id: string;
    restaurant: RestaurantItem
    resvDate: string;
    createdAt: string;
  }

  interface reserveJson {
    success: boolean,
    count: number,
    data: reserveItem[]
  }

  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null
  const reserved = await getReservations(session.user.token);
  // const reservedItem = reserved.data;

  return (
    <main className='w-[70%] text-center'>
      <Suspense fallback={<div>Loading... <LinearProgress /></div>}>

        <p className='text-4xl mb-16 ml-7 text-left font-bold'>Your Reservations</p>
        <div className='flex flex-auto justify-between'>
          {
            reserved.data.map((item: reserveItem) => (
              <div key={item.id} className='w-[298px] h-[248px] border border-stone-800 p-2'>
                <div>
                  <p className='text-4xl text-left mb-4'>{item.restaurant.name}</p>
                  <p className='text-base text-left mb-4'>{dayjs(item.createdAt).format('YYYY-MM-DD')}</p>
                </div>
                <p className='text-base text-left mb-4'>Reservation Date:
                </p>
                <div className='flex flex-row justify-between'>
                  <div>
                    <p className='text-base inline-block border border-stone-800 p-2'>
                      {dayjs(item.resvDate).format('YYYY-MM-DD')}
                    </p>
                  </div>
                  <div>
                    <p className='text-base inline-block border border-stone-800 p-2'>
                      {dayjs(item.resvDate).format('HH:mm')}
                    </p>
                  </div>
                </div>

                <div className='flex flex-row mt-2 justify-between'>
                  <button className='w-[141px] h-[37px] border border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
                        hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 hover:bg-red-800 text-stone-800 hover:text-stone-100 transform 
                        hover:-translate-x-1 hover:-translate-y-1'>Delete</button>
                  <button className='w-[141px] h-[37px] border border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
                        hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 hover:bg-stone-800 text-stone-800 hover:text-stone-100 transform 
                        hover:-translate-x-1 hover:-translate-y-1'>Update</button>
                </div>
              </div>
            ))
          }
        </div>
      </Suspense>
    </main>
  );
}
