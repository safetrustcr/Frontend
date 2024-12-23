import React from 'react';

const Notes: React.FC = () => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-light-secondary dark:text-dark-primary">Notes</h3>
      <p className="text-light-secondary dark:text-dark-primary text-sm mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default Notes;
