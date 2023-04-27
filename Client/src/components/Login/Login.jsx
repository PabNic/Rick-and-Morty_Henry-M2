import React, { useState } from "react";
import validation from "./validation";
import style from "./Login.module.css";
import {
  Card,
  Alert,
  Button,
  CardActions,
  CardContent,
  Typography,
  CardHeader,
} from "@mui/material";

const Login = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
    validation({ ...userData, [name]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <span className={style.loginContainer}>
      <Card sx={{ minWidth: 275, maxWidth:500 }}>
        {" "}
        <form onSubmit={submitHandler}>
          <Typography sx={{ fontSize: 44 }} color="text.secondary" gutterBottom>
            Login
          </Typography>{" "}
          <CardContent>
            <div>
              <label className={style.label} htmlFor="email">
                USERNAME:
              </label>
              <input
                autoComplete="on"
                placeholder="email@email.com"
                className="buscador"
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
              <p className={style.msgError}>{errors.email}</p>
            </div>
            <div>
              <label className={style.label} htmlFor="password">
                PASSWORD:
              </label>
              <input
                placeholder="password123"
                className="buscador"
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
              <p className={style.msgError}>{errors.password}</p>
            </div>
          </CardContent>
          <CardActions>
            <button className={style.boton} type="submit">
              Login
            </button>
            <Button size="small">Learn More</Button>
          </CardActions>{" "}
        </form>
      </Card>
    </span>
  );
};
export default Login;
