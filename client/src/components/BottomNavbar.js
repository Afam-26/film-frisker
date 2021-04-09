import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
//import LocationOnIcon from '@material-ui/icons/LocationOn';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "12%",
    position:"fixed",
    bottom:0,
    backgroundColor:"black",
    zIndex:100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history=useHistory();

  // creating use-effect , it fires everytime when the value(defined with setValue) changes.

  useEffect(()=>{                        
      if(value===0)history.push("/")                 // can use the history methods outside of your components
      else if(value===1)history.push("/movies")           //Change your current location from any place, 
      else if(value===2)history.push("/favourite")
      else if(value===3)history.push("/search")          // useHistory hook
                                                         //The useHistory hook gives you access to the history instance that you may use to navigate.
  },[value,history]);                                    //https://reactrouter.com/web/api/Hooks/usehistory

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Trending" style={{color:"white"}} icon={<WhatshotIcon />} />
      <BottomNavigationAction label="Movie" style={{color:"white"}} icon={<MovieIcon />} /> 
      <BottomNavigationAction label="Favorites" style={{color:"white"}} icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Search" style={{color:"white"}} icon={<SearchIcon />} />  
    </BottomNavigation>
  );
}