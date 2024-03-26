import getRestaurants from '@/libs/getRestaurants';
import RestaurantCatalog from '@/components/RestaurantCatalog';
import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import getReservations from '@/libs/getReservations';
import { reserveJson, reserveItem } from '../../../interface';

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user.token) return null
  const reserved: Promise<reserveJson> = await getReservations(session.user.token)

  return (
    <main className='w-[70%] text-center'>
      <p className='text-4xl mb-16 ml-7 text-left font-bold'>Your Reservations</p>
      {reserved.data.length > 0 ? (
        reserved.data.map((item: reserveItem) => (
          <div key={item.id}>
            <p>User: {item.user}</p>
            <p>Restaurant: {item.restaurant}</p>
            <p>Reservation Date: {item.resvDate}</p>
            <p>Created At: {item.createdAt}</p>
          </div>
        ))
      ) : (
        <p>No reservations found.</p>
      )}
    </main>
  );
}
