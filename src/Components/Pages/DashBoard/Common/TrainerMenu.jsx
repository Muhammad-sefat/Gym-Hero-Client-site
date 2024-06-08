import { FaPeopleGroup } from "react-icons/fa6";
import CommonMenu from "./CommonMenu";
import { MdAddComment, MdOutlineRequestQuote } from "react-icons/md";

const TrainerMenu = () => {
  return (
    <div>
      <CommonMenu
        link={"/Dashboard"}
        title={"Manage Slots"}
        icon={FaPeopleGroup}
      />
      <CommonMenu
        link={"Add-new-slot"}
        title={"Add New Slot"}
        icon={MdOutlineRequestQuote}
      />
      <CommonMenu
        link={"Add-new-forum"}
        title={"Add New Forum"}
        icon={MdAddComment}
      />
    </div>
  );
};

export default TrainerMenu;
