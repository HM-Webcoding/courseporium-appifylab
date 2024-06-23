import React from 'react';

const InstructorProfile = () => {
  return (
    <>
      <div className="rounded-[20px] bg-bg px-[30px] py-12">
        <div className="flex justify-center">
          <img
            src="https://letcheck.b-cdn.net/129/clxa36sua0900uz9neqfngvnh.png"
            alt="instructor-profile"
            className="aspect-square max-w-[270px] rounded-full"
          />
        </div>
        <div className="flex justify-center">
          <span className="-mt-5 rounded-md border-[3px] border-solid bg-ezy-primary px-[10px] py-[3px] text-base font-normal text-white">
            Instructor
          </span>
        </div>
        {/* instructon profile info */}
        <div className="text-center">
          <h4 className="pb-[6px] pt-[14px] text-3xl font-medium">
            Kim Lattoms
          </h4>
          <p className="text-xl font-normal text-ezy-gray-700">
            Product Designer
          </p>

          <div className="flex items-center justify-center space-x-[70px] border-b border-solid border-ezy-gray-300 pb-10 pt-9">
            <div className="space-y-2">
              <p className="text-lg text-ezy-gray-500">Total students</p>
              <p className="text-3xl font-semibold">3521</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-ezy-gray-500">Review</p>
              <p className="text-3xl font-semibold">1254</p>
            </div>
          </div>

          {/* about instructor */}
          <div className="pt-[18px] text-left">
            <h4 className="pb-5 text-3xl font-medium">About Me</h4>
            <p className="text-lg font-normal">
              Welcome to SkillSprints! We're thrilled you're here to explore the
              world of digital skills. You're stepping into a community
              dedicated to empowering your digital journey.
              <br />
              Who We Are
              <br />
              SkillSprints is more than a media company. We're your personal
              digital skills coach, guiding you through the evolving digital
              landscape. Our mission? Simple: Closing the Digital Skills Gap.
              Whether you're starting from scratch or looking to level up, we're
              here to light the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorProfile;
