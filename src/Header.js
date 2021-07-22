import React from 'react';
import './header.css';

import VideocamIcon from '@material-ui/icons/Videocam';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {Button} from '@material-ui/core';



function Header() {
    return (
        <div className="header" >
            
                <div className='header__left' >
                    {/* icon 1 */}
                        <img className='logo' src='./img/pigment.png' alt="logo" />
                    {/* icon camcorder */}
                        <VideocamIcon className='camera' />
                        
                    {/* icon playbutton */}
                    <PlayArrowIcon className='playbutton'/>
                    {/* userface icon */}
                    <img className='user-face' src='./img/boy.png' alt='userface' />
                    
                </div>
            

            <div className="borderline">
                
            </div>

            <div className='header__right'>
                <div className='topnav'>
                    <select>  <option> Saying Hi to my customers </option>  </select>
                    <Button style={{padding:"5px 25px"}} id='cancel' variant="contained">Cancel</Button>
                    <button style={{padding:"5px 25px"}} className='btn btn-success'>Save</button>
                    <hr/>
                </div>
                
            </div> 
        </div>
    )
}

export default Header
