import React,{useState,useEffect} from "react";
import { Grid, TextField, Button, Typography, Container,Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Components/Theme";
import Navbar from "../Components/Navbar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "./CSS/Profile.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FooterComp from "../Components/FooterComp";
import OrdersCard from "../Components/OrdersCard";
import Cookies from "js-cookie";

function Profile() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/cart/getAll", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            profile_id: Cookies.get("userid"),
          }),
        });

        if (!response.ok) {
          throw new Error("Unable to fetch orders");
        }

        const data = await response.json();
        setOrders(data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, []);
  

  return (
    <div>
      <Navbar />
      <ThemeProvider theme={theme}>
        <div className="profile-page">
            <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{padding:'20px',paddingLeft:'30px',height:'350px'}}>
                <div className=""><h1>Profile</h1></div>
                <div className="profile-content">
                <div className="profile-attr"><div className="icon-container"><AccountCircleIcon></AccountCircleIcon></div>Name</div>
                <div className="profile-attr"><div className="icon-container"><MailIcon></MailIcon></div>Email</div>
                <div className="profile-attr"><div className="icon-container"><LocalPhoneIcon></LocalPhoneIcon></div> Phone</div>
                </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper sx={{padding:'20px',marginTop:'20px' ,height:'300px',overflowY:'scroll'}}>
            <Typography variant="h5" gutterBottom sx={{marginBottom:'10px'}}>
               Orders
            </Typography>
            {orders.map((order) => (
              <OrdersCard key={order.id} order={order} />
            ))}
            </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
      </ThemeProvider>
      <FooterComp></FooterComp>
    </div>
  )
}

export default Profile