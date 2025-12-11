import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CarousalUi() {
  return (
    <div className="wrap  mx-auto rounded-xl">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            {" "}
            <div className="img bg-gray-100 h-90 w-full rounded-xl"></div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            {" "}
            <div className="img bg-gray-100 h-90 w-full rounded-xl"></div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            {" "}
            <div className="img bg-gray-100 h-90 w-full rounded-xl"></div>
          </CarouselItem>
          <CarouselItem>
            <div className="img bg-gray-100 h-90 w-full rounded-xl"></div>
          </CarouselItem>
          <CarouselItem>
            <div className="img bg-gray-100 h-90 w-full rounded-xl"></div>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}

export default CarousalUi;
