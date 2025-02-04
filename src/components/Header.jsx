import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import SearchBar from "./SearchBar";
import { IoCartOutline } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
  
    border: `2px solid  ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <>
      <div className="container !w-full">
        <div className="top-strip  h-[40px] flex items-center justify-around">
          <div className="to-strip-text">
            <p className="text-[14px]">
              Get up to 50% off new season styles, limited time only
            </p>
          </div>
          <div className="top-strip-links text-[14px] flex gap-5">
            <Link className="link" to="/help">
              Help Center
            </Link>

            <Link className="link" to="/order-tracking">
              Order Tracking
            </Link>
          </div>
        </div>

        <div className="middle-strip flex items-center justify-around ">
          <div className="logo flex ">
            <img src="image.png" alt="" />
          </div>
          <div className="searchBar !w-[35%]">
            <SearchBar />
          </div>
          <div className="login-cart flex flex-row items-center gap-5">
            <Link className="link" to="/login">Login</Link>

            <p className="seprator">|</p>

            <Link className="link" to="/register"> Register </Link>

            <div>
              <Tooltip title="Cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoCartOutline />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </div>

            <div>
              <Tooltip title="Compare">
                <IconButton aria-label="compare">
                  <StyledBadge badgeContent={1} color="secondary">
                    <IoMdGitCompare />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Favorites">
                <IconButton aria-label="favourites">
                  <StyledBadge badgeContent={3} color="secondary">
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="last-strip !w-full">
          <Navigation />
        
        </div>
      </div>
      {/* {"category panel"} */}
     
    </>
  );
};

export default Header;
