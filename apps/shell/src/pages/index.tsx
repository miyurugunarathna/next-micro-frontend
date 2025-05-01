import Banners from '@/modules/root/banners';
import Categories from '@/modules/root/categories';

export default function Index() {
  return (
    <>
      <p>Header</p>
      <Banners />
      <Categories />
      <p>Footer</p>
    </>
  );
}
