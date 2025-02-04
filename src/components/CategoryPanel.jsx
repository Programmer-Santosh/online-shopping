import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSquareMinus } from "react-icons/ci";
import "../css/drawer.css";
import { ImCross } from "react-icons/im";
import { BsPlusSquare } from "react-icons/bs";

export default function CategoryPanel() {
  const [open, setOpen] = React.useState(false);
  const [submenuIndex, setSubmenuIndex] = React.useState(null);
  const [submenuTitleIndex, setSubmenuTitleIndex] = React.useState(null);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const openSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  const openSubmenuTitle = (index) => {
    if (submenuTitleIndex === index) {
      setSubmenuTitleIndex(null);
    } else {
      setSubmenuTitleIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="drawer">
        <div className="drawer-head  flex justify-around items-center">
          <h3 className="">Shop By categories</h3>
          <ImCross
            className="text-red-700 text-[10px]"
            onClick={toggleDrawer(false)}
          />
        </div>
        <div className="h-[10px]"></div>

        <div className="drawer-body scroll">
          <ul className="w-full menu flex flex-col">
            {/* category 1 */}
            <li className="menu-title list-none">
              <div className="flex flex-row items-center justify-between !pr-[10px] ">
                <Button className="w-full flex !justify-between ">
                  {" "}
                  <Link to={"/fashion"}>Fashion</Link>
                  {submenuIndex === 0 ? (
                    <CiSquareMinus onClick={() => openSubMenu(0)} />
                  ) : (
                    <BsPlusSquare onClick={() => openSubMenu(0)} />
                  )}
                </Button>
              </div>
              {submenuIndex === 0 && (
                <>
                  <ul className="submenu">
                    {/* accessories */}
                    <li className="submenu-title">
                      <Button className="  w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Accessories</Link>
                        {submenuTitleIndex === 0 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(0)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(0)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 0 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Watch
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Necklace
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Bracelet
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Earrings
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Ring
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Sunglass
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Hand Bag
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                hat
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Belt
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Wallet
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  {/* casual wear */}
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Casual Wear</Link>
                        {submenuTitleIndex === 1 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(1)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(1)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 1 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  {/* formal wear */}
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Formal wear</Link>
                        {submenuTitleIndex === 2 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(2)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(2)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 2 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  {/* footwear */}
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Foot Wear</Link>
                        {submenuTitleIndex === 3 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(3)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(3)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 3 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Outer Wear</Link>
                        {submenuTitleIndex === 4 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(4)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(4)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 4 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </>
              )}
            </li>
            {/* category2 */}
            <li className="menu-title list-none">
              <div className="flex flex-row items-center justify-between !pr-[10px] ">
                <Button className="w-full flex !justify-between ">
                  {" "}
                  <Link to={"/fashion"}>Electronics</Link>
                  {submenuIndex === 1 ? (
                    <CiSquareMinus onClick={() => openSubMenu(1)} />
                  ) : (
                    <BsPlusSquare onClick={() => openSubMenu(1)} />
                  )}
                </Button>
              </div>
              {submenuIndex === 1 && (
                <>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Toys</Link>
                        {submenuTitleIndex === 0 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(0)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(0)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 0 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Robot
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Drone
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Musical Instruments
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Helicopter
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Car
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Home Appliances</Link>
                        {submenuTitleIndex === 1 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(1)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(1)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 1 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Microwave
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Dishwasher
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Air Conditioner
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Hair Dryer
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Desktop
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Smart Phone
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Television
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Washing Machine
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Wifi Router
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Headphone
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Keyboard
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Mouse
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Tube Light- bulb
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Heavy Machines</Link>
                        {submenuTitleIndex === 2 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(2)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(2)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 2 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Drilling machine
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Water Pump Motor
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Metal welding Machine
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Geaser
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Invertor - Generator
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Gadgets</Link>
                        {submenuTitleIndex === 3 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(3)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(3)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 3 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Smartphone
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Earbuds
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Bluetooth Speakers
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                VR Headsets
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Power Banks
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Smart Watch
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Laptop
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </>
              )}
            </li>
            {/* category 3 */}
            <li className="menu-title list-none">
              <div className="flex flex-row items-center justify-between !pr-[10px] ">
                <Button className="w-full flex !justify-between ">
                  {" "}
                  <Link to={"/fashion"}>Bags</Link>
                  {submenuIndex === 2 ? (
                    <CiSquareMinus onClick={() => openSubMenu(2)} />
                  ) : (
                    <BsPlusSquare onClick={() => openSubMenu(2)} />
                  )}
                </Button>
              </div>
              {submenuIndex === 2 && (
                <>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Ladies</Link>
                        {submenuTitleIndex === 0 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(0)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(0)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 0 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Leather
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Wollen
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Most Demanded
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Purse
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Boys</Link>
                        {submenuTitleIndex === 1 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(1)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(1)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 1 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Leather
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Casual
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Big Size
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Travelling Bag
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Purse
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Lagguge</Link>
                        {submenuTitleIndex === 2 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(2)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(2)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 2 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Small Handy
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Medium
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                large
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </>
              )}
            </li>
            {/* category 4 */}
            <li className="menu-title list-none">
              <div className="flex flex-row items-center justify-between !pr-[10px] ">
                <Button className="w-full flex !justify-between ">
                  {" "}
                  <Link to={"/fashion"}>Foot Wear</Link>
                  {submenuIndex === 3 ? (
                    <CiSquareMinus onClick={() => openSubMenu(3)} />
                  ) : (
                    <BsPlusSquare onClick={() => openSubMenu(3)} />
                  )}
                </Button>
              </div>
              {submenuIndex === 3 && (
                <>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Women</Link>
                        {submenuTitleIndex === 0 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(0)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(0)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 0 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Heels
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Sandles
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Flats
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Sneakers
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Mules
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                slippers
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Boots
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Ankle Boots
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Men</Link>
                        {submenuTitleIndex === 1 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(1)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(1)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 1 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Sneakers
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Loafers
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Derby Shoes
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Boots
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Sandles
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Slippers
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> kids</Link>
                        {submenuTitleIndex === 2 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(2)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(2)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 2 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Sneakers
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Loafers
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Sandals
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Boots
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Velcro Shoes
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Water Shoes
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                High Top sneakers
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </>
              )}
            </li>
            {/* category 5 */}
            <li className="menu-title list-none">
              <div className="flex flex-row items-center justify-between !pr-[10px] ">
                <Button className="w-full flex !justify-between ">
                  {" "}
                  <Link to={"/fashion"}>Beauty</Link>
                  {submenuIndex === 4 ? (
                    <CiSquareMinus onClick={() => openSubMenu(4)} />
                  ) : (
                    <BsPlusSquare onClick={() => openSubMenu(4)} />
                  )}
                </Button>
              </div>
              {submenuIndex === 4 && (
                <>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Makeup</Link>
                        {submenuTitleIndex === 0 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(0)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(0)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 0 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Foundation
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Mascara
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Lipstick
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Highlighter
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Blush
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Eye Shadow
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Setting Spray
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Makeup Box
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Other</Link>
                        {submenuTitleIndex === 1 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(1)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(1)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 1 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Bangles
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Nail Polish
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Rings
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Heena Tattoos
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Leggings
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </>
              )}
            </li>
            {/* category 6 */}
            <li className="menu-title list-none">
              <div className="flex flex-row items-center justify-between !pr-[10px] ">
                <Button className="w-full flex !justify-between ">
                  {" "}
                  <Link to={"/fashion"}>Jwellery</Link>
                  {submenuIndex === 5 ? (
                    <CiSquareMinus onClick={() => openSubMenu(5)} />
                  ) : (
                    <BsPlusSquare onClick={() => openSubMenu(5)} />
                  )}
                </Button>
              </div>
              {submenuIndex === 5 && (
                <>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Gold</Link>
                        {submenuTitleIndex === 0 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(0)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(0)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 0 && (
                        <ul className="submenu-items">
                        <li>
                          <Button className="w-full flex !justify-between !text-gray-800">
                            {" "}
                            <Link className="link " to={"/home"}>
                              {" "}
                              Necklaces
                            </Link>
                          </Button>
                        </li>
                        <li>
                          <Button className="w-full flex !justify-between !text-gray-800">
                            {" "}
                            <Link className="link " to={"/home"}>
                              {" "}
                              Earrings
                            </Link>
                          </Button>
                        </li>
                        <li>
                          <Button className="w-full flex !justify-between !text-gray-800">
                            {" "}
                            <Link className="link " to={"/home"}>
                              {" "}
                              Bracelets
                            </Link>
                          </Button>
                        </li>
                        <li>
                          <Button className="w-full flex !justify-between !text-gray-800">
                            {" "}
                            <Link className="link " to={"/home"}>
                              {" "}
                              Rings
                            </Link>
                          </Button>
                        </li>
                        <li>
                          <Button className="w-full flex !justify-between !text-gray-800">
                            {" "}
                            <Link className="link " to={"/home"}>
                              {" "}
                              Anklets
                            </Link>
                          </Button>
                        </li>
                        <li>
                          <Button className="w-full flex !justify-between !text-gray-800">
                            {" "}
                            <Link className="link " to={"/home"}>
                              {" "}
                              Charms
                            </Link>
                          </Button>
                        </li>
                        <li>
                          <Button className="w-full flex !justify-between !text-gray-800">
                            {" "}
                            <Link className="link " to={"/home"}>
                              {" "}
                              Body Chains
                            </Link>
                          </Button>
                        </li>
                        <li>
                          <Button className="w-full flex !justify-between !text-gray-800">
                            {" "}
                            <Link className="link " to={"/home"}>
                              {" "}
                              Cufflinks
                            </Link>
                          </Button>
                        </li>
                        <li>
                          <Button className="w-full flex !justify-between !text-gray-800">
                            {" "}
                            <Link className="link " to={"/home"}>
                              {" "}
                              Brooches
                            </Link>
                          </Button>
                        </li>
                      </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Silver</Link>
                        {submenuTitleIndex === 1 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(1)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(1)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 1 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Necklaces
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Earrings
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Bracelets
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Rings
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Anklets
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Charms
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Body Chains
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Cufflinks
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Brooches
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Diamond</Link>
                        {submenuTitleIndex === 2 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(2)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(2)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 2 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Necklace
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Ear- Tops
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Rings
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Anklets
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Cufflinks
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </>
              )}
            </li>
            {/* category7 */}
            <li className="menu-title list-none">
              <div className="flex flex-row items-center justify-between !pr-[10px] ">
                <Button className="w-full flex !justify-between ">
                  {" "}
                  <Link to={"/fashion"}>Fashion 7</Link>
                  {submenuIndex === 6 ? (
                    <CiSquareMinus onClick={() => openSubMenu(6)} />
                  ) : (
                    <BsPlusSquare onClick={() => openSubMenu(6)} />
                  )}
                </Button>
              </div>
              {submenuIndex === 6 && (
                <>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Accessories</Link>
                        {submenuTitleIndex === 0 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(0)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(0)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 0 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Sunglasses
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                HairBand
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Bags
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Caps
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Headphones
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Sub Fashion 2</Link>
                        {submenuTitleIndex === 1 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(1)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(1)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 1 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Sub Fashion 3</Link>
                        {submenuTitleIndex === 2 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(2)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(2)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 2 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </>
              )}
            </li>
            {/* category 8 */}
            <li className="menu-title list-none">
              <div className="flex flex-row items-center justify-between !pr-[10px] ">
                <Button className="w-full flex !justify-between ">
                  {" "}
                  <Link to={"/fashion"}>Fashion 8</Link>
                  {submenuIndex === 7 ? (
                    <CiSquareMinus onClick={() => openSubMenu(7)} />
                  ) : (
                    <BsPlusSquare onClick={() => openSubMenu(7)} />
                  )}
                </Button>
              </div>
              {submenuIndex === 7 && (
                <>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Accessories</Link>
                        {submenuTitleIndex === 0 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(0)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(0)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 0 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Sunglasses
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                HairBand
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Bags
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Caps
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Headphones
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Sub Fashion 2</Link>
                        {submenuTitleIndex === 1 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(1)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(1)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 1 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <ul className="submenu">
                    <li className="submenu-title">
                      <Button className="w-full flex !justify-between ">
                        {" "}
                        <Link to={"/home"}> Sub Fashion 3</Link>
                        {submenuTitleIndex === 2 ? (
                          <CiSquareMinus onClick={() => openSubmenuTitle(2)} />
                        ) : (
                          <BsPlusSquare onClick={() => openSubmenuTitle(2)} />
                        )}
                      </Button>
                    </li>
                    <li>
                      {" "}
                      {submenuTitleIndex === 2 && (
                        <ul className="submenu-items">
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                          <li>
                            <Button className="w-full flex !justify-between !text-gray-800">
                              {" "}
                              <Link className="link " to={"/home"}>
                                {" "}
                                Items
                              </Link>
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </>
              )}
            </li>
          </ul>
          <hr />
        </div>

        <Button className="w-full" onClick={toggleDrawer(false)}>
          Close
        </Button>
      </div>
    </Box>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        className=" !font-bold flex items-center gap-1 text-blue-600"
      >
        <TfiMenuAlt />
        <span className="categoriesTitle">Shop By Categories</span>{" "}
        <MdKeyboardArrowDown />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
