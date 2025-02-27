import NavigationBar from '../components/NavigationBar';
import Hero from '../components/Hero';
import TwoMillionItemsBanner from '../components/banners/TwoMillionItemsBanner';
import CategoriesList from '../components/CategoriesList';
import PopularProducts from '../components/PopularProducts';

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <TwoMillionItemsBanner />
      <PopularProducts />
      <CategoriesList />
    </>
  );
};

export default Home;
