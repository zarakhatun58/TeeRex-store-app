import { NavLink } from "react-router-dom";
import { useProducts } from "../../Providers/ProductsProvider";
 import "./header.css";

const Header = () => {
  const { cartCount } = useProducts();
  return (
    <>
      <div className="store-header" style={{ backgroundColor: "#020819",  }}>
        <div className="container-fluid">
          <div className="fB w100 j-sb">
            <h1 className="logo">
              <NavLink to="/" exact="true" style={{color:"white"}}>TeeRex Store</NavLink>
            </h1>
            <nav className="fB a-c">
              <NavLink
                to="/"
                exact="true"
                style={({ isActive }) => {
                  return isActive ? { textDecoration: "underline" } : undefined
                }
                }
              >
                <span style={{
                  fontSize: "20px",
                  marginRight: "20px",
                  color:"white",

                }}>Products</span> 
              </NavLink>
              <div>
                <NavLink to="/bag" exact="true" className="cartBag">
                  <i
                    className="fa fa-shopping-cart header_icon"
                    aria-hidden="true"
                    style={{ fontSize: "40px" }}
                  ></i>{" "}
                  {cartCount > 0 && <sup>{cartCount}</sup>}
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;