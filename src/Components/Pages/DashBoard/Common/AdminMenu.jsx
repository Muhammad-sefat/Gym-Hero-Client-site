import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import CommonMenu from "./CommonMenu";
import { FaPeopleGroup } from "react-icons/fa6";
import {
  MdAccountBalance,
  MdAddComment,
  MdOutlineRequestQuote,
} from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <div>
      {/* Newsletter */}
      <CommonMenu
        link="/Dashboard"
        title={"All NewsLetters"}
        icon={IoNewspaperOutline}
      />
      {/* All Trainers */}
      <CommonMenu
        link="all-trainers"
        title={"All Trainers"}
        icon={FaPeopleGroup}
      />

      {/* Applied trainers*/}
      <CommonMenu
        link="applied-trainers"
        title={"Applied Trainers"}
        icon={MdOutlineRequestQuote}
      />
      {/* Add new class */}
      <CommonMenu
        link="add-class"
        title={"Add Class"}
        icon={FaRegAddressCard}
      />
      {/* add new forum */}
      <CommonMenu
        link={"Add-new-forum"}
        title={"Add New Forum"}
        icon={MdAddComment}
      />
      {/* Balance */}
      <CommonMenu link="balance" title={"Balance"} icon={MdAccountBalance} />
    </div>
  );
};

export default AdminMenu;
