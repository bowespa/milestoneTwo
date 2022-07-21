import { Link, useNavigate } from "react-router-dom";
//import "./Navbar.css";
import { Button, IconButton, Box, AppBar, Toolbar, Typography, Container } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { color, fontFamily } from "@mui/system";


const Navbar = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/")
    window.location.reload();
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h2"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontFamily: "Poppins",
              fontWeight: 700,
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>Citrus.</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontFamily: "Poppins",
            }}
          >
            <Link to="/showProp" color="primary" underline="none">All Properties</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontFamily: "Poppins",
            }}
          >
            <Link to="/addNewProp" color="primary" underline="none">Add New Property</Link>
          </Typography>

          <IconButton
            className="link"
            variant="text"
            size="large"
            edge="end"
            onClick={handleLogout}
          >
            <LogoutIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;


