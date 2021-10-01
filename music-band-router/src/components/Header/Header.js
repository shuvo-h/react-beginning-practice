import { Tab, Tabs } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
    
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
  <Tab icon={<PhoneIcon />} label="RECENTS" />
  <Tab icon={<FavoriteIcon />} label="FAVORITES" />
  <Tab icon={<PersonPinIcon />} label="NEARBY" />
</Tabs>

        // <nav>
        //     <Link to="/home">Home</Link>
        //     <Link to="/about">About</Link>
        // </nav>
    );
};

export default Header;