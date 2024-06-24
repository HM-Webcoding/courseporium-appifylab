import {Tabs} from 'antd';
import {
  MarketPlaceDigitalProducts,
  MarketPlaceEvents,
  MarketPlaceGroupChat,
  MarketPlacecourse,
  MarktePlaceCommunity,
} from '../TabItems';

const InstructorTab = () => {
  const onChange = key => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: <p className="text-base font-medium sm:text-2xl">Courses</p>,
      children: <MarketPlacecourse />,
    },
    {
      key: '2',
      label: <p className="text-base font-medium sm:text-2xl">Community</p>,
      children: <MarktePlaceCommunity />,
    },
    {
      key: '3',
      label: <p className="text-base font-medium sm:text-2xl">Events</p>,
      children: <MarketPlaceEvents />,
    },
    {
      key: '4',
      label: <p className="text-base font-medium sm:text-2xl">Group Chat</p>,
      children: <MarketPlaceGroupChat />,
    },
    {
      key: '5',
      label: (
        <p className="text-base font-medium sm:text-2xl">Digital Product</p>
      ),
      children: <MarketPlaceDigitalProducts />,
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default InstructorTab;
