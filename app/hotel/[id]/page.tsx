'use client';

import React from 'react';
import Header from '@/layouts/Header';
import HotelReservation from '../../../src/components/hotels/HotelReservationSummary';

const HotelPage = () => {
  // This would typically come from an API or database
  const hotelData = {
    hotelName: 'Sheraton Miramar',
    description:
      'Rooms with spectacular views of the ocean, spacious rooms and balconies',
    details:
      'Walk outside Sheraton Miramar Hotel and Convention Center and feel the sand between your toes. Our beachfront hotel sits in Viña del Mar, Chile, with 142 rooms with spectacular views of the ocean, spacious rooms and balconies. At our hotel, you will enjoy a wide gastronomic offer and amuse yourself with vibrating nights and a perfect blend of local seafood and Chilean wine among our different restaurants and bars. ',
    goodToKnow:
      'The hotel is located in the center of Viña del Mar, with easy access to the beach and the city center. The hotel is also located near the Sheraton Miramar Hotel and Convention Center, which is a popular destination for business travelers and tourists alike.',
    location: 'Sheraton Miramar - Av. La Marina 15, Viña del Mar, Valparaíso',
    coordinates: [-33.02087619069974, -71.56801391671713] as [number, number],
    rating: 5.0,
    beds: 2,
    baths: 1,
    price: 40.18,
    tax: 10.5,
    checkIn: new Date('2025-07-14'),
    checkOut: new Date('2025-08-02'),
    imageUrl: '/img/hotel/hotel1.jpg',
  };

  return (
    <div className="bg-light-secondary dark:bg-dark-background min-h-screen">
      <Header />
      <div className="w-full bg-light-secondary dark:bg-dark-background px-4 md:px-10 py-6 md:py-8">
        <HotelReservation {...hotelData} />
      </div>
    </div>
  );
};

export default HotelPage;
