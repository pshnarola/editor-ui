import Navbar from "../components/Navbar/Navbar";

import { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";

import { Grid } from "@material-ui/core";

import AuthContext from "../store/AuthContext";
import UserContext from "../store/UserContext";

import { getPagesData } from "../API/Api";

const HomePage = () => {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);

  const loadData = async () => {
    const actualData = await getPagesData(authCtx.token);
    userCtx.setPagesData(actualData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Grid container className='justify-center'>
      <Grid item xs={12} sm={12} md={12}>
        <header>
          <Navbar />
        </header>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
export default HomePage;
