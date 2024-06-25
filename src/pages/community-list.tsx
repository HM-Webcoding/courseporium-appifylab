import {CardData} from '@/Modules/MarketPlace/CardData';
import {FilterSidebar} from '@/Modules/MarketPlace/FilterSidebar';
import MarketPlaceCard from '@/Modules/MarketPlace/MarketPlaceCard';
import MarketPlaceNavbar from '@/Modules/MarketPlace/MarketPlaceNavbar';

import {Drawer, Pagination} from 'antd';
import React from 'react';
import {useState} from 'react';

const CommunityList = () => {
  const [data, setData] = useState(CardData);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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

            <Drawer
              placement="left"
              onClose={onClose}
              open={open}
              width={260}
              className=" md:hidden">
              <FilterSidebar />
            </Drawer>

            {/* main content */}
            <main className="w-full ">
              <MarketPlaceNavbar showDrawer={showDrawer} />
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
            </main>
          </div>
        </div>
      </section>

      {/* CONTENT AREA END*/}
    </>
  );
};

export default CommunityList;
