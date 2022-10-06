import rect from '../assets/rect.svg';
import googleplay from '../assets/Vector(12).svg';
import '../styles/DownloadApp.css'
const DownloadApp=()=>{
    return(
        <div className="download_app">
             <div className='download_contain space'>
                <div>
                    <img src={rect} alt='red rectangle'/>
                    <p className='download_head'>Download app for 
                        Exciting Deals
                    </p>
                    <p className='download_content'>
                Fine Dinnng, Delivery,Takeout, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed.
                   </p>
                   <button className='googlePlay'>
                   <img src={googleplay} alt="goggle play"/>
                     GET IT ON<br/>
                     Google Play
                  
                   </button>
                </div>
                <div>
                    
                </div>
            </div>

        </div>
    )
}

export default DownloadApp;