import '../styles/Booking.css';
import lettuce from '../assets/lettuce.svg'
import leaf from '../assets/leaf.svg'
import eclips from '../assets/eclips.svg'
import rect90 from '../assets/90rec.svg'
const Booking=()=>{
    return(
        <div className="booking">
           <div className='book_contain'>
            <div>
            <img src={lettuce} alt="lettuce" className='lettuce'/>
            </div>
            <div>
            <form className='booking_form'>
                <img src={rect90} alt="red rectangle"/>
                <p className='form_details'>advance Booking</p>
                <div className='contain'>
                <input type="text" placeholder='search restaurant' className='search_restaurant'/>
                <button className='go_search'>GO</button>
                </div>
                
            </form>
            <img src={eclips} alt="eclipse" className='eclipse'/>
            </div>
          <div>
          <img src={leaf} alt="lettuce" className='leaf'/>
          </div>
           </div>
           
        </div>
    )
}

export default Booking;