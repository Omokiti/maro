import rect from '../assets/rect.svg';
import table1 from '../assets/Table1.svg';
import Advance_Table from '../assets/Advanced_Table.svg';
import Table_3 from '../assets/Table_3.svg';
import foodForFree from '../assets/Foodforfree.svg';
import Table_2 from '../assets/Table2.svg';
import '../styles/Services.css';
const Services=()=>{
    return(
        <div className='services'>
            <div className='service_contain space'>
                <div>
                    <img src={rect} alt='red rectangle'/>
                    <p className='service_head'>Our Services</p>
                </div>
                <div>
                    <p className='service_content'>
                    Fine Dinnng, Delivery,Takeout, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed.
                    </p>
                </div>
            </div>
            <div className='service_main space'>
            <div>
                <img src={table1} alt='book table' className='table1'/>
            </div>
            <div>
            <img src={Advance_Table} alt='advance booking table' className='advance_table'/>
            </div>
            <div>
            <img src={Table_3} alt='home delivery' className='table_3'/>
            </div>
            </div>
            <div className='service_main2 space'>
                <div>
                <img src={foodForFree} alt='food for free'/>
                </div>
                <div>
                <img src={Table_2} alt='table' className='table2'/>
                </div>
            
            </div>
        </div>
    )
}

export default Services;