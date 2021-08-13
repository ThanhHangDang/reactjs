import React, { Component } from "react";
import SanPham from "./san-pham";
import {connect} from "react-redux";

class DanhSachSanPham extends Component {

  renderListProduct = () => {
    //Duyệt mảng và render lần lượt ra các sản phẩm tương ứng
    return this.props.listProduct.map((product) => {
      return ( 
        <SanPham 
          key={product.maSP} 
          product={product} 
        />
      )
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderListProduct()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listProduct: state.shoppingCartReducer.listProduct,
  }
}

export default connect(mapStateToProps, null) (DanhSachSanPham);