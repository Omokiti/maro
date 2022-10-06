import '../styles/Navigation.css';
import users from '../assets/users.svg';
import { authentication } from '../Firebase';
import { signInWithRedirect,GoogleAuthProvider} from "firebase/auth";



const Navigation=()=>{

  const signInWithGoogle=()=>{
    
    const provider = new GoogleAuthProvider();
    
    signInWithRedirect (authentication,provider)
    .then((result)=>{
      
      console.log(result,'is')
     
      
    })
    .catch((err)=>{
      console.log(err,'the error')
    })
  }
    return(
        
        <nav class="navbar navbar-expand-lg space">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">maro</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
             
            </ul>

            <form class="d-flex" role="search">
              <img src={users} alt="users" className='users'/>
              <button onClick={signInWithGoogle} className='wes'>Sign in</button>
            <span>{localStorage.getItem("name")}</span>
            </form>
          </div>
        </div>
      </nav>
      
  )
}

export default Navigation;