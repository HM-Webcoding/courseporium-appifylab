import InstructorProfile from '@/Modules/MarketPlace/InstructorProfile';
import InstructorTab from '@/Modules/MarketPlace/InstructorTab/InstructorTab';
import {
  IconFacebook,
  IconIndeed,
  IconInternet,
  IconMessageOutline,
  IconYoutube,
  IconStar,
} from '@/components/icons/marketplaceIcons';
import {Pagination} from 'antd';
import Head from 'next/head';

const MarketPlaceUser = () => {
  return (
    <div>
      <Head>
        <title>Market place instructor</title>
        <meta name="description" content=""></meta>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Market place instructor" />
        <meta property="og:description" content="" />
        <meta
          property="og:url"
          content="https://ezycourse.com/market-place-user"
        />
        <meta property="og:site_name" content="EzyCourse" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="840" />
        <meta property="og:image:type" content="image/png" />
      </Head>
      {/* main section */}
      <div className="bg-[#f8f8f8]">
        {/* hero part */}
        <div
          className="h-[249px]"
          style={{background: 'var(--marketPlaceUserBgGradient)'}}>
          {/* hero button and social icons */}
          <div className="container flex justify-center lg:justify-end">
            {/* for end this hole div in large screen */}
            <div className="flex flex-col items-center gap-y-4 pt-12 md:ml-[104px] md:h-[249px] md:items-start md:justify-end lg:ml-0 lg:w-2/3 lg:flex-row lg:items-end lg:justify-between lg:pt-0">
              {/* buttons */}
              <div className="order-2 flex space-x-[14px] md:mb-[30px] lg:order-none">
                <button className="flex items-center gap-2 rounded-md bg-white px-4 py-1 text-base text-[#00B884] sm:text-xl">
                  <IconStar /> Top Mentor
                </button>
                <button className="flex items-center gap-2 rounded-md border border-solid border-[#8F8FDD] bg-transparent px-4 py-1 text-base text-white sm:text-xl">
                  <IconMessageOutline /> Message
                </button>
              </div>

              {/* social icons */}
              <div className="order-1 flex items-center justify-center space-x-[20px] lg:order-none lg:mb-[34px]">
                <a href="#" target="_blank">
                  <IconFacebook className="text-white" />
                </a>
                <a href="" target="_blank">
                  <IconIndeed className="text-white" />
                </a>
                <a href="#" target="_blank">
                  <IconYoutube className="text-white" />
                </a>
                <a href="#" target="_blank">
                  <IconInternet className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="marketplace_user_ant_design container">
          <div className="flex flex-col gap-x-[60px] pb-12 md:flex-row md:pb-[90px]">
            <div className="-mt-[77px] md:-mt-[131px] md:w-1/3">
              <InstructorProfile />
            </div>
            <div className="overflow-auto pt-4 md:w-2/3">
              {/* InstructorTab */}
              <InstructorTab />
            </div>
          </div>
          {/* Pagination section start */}

          <div className="flex justify-center pb-12 sm:pb-[120px]">
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceUser;
