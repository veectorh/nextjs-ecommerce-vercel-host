import Product from "./Products"

const ProductList = (props) => {
  return (
    <div className="product-list">
      {props.products.map((product, index) => <Product product={product} key={index}/>)}
    </div>
  )
}
export default ProductList