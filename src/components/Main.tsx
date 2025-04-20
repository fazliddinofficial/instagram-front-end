import "../css/main.css";

const name = "Jack";

function Main() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="form-wrapper">
            <h1 className="title">Instagram</h1>
            <p className="p">
              Sign up to see photos and videos from you friends.
            </p>
            <button className="btn">Log in with Facebook</button>
            <div className="or">
              <div className="line"></div>
              <p className="or-p">or</p>
              <div className="line"></div>
            </div>
            <form>
              <div className="input-wrapper">
                <input name="v"
                  className="inp"
                  placeholder="Mobile Number or Email"
                  type="text"
                />
                <input name="v" className="inp" placeholder="Password" type="text" />
                <input name="v" className="inp" placeholder="Full Name" type="text" />
                <input name="v" className="inp" placeholder="Username" type="text" />
              </div>
              <p className="warning-p">
                People who use our service may have uploaded your contact
                information to Instagram.{" "}
                <a className="warning-a" href="#">
                  Learn More
                </a>
              </p>
              <p className="warning-p">
                By signing up, you agree to our{" "}
                <a className="warning-a" href="#">
                  Terms
                </a>{" "}
                ,{" "}
                <a className="warning-a" href="#">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a className="warning-a" href="#">
                  Cookies Policy
                </a>{" "}
                .
              </p>
              <button className="btn">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
