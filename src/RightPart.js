import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import './rightpart.css';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'white',
  },
}));

function RightPart() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <button  position="static" style={{backgroundColor:"white", border:"none"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="white"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Actor" {...a11yProps(0)} />
          <Tab label="Voice" {...a11yProps(1)} />
          <Tab label="Alignment" {...a11yProps(2)} />
          <Tab label="Background" {...a11yProps(3)} />
          {/* <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
      </button>
      <TabPanel value={value} index={0}>
        {/* first image row of 3 images */}
        <div className="firstrow">
            
            <Link to='/'> <img className='small-img' src="./img/jinder.jpeg" alt=""></img> </Link>
            <Link to='/superstar'> <img className='small-img' src="./img/superstar.jpeg" alt=""></img> </Link>
            <Link to='/batista' > <img className='small-img' src="./img/batista.jpeg" alt=""></img> </Link>
        </div>
        {/* second image row of 3 images */}
        <div className='firstrow' style={{marginTop:"5px"}}>
           <Link to='/baron' > <img className='small-img' src="./img/baron.jpeg" alt=""></img> </Link>
            <Link to='/tripleh' > <img className='small-img' src="./img/tripleHyel.jpeg" alt=""></img> </Link>
            <Link to='/shane'>  <img className='small-img' src="./img/shane.jpeg" alt=""></img> </Link> 
        </div>

        {/* third image row of 1 image */}
        <div className="firstrow" style={{marginTop:"5px"}}>
            <Link to='batista2'> <img style={{position:'relative', left:"-210px"}} className='small-img' src="./img/dave.jpeg" alt=""></img> </Link>
            
            
        </div>
      </TabPanel>
      
          <TabPanel  value={value} index={1}>
            <audio controls>
              <source src='./audio/file_example_MP3_700KB.mp3' type='audio/mp3'></source>
            </audio>
            <br/>

            <audio style={{marginTop:"26px"}} controls>
              <source src='./audio/Get Low ! Dj snake Song.mp3' type="audio/mp3"></source>
            </audio>
            <br/>
            <audio style={{marginTop:"26px"}} controls>
              <source src='./audio/cydabully_thepain.mp3' type="audio/mp3"></source>
            </audio>
            </TabPanel>
      

        {/* <audio controls>
            <source src='./audio/DJ Snake - Taki Taki ft. Selena Gomez, Ozuna, Cardi B (Official Music Video).mp3' type='audio/mp3'> </source>
        </audio> */}
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
export default RightPart;
