import React from 'react';
import { useUserStore } from '@/store/userStore';

const ProfilePicture: React.FC = () => {
  const { user } = useUserStore();

  return (
    <div className="relative w-24 h-24">
      <img
        src={user?.profile_image_url || 'img/person.png'}
        alt="Profile"
        className="w-full h-full rounded-full object-cover border border-gray-300"
      />
    </div>
  );
};

export default ProfilePicture;
