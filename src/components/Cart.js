import React, { Component } from "react";
import { connect } from "react-redux";
// import util from "../util";
import { addToCart, removeFromCart, handleMinus, handlePlus} from "../actions/cartActions";
import { fetchCart } from "../actions/cartActions";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return(
      <div>
      <div id="mainBody">
      <div className="container">
        <div className="container">
          {/* Sidebar ================================================== */}

          <div className="container">
            <ul className="breadcrumb">
              <li><a href="/">Home</a> <span className="divider">/</span></li>
              <li className="active"> SHOPPING CART</li>
            </ul>
            {cartItems.length === 0 ? (
              "Cart is empty"
            ) : (
              <h3>  
                  SHOPPING CART [ <small>{cartItems.length} Item(s) </small>]
                  <a href="products.html" className="btn btn-large pull-right">
                    <i className="icon-arrow-left" /> Continue Shopping 
                  </a>
                  <hr className="soft" />
              </h3>	
            )}
            {cartItems.length > 0 && (
                        <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Quantity/Update</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item) => (
                            
                                <tr key={item.id}>
                                    <td> <img src={item.gambar} alt="" /> </td>
                                    <td> {item.nama_produk} </td>
                                    <td>
                                      <div className="input-append"><input className="span1" style={{maxWidth: '34px'}} placeholder={item.qty} id="appendedInputButtons" size={16} type="text" />
                                          <button className="btn" type="button" onClick={(e) =>
                                                this.props.handleMinus(this.props.cartItems, item)}>
                                                <i className="icon-minus" />
                                          </button>
                                          <button className="btn" type="button" onClick={(e) =>
                                                this.props.handlePlus(this.props.cartItems, item)}>
                                                <i className="icon-plus" />
                                          </button>
                                          <button className="btn btn-danger" type="button" 
                                              onClick={(e) => this.props.removeFromCart(this.props.cartItems, item)} >
                                              <i className="icon-remove icon-white" />
                                          </button>				
                                      </div>
                                    </td>
                                    <td>{item.harga}</td>
                                </tr>
                      
                          ))}
                          
                          <tr>
                            <td colSpan={6} style={{textAlign: 'right'}}><strong>TOTAL  =</strong></td>
                            <td className="label label-important" style={{display: 'block'}}> 
                                <strong> {
                                    cartItems.reduce((p, c) => p + c.harga * c.qty, 0)
                                  } 
                                </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
            )}

            <a href="products.html" className="btn btn-large"><i className="icon-arrow-left" /> Continue Shopping </a>
            <a href="login.html" className="btn btn-large pull-right">Next <i className="icon-arrow-right" /></a>
          </div>
        </div></div>
    </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, {fetchCart, addToCart, removeFromCart, handleMinus, handlePlus})(Cart);
