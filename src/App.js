import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Product from "./components/Top-products";
import item from './Product-details'
import Footer from './components/footer';



function generateProduct(element){
  return <div className='col-md-4'>
  <Product
        key = {element.id}
        name = {element.productName}
        price = {element.price}
        image = {element.productImage}
        stock = {element.stockDetails}
        delivery = {element.deliveryTime}
/>
</div>
}
function App() {
  return (
    <div>
    <h3 className='title'>Top Products</h3>
    <div className="feature-section">
    <div className="container">
      <div className="row">
        {item.map(generateProduct)}
      </div>
    </div>
  </div>   
  <Footer />
  </div>
  );
}

export default App;
