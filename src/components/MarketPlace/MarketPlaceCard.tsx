import {
  IconClock,
  IconNetworkSignal,
  IconVideo,
  IconUserOutline,
  IconlocationOutline,
  IconLikePostCard,
} from '../icons/marketplaceIcons';
import {Divider, Rate} from 'antd';

const MarketPlaceCard = ({
  cardImgUrl,
  title,
  content,
  courseLabel,
  videoDuration,
  discountedPrice,
  afterDiscountPrice,
  reviews,
}) => {
  return (
    <>
      <div className="flex h-full flex-col justify-between rounded-2xl bg-bg px-5 pb-6 pt-5">
        {/* card top part */}
        <div>
          <div>
            <img
              src={cardImgUrl}
              alt="card image"
              className="aspect-video max-w-full rounded-[10px]"
            />
          </div>
          <div>
            <h3 className="pb-[14px] pt-4 text-xl font-medium">{title}</h3>
            <p className="pb-6 text-base font-normal">{content}</p>
          </div>
        </div>

        {/* card footer part  */}
        <div>
          {/* icons part 1 start */}
          <div className="flex items-center gap-4 lg:gap-2 xl:gap-4">
            {/* icon 1 */}
            <div className="flex items-center gap-2">
              <IconNetworkSignal />
              <p className="text-base font-normal">{courseLabel}</p>
            </div>

            {/* icon 2 */}
            <div className="flex items-center gap-2">
              <IconVideo />
              <p className="text-base font-normal">Videos</p>
            </div>

            {/* icon 3 */}
            <div className="flex items-center gap-2">
              <IconClock style={{color: 'gray'}} />
              <p className="text-base font-normal">{videoDuration}hours</p>
            </div>
          </div>

          {/* icons part 2 start  */}
          <div className="flex items-center gap-4">
            {/* icon 1 */}
            <div className="flex items-center gap-2">
              <IconUserOutline />
              <p className="text-[14px] font-normal">Members</p>
            </div>

            {/* icon 2 */}
            <div className="flex items-center gap-2">
              <IconLikePostCard />
              <p className="text-[12px] font-normal">Posts</p>
            </div>
          </div>

          {/* icons part 3 start  */}
          <div className="flex items-center justify-between">
            {/* icon 1 */}
            <div className="flex items-center gap-2">
              <IconlocationOutline />
              <p className="text-[14px] font-normal">Sylhet</p>
            </div>

            {/* icon 2 */}
            <div className="flex items-center gap-2">
              <img
                src="https://letcheck.b-cdn.net/129/clxa36sua0900uz9neqfngvnh.png"
                alt=""
                className="h-[30px] w-[30px] rounded-full"
              />
              <p className="text-[14px] font-semibold">App team</p>
            </div>
          </div>

          {/* divider */}
          <Divider className="my-4" />

          {/* pricing and review */}
          <div className="flex items-center justify-between">
            <div className="text-[25px] font-semibold">
              <del className="mr-2.5 text-2xl font-normal text-ezy-gray-400">
                {discountedPrice ? '$' + discountedPrice : null}
              </del>
              ${afterDiscountPrice}
            </div>
            <div className="flex items-center justify-center gap-[2px]">
              <Rate allowHalf defaultValue={5} />
              <div className="pl-1 text-base font-normal">({reviews})</div>
            </div>
          </div>

          {/* pricing and button */}
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium">${afterDiscountPrice}</div>
            <div className="flex items-center justify-center gap-[2px]">
              <button className="rounded-md bg-ezy-primary px-2.5 py-1.5 text-[14px] font-normal text-white">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlaceCard;
