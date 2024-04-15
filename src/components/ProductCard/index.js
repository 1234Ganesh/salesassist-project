import { CiBookmark } from "react-icons/ci";
import { TbShoppingBagPlus } from "react-icons/tb";
import './index.css'

const ProductCard=props=>{
    const {productData}=props
    const {productName,actualPirce,orignalPrice,discount,imageUrl}=productData

    return(

    <li className='product-list'>
        <div className="product-img" style={{ backgroundImage: `url(${imageUrl})` }}>
            <CiBookmark className="bookmark-icon"/>
      
            
            </div>
            <p className='product-name'>{productName}</p>
          <div className='price-con'>
            <p className="actual-price">{actualPirce}<span className="orignal-price">{orignalPrice}</span><span className="discount">{discount}</span></p>
          <TbShoppingBagPlus className="shoping-bag-icon"/>
            </div>
    </li>
    
        
  
)
}

export default ProductCard