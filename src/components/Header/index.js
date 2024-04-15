import './index.css'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";


const Header=()=>(
       <div className="headers-con">
        <div className='headers-con-2'>
            <h1 className='Tann-trim'>TANN  TRIM</h1>
            <div>
                <CiSearch className='headers-icon'/>
                <CgProfile className='headers-icon'/>
                <CiBookmark className='headers-icon'/>
                <RiShoppingBagLine className='headers-icon'/>
            </div>

        </div>
        <div className='headers-name-con'>
            <p className='headers-name'>Bangs</p>
            <p className='headers-name'>Travel</p>
            <p className='headers-name'>Accesories</p>
            <p className='headers-name'>Gifting</p>
            <p className='headers-name'>Jewelery</p>
            
        </div>

       </div>
)

export default Header