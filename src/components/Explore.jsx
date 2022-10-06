import '../styles/Explore.css';
import sandWich from '../assets/sandwich.svg';
// import burger from '../assets/burger.svg';
import chips from '../assets/chips.svg';
const Explore=()=>{
    return(
        <div className="explore_contain">
            <div className="explore_content">
                <div>
                    <h2 className="explore_head">Explore Our Foods</h2>
                    <p className='explore_subhead'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet.
                    </p>
                </div>
            </div>
            <div className='explore_main space'>
                <div>
                    <img src={sandWich} alt='sand wich' className='sand_wich'/>
                    <div className='price_box'>
                    <div className='price_details'>
                        <div>
                        <h4 className='food_title'>
                        Hand Sandwich
                        </h4>
                        <p className='food_details'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </p>
                        </div>
                       <div>
                       <span className='food_price'>$10.25</span>
                       </div>
                    </div>
                    </div>
                </div>
                <div>
                <img src={chips} alt='sand wich' className='sand_wich'/>
                    <div className='price_box'>
                    <div className='price_details'>
                        <div>
                        <h4 className='food_title'>
                        Burger
                        </h4>
                        <p className='food_details'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </p>
                        </div>
                       <div>
                       <span className='food_price'>$10.25</span>
                       </div>
                    </div>
                    </div>
                </div>
                <div>
                <img src={chips} alt='sand wich' className='sand_wich'/>
                    <div className='price_box'>
                    <div className='price_details'>
                        <div>
                        <h4 className='food_title'>
                        Chips
                        </h4>
                        <p className='food_details'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </p>
                        </div>
                       <div>
                       <span className='food_price'>$10.25</span>
                       </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='explore_main_two space'>
                <div>
                    <img src={sandWich} alt='sand wich' className='sand_wich'/>
                    <div className='price_box'>
                    <div className='price_details'>
                        <div>
                        <h4 className='food_title'>
                        Hand Sandwich
                        </h4>
                        <p className='food_details'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </p>
                        </div>
                       <div>
                       <span className='food_price'>$10.25</span>
                       </div>
                    </div>
                    </div>
                </div>
                <div>
                <img src={sandWich} alt='sand wich' className='sand_wich'/>
                    <div className='price_box'>
                    <div className='price_details'>
                        <div>
                        <h4 className='food_title'>
                        Burger
                        </h4>
                        <p className='food_details'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </p>
                        </div>
                       <div>
                       <span className='food_price'>$10.25</span>
                       </div>
                    </div>
                    </div>
                </div>
                <div>
                <img src={chips} alt='sand wich' className='sand_wich'/>
                    <div className='price_box'>
                    <div className='price_details'>
                        <div>
                        <h4 className='food_title'>
                        Chips
                        </h4>
                        <p className='food_details'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
                        </p>
                        </div>
                       <div>
                       <span className='food_price'>$10.25</span>
                       </div>
                    </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Explore;