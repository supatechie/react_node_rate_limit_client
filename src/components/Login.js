import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { loginUser } from "../lib";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
    setMessage("");
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    setMessage("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        return setMessage("All inputs are required");
      }
      setMessage("");
      setLoading(true);
      const res = await loginUser({ username, password });
      setLoading(false);
      setMessage(res.message);
    } catch (error) {}
  };

  return (
    <MDBCard style={{ width: "100%", height: 400 }}>
      <MDBCardBody>
        <MDBCardTitle className="text-center p-3">Login Here</MDBCardTitle>
        <form>
          <div className="mb-5">
            <MDBInput
              value={username}
              onChange={handleUsernameInput}
              label="Enter username"
            />
          </div>
          <div className="mb-5">
            <MDBInput
              value={password}
              onChange={handlePasswordInput}
              label="Enter password"
              type="password"
            />
          </div>
          <div className="d-block text-center">
            {loading && "...processing"}
            <p className="text-danger">{message}</p>
            <MDBBtn
              lg
              className="w-100"
              onClick={(e) => handleSubmit(e)}
              rounded
              disabled={loading}
            >
              Login
            </MDBBtn>
          </div>
        </form>
      </MDBCardBody>
    </MDBCard>
  );
}
