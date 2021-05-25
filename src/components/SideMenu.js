import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core';


// this is a different way to create styles inside a component without using an external css
const style = {
  sideMenu: {
    display:'flex',
    flexDirection:'column',
    position:'absolute',
    left:'0px',
    width:'320px',
    height:'100%',
    backgroundColor:'#253053'
  }
};

const SideMenu = (props) => {
  const {classes} = props;
  return (
    <div className={classes.sideMenu}>

    </div>
  );
};

// here we're passing a higher order function to
// pass on the styles.
// with styles recieves a style and it applies it to the component you pass on.

export default withStyles(style)(SideMenu);

