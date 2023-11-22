import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Auth } from "../config/firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [authData, setAuthData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate()

  const SetInputHandler = (e) => {
    setAuthData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const submitDataHandler = async () => {
    setIsLoading(true);
    // console.log("submit", authData);
    try {
      const userData = await signInWithEmailAndPassword(
        Auth,
        authData.email,
        authData.password
      );
      setIsLoading(false);
      navigate('/dashboard/products')
      // console.log(userData.user);
    } catch (err) {
      // console.log(err);
      setSignupError(err.code.slice(5));
      setIsLoading(false);
    }
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Stack
        gap={2}
        sx={{
          boxShadow: "0 0 10px black",
          p: 2,
          borderRadius: 2,
        }}
      >
        <Stack>
          <Typography fontSize={48}>Login</Typography>
        </Stack>
        <Stack>
          <TextField
            label={"Email"}
            placeholder="Email..."
            id="email"
            onChange={SetInputHandler}
          />
        </Stack>
        <Stack>
          <TextField
            label={"Password"}
            placeholder="Password..."
            id="password"
            type="password"
            onChange={SetInputHandler}
          />
        </Stack>
        <Stack>
          <Button
            variant="contained"
            onClick={submitDataHandler}
            disabled={isLoading && true}
          >
            {isLoading ? "loading" : "submit"}
          </Button>
          <Button sx={{ color: "red" }}>{signupError && signupError}</Button>
        </Stack>
        <Divider />
        <Stack>
          <Typography>
            Don't have an account
          </Typography>
          <Button variant="contained" onClick={()=>navigate("/login")}>
            Sign up
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;

