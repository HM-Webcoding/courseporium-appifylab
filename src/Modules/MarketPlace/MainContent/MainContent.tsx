import MarketPlaceCard from '@/Modules/MarketPlace/MarketPlaceCard';
import {
  IconGridView,
  IconListView,
  IconSearch,
} from '@/components/icons/marketplaceIcons';
import {Input, TreeSelect} from 'antd';
import React from 'react';
import {useState} from 'react';
import {CardData} from '../CardData';

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

const MainContent = () => {
  const [data, setData] = useState(CardData);
  const [value, setValue] = useState<string | undefined>(undefined);
  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="community-list-ant-design w-full">
        <div className="flex flex-col items-center justify-between gap-y-4 pb-8 lg:flex-row">
          <div className="relative">
            <Input placeholder="Search" />
            <span className=" absolute right-[18px] top-[30%] cursor-pointer">
              <IconSearch />
            </span>
          </div>
          <div className="flex flex-col gap-x-[30px] gap-y-4 sm:flex-row">
            {/* filter option */}
            <div className="flex items-center gap-6">
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
                <IconGridView style={{cursor: 'pointer'}} />
                <IconListView style={{cursor: 'pointer'}} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-2 xl:gap-x-10 xl:gap-y-[30px] xxl:grid-cols-3">
          {data.map(item => (
            <MarketPlaceCard
              key={item.id}
              cardImgUrl={item.cardImgUrl}
              title={item.title}
              content={item.content}
              courseLabel={item.courseLabel}
              videoDuration={item.videoDuration}
              discountedPrice={item.discountedPrice}
              afterDiscountPrice={item.afterDiscountPrice}
              reviews={item.reviews}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainContent;
