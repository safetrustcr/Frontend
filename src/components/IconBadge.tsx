import React from 'react';
import { IconType } from 'react-icons';

interface IconBadgeProps {
  Icon: IconType;
  bgColor?: string;
}

export default function IconBadge({
  Icon,
  bgColor = 'bg-transparent',
}: IconBadgeProps) {
  return (
    <div
      className={`w-8 h-8 ${bgColor} rounded-full grid place-content-center`}
    >
      <Icon className={`w-6 h-6 text-default-color`} />
    </div>
  );
}
