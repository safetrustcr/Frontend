import React from 'react';

interface Props {
  src: string;
}

const ProfilePicture: React.FC<Props> = ({ src }) => {
  return (
    <div className="relative w-24 h-24">
      <img
        src={src}
        alt="Profile"
        className="w-full h-full rounded-full object-cover border border-gray-300"
      />
    </div>
  );
};

export default ProfilePicture;
