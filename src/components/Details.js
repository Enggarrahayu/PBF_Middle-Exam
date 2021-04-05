import React, {Component} from 'react'

export class Details extends Component{
    render(){
        return(
            <div id="mainBody">
            <div className="container">
              <div className="row">
                {/* Sidebar ================================================== */}
                <div id="sidebar" className="span3">
                  <div className="well well-small"><a id="myCart" href="product_summary.html"><img src="themes/images/ico-cart.png" alt="cart" />3 Items in your cart  <span className="badge badge-warning pull-right">$155.00</span></a></div>
                  <ul id="sideManu" className="nav nav-tabs nav-stacked">
                    <li className="subMenu open"><a> ELECTRONICS [230]</a>
                      <ul>
                        <li><a className="active" href="products.html"><i className="icon-chevron-right" />Cameras (100) </a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Computers, Tablets &amp; laptop (30)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Mobile Phone (80)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Sound &amp; Vision (15)</a></li>
                      </ul>
                    </li>
                    <li className="subMenu"><a> CLOTHES [840] </a>
                      <ul style={{display: 'none'}}>
                        <li><a href="products.html"><i className="icon-chevron-right" />Women's Clothing (45)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Women's Shoes (8)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Women's Hand Bags (5)</a></li>	
                        <li><a href="products.html"><i className="icon-chevron-right" />Men's Clothings  (45)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Men's Shoes (6)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Kids Clothing (5)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Kids Shoes (3)</a></li>												
                      </ul>
                    </li>
                    <li className="subMenu"><a>FOOD AND BEVERAGES [1000]</a>
                      <ul style={{display: 'none'}}>
                        <li><a href="products.html"><i className="icon-chevron-right" />Angoves  (35)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Bouchard Aine &amp; Fils (8)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />French Rabbit (5)</a></li>	
                        <li><a href="products.html"><i className="icon-chevron-right" />Louis Bernard  (45)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />BIB Wine (Bag in Box) (8)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Other Liquors &amp; Wine (5)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Garden (3)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Khao Shong (11)</a></li>												
                      </ul>
                    </li>
                    <li><a href="products.html">HEALTH &amp; BEAUTY [18]</a></li>
                    <li><a href="products.html">SPORTS &amp; LEISURE [58]</a></li>
                    <li><a href="products.html">BOOKS &amp; ENTERTAINMENTS [14]</a></li>
                  </ul>
                  <br />
                  <div className="thumbnail">
                    <img src="themes/images/products/panasonic.jpg" alt="Bootshop panasonoc New camera" />
                    <div className="caption">
                      <h5>Panasonic</h5>
                      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                    </div>
                  </div><br />
                  <div className="thumbnail">
                    <img src="themes/images/products/kindle.png" title="Bootshop New Kindel" alt="Bootshop Kindel" />
                    <div className="caption">
                      <h5>Kindle</h5>
                      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                    </div>
                  </div><br />
                  <div className="thumbnail">
                    <img src="themes/images/payment_methods.png" title="Bootshop Payment Methods" alt="Payments Methods" />
                    <div className="caption">
                      <h5>Payment Methods</h5>
                    </div>
                  </div>
                </div>
                {/* Sidebar end=============================================== */}
                <div className="span9">
                  <ul className="breadcrumb">
                    <li><a href="index.html">Home</a> <span className="divider">/</span></li>
                    <li><a href="products.html">Products</a> <span className="divider">/</span></li>
                    <li className="active">product Details</li>
                  </ul>	
                  <div className="row">	  
                    <div id="gallery" className="span3">
                      <a href="themes/images/products/large/f1.jpg" title="Fujifilm FinePix S2950 Digital Camera">
                        <img src="themes/images/products/large/3.jpg" style={{width: '100%'}} alt="Fujifilm FinePix S2950 Digital Camera" />
                      </a>
                      <div id="differentview" className="moreOptopm carousel slide">
                        <div className="carousel-inner">
                          <div className="item active">
                            <a href="themes/images/products/large/f1.jpg"> <img style={{width: '29%'}} src="themes/images/products/large/f1.jpg" alt="" /></a>
                            <a href="themes/images/products/large/f2.jpg"> <img style={{width: '29%'}} src="themes/images/products/large/f2.jpg" alt="" /></a>
                            <a href="themes/images/products/large/f3.jpg"> <img style={{width: '29%'}} src="themes/images/products/large/f3.jpg" alt="" /></a>
                          </div>
                          <div className="item">
                            <a href="themes/images/products/large/f3.jpg"> <img style={{width: '29%'}} src="themes/images/products/large/f3.jpg" alt="" /></a>
                            <a href="themes/images/products/large/f1.jpg"> <img style={{width: '29%'}} src="themes/images/products/large/f1.jpg" alt="" /></a>
                            <a href="themes/images/products/large/f2.jpg"> <img style={{width: '29%'}} src="themes/images/products/large/f2.jpg" alt="" /></a>
                          </div>
                        </div>
                        {/*  
                  <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
                  <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a> 
                  */}
                      </div>
                      <div className="btn-toolbar">
                        <div className="btn-group">
                          <span className="btn"><i className="icon-envelope" /></span>
                          <span className="btn"><i className="icon-print" /></span>
                          <span className="btn"><i className="icon-zoom-in" /></span>
                          <span className="btn"><i className="icon-star" /></span>
                          <span className="btn"><i className=" icon-thumbs-up" /></span>
                          <span className="btn"><i className="icon-thumbs-down" /></span>
                        </div>
                      </div>
                    </div>
                    <div className="span6">
                      <h3>Fujifilm FinePix S2950 Digital Camera</h3>
                      <small>- (14MP, 18x Optical Zoom) 3-inch LCD</small>
                      <hr className="soft" />
                      <form className="form-horizontal qtyFrm">
                        <div className="control-group">
                          <label className="control-label"><span>$222.00</span></label>
                          <div className="controls">
                            <input type="number" className="span1" placeholder="Qty." />
                            <button type="submit" className="btn btn-large btn-primary pull-right"> Add to cart <i className=" icon-shopping-cart" /></button>
                          </div>
                        </div>
                      </form>
                      <hr className="soft" />
                      <h4>100 items in stock</h4>
                      <form className="form-horizontal qtyFrm pull-right">
                        <div className="control-group">
                          <label className="control-label"><span>Color</span></label>
                          <div className="controls">
                            <select className="span2">
                              <option>Black</option>
                              <option>Red</option>
                              <option>Blue</option>
                              <option>Brown</option>
                            </select>
                          </div>
                        </div>
                      </form>
                      <hr className="soft clr" />
                      <p>
                        14 Megapixels. 18.0 x Optical Zoom. 3.0-inch LCD Screen. Full HD photos and 1280 x 720p HD movie capture. ISO sensitivity ISO6400 at reduced resolution. 
                        Tracking Auto Focus. Motion Panorama Mode. Face Detection technology with Blink detection and Smile and shoot mode. 4 x AA batteries not included. WxDxH 110.2 ×81.4x73.4mm. 
                        Weight 0.341kg (excluding battery and memory card). Weight 0.437kg (including battery and memory card).
                      </p>
                      <a className="btn btn-small pull-right" href="#detail">More Details</a>
                      <br className="clr" />
                      <a href="#" name="detail" />
                      <hr className="soft" />
                    </div>
                    <div className="span9">
                      <ul id="productDetail" className="nav nav-tabs">
                        <li className="active"><a href="#home" data-toggle="tab">Product Details</a></li>
                        <li><a href="#profile" data-toggle="tab">Related Products</a></li>
                      </ul>
                      <div id="myTabContent" className="tab-content">
                        <div className="tab-pane fade active in" id="home">
                          <h4>Product Information</h4>
                          <table className="table table-bordered">
                            <tbody>
                              <tr className="techSpecRow"><th colSpan={2}>Product Details</th></tr>
                              <tr className="techSpecRow"><td className="techSpecTD1">Brand: </td><td className="techSpecTD2">Fujifilm</td></tr>
                              <tr className="techSpecRow"><td className="techSpecTD1">Model:</td><td className="techSpecTD2">FinePix S2950HD</td></tr>
                              <tr className="techSpecRow"><td className="techSpecTD1">Released on:</td><td className="techSpecTD2"> 2011-01-28</td></tr>
                              <tr className="techSpecRow"><td className="techSpecTD1">Dimensions:</td><td className="techSpecTD2"> 5.50" h x 5.50" w x 2.00" l, .75 pounds</td></tr>
                              <tr className="techSpecRow"><td className="techSpecTD1">Display size:</td><td className="techSpecTD2">3</td></tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="tab-pane fade" id="profile">
                          <div id="myTab" className="pull-right">
                            <a href="#listView" data-toggle="tab"><span className="btn btn-large"><i className="icon-list" /></span></a>
                            <a href="#blockView" data-toggle="tab"><span className="btn btn-large btn-primary"><i className="icon-th-large" /></span></a>
                          </div>
                          <br className="clr" />
                          <hr className="soft" />
                          <div className="tab-content">
                            <div className="tab-pane" id="listView">
                              <div className="row">	  
                                <div className="span2">
                                  <img src="themes/images/products/4.jpg" alt="" />
                                </div>
                                <div className="span4">
                                  <h3>New | Available</h3>				
                                  <hr className="soft" />
                                  <h5>Product Name </h5>
                                  <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                  </p>
                                  <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                  <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                  <form className="form-horizontal qtyFrm">
                                    <h3> $222.00</h3>
                                    <label className="checkbox">
                                      <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <div className="btn-group">
                                      <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                                      <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in" /></a>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <hr className="soft" />
                              <div className="row">	  
                                <div className="span2">
                                  <img src="themes/images/products/5.jpg" alt="" />
                                </div>
                                <div className="span4">
                                  <h3>New | Available</h3>				
                                  <hr className="soft" />
                                  <h5>Product Name </h5>
                                  <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                  </p>
                                  <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                  <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                  <form className="form-horizontal qtyFrm">
                                    <h3> $222.00</h3>
                                    <label className="checkbox">
                                      <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <div className="btn-group">
                                      <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                                      <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in" /></a>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <hr className="soft" />
                              <div className="row">	  
                                <div className="span2">
                                  <img src="themes/images/products/6.jpg" alt="" />
                                </div>
                                <div className="span4">
                                  <h3>New | Available</h3>				
                                  <hr className="soft" />
                                  <h5>Product Name </h5>
                                  <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                  </p>
                                  <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                  <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                  <form className="form-horizontal qtyFrm">
                                    <h3> $222.00</h3>
                                    <label className="checkbox">
                                      <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <div className="btn-group">
                                      <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                                      <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in" /></a>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <hr className="soft" />
                              <div className="row">	  
                                <div className="span2">
                                  <img src="themes/images/products/7.jpg" alt="" />
                                </div>
                                <div className="span4">
                                  <h3>New | Available</h3>				
                                  <hr className="soft" />
                                  <h5>Product Name </h5>
                                  <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                  </p>
                                  <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                  <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                  <form className="form-horizontal qtyFrm">
                                    <h3> $222.00</h3>
                                    <label className="checkbox">
                                      <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <div className="btn-group">
                                      <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                                      <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in" /></a>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <hr className="soft" />
                              <div className="row">	  
                                <div className="span2">
                                  <img src="themes/images/products/8.jpg" alt="" />
                                </div>
                                <div className="span4">
                                  <h3>New | Available</h3>				
                                  <hr className="soft" />
                                  <h5>Product Name </h5>
                                  <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                  </p>
                                  <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                  <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                  <form className="form-horizontal qtyFrm">
                                    <h3> $222.00</h3>
                                    <label className="checkbox">
                                      <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <div className="btn-group">
                                      <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                                      <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in" /></a>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <hr className="soft" />
                              <div className="row">	  
                                <div className="span2">
                                  <img src="themes/images/products/9.jpg" alt="" />
                                </div>
                                <div className="span4">
                                  <h3>New | Available</h3>				
                                  <hr className="soft" />
                                  <h5>Product Name </h5>
                                  <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                  </p>
                                  <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                  <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                  <form className="form-horizontal qtyFrm">
                                    <h3> $222.00</h3>
                                    <label className="checkbox">
                                      <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <div className="btn-group">
                                      <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                                      <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in" /></a>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <hr className="soft" />
                            </div>
                            <div className="tab-pane active" id="blockView">
                              <ul className="thumbnails">
                                <li className="span3">
                                  <div className="thumbnail">
                                    <a href="product_details.html"><img src="themes/images/products/10.jpg" alt="" /></a>
                                    <div className="caption">
                                      <h5>Manicure &amp; Pedicure</h5>
                                      <p> 
                                        Lorem Ipsum is simply dummy text. 
                                      </p>
                                      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€222.00</a></h4>
                                    </div>
                                  </div>
                                </li>
                                <li className="span3">
                                  <div className="thumbnail">
                                    <a href="product_details.html"><img src="themes/images/products/11.jpg" alt="" /></a>
                                    <div className="caption">
                                      <h5>Manicure &amp; Pedicure</h5>
                                      <p> 
                                        Lorem Ipsum is simply dummy text. 
                                      </p>
                                      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€222.00</a></h4>
                                    </div>
                                  </div>
                                </li>
                                <li className="span3">
                                  <div className="thumbnail">
                                    <a href="product_details.html"><img src="themes/images/products/12.jpg" alt="" /></a>
                                    <div className="caption">
                                      <h5>Manicure &amp; Pedicure</h5>
                                      <p> 
                                        Lorem Ipsum is simply dummy text. 
                                      </p>
                                      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€222.00</a></h4>
                                    </div>
                                  </div>
                                </li>
                                <li className="span3">
                                  <div className="thumbnail">
                                    <a href="product_details.html"><img src="themes/images/products/13.jpg" alt="" /></a>
                                    <div className="caption">
                                      <h5>Manicure &amp; Pedicure</h5>
                                      <p> 
                                        Lorem Ipsum is simply dummy text. 
                                      </p>
                                      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€222.00</a></h4>
                                    </div>
                                  </div>
                                </li>
                                <li className="span3">
                                  <div className="thumbnail">
                                    <a href="product_details.html"><img src="themes/images/products/1.jpg" alt="" /></a>
                                    <div className="caption">
                                      <h5>Manicure &amp; Pedicure</h5>
                                      <p> 
                                        Lorem Ipsum is simply dummy text. 
                                      </p>
                                      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€222.00</a></h4>
                                    </div>
                                  </div>
                                </li>
                                <li className="span3">
                                  <div className="thumbnail">
                                    <a href="product_details.html"><img src="themes/images/products/2.jpg" alt="" /></a>
                                    <div className="caption">
                                      <h5>Manicure &amp; Pedicure</h5>
                                      <p> 
                                        Lorem Ipsum is simply dummy text. 
                                      </p>
                                      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€222.00</a></h4>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <hr className="soft" />
                            </div>
                          </div>
                          <br className="clr" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> </div>
          </div>
        )
    }
}

export default Details