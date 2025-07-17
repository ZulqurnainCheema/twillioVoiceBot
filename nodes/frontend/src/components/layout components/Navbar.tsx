import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-solid border-b-[#ededed] px-10 py-3 w-screen">
      <div className="flex items-center gap-4 text-[#141414]">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_319)">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_319">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
          Voice AI
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-9">
            <NavigationMenuItem>
              <NavLink
                to="/"
                className="text-[#141414] text-sm font-medium leading-normal"
              >
                Dashboard
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/models"
                className="text-[#141414] text-sm font-medium leading-normal"
              >
                Models
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/compaigns"
                className="text-[#141414] text-sm font-medium leading-normal"
              >
                Compaigns
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="#"
                className="text-[#141414] text-sm font-medium leading-normal"
              >
                Stats
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/contacts"
                className="text-[#141414] text-sm font-medium leading-normal"
              >
                Calls
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/leads"
                className="text-[#141414] text-sm font-medium leading-normal"
              >
                Leads
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADXAOO3yrTLXQQ0hKfj5CmwBiVpMDEIgVfq9FHbwnOuMoQPC5zh0kRfaJgqs8-9Gl72Mw1mWy3SJx3BOFX8uzgpLc9-9kkDt7Pw6iq8M3sQ8hSBKewUNlm8vxAAHqkwI9E5mdA6cqtAwoQ6xpkRmtpqEamKwgj5UvwoVbYDre6CvrDqnJl1pTVO7geQbMCiJHtUga72rGM1e_MRhuNN5P8XX8ZNJr7DO2tO2HMpJU1AfJMZ0g-xFINVPXuPncdcO565FjrdntJrno")',
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
