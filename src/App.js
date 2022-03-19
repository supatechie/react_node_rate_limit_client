import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBCol, MDBContainer } from "mdb-react-ui-kit";
import Login from "./components/Login";

function App() {
  return (
    <MDBContainer className="App">
      <MDBCol lg="4" className="container">
        <Login />
      </MDBCol>
    </MDBContainer>
  );
}

export default App;
