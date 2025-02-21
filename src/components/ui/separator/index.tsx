import * as React from 'react';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    { className = '', orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => {
    const ariaProps = decorative
      ? { role: 'none' }
      : { role: 'separator', 'aria-orientation': orientation };

    return (
      <div
        ref={ref}
        className={`shrink-0 bg-border ${
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'
        } ${className}`}
        {...ariaProps}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';

export { Separator };
