import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import { Link } from "react-router-dom";
import "./productspage.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Footer from "../components/Footer";
import { useContext } from "react";
import CartContext from "../contexts/cartContext";

export default function ProductsPage() {
  // products cards

  const [productsCards, setProductsCards] = useState([]);

  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    fetch(
      "http://zinopetstore.com/api/products/productsListAPI.php?page=1&count=10"
    )
      .then((res) => res.json())
      .then((res) => setProductsCards(res.productsInfo));
  }, []);

  const cards = productsCards.map((card) => (
    <div key={card.id} className="card">
      <Link className="whole-card-link" to={"/products/" + card.id}></Link>
      <img src={card.imageUrl} alt="image" />
      <h3>{card.name}</h3>
      <h4>{card.price} تومان</h4>
      <button onClick={() => addToCart(card.id, card.imageUrl, card.name, card.price)} className="add-to-cart">افزودن به سبد خرید</button>
    </div>
  ));

  // pet kind
  const [petKind, setPetKind] = useState("");

  const selectPetKind = (event) => {
    setPetKind(event.target.value);
  };

  // pet age

  const [age, setAge] = useState(40);

  // product type

  const [productType, setProductType] = useState("");

  // price range

  const [price, setPrice] = useState([0, 5000000]);

  return (
    <>
      <Header />
      <SlideShow />
      <div className="products">
        {/* filters */}
        <div className="products-filters">
          {/* pet kind */}
          <div className="pet-kind">
            <h3>نوع حیوان</h3>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">نوع پت</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={petKind}
                  label="Age"
                  onChange={selectPetKind}
                >
                  <MenuItem value={"سگ"}>سگ</MenuItem>
                  <MenuItem value={"گربه"}>گربه</MenuItem>
                  <MenuItem value={"پرنده"}>پرنده</MenuItem>
                  <MenuItem value={"جونده"}>جونده</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="border-bottom"></div>
          {/* pet age */}
          <div className="pet-age">
            <h3>سن پت</h3>
            <Box sx={{ width: 250 }}>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                valueLabelDisplay="auto"
                onChange={(e) => setAge(e.target.value)}
                step={1}
                marks
                min={0}
                max={30}
              />
            </Box>
          </div>
          <div className="border-bottom"></div>
          {/* product type */}
          <div className="product-type">
            <h3>نوع محصول</h3>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel>نوع محصول</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={productType}
                  label="نوع محصول"
                  onChange={(e) => setProductType(e.target.value)}
                >
                  <MenuItem value={"food"}>خوراکی</MenuItem>
                  <MenuItem value={"cage"}>حمل و نقل</MenuItem>
                  <MenuItem value={"sleep"}>استراحت</MenuItem>
                  <MenuItem value={"health"}>سلامت و بهداشت</MenuItem>
                  <MenuItem value={"clothes"}>پوشاک</MenuItem>
                  <MenuItem value={"toys"}>سرگرمی</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="border-bottom"></div>
          {/* price */}
          <div className="price">
            <h3>محدوده قیمت</h3>
            <div className="range-input">
              <div className="max">
                <h6>Max</h6>
                <div>{price[1]}</div>
              </div>
              <div className="min">
                <h6>Min</h6>
                <div>{price[0]}</div>
              </div>
            </div>
            <Box sx={{ width: 250 }}>
              <Slider
                getAriaLabel={() => "price range"}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                valueLabelDisplay="auto"
                min={0}
                max={5000000}
              />
            </Box>
          </div>
          <div className="border-bottom"></div>
        </div>
        {/* cards */}
        <div className="products-cards">
          <div className="cards-container">{cards}</div>
          <div className="pages"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
