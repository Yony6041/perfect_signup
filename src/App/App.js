import styles from './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import SideMenu from  '../components/SideMenu.js';
import {CssBaseline, makeStyles} from '@material-ui/core';
import Header from '../components/Header';

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }

})

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu/>
      <div className={classes.appMain}> 
        <Header/>
      </div>
      <CssBaseline/>
    </>
  );
}

export default App;


{/* <ThemeProvider> 
      <SideMenu />
      <div className = {styles.appMain}>
        <Header />
        <PageHeader 
          title= 'Page Header'
          subtitle='Page description'
          icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
          />
      </div>
      <CssBaseline/>
    </ThemeProvider> */}