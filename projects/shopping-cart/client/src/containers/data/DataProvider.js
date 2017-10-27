import React from 'react';
import Layout from "../../Layout";
import faker from 'faker';
import $ from 'jquery';

class DataProvider extends React.Component {

  state = {
    products: [],
    cart: [],
    user: null,
    isDataLoaded: false,
    product: {}
  }

  componentDidMount = () => {
    let tempProducts = []
      $.ajax({
        url:'/api/products',
        method: 'GET',
      }).done((response) => {
        this.setState({
          products: response.data,
          user: this.createUser(),
          isDataLoaded: true
         })
      })
  }

  addToCart = (product) => {
    const tempCart = this.state.cart;
    tempCart.push(product);
    this.setState({  cart: tempCart});
    // alert(product.productName);
  }

  createUser = () => {
    const user = {
      fName: faker.name.firstName(),
      lName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
    }
    return user;
  }
  onChange = (type, value) => {
    const newProduct = this.state.product
    newProduct[type] = value
    this.setState({ product: newProduct })
    console.log(this.state.product)
  }

  submitProduct = (event) => {
    event.preventDefault()
    $.ajax({
      url: "/api/products",
      method: "POST",
      data: this.state.product
    }).done((response) => {
      const newProducts = this.state.products
      newProducts.push(response.data)
      this.setState({ product: newProducts })
    })
  }

  render(){
    let totalPrice = 0;
    for (let i=0; i <this.state.cart.length; i++){
      totalPrice += parseFloat(this.state.cart[i].price);
    }
    return (
      <div>
        {
        this.state.isDataLoaded ?
        <Layout
          title={this.state.title}
          products={this.state.products}
          addToCart={this.addToCart}
          cart={this.state.cart}
          totalPrice={totalPrice.toFixed(2)}
          user={this.state.user}
          onChange={this.onChange}
          submitProduct={this.submitProduct}
        />
        : <h1> Data Loading </h1>
        }
      </div>
    )
  }
}

export default DataProvider;
