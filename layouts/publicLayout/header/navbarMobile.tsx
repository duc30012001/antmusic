'use client';

import { Drawer } from 'antd';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Menu from './menu';

type Props = {};

function NavbarMobile({}: Props) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <i onClick={showDrawer} className="text-2xl">
        <FaBars />
      </i>
      <Drawer
        title={null}
        placement="right"
        onClose={onClose}
        open={open}
        destroyOnClose
        // closeIcon={null}
      >
        <ul>
          <Menu />
        </ul>
      </Drawer>
    </div>
  );
}

export default NavbarMobile;
