
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Userfront from "@userfront/react";
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


Userfront.init("5nx89xyn");

const SignupForm = Userfront.build({
  toolId: "bnbrkd"
});
const LoginForm = Userfront.build({
  toolId: "okodna"
});
const PasswordResetForm = Userfront.build({
  toolId: "kaonab"
});


export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav> */}
        <AppBar position="static" sx={{ mb:4 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MedReminder
          </Typography>
          <Button color="inherit" component={Link} to="/">Register</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      {/* <h2>Home</h2> */}
      <SignupForm />
    </div>
  );
}

function Login() {
  return (
    <div>
      {/* <h2>Login</h2> */}
      <LoginForm />
    </div>
  );
}

function PasswordReset() {
  return (
    <div>
      {/* <h2>Password Reset</h2> */}
      <PasswordResetForm />
    </div>
  );
}

function Dashboard() {
  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <button onClick={Userfront.logout}>Logout</button>
    </div>
  );
}