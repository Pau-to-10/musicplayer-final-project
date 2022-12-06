import { NavLink } from "react-router-dom";
import { navBarData } from "../utils/navBarData";
import { ResponsiveStyles } from '../ui/homegrid/ResponsiveStyles'
import { WrapperNav } from '../ui'

export const HomeNavBar = () => {
  return (
    <>
      <ResponsiveStyles />
      <WrapperNav>
        {navBarData.map((item, index) => {
          return (
            <div key={index} className="navbar">
              <li>
                <NavLink to={item.path}>
                  <span>{item.icon}</span>
                </NavLink>
              </li>
            </div>
          );
        })}
      </WrapperNav>
    </>
  );
};
