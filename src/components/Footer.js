import { useContext } from "react";
import useContextAPI from "./utils/useContextAPI";
import { ImLinkedin2 } from "react-icons/im";
import { TbBrandGithub } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

let Footer = () => {
  let { user } = useContext(useContextAPI);

  return (
    <div className="w-full bg-darkblue text-white py-4">
      <h3 className=" text-center font-medium xs:text-[13px]">
        2023 © Food Restaurant Developed By {user.name} - {user.email}
      </h3>
      <div className="flex items-center justify-center gap-5 pt-5">
        <Link to={"https://www.linkedin.com/in/saikumar-reddy-4b757b2a4/"} className="">
          <ImLinkedin2 size={20} />
        </Link>
        <Link to={"https://github.com/Geerisaikumar"} className="">
          <TbBrandGithub size={20} />
        </Link>
        <Link to={"https://twitter.com/Saikumar_Geeri"} className="">
          <BsTwitter size={20} />
        </Link>
        <Link to={"https://www.instagram.com/gabbarsingh_03/"} className="">
          <BsInstagram size={20} />
        </Link>
        <Link to={"https://www.facebook.com/"} className="">
          <FaFacebookSquare size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
