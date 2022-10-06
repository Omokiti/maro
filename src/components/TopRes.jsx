import '../styles/TopRes.css';
import rect from '../assets/rect.svg';
import pizza from '../assets/pizza.svg';
import burger from '../assets/burger.svg';
import location from '../assets/location.svg';
import carousel from '../assets/carousel.svg';
const TopRes=()=>{
return(
    <div className='res_contain'>
        <div className='res_top space'>
            <div>
                <img src={rect} alt="red rectangle"/>
                <p className='res_content'>some top restaurant for 
                    dining in or Take away!</p>
            </div>
             <div>
                <p className='res'>
                Slice,Indomie cafe,Bistro
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed.
                </p>
             </div>
        </div>
        <div className='pop_food'>
            <div className='pop_contain'>
                <img src={pizza} alt="pizzaimage" className='food_img'/>
                <div className='red_glass'>
                <p className='pop_content'>The Place</p>
                <p className='pop_details'>we are all about we are all about to the fullest and all content dining out or in!dining out or in!</p>
               <img src={location} alt="location icon"/> <span className='location_name'>Lekki</span>
               <button className='book_now'>Book Now</button>
                </div>
              
            </div>
            <div className='pop_containz'>
            <img src={burger} alt="burgerimage" className='food_img'/>
            <div className='red_glassz'>
                <p className='pop_content'>The Burger</p>
                <p className='pop_details'>we are all about we are all about to the fullest and all content dining out or in!dining out or in!</p>
               <img src={location} alt="location icon"/> <span className='location_name'>Lekki</span>
               <button className='book_now'>Book Now</button>
                </div>
            </div>
            <img src={carousel} alt="carousel" className='carousel'/>
        </div>

    </div>
)
}

export default TopRes;