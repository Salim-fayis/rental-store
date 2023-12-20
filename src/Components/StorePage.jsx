import React from 'react';
import InputSection from './InputSection/InputSection';
import WorkingHoursSection from './WorkingSection/WorkingHoursSection';
import CarouselSection from './CarouselSection/CarouselSection';

function StorePage() {
  const slides = [
    { title: ' Create your Rental store', content: 'The rental store will host all the products you are putting on rent' },
    { title: ' Create your Rental store', content: 'The rental store will host all the products you are putting on rent' },
    { title: ' Create your Rental store', content: 'The rental store will host all the products you are putting on rent' }
  ];


  return (
    <div className="store-page">
      <InputSection />
      <WorkingHoursSection />
      <CarouselSection slides={slides} />
    </div>
  )
}

export default StorePage