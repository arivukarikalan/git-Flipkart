
import buds from "./components/images/OnePlus-Buds-Gray.jpg"
import phone from "./components/images/iphone-14-pro-max-silver.png"
import watch from "./components/images/samsung-galaxy-watch.jpg"
const products = [
    {
      id:"1",
      productName: 'Samsung watch 5',
      price: '10.99 $',
      productImage: watch,
      stockDetails: 'In stock',
      deliveryTime: '2 days',
    },
    {
     id:"2",
      productName: 'Iphone 14 pro',
      price: '19.99 $',
      productImage: phone,
      stockDetails: 'In stock',
      deliveryTime: '3 days',
    },
    {
      id:"3",
      productName: 'oneplus Bude pro',
      price:' 8.99 $',
      productImage: buds,
      stockDetails: 'Out of stock',
      deliveryTime: 'N/A',
    },
    // Add more items as needed
  ];
  
export default products;
  