import {CardData} from '@/Modules/MarketPlace/CardData';
import {FilterSidebar} from '@/Modules/MarketPlace/FilterSidebar';
import MarketPlaceCard from '@/Modules/MarketPlace/MarketPlaceCard';
import {
  IconBars,
  IconClose,
  IconGridView,
  IconListView,
  IconSearch,
} from '@/components/icons/marketplaceIcons';
import {Input, Pagination, TreeSelect} from 'antd';
import React from 'react';
import {useState} from 'react';

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

const CommunityList = () => {
  const [data, setData] = useState(CardData);
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      {/* CONTENT AREA START */}
      <section className="community-list-ant-design bg-[#f8f8f8] pb-12 pt-[30px] md:pb-28">
        <div className="container">
          <div className="flex flex-col items-start gap-y-12 md:flex-row md:gap-x-10">
            {/* marketplace filter sidebar */}
            <div className="hidden h-full w-full rounded-2xl bg-white p-6 sm:min-w-[258px] sm:max-w-[242px] md:block">
              <FilterSidebar />
            </div>
            {isFilterSidebarOpen ? (
              <div className="fixed left-0 top-0 z-50 h-full w-[250px] overflow-auto bg-white p-4 md:hidden">
                <FilterSidebar />
                <div
                  onClick={() => setIsFilterSidebarOpen(false)}
                  className="fixed left-[218px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-black">
                  <IconClose
                    style={{
                      cursor: 'pointer',
                      color: 'white',
                      width: '15px',
                    }}
                  />
                </div>
              </div>
            ) : null}

            {/* main content */}
            <div className="w-full ">
              <div className="flex flex-col items-center justify-between gap-y-4 pb-8 lg:flex-row">
                <div className="relative flex items-center gap-8">
                  <div
                    className="md:hidden"
                    onClick={() => setIsFilterSidebarOpen(true)}>
                    <IconBars style={{cursor: 'pointer'}} />
                  </div>
                  <div>
                    <Input placeholder="Search" />
                    <span className=" absolute right-[18px] top-[30%] cursor-pointer">
                      <IconSearch />
                    </span>
                  </div>
                </div>
                <div className="flex gap-2.5 gap-y-4 sm:gap-x-[30px] ">
                  {/* filter option */}
                  <div className="flex items-center gap-2.5 sm:gap-6">
                    <span className="text-base font-medium text-black">
                      Sort by
                    </span>
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
                    <span className="text-base font-medium text-black">
                      View:
                    </span>
                    <div className="flex items-center gap-2 ">
                      <IconGridView style={{cursor: 'pointer'}} />
                      <IconListView style={{cursor: 'pointer'}} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
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
                {/* Pagination section start */}
                <div className="marketplace-ant-pagination pt- flex  pt-12 sm:pt-20 ">
                  <Pagination defaultCurrent={1} total={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT AREA END*/}
    </>
  );
};

export default CommunityList;
