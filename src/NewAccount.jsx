import './Start.css';


function CreateAccount() {
    return (
        <div className="Start" >
            <header>
                <h1><strong>Reflash!</strong></h1>
            </header>
            <label for="nuname">Username:</label>
            <input type="text" id="nuname" name="nuname" /><br />
            <label for="npword">Password:</label>
            <input type="password" id="npword" name="npword" />
            <button type="button" onclick="">Show</button><br /><br />
            <input type="submit" value="Create Account" />
        </div>
    );
}
export default CreateAccount;