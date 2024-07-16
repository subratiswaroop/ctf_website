import images from './images.jpeg';

function About(){
    return(
        <>
        <div className="center">
        <p><em>Flag capture (CTF) in computer security is an exercise in which participants attempt to find text strings, called "flags," that are secretly hidden in purpose-vulnerable programs or websites.</em></p><br></br>
<p>In this (CTF) challenge you have to find the flag and submit it to Home page. Make sure you don't do DOS or brute force attack.</p><br></br>
       <p><span ><b className="#ff1744 red accent-3">NOTE:- </b></span> This website does not have any kind of backend work, so please make sure you do not check the source code for credentials.</p>
        </div>
        </>
    )
}

function Help(){
    return(
        <>
        
        {/* <h5>keep your eyes open</h5> */}
        </>
    )
}

function Service(){
    return(
        <>
        
        {/* <h4>Service Worker:</h4> */}
        </>
    )
}

function User3(){
    return(
        <>
        
        <div className="center">
                <img src={images} style={{ height: 500 }}></img>
        </div>
        </>
    )
}

export {About, Help, Service, User3}; 