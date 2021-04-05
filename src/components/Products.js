import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";

export class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="col-sm-6 col-md-4 product" key={product.id}>
        <li className="span3">
          <div className="thumbnail">
            <a href="/details">
              <img src={product.gambar} />
            </a>
            <div className="caption">
              <h5>{product.nama_produk}</h5>
              <p>Stok: {product.stok}</p>
              <h4 style={{ textAlign: "center" }}>
                <a className="btn" href="/details">
                  {" "}
                  <i className="icon-zoom-in" />
                </a>{" "}
                <a className="btn" href="#"
                                  onClick={(e) => this.props.addToCart(this.props.cartItems, product)}>

                
                  Add to <i className="icon-shopping-cart" />
                </a>{" "}
                <a className="btn btn-primary" href="#">
                  Rp. {product.harga}
                </a>
              </h4>
            </div>
          </div>
        </li>
      </div>
    ));
    return (
      <div id="mainBody">
        <div className="container">
          <div className="container">
           
            <div className="container">
              <ul className="breadcrumb">
                <li><a href="/">Home</a> <span className="divider">/</span></li>
                <li className="active"> Products</li>
              </ul>
              <div className="tab-content">
                
                <div className="tab-pane  active" id="blockView">
                  <ul className="thumbnails">{productItems}</ul>
                  <hr className="soft" />
                </div>
              </div>
              <br className="clr" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
