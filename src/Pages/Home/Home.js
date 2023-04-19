import { useState } from "react";
import Button from "../../Components/Buttons/Button";
import Dropdown from "../../Components/DropDown/DropDown";
import Filters from "../../Components/Filters/Filters";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useProducts } from "../../Providers/ProductsProvider";
import { isObjEmpty } from "../../utils/misc";

const ProductsRenderer = () => {
  const { productsMapped, products, productsLoading } = useProducts();
  
  if (productsLoading) return "loading.....";

  // const products = Object.values(productsMapped);

  if (products?.length === 0) return <ProductCard.NoProductsFound />;

  return (
    <section className="productSectionWrapper w100 row row-cols-3">
      {products?.map((product, index) => {
        return <ProductCard key={index} {...product} />;
      })}
    </section>
  );
};

const Home = () => {
  const { searchFilters, sortFilter, backup } = useProducts();
  const [showModal, setShowModal] = useState(false);

  const showFilters = isObjEmpty(backup);

  const handleSortChange = (event) => {
    sortFilter(event);
  }

  return (
    <>
      <div className="fB a-fs">
        {!showFilters && <Filters showModal={showModal} setShowModal={setShowModal} />}
        <div className="products-container w100 f4 fB d-c a-fe">
          <label>Sort By:</label>
          <Dropdown onChange={handleSortChange} name="sort" >
            <option value=''>Select Sort</option>
            <option value="lowprice">Price low to high</option>
            <option value="highprice">Price high to low</option>
          </Dropdown>
          <div className="fB a-s search-wrapper" style={{ marginBottom:"20px"}}>
            <input
              type="text"
              placeholder="Search for Products..."
              className="searchInput"
              onChange={searchFilters}
              style={{width:"600px",}}
            />
            <Button className="btn-small hide-mobile" type="button">
              <i className="fa fa-search"></i>
            </Button>
            <Button
              className="btn-small hide-desktop"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <i className="fa fa-filter"></i>
            </Button>
          </div>
          <ProductsRenderer />
        </div>
      </div>
    </>
  );
};

export default Home;