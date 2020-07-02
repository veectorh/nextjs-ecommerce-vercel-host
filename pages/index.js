import Head from 'next/head'
import Header from "../components/Header"
import ProductList from "../components/ProductList"
import Footer from "../components/Footer"

const Index = (props) => {
  return (
    <div className="container">

      <Header />
      <main className="main">
        <ProductList products={props.products} />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async ({ req }) => {
  return {
    products: [
      {id: "1", name: "Blue beetle", price: '25,000.00', image: "/car1.jpg", description: "Restored to Mint condition, repainted and all electronic components are functioning properly."},
      {id: "2", name: "American muscle", price: '40,000', image: "/car4.jpg", description: "Properly maintained without dents or scratches."},
      {id: "3", name: "Rosa Bike", price: '4,000', image: "/car3.jpg", description: "Carefully restored relic bike for sale."},
      {id: "4", name: "Yellow porsch", price: '5,000', image: "/car2.jpg", description: "Vintage porsch properly maintained and properly used to ensure cost effective point."},
    ]
  }
}

export default Index