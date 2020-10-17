import React, { Component } from "react";
import data from "../../api/products";
import ProductList from "./ProductList";

class index extends Component {
  startIndex = 0;
  endIndex = 0;
  pageSize = 8;
  sentinal = null;
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      products: [],
    };
  }

  getAllProducts = () => {
    let dataArr = [...data[0].data.products];
    this.endIndex += this.pageSize;
    this.setState(
      {
        products: [
          ...this.state.products,
          ...dataArr.slice(this.startIndex, this.endIndex),
        ],
      },
      () => {
        this.startIndex = this.endIndex;
        this.pageSize += this.pageSize;
      }
    );
  };

  componentDidMount() {
    this.getAllProducts();
    const io = new IntersectionObserver(this.inView, {
      rootMargin: "0px",
      threshold: 1.0,
    });
    io.observe(this.sentinal);
  }

  inView = (elements) => {
    elements.forEach((element) => {
      if (element.isIntersecting) {
        this.getAllProducts();
      }
    });
  };

  allProductsHandler = (event) => {
    event.preventDefault();
    let dataArr = data[0].data.products;
    this.setState({
      products: dataArr,
    });
  };

  render() {
    return (
      <>
        <ProductList data={this.state.products}></ProductList>
        <div id="sentinal" ref={(e) => (this.sentinal = e)}></div>
      </>
    );
  }
}

export default index;
