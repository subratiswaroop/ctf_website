import { Link } from "react-router-dom";


function Home() {
    function handle(){
        let ans = document.getElementById('inp').value;
        if (ans === "FLAG_53811586115"){
            alert("Correct! You are a winner!")
        }
    }

    return (
        <>
        <div id="img" className="hide-on-small-only">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974925-2477356.png" alt="" />
        </div>
            <div className="left-align " id="home" >
                <h1  >
                    we believe that <br></br>
                    <i>great outcomes </i> are a result <br></br>
                    of a sound approach,<br></br>
                    based on <i>insights,</i> and <i>experience.</i><br></br>
                    <input type="text" id="inp" name="lname"></input>
                    <button className="btn" onClick={handle} type="submit" name="action">Submit
                    </button>
                </h1>
                <h4 className="team">explore our team members</h4>
                <br></br>
                <div class="row">
                  
                    <div className="col s12 m4 card" id="card">
                        <div class="card-image">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
                            <span class="card-title"><Link to={"user1"}>alisha</Link></span>
                        </div>
                        <div class="card-content">
                            <p>I have a decade of experience with Java programming, including database development with SQL.</p>
                        </div>
                    </div>

                


                    <div className="col s12 m4 card " id="card">
                        <div class="card-image">
                            <img src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                            <span class="card-title"><Link to={"user2"}>kabir</Link></span>
                        </div>
                        <div class="card-content">
                            <p>Proficient in software patterns and practices, I’ve been part of the full software lifecycle</p>
                        </div>

                    </div>
                    <div className="col s12 m4 card" id="card">
                        <div class="card-image">
                            <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                            <span class="card-title"><Link to={"user4"}>jake</Link></span>
                        </div>
                        <div class="card-content">
                            <p>3 years of hands-on Java development, emphasizing fundamentals, design patterns, and RESTful Web services</p>
                        </div>
                    </div>
                </div>
            </div>
        <div>
        <footer >
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5>Thankyou</h5>
                <p class="grey-text text-lighten-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vero aperiam aut dicta eveniet. Recusandae, nostrum? Non ex officiis recusandae asperiores libero, explicabo cumque quis tempore assumenda unde esse saepe!</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="">contract </h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">admin@gmail.com</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2024 | subrati_swaroop
            </div>
          </div>
        </footer>
        </div>
        </>

    )
}

export default Home;