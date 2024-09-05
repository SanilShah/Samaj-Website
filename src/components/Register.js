import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          navigate("/login");
        } else {
          alert("Registered successfully! Please Login to proceed.");
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 400, margin: "auto", padding: 3 }}
      >
        <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
          Register
        </Typography>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, color: "#fff" }}
        >
          Register
        </Button>
        <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
          Already Registered?{" "}
          <Link component={RouterLink} to="/login">
            Login Now
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Register;
