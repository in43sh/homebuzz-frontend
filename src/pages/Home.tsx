import NavigationBar from '../components/NavigationBar';
import Hero from '../components/Hero';
import TwoMillionItemsBanner from '../components/banners/TwoMillionItemsBanner';
import PopularProducts from '../components/PopularProducts';
import PromoBanners from '../components/banners/PromoBanners';
import Tutorials from '../components/Tutorials';
import DeliveryBanner from '../components/banners/DeliveryBanner';
import CategoriesList from '../components/CategoriesList';

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <TwoMillionItemsBanner />
      <PopularProducts />
      <PromoBanners />
      <Tutorials />
      <DeliveryBanner />
      <CategoriesList />
    </>
  );
};

export default Home;
