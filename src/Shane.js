import React from 'react';
import './homecomp.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TabPanel from '@material-ui/core/Tab/Tab';
import RightPart from './RightPart';
import Header from './Header';










const useStyles = makeStyles({
    root: {
      maxWidth: 540,
    },
    media: {
      height: 350,
      width: 900,
      
    },
  });

function HomeComp(props) {
    const classes = useStyles();
    const { children, value, index, ...other } = props;
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };
    
  
  

  
    

    


    
    return (
      
      <React.Fragment>
        <Header/>
      <div className='homecomp'>
          
           <div className='backgroundouter'>
              <div className='backgroundLight'>
           <div className='home__left'>
               
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="./img/shane.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <h6> The shoot was done to promote Taker’s 30th  The Superstars took on Taker’s various looks from over the years, including The American Badass. 
            <br/>
            <br/>
            <br/>
            <Button variant='contained' style={{float:"left"}} size="small" color="default">
                Like
            </Button>
        </h6>
        
        
        
        
        
      </CardActions>
    </Card>
            
           </div>
           </div>
           </div>

           <div className='home__right' >
                            
                    <RightPart/>   
                    
          </div>
          </div>
          </React.Fragment>
    )
}
 export default HomeComp;