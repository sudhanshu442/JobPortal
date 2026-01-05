import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import { Button } from './ui/button';

const category = ["Frontend Developer", "Backend Developer", "Graphic Designer", "Data Science", "FullStack Developer", "Data Analyst", "Associate Software Engineer", "Technical Support Engineer"];

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent className="-ml-2">
          {category.map((cat, index) => (
            <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
              <Button variant="outline" className="rounded-full
                  w-full
                  border-gray-300
                  text-gray-700
                  hover:bg-purple-600
                  hover:text-white
                  hover:border-blue-600
                  transition">
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
