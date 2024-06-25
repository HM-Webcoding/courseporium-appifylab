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
import {Carousel} from 'antd';
import {useRef, useState} from 'react';
import TopicItem from './TopicItem';

const DATA = [
  {
    id: '1',
    icon: <IconTopicCourse />,
    label: 'Course',
    activeClass: 'border-[#7B68EE]',
  },
  {
    id: '2',
    icon: <IconTopicCommunities className="text-[#FD71AF]" />,
    label: 'Community',
    activeClass: 'border-[#FD71AF]',
    hoverClass: 'hover:border-[#FD71AF]',
  },
  {
    id: '3',
    icon: <IconTopicEvents className="text-[#00B884]" />,
    label: 'Events',
    activeClass: 'border-[#00B884]',
    hoverClass: 'hover:border-[#00B884]',
  },
  {
    id: '4',
    icon: <IconTopicGroupChat className="fill-white text-[#FFC53D]" />,
    label: 'Group Chat',
    activeClass: 'border-[#FFC53D]',
    hoverClass: 'hover:border-[#FFC53D]',
  },
  {
    id: '5',
    icon: <IconTopicDigitalProducts className="text-[#FF02F0]" />,
    label: 'Digital Product',
    activeClass: 'border-[#FF02F0]',
    hoverClass: 'hover:border-[#FF02F0]',
  },
  {
    id: '6',
    icon: <IconTopicPhysicalProducts className="text-[#1F7CFF]" />,
    label: 'Physical Product',
    activeClass: 'border-[#1F7CFF]',
    hoverClass: 'hover:border-[#1F7CFF]',
  },
  {
    id: '7',
    icon: <IconTopicLiveProdducts className="text-[#FF9900]" />,
    label: 'Live Products',
    activeClass: 'border-[#FF9900]',
    hoverClass: 'hover:border-[#FF9900]',
  },
  {
    id: '8',
    icon: <IconTopicPrivateChat className="text-[#7B68EE]" />,
    label: 'Private Chat',
    activeClass: 'border-[#7B68EE]',
    hoverClass: 'hover:border-[#7B68EE]',
  },
  {
    id: '9',
    icon: <IconTopicCoinPackage className="text-[#7B68EE]" />,
    label: 'Coin Packages',
    activeClass: 'border-[#9C8EF2]',
    hoverClass: 'hover:border-[#9C8EF2]',
  },
];

const TopicCarousel = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTopic, setActiveTopic] = useState(DATA[0].label);

  const onChangeItem = (currentItem: number) => {
    // console.log(currentItem);
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
      <div className="relative">
        <Carousel {...settings} ref={sliderRef} afterChange={onChangeItem}>
          {DATA.map(item => {
            const isActive = activeTopic === item.label;
            return (
              <div key={item.id}>
                <TopicItem
                  icon={item.icon}
                  label={item.label}
                  onClick={() => setActiveTopic(item.label)}
                  className={`${isActive ? item.activeClass : ''} ${item.hoverClass}`}
                />
              </div>
            );
          })}
        </Carousel>

        {/* prev arrow buttons */}
        <button
          style={currentSlide === 0 ? {display: 'none'} : {display: 'flex'}}
          className="absolute -left-1 top-1/2 flex -translate-y-1/2 items-center rounded-full border border-solid border-ezy-gray-200 bg-white p-3 transition-all duration-300 ease-in-out hover:border-ezy-primary hover:bg-ezy-primary-200"
          onClick={() => sliderRef?.current?.prev()}>
          <IconKeyboardArrowPrev className="text-xs text-black" />
        </button>
        {/* next arrow buttons */}
        <button
          style={currentSlide === 6 ? {display: 'none'} : {display: 'flex'}}
          className="absolute -right-1 top-1/2 flex -translate-y-1/2 items-center rounded-full border border-solid border-ezy-gray-200 bg-white p-3 transition-all duration-300 ease-in-out hover:border-ezy-primary hover:bg-ezy-primary-200"
          onClick={() => sliderRef?.current?.next()}>
          <IconKeyboardArrowNext className="text-xs text-black" />
        </button>
      </div>
    </>
  );
};

export default TopicCarousel;
