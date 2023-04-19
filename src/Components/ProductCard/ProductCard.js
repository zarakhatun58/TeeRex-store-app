import { formatCurrency } from "../../utils/misc";
import AddToBagButton from "../addToBagButton/addToBagButton";

const NoProductsFound = () => {
  return (
    <div className="w100 text-center pl20">
      <div className="card p20">No Products Found</div>
    </div>
  );
};

const ProductCard = ({
  id,
  name,
  imageURL,
  price,
  currency,
  quantity,
  addedQty,
}) => {
  return (
    <div className="psw-col col-12 col-md-4">
      <div className="card mb-4">
        <img src={imageURL} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="fB a-c j-sb">
            <p className="card-text m0">{formatCurrency(price, currency)}</p>
            <AddToBagButton {...{ id, addedQty, quantity }} />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.NoProductsFound = NoProductsFound;

export default ProductCard;