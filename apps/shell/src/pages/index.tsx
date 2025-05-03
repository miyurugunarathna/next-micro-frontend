import Banners from '@/modules/root/banners';
import Categories from '@/modules/root/categories';
import Header from 'core/modules/header';
import Footer from 'core/modules/footer';

function Index() {
  return (
    <>
      <Header />
      <Banners />
      <Categories />
      <Footer />
    </>
  );
}

export default Index;

export async function getServerSideProps() {
  return { props: {} };
}
