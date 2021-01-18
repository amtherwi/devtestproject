import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,Menu,MenuItem,SubMenu,SidebarHeader,SidebarFooter,SidebarContent,
} from 'react-pro-sidebar';
import {FaBars, FaTachometerAlt, FaGem,FaTh, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import LogoBW from '../assets/logoBW.svg';
import KapsarkLogo from '../assets/kapsarklogo.svg';
import { Link } from 'react-router-dom';
const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  return (
   
    <ProSidebar
      image={false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
             padding: '24px',
            
            display:'block',
         
          }}
        >
          <img width='200px' alt="Kapsark logo" src={KapsarkLogo} />      

        </div>

      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
        <MenuItem
            icon={<FaTachometerAlt />}
            // suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            Home
            <Link to="/" />
          </MenuItem>
          <MenuItem
            icon={<FaTachometerAlt />}
            // suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            {intl.formatMessage({ id: 'dashboard' })}
            <Link to="/dashboard" />
          </MenuItem>
          <MenuItem icon={<FaTh />}>
           {intl.formatMessage({ id: 'countries' })}
           <Link to="/countries" />
           </MenuItem>
        </Menu>
       
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/amtherwi/KABSARK_Dev_test"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> {intl.formatMessage({ id: 'viewSource' })}</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
 
  );
};

export default Aside;
