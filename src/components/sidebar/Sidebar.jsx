import React from "react";
import "./sidebar.css";
/*icont*/

import { MdOutlineLineStyle } from "react-icons/md";
import { MdOutlineTimeline } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";

import { FaRegUser } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

import { AiOutlineMail } from "react-icons/ai";
import { MdDynamicFeed } from "react-icons/md";
import { BiMessage } from "react-icons/bi";

import { MdWorkOutline } from "react-icons/md";
import { MdReport } from "react-icons/md";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <MdOutlineLineStyle /> Home
            </li>
            </Link>

            <li className="sidebarListItem">
              <MdOutlineTimeline /> Analytics
            </li>

            <li className="sidebarListItem">
              <BiTrendingUp /> Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <FaRegUser /> Users
              </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sidebarListItem">
              <BsShop /> Products
            </li>
            </Link>
            <Link />

            <li className="sidebarListItem">
              <PiCurrencyDollarSimpleBold /> Transactions
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <AiOutlineMail /> Mail
            </li>

            <li className="sidebarListItem">
              <MdDynamicFeed /> Feedback
            </li>

            <li className="sidebarListItem">
              <BiMessage /> Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MdWorkOutline /> Manage
            </li>

            <li className="sidebarListItem">
              <MdOutlineTimeline /> Analytics
            </li>

            <li className="sidebarListItem">
              <MdReport /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
