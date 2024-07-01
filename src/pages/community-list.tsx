import {FilterSidebar} from '@/Modules/MarketPlace/FilterSidebar';
import MarketPlaceCard from '@/Modules/MarketPlace/MarketPlaceCard';
import MarketPlaceNavbar from '@/Modules/MarketPlace/MarketPlaceNavbar';

import {Drawer, Pagination} from 'antd';
import React from 'react';
import {useState} from 'react';

export const marketplaceCardData = [
  {
    id: '1',
    cardImgUrl:
      'https://letcheck.b-cdn.net/129/clx7fldd2007vsp8zes0l7o6d.png?width=1024',
    title: 'Web Developments',
    content:
      'Master the fundamentals of UX design to build a solid foundation in design principles',
    courseLabel: 'Beginner',
    videoDuration: 6,
    discountedPrice: 10,
    afterDiscountPrice: 30,
    reviews: 15,
    rating: 3.5,
  },
  {
    cardImgUrl:
      'https://letcheck.b-cdn.net/129/clxd4jlke0b4vvi9n3g3w71du.png?width=1024',
    id: '2',
    title: 'UI/UX Foundations',
    content: '',
    courseLabel: 'Beginner',
    videoDuration: 9,
    discountedPrice: 5,
    afterDiscountPrice: 35,
    reviews: 6,
    rating: 5,
  },
  {
    cardImgUrl:
      'https://letcheck.b-cdn.net/129/clxd4mk4y0ahpwb9nf5ad4u84.png?width=1024',
    id: '3',
    title: 'Web SEO Analytics',
    content:
      'Master the fundamentals of UX design to build a solid foundation in design principles',
    courseLabel: 'Mid lavel',
    videoDuration: 9,
    discountedPrice: 20,
    afterDiscountPrice: 100,
    reviews: 19,
    rating: 4,
  },
  {
    id: '4',
    cardImgUrl:
      'https://letcheck.b-cdn.net/129/clx7fldd2007vsp8zes0l7o6d.png?width=1024',
    title: 'Backend Development',
    content:
      'Master the fundamentals of UX design to build a solid foundation in design principles',
    courseLabel: 'Advanced',
    videoDuration: 7,
    discountedPrice: 30,
    afterDiscountPrice: 80,
    reviews: 17,
    rating: 4.5,
  },
  {
    id: '5',
    cardImgUrl:
      'https://letcheck.b-cdn.net/129/clxa9nl3v006d1g8z052n83lc.jpg?width=1024',
    title: 'Web Developments',
    content:
      'Master the fundamentals of UX design to build a solid foundation in design principles',
    courseLabel: 'Beginner',
    videoDuration: 6,
    discountedPrice: 20,
    afterDiscountPrice: 30,
    reviews: 15,
    rating: 3,
  },
  {
    cardImgUrl:
      'https://letcheck.b-cdn.net/129/clxd4jlke0b4vvi9n3g3w71du.png?width=1024',
    id: '6',
    title: 'UI/UX Foundations',
    content:
      'Master the fundamentals of UX design to build a solid foundation in design principles',
    courseLabel: 'Beginner',
    videoDuration: 9,
    discountedPrice: 5,
    afterDiscountPrice: 35,
    reviews: 6,
    rating: 5,
  },
  {
    cardImgUrl:
      'https://letcheck.b-cdn.net/129/clxd4mk4y0ahpwb9nf5ad4u84.png?width=1024',
    id: '7',
    title: 'Web SEO Analytics',
    content:
      'Master the fundamentals of UX design to build a solid foundation in design principles',
    courseLabel: 'Mid lavel',
    videoDuration: 9,
    discountedPrice: 20,
    afterDiscountPrice: 100,
    reviews: 19,
    rating: 5,
  },
  {
    id: '8',
    cardImgUrl:
      'https://letcheck.b-cdn.net/129/clx7fldd2007vsp8zes0l7o6d.png?width=1024',
    title: 'Backend Development',
    content:
      'Master the fundamentals of UX design to build a solid foundation in design principles',
    courseLabel: 'Advanced',
    videoDuration: 7,
    discountedPrice: 30,
    afterDiscountPrice: 80,
    reviews: 17,
    rating: 4,
  },
];

const CommunityList = () => {
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
              <div className="grid gap-5 lg:grid-cols-2 xl:gap-x-10 xl:gap-y-[30px] xxl:grid-cols-3">
                <MarketPlaceCard marketplaceCardData={marketplaceCardData} />
              </div>
              {/* Pagination section start */}
              <div className="marketplace-ant-pagination pt- flex  pt-12 sm:pt-20 ">
                <Pagination defaultCurrent={1} total={100} />
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
