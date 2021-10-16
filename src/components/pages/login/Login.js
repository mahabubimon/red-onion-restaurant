import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../banner/Banner.css";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { googleSignIn, twitterSignIn } = useAuth();
  return (
    <section className="row">
      <div className="col-md-7">
        <img
          className="img-fluid"
          src="https://i.ibb.co/nfz4XLF/signin.jpg"
          alt=""
        />
      </div>
      <div className="col-md-5 py-5">
        <img
          className="w-50 img-fluid"
          src="https://i.ibb.co/XCNDTXt/logo2.png"
          alt=""
        />
        <Form className="w-75 pt-3">
          <Form.Control type="email" placeholder="Your Email" /> <br />
          <Form.Control type="password" placeholder="Password" />
          <Form.Check className="text-start" label="Remember me." /> <br />
          <Button className="btn-danger" type="submit">
            Sign In
          </Button>
          <br />
          <small className="text-danger">
            {" "}
            New User in Red-Onion?
            <Link to="/signup" style={{ textDecoration: "none" }}>
              {" "}
              Register
            </Link>
          </small>
        </Form>
        <div className="text-center">
          <h3>
            Or <br /> Sign In with
          </h3>
          <Button onClick={googleSignIn} className="fs-1 p-1" variant="light">
            <FaGoogle />
          </Button>
          <Button onClick={twitterSignIn} className="fs-1 p-1" variant="light">
            <FaTwitter />
          </Button>
          <Button onClick={googleSignIn} className="fs-1 p-1" variant="light">
            <FaGoogle />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;