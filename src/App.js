import React from "react";
import ReactDOM from "react-dom/client";
import SnackbarProvider from 'react-simple-snackbar';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Bag from "./Pages/Bag/Bag";
import ResponsiveProvider from "./Providers/ResponsiveProvier";
import ProductsProvider from "./Providers/ProductsProvider";
import Header from "./Components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  return (
    <ResponsiveProvider>
    <SnackbarProvider>
      <ProductsProvider>
        <Router basename="/">
          <Header/>
          <div className="container">
            <Routes>
              <Route exact="true" path="/" element={<Home />} />
              <Route exact="true" path="/bag" element={<Bag />} />
            </Routes>
          </div>
        </Router>
      </ProductsProvider>
    </SnackbarProvider>
  </ResponsiveProvider>
  );
}

export default App;
