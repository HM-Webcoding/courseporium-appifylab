import MarketPlaceCard from '../../MarketPlaceCard';

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

const MarketPlacecourse = () => {
  return (
    <>
      <div className="grid gap-5 lg:grid-cols-2 xl:gap-x-10 xl:gap-y-[30px]">
        <MarketPlaceCard marketplaceCardData={marketplaceCardData} />
      </div>
    </>
  );
};

export default MarketPlacecourse;
