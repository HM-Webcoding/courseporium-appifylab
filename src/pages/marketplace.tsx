import Head from 'next/head';
import {Pagination} from 'antd';
import {FilterSidebar} from '@/Modules/MarketPlace/FilterSidebar';
import {MainContent} from '@/Modules/MarketPlace/MainContent';
import {TopicCarousel} from '@/Modules/MarketPlace/TopicCarousel';

const Marketplace = () => {
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
            <TopicCarousel />
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
