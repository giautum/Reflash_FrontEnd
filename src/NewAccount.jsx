import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
  } from '@mantine/core';
  import { IconArrowLeft } from '@tabler/icons';
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: 26,
      fontWeight: 900,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    controls: {
      [theme.fn.smallerThan('xs')]: {
        flexDirection: 'column-reverse',
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        width: '100%',
        textAlign: 'center',
      },
    },
  }));


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