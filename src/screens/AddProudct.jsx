import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { Stack} from '@mui/joy';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import { getAuth, onAuthStateChanged } from "firebase/auth";
const AddProudct = () => {


    function writeUserData(userId, name, email, imageUrl) {
      const db = getDatabase();
      set(ref(db,`users/ + ${userId}`), {
        username: name,
        email: email,
        profile_picture : imageUrl
      });
      console.log(writeUserData);
    
    }

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    console.log(user);
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});



  return (
    <Stack>
        <TextField id="standard-basic" label="Product Title " variant="standard" />
        <TextField id="standard-basic" label="Discription " variant="standard" />
        <TextField id="standard-basic" label="Price " variant="standard" />
        <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </Stack>

  )
}

export default AddProudct