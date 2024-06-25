import {cn} from '@/utils/cn';
import {HtmlHTMLAttributes, ReactNode, useState} from 'react';

interface TopicItemProps extends HtmlHTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  label: string;
}

const TopicItem = ({className = '', icon, label, ...props}: TopicItemProps) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          'mx-3 flex min-h-[118px] min-w-[130px] max-w-full flex-col items-center justify-center gap-y-2 self-stretch rounded-lg border border-solid border-transparent bg-white p-4 transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-ezy-primary',
          className
        )}>
        <span className="flex items-center text-xl font-bold">{icon}</span>
        <h5 className="text-center text-lg font-medium text-black">{label}</h5>
      </div>
    </>
  );
};

export default TopicItem;
