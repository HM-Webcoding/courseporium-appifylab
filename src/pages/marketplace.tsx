import Head from 'next/head';
import {
  IconKeyboardArrowNext,
  IconKeyboardArrowPrev,
  IconTopicCoinPackage,
  IconTopicCommunities,
  IconTopicCourse,
  IconTopicDigitalProducts,
  IconTopicEvents,
  IconTopicGroupChat,
  IconTopicLiveProdducts,
  IconTopicPhysicalProducts,
  IconTopicPrivateChat,
} from '@/components/icons/marketplaceIcons';
import {ReactNode, useRef, useState} from 'react';
import {Carousel, Pagination} from 'antd';

import {FilterSidebar} from '@/Modules/MarketPlace/FilterSidebar';
import {MainContent} from '@/Modules/MarketPlace/MainContent';

const Marketplace = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const onChangeItem = (currentItem: number) => {
    console.log(currentItem);
    setCurrentSlide(currentItem);
  };

  const settings = {
    className: 'flex',
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    gap: 10,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Ezycourse Marketplace</title>
        <meta name="description" content="Schedule Appointments Effortlessly" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blogs" />
        <meta
          property="og:description"
          content="Schedule Appointments Effortlessly"
        />
        <meta
          property="og:url"
          content="https://ezycourse.com/feature/appointment-booking"
        />
        <meta property="og:site_name" content="EzyCourse" />
        <meta
          property="og:image"
          content="https://letcheck.b-cdn.net/129/clx8jzac40021e08z7yqt087w.png"
        />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="840" />
        <meta property="og:image:type" content="image/png" />
      </Head>

      <div className="bg-[#F5F6F7]">
        {/* TOPICS START */}
        <section className="py-12">
          <div className="container">
            {/* wrapper */}
            <div className="relative">
              <Carousel
                {...settings}
                ref={sliderRef}
                afterChange={onChangeItem}>
                <TopicItem icon={<IconTopicCourse />} topic="Courses" />
                <TopicItem
                  icon={<IconTopicCommunities className="text-[#FD71AF]" />}
                  topic="Community"
                />
                <TopicItem
                  icon={<IconTopicEvents className="text-[#00B884]" />}
                  topic="Events"
                />
                <TopicItem
                  icon={
                    <IconTopicGroupChat className="fill-white text-[#FFC53D]" />
                  }
                  topic="Group Chat"
                />
                <TopicItem
                  icon={<IconTopicDigitalProducts className="text-[#FF02F0]" />}
                  topic="Digital Product"
                />
                <TopicItem
                  icon={
                    <IconTopicPhysicalProducts className="text-[#1F7CFF]" />
                  }
                  topic="Physical Product"
                />
                <TopicItem
                  icon={<IconTopicLiveProdducts className="text-[#FF9900]" />}
                  topic="Live Products"
                />
                <TopicItem
                  icon={<IconTopicPrivateChat className="text-[#7B68EE]" />}
                  topic="Private chat"
                />
                <TopicItem
                  icon={<IconTopicCoinPackage className="text-[#7B68EE]" />}
                  topic="Coin Packages"
                />
              </Carousel>

              {/* prev arrow buttons */}
              <button
                style={
                  currentSlide === 0 ? {display: 'none'} : {display: 'flex'}
                }
                className="absolute -left-1 top-1/2 flex -translate-y-1/2 items-center rounded-full border border-solid border-ezy-gray-200 bg-white p-3 transition-all duration-300 ease-in-out hover:border-ezy-primary hover:bg-ezy-primary-200"
                onClick={() => sliderRef?.current?.prev()}>
                <IconKeyboardArrowPrev className="text-xs text-black" />
              </button>
              {/* next arrow buttons */}
              <button
                style={
                  currentSlide === 6 ? {display: 'none'} : {display: 'flex'}
                }
                className="absolute -right-1 top-1/2 flex -translate-y-1/2 items-center rounded-full border border-solid border-ezy-gray-200 bg-white p-3 transition-all duration-300 ease-in-out hover:border-ezy-primary hover:bg-ezy-primary-200"
                onClick={() => sliderRef?.current?.next()}>
                <IconKeyboardArrowNext className="text-xs text-black" />
              </button>
            </div>
          </div>
        </section>
        {/* TOPICS END */}

        {/* CONTENT AREA START */}
        <section className="pb-12 md:pb-28">
          <div className="container">
            <div className="flex flex-col items-start gap-y-12 md:flex-row md:gap-x-10">
              {/* marketplace filter sidebar */}
              <div className="h-full w-full rounded-2xl bg-white p-6 sm:min-w-[258px] sm:max-w-[242px]">
                <FilterSidebar />
              </div>
              {/* main content */}
              <div>
                <MainContent />
              </div>
            </div>
            {/* Pagination section start */}
            <div className="marketplace-ant-pagination pt- flex justify-center pt-12 sm:pt-20 ">
              <Pagination defaultCurrent={1} total={100} />
            </div>
          </div>
        </section>

        {/* CONTENT AREA END*/}

        {/* end of page */}
      </div>
    </>
  );
};

export default Marketplace;

interface TopicItemProps {
  icon: ReactNode;
  topic: string;
}

const TopicItem = ({icon, topic}: TopicItemProps) => {
  return (
    <div className="mx-3 flex min-h-[118px] min-w-[130px] max-w-full flex-col items-center justify-center gap-y-2 self-stretch rounded-lg border border-solid border-transparent bg-white p-4 transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-ezy-primary">
      <span className="flex items-center text-xl font-bold">{icon}</span>
      <h5 className="text-center text-lg font-medium text-black">{topic}</h5>
    </div>
  );
};
