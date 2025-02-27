import NavigationBar from '../components/NavigationBar';
import Hero from '../components/Hero';
import TwoMillionItemsBanner from '../components/banners/TwoMillionItemsBanner';
import CategoriesList from '../components/CategoriesList';

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <TwoMillionItemsBanner />
      <CategoriesList />
    </>
  );
};

export default Home;
