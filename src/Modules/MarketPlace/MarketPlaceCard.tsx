import {
  IconClock,
  IconNetworkSignal,
  IconVideo,
  IconUserOutline,
  IconlocationOutline,
  IconLikePostCard,
} from '@/components/icons/marketplaceIcons';
import {Divider, Rate} from 'antd';

const MarketPlaceCard = ({marketplaceCardData}: any) => {
  return (
    <>
      {marketplaceCardData.map(item => (
        <div
          key={item.id}
          className="flex h-full flex-col justify-between rounded-2xl bg-bg px-5 pb-6 pt-5">
          {/* card top part */}
          <div>
            <div className="relative">
              <img
                src={item.cardImgUrl}
                alt="card image"
                className=" aspect-video max-w-full rounded-[10px]"
              />
              <span className="absolute left-2 top-2 rounded bg-[#FFC53D] px-2.5 py-1 text-sm sm:text-lg">
                BESTSALLER
              </span>
            </div>
            <div>
              <h3 className="pb-[14px] pt-4 text-xl font-medium">
                {item.title}
              </h3>
              <p className="pb-6 text-base font-normal">{item.content}</p>
            </div>
          </div>

          {/* card footer part  */}
          <div>
            {/* icons style 1 start */}
            <div className="flex items-center gap-4 lg:gap-2 xl:gap-4">
              <div className="flex items-center gap-2">
                <IconNetworkSignal />
                <p className="text-base font-normal">{item.courseLabel}</p>
              </div>

              <div className="flex items-center gap-2">
                <IconVideo />
                <p className="text-base font-normal">Videos</p>
              </div>

              <div className="flex items-center gap-2">
                <IconClock style={{color: 'gray'}} />
                <p className="text-base font-normal">
                  {item.videoDuration}hours
                </p>
              </div>
            </div>

            {/* icons style 2 start  */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <IconUserOutline />
                <p className="text-[14px] font-normal">Members</p>
              </div>

              <div className="flex items-center gap-2">
                <IconLikePostCard />
                <p className="text-[12px] font-normal">Posts</p>
              </div>
            </div>

            {/* icons style 3 start  */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconlocationOutline />
                <p className="text-[14px] font-normal">Sylhet</p>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src="https://letcheck.b-cdn.net/129/clxa36sua0900uz9neqfngvnh.png"
                  alt=""
                  className="h-[30px] w-[30px] rounded-full"
                />
                <p className="text-[14px] font-semibold">App team</p>
              </div>
            </div>

            <Divider className="my-4" />

            {/* pricing and review style 1 */}
            <div className="flex items-center justify-between">
              <div className="text-[25px] font-semibold">
                <del className="mr-2.5 text-2xl font-normal text-ezy-gray-400">
                  {item.discountedPrice ? '$' + item.discountedPrice : null}
                </del>
                ${item.afterDiscountPrice}
              </div>
              <div className="flex items-center justify-center gap-[2px]">
                <Rate allowHalf defaultValue={item.rating} disabled={true} />
                <div className="pl-1 text-base font-normal">
                  ({item.reviews})
                </div>
              </div>
            </div>

            {/* pricing and button style 2 */}
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">
                ${item.afterDiscountPrice}
              </div>
              <div className="flex items-center justify-center gap-[2px]">
                <button className="btn_primary text-sm">Join Community</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MarketPlaceCard;
