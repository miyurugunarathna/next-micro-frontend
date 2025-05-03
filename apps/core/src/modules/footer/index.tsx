import Logo from '@internal/icons/logo';
import { buttonVariants } from '@internal/ui/components/button';
import { cn } from '@internal/ui/util';
import Link from 'next/link';

const links = [
  { label: 'Find a Store', url: '#' },
  { label: 'Help', url: '#' },
  { label: 'Join Us', url: '#' },
  { label: 'Sign In', url: '#' },
];

const categories = [
  {
    title: 'Featured',
    links: [
      { label: 'Air Force 1', url: '#' },
      { label: 'Jordan 1', url: '#' },
      { label: 'Air Max Dn', url: '#' },
      { label: 'Vomero', url: '#' },
    ],
  },
  {
    title: 'Shoes',
    links: [
      { label: 'All Shoes', url: '#' },
      { label: 'Jordan Shoes', url: '#' },
      { label: 'Running Shoes', url: '#' },
      { label: 'Basketball Shoes', url: '#' },
    ],
  },
  {
    title: 'Clothing',
    links: [
      { label: 'All Clothing', url: '#' },
      { label: 'Top & T-Shirts', url: '#' },
      { label: 'Shorts', url: '#' },
      { label: 'Hoodies & Pullovers', url: '#' },
    ],
  },
  {
    title: 'Kids',
    links: [
      { label: 'Infant & Toddler Shoes', url: '#' },
      { label: 'Kids Shoes', url: '#' },
      { label: 'Kids Basketball Shoes', url: '#' },
      { label: 'Kids Running Shoes', url: '#' },
    ],
  },
];

function Footer() {
  return (
    <footer className="mx-auto">
      <div className="container mx-auto py-14">
        <div className="flex flex-col gap-20 w-full">
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="w-16">
              <Logo />
            </div>
            <nav>
              <ul className="flex gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.url}
                      className={cn(buttonVariants({ variant: 'link' }))}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="max-w-3xl mx-auto w-full">
            <div className="grid grid-cols-4 gap-4">
              {categories.map((category) => (
                <div key={category.title} className="flex flex-col gap-6">
                  <h4 className="text-xl">{category.title}</h4>
                  <ul>
                    {category.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.url}
                          className={cn(
                            buttonVariants({ variant: 'link' }),
                            'p-0',
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
