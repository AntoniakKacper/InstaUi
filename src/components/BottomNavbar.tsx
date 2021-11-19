import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from "@mui/material/Avatar";
import 'App.scss';
import { Link } from 'react-router-dom';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface ListOfButtonTypes {
    value: string;
    icon: React.ReactElement<SvgIconProps>;
}

interface BottomNavbarProps {

}

export const BottomNavbar: React.FC<BottomNavbarProps> = () => {
    const [value, setValue] = React.useState("home");
    const ListOfButtons: ListOfButtonTypes[] = [
        {
            value: "home",
            icon: <HomeIcon />,
        },
        {
            value: "search",
            icon: <SearchIcon />,
        },
        {
            value: "profile",
            icon:<BottomNavigationAction icon={<Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                sx={{ width: 24, height: 24 }}
            />} />
        }
    ];

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

  return (

          <BottomNavigation value={value} onChange={handleChange} className="bottom-navbar">
              {ListOfButtons.map((button) => {
                  return (
                      <BottomNavigationAction
                          key={button.value}
                          component={Link}
                          to={`/${button.value}`}
                          value={button.value}
                          icon={button.icon}
                      />
                  );
              })}
          </BottomNavigation>

  );
 }