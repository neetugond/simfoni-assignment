//import Card,CardContent from "@mui/joy";
import Layout from "../../components/layout/Layout";

import CarouselSection from "../../components/carousel/CarouselSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/productCard";
import Allitems from "../../components/allitems/Allitems";
import Newarrivals from "../../components/newarrivals/Newarrivals";

import Categories from "../../components/categories/Categories";
import Suppliers from "../../components/suppliers/Suppliers";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <Layout>
      <Filter />
      <CarouselSection />
      <Categories />
      <ProductCard />
      <Allitems />
      <Newarrivals />
      <Suppliers />
      <Footer />
    </Layout>
  );
}

export default Home;
