
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Userfront from "@userfront/react";
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dashboard from '../Dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const LogoutButton = Userfront.build({
  toolId: "lamkam"
});



export default function App() {
  return (
    <Router>
      <div>
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
          {!Userfront.tokens.accessToken && <Button color="inherit" component={Link} to="/">Register</Button>}
          {!Userfront.tokens.accessToken&&<Button color="inherit" component={Link} to="/login">Login</Button>}
          {Userfront.tokens.accessToken&&<LogoutButton />}        
        </Toolbar>
      </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="reset" element={<PasswordReset />} />
          <Route/>
        </Routes>
        <Routes>
        <Route path="/dashboard" element={<RequireAuth><Dashboard user={Userfront.user}/></RequireAuth>} />
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

// function Dashboard() {
//   const userData = JSON.stringify(Userfront.user, null, 2);

// }

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}