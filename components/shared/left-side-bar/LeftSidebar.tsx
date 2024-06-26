import React from 'react';
import { sidebarLinks } from '../../../constants/index';
import MenuItem from './MenuItem';
import LogoutItem from './LogoutItem';

const LeftSidebat = () => {
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6 ">
        {sidebarLinks.map((link) => (
          <MenuItem key={link.route} {...link} />
        ))}
      </div>
      <LogoutItem />
    </section>
  );
};

export default LeftSidebat;
