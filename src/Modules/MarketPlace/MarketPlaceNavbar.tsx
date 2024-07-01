import {
  IconBars,
  IconGridView,
  IconListView,
  IconSearch,
} from '@/components/icons/marketplaceIcons';
import {Input, TreeSelect} from 'antd';
import React, {useState} from 'react';

const treeData = [
  {
    value: 'Best Seller',
    title: 'Best Seller',
  },
  {
    value: 'Latest',
    title: 'Latest',
  },
  {
    value: 'Accending',
    title: 'Accending',
  },
  {
    value: 'Decending',
    title: 'Decending',
  },
  {
    value: 'All',
    title: 'All',
  },
];

const MarketPlaceNavbar = ({showDrawer}) => {
  const [isGridView, setIsGridView] = useState(true);
  const [value, setValue] = useState<string | undefined>(undefined);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-y-4 pb-8 lg:flex-row">
      <div className="relative flex w-full items-center justify-between gap-8 md:w-auto">
        <div className="md:hidden" onClick={showDrawer}>
          <IconBars style={{cursor: 'pointer'}} />
        </div>
        <div>
          <Input placeholder="Search" />
          <span className=" absolute right-[18px] top-[30%] cursor-pointer">
            <IconSearch />
          </span>
        </div>
      </div>
      <div className="flex w-full justify-between gap-1 gap-y-4 sm:gap-x-[30px] md:w-auto">
        {/* filter option */}
        <div className="flex items-center gap-2.5 sm:gap-6">
          <span className="text-base font-medium text-black">Sort by</span>
          <TreeSelect
            value={value}
            dropdownStyle={{maxHeight: 400}}
            treeData={treeData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={onChange}
          />
        </div>

        {/* view option */}
        <div className="flex items-center gap-3">
          <span className="text-base font-medium text-black">View:</span>
          <div className="flex items-center gap-2 ">
            <button
              onClick={() => setIsGridView(true)}
              className={`flex h-8 items-center bg-transparent p-1 transition-all duration-300 ease-in-out ${isGridView ? 'rounded bg-[#EAE8F8]' : ''}`}>
              <IconGridView style={{cursor: 'pointer', color: '#7B68EE'}} />
            </button>

            <button
              onClick={() => setIsGridView(false)}
              className={`flex h-8 items-center bg-transparent p-1 transition-all duration-300 ease-in-out ${!isGridView ? 'rounded bg-[#EAE8F8]' : ''}`}>
              <IconListView style={{cursor: 'pointer', color: '#666666'}} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceNavbar;
