'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type MenuItemProps = {
  route: string;
  label: string;
  imgURL: string;
};

const MenuItem = ({ imgURL, label, route }: MenuItemProps) => {
  const pathname = usePathname();

  const isActive = useMemo(
    () => (pathname.includes(route) && route.length > 1) || pathname === route,
    [pathname, route],
  );

  return (
    <Link
      href={route}
      className={`${isActive && 'bg-primary-500'} leftsidebar_link hover:bg-primary-500`}
    >
      <Image src={imgURL} alt={label} width={24} height={24} />
      <p className="text-light-1 max-lg:hidden">{label}</p>
    </Link>
  );
};

export default MenuItem;
