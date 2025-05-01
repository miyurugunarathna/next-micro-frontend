import { Button } from '@internal/ui/components/button';

const categories = [
  {
    id: 'img-1',
    image: 'images/nike-just-do-it-3.jpg',
    actionLabel: 'Shop Running',
  },
  {
    id: 'img-2',
    image: 'images/nike-just-do-it-4.jpg',
    actionLabel: 'Shop Basketball',
  },
  {
    id: 'img-3',
    image: 'images/nike-just-do-it-5.jpg',
    actionLabel: 'Shop Golf',
  },
];

export default function Categories() {
  return (
    <div className="mx-auto">
      <div className="container mx-auto py-14">
        <div className="grid grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="col-span-2 w-full aspect-[4/5] overflow-hidden relative"
            >
              <img
                src={category.image}
                alt="category banner"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 p-8 flex items-end">
                <Button variant="secondary">{category.actionLabel}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
