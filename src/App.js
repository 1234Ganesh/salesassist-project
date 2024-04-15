import {Component} from 'react'

import Header from './components/Header'
import Bagstab from './components/Bagstab'
import ProductCard from './components/ProductCard'

import './App.css'

const productList=[
  {
    id:1,
    imageUrl:"https://res.cloudinary.com/dtg2yoedy/image/upload/v1713072478/379fa9c60606ae8d9c7608e86c3732e9_lwmm0h.jpg",
    productName:"The Brown Metro Movers",
    actualPirce:"₹4899",
    orignalPrice:"8999",
    discount:"(50% Off)",
  },
  {
    id:2,
    imageUrl:"https://res.cloudinary.com/dtg2yoedy/image/upload/v1713081276/5e9f74c6ef8dca9b868b05923aa2ac5c_ljj72k.jpg",
    productName:"The Metro Movers Black",
    actualPirce:"₹4899",
    orignalPrice:"8999",
    discount:"(50% Off)",
  },
  {
    id:3,
    imageUrl:"https://res.cloudinary.com/dtg2yoedy/image/upload/v1713081394/SIPR04085_01_1_c3wmjq.png",
    productName:"The Metro Movers Black",
    actualPirce:"₹4899",
    orignalPrice:"8999",
    discount:"(50% Off)",
  },
  {
    id:4,
    imageUrl:"https://res.cloudinary.com/dtg2yoedy/image/upload/v1713081494/SIPR04086_01_1_kybpao.png",
    productName:"The Metro Movers Black",
    actualPirce:"₹4899",
    orignalPrice:"8999",
    discount:"(50% Off)",
  },
  {
    id:5,
    imageUrl:"https://res.cloudinary.com/dtg2yoedy/image/upload/v1713081557/SIPR04018_01_1_zajxid.png",
    productName:"The Metro Movers Black",
    actualPirce:"₹4899",
    orignalPrice:"8999",
    discount:"(50% Off)",
  },
  {
    id:6,
    imageUrl:"https://res.cloudinary.com/dtg2yoedy/image/upload/v1713081612/SIPR04031_01_1_rgkxbe.png",
    productName:"The Metro Movers Black",
    actualPirce:"₹4899",
    orignalPrice:"8999",
    discount:"(50% Off)",
  },
  {
    id:7,
    imageUrl:"https://res.cloudinary.com/dtg2yoedy/image/upload/v1713081649/SIPR04085_01_1_1_f7liln.png",
    productName:"The Metro Movers Black",
    actualPirce:"₹4899",
    orignalPrice:"8999",
    discount:"(50% Off)",
  },
  {
    id:8,
    imageUrl:"https://res.cloudinary.com/dtg2yoedy/image/upload/v1713081759/SIPR04086_01_1_1_oofjrp.png",
    productName:"The Metro Movers Black",
    actualPirce:"₹4899",
    orignalPrice:"8999",
    discount:"(50% Off)",
  },
  
]

class App extends Component{
  render(){
    return(
      <div className='app-con'>
      <Header/>
      <Bagstab/>
  
        <p className='bag-pack'>Bags . BackPacks</p>
      <ul className='products-list'>
      
        {productList.map(eachProduct=>(
          <ProductCard productData={eachProduct} />
        ))}
       
      </ul>
     
     
   
      </div>

    )
  }


}

export default App