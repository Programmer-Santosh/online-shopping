import React from 'react';
import "../css/productdisplay.css";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const LatestProducts = () => {

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <section>
    <div className="container top-strip !mt-10">
        <div className="left-part flex flex-col  gap-2.5">
            <h2 className="title-latest text-[20px] font-[600] ">Latest Products</h2>
            <p className="para">Shop latest products from here.</p>
        </div>
        <div className="right-part ">
        
      <Tabs
      
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
       
        aria-label="Latest Tabs"
      >
        <Tab label="Clothes" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Jwellery" />
        <Tab label="Books" />
        <Tab label="Cosmetics" />
        <Tab label="Toys" />
        
      
      </Tabs>
  
              
        </div>
    </div>
    </section>
    <section>
        <div className="container">

        </div>
    </section>
    
    </>
  )
}

export default LatestProducts