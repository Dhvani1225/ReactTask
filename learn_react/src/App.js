// import logo from './logo.svg';
import './App.css';
import List from './Pages/List';
import Feed from "./Pages/Feed";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ReduxRestaurant from './Components/Khana';
import store  from './Redux/store';
// import FeedClassComponent from './Components/FeedClassComponent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store = {store}>

    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <div className="App" style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>

          <div style={{ position: "fixed" }}>
            <Link to="/List" className="home">List</Link>
            <Link to="/Feed" className="feed">Feed</Link>
            <Link to="/Restaurant" className="Restaurant">Restaurant</Link>
          </div>
          <Switch>
            <Route path="/List">
              <List />
            </Route>
            <Route path="/Feed">
              <Feed />
              {/* <FeedClassComponent /> */}
            </Route>
            <Route path="/Restaurant">
              <ReduxRestaurant />
              {/* <FeedClassComponent /> */}
            </Route>
          </Switch>
          {/* 
      <Navbar />
      <List />
      <Feed />  */}
        </div>
      </Grid>
    </Box>
    </Provider>

  );
}

export default App;
