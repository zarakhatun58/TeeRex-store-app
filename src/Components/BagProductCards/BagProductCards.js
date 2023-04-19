import { useProducts } from "../../Providers/ProductsProvider";
import { formatCurrency } from "../../utils/misc";
import Dropdown from "../DropDown/DropDown";

const NoProductsFound = () => {
  return (
    <div className="card no-product-card">
      No Products added to Bag
    </div>
  );
};

const BagProductCards = ({
  id,
  name,
  price,
  currency,
  imageURL,
  quantity,
  addedQty,
}) => {
  const { addToBag, products } = useProducts();

  const handleDropDownChange = (event, id) => {
    const { value: rawValue } = event.target;
    const value = +rawValue;
    const [product] = products.filter(product => product.id === id);
    const { addedQty } = product;
    const isAdding = addedQty < value;
    const qty = addedQty < value ? value - addedQty : addedQty - value;
    addToBag({ id, qty: isAdding ? qty : -qty });
  }

  const handleRemove = (id) => {
    const [product] = products.filter(product => product.id === id);
    const { addedQty } = product;
    addToBag({ id, qty: -addedQty });
  }

  return (
    <div className="col-4">
      <div className="card">
        <div className="product-bag-card fB w50 j-sb a-c">
          <div>
            <img src={imageURL} alt={name}  style={{width:"340px"}}/>
          </div>
          <div>
            <h5>{name}</h5>
            <span>{formatCurrency(price, currency)}</span>
          </div>
          <div className="qty-drpdown">
            <Dropdown
              onChange={(event) => handleDropDownChange(event, id)}
              value={addedQty}
            >
              {Array(quantity)
                .fill(null)
                .map((e, i) => i + 1)
                .map((q) => (
                  <option key={q} selected={addedQty === q}>{q}</option>
                ))}
            </Dropdown>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleRemove(id)}
              style={{backgroundColor:"red", border:"none", padding:"5px", color:"white", borderRadius:"5px"}}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

BagProductCards.NoProductsFound = NoProductsFound;

export default BagProductCards;