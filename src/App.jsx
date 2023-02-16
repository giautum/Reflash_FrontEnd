import {Link} from 'react-router-dom';
//import './Start.css';
//import CreateAccount from "./NewAccount";
import { AuthenticationTitle} from './loginform';

function Start() {
  console.log ("Start");
  return (
    <AuthenticationTitle />

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

