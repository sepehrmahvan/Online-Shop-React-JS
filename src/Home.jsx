import Category from "./components/Category";
import Header from "./components/Header";
import MostPurchased from "./components/MostPurchased";
import SlideShow from "./components/SlideShow";
import Newest from "./components/NewestProducts";
import ProductsCategory from "./components/ProductsCategory";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Questions from "./components/Questions";


function Home() {
  return (
    <>
      <Header />
      <SlideShow/>
      <Category/>
      <MostPurchased/>
      <Newest/>
      <ProductsCategory/>
      <Questions/>
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default Home;
