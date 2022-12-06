import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

export const navBarData = [
  {
    title: "Home",
    path: "/userhome",  //en vez de home¿?
    icon: <AiFillHome />,
  },
  {
    title: "Wish",
    path: "/wish",
    icon: <AiOutlineHeart />,
  },
  {
    title: "Search",
    path: "/search",
    icon: <BsSearch />,
  },
  {
    title: "Profile",
    path: "/profile", //la de editar perfil
    icon: <FaUserAlt />,
  },
];
