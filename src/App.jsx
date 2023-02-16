import {Link} from 'react-router-dom';
import './Start.css';
import CreateAccount from "./NewAccount";

function Start() {
  console.log ("Start");
  return (
    <div className="Start" >
      <header>
        <h1><strong>Reflash!</strong></h1>
          </header>
          <label for="euname">Username:</label>
          <input type="text" id="euname" name="euname" /><br />
          <label for="pword">Password:</label>
          <input type="password" id="epword" name="epword" />
          <button type="button" onclick="">Show</button><br /><br />
          <input type="submit" value="Login" />
          <button type="button" onclick=" alert('Send to create account form')">Create</button>
          <button type="button" onclick="alert('Send to forgot password form')">Forgot</button>
    </div>
  );
}
export default Start;

function CreateAccButton() {
    return (
        <Link to="./NewAccount">
            <button>create account</button>
        </Link>
    );
}

