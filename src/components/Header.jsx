import '../styles/Header.css'
import Navigation from './Navigation';
import foodHeader from '../assets/Main_Food.svg';
import rectangle from '../assets/Rectangle.svg';

const Header=()=>{
    return(
        <>
        
        <div className="header">
        <Navigation/>
        <div className='main_header space'>
            <div>
            <h3 className="title">Food</h3>
            <p className="title_info">Discover Restaurant
           & Delicious Food
           </p>
           <div className='contain'>
           <input type="search"placeholder="search restaurant, food" className='input_search'/>
           <button className='search_button'>Go</button>
           </div>
         
            </div>
          
            <img src={rectangle} alt='rectangle' className='red_rectangle'/>
           
         
           <div>
               <img src={foodHeader} alt="food" className='food_header'/>
            </div>
        </div>
            </div>
       </>
    )
}

export default Header;