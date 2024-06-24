import {useState} from 'react';

import MarketPlaceCard from '../../MarketPlaceCard';
import {CourseCardData} from '../CourseData';

const MarketPlacecourse = () => {
  const [data, setData] = useState(CourseCardData);

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-2 xl:gap-x-10 xl:gap-y-[30px]">
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
    </>
  );
};

export default MarketPlacecourse;
