import React from "react";
import Select from "react-select";
import "./rentView.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const cities = [
  { label: "Ariana", value: 1 },
  { label: "Beja", value: 2 },
  { label: "Ben Arous", value: 3 },
  { label: "bizerte", value: 4 },
  { label: "Gabes", value: 5 },
  { label: "Gafsa", value: 6 },
  { label: "Jendouba", value: 7 },
  { label: "Kairouan", value: 8 },
  { label: "Kasserine", value: 29 },
  { label: "Kebili", value: 10 },
  { label: "Kef", value: 11 },
  { label: "Mahdia", value: 12 },
  { label: "Manouba", value: 13 },
  { label: "Mednine", value: 14 },
  { label: "Monastir", value: 15 },
  { label: "Nabeul", value: 16 },
  { label: "Sfax", value: 17 },
  { label: "Sidi Bouzid", value: 18 },
  { label: "Seliana", value: 19 },
  { label: "Sousse", value: 20 },
  { label: "Tataouine", value: 21 },
  { label: "Tozeur", value: 22 },
  { label: "Tunis", value: 23 },
  { label: "Zaghouan", value: 24 },
];

const price = [
  { label: "300-500", value: 1 },
  { label: "500-700", value: 2 },
  { label: "700-1000", value: 3 },
  { label: "1000-1500", value: 4 },
  { label: "1500-2000", value: 5 },
  { label: "2000-3000", value: 6 },
  { label: "3000-5000", value: 7 },
];

const rooms = [
  { label: 0, value: 1 },
  { label: 1, value: 2 },
  { label: 2, value: 3 },
  { label: 3, value: 4 },
  { label: 4, value: 5 },
  { label: 5, value: 6 },
  { label: 6, value: 7 },
  { label: 7, value: 8 },
];

const SelectBox = () => (
  <div className="inner-div">
    <div className="container">
      <p>City</p>
      <Select options={cities} />
    </div>

    <div className="container">
      <p>Number of rooms</p>
      <Select options={rooms} />
    </div>

    <div className="container">
      <p>Price</p>
      <Select options={price} />
    </div>
    <button type="submit²" className="btn-search">
      Search
    </button>
  </div>
);

export default SelectBox;
