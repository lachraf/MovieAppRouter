
import './Home.css';

const Home=() =>{
    return(
<>

<div className="flexRegister">
 <h6>Don't have an account? Register:</h6>
 <div className="flexhome">
 <input className="EmailInput" type="email" placeholder="EMAIL ADDRESS"/>
 <button className="verificationbutton"> SEND VERIFICATION CODE </button>
 </div>
 </div>


   <h5>ACHFLIX </h5> 
   <p className="introOscars">
       Hello,<br/>
       My name is Achraf Sallem and this is my platform to share on it my favorite movies.<br/>
       The name of my platform was inspired from NETFLIX.<br/>
       I will work on it and update it as soon as possible<br/>
       ENJOY...
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

   </p>
</>


    )
}

export default Home;