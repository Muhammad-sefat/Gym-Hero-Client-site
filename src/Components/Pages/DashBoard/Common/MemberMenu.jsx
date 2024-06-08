import { MdOutlineRecommend } from "react-icons/md";
import CommonMenu from "./CommonMenu";
import { GrEject } from "react-icons/gr";

const MemberMenu = () => {
  return (
    <div>
      <CommonMenu
        link={"/Dashboard"}
        title={"Activity Log Page"}
        icon={GrEject}
      />
      <CommonMenu
        link={"recommended-classes"}
        title={"Recommended Classes"}
        icon={MdOutlineRecommend}
      />
    </div>
  );
};

export default MemberMenu;
