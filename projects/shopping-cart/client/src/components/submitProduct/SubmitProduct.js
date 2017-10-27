import React from 'react'

const formStyle = {
  marginTop: '10em'
}

const SubmitProduct = (props) => {
  console.log(props)
  return(
    <div style={formStyle}>
      <form onSubmit={props.submitProduct}>
        <label>Product Name</label>
          <input
            type="text"
            onChange={(event) =>
            props.onChange('name', event.target.value)
          }/>
        <label>Product Price</label>
          <input
            type="number"
            onChange={(event) =>
            props.onChange('price', event.target.value)
          }/>
        <label>Image</label>
          <input
            type="text"
            onChange={(event) =>
            props.onChange('image', event.target.value)
          }/>
        <button type="submit">Submit New Product</button>
      </form>
    </div>

  )
}

export default SubmitProduct
