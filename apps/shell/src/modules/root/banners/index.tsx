import { Button } from '@internal/ui/components/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@internal/ui/components/carousel';

const banners = [
  {
    id: 'banner-1',
    image: 'images/nike-just-do-it.jpg',
    title: 'Speed is ours',
    tagline: 'Look fast, and feel faster in the Nike Sonic Fly',
    actionLabel: 'Shop Kids',
  },
  {
    id: 'banner-2',
    image: 'images/nike-just-do-it-2.jpg',
    title: 'Nothing can stop you',
    tagline:
      'Stay ready for anything the city throws your way with the Nike City',
    actionLabel: 'Shop',
  },
];

export default function Banners() {
  return (
    <div className="mx-auto">
      <div className="container bg-slate-10 mx-auto aspect-[16/7]">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent className="-ml-1">
            {banners.map((banner) => (
              <CarouselItem
                key={banner.id}
                className="aspect-[16/7] bg-slate-50"
              >
                <img
                  src={banner.image}
                  alt="banner"
                  className="w-full h-full"
                />
                <div className="absolute bottom-0 w-full text-center text-background bg-gradient-to-t from-black py-20 px-6 flex flex-col gap-8 items-center">
                  <div className="flex flex-col items-center gap-2 max-w-2xl">
                    <h1 className="text-6xl font-bold font-bebas">
                      {banner.title}
                    </h1>
                    <h6 className="text-lg opacity-80 font-light">
                      {banner.tagline}
                    </h6>
                  </div>
                  <Button variant="secondary">{banner.actionLabel}</Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-0 right-0 p-4 flex gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
