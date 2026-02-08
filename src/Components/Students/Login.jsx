import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Login.css";
function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  //   d-flex m-auto m py-5 px-5 vh-100 justify-content-center align-items-center
  return (
    <form action="post" className="bg">
      <div className="d-flex w-100 ">
        <div className=" direction">
          <div className="w-50 mx-5">
            <p className="text-white intro">WELCOME TO</p>
            <h1 className="Sch_name">Government Secondary School Owerri.</h1>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="Login_container p-5 with ">
            <div className="mb-3 row">
              <label className=" secondary-text">Username or Email</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readonly
                  placeholder="Enter your email or username"
                  className="form-control w-200 bg-black text-info"
                  id="staticEmail"
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="inputPassword" class="w-100 col-sm-2 col-form-label">
                Password
              </label>
              <br />
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control bg-black text-info w-200"
                  id="inputPassword"
                  placeholder="Enter your password"
                  required
                  onChange={(e)=>SetPassword(e.target.value)}
                />

              </div>
              <div>
                <Link to="/forgtten_password" >Lost password</Link>
                <br />
                <input type="checkbox" name="password" className="float-start m-0" /> <br />
                <button type="submit" className="bg-primary border">
                  Login
                </button>
                <br />
                <Link to="/Account_Setup" className="Create_Account">
                  Create an Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Login;
