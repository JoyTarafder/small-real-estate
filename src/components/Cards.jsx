/* eslint-disable react/prop-types */

import SVG_card_1 from "../assets/svg/svg_card_1";
import SVG_card_2 from "../assets/svg/svg_card_2";
import SVG_card_3 from "../assets/svg/svg_card_3";
import SVG_card_4 from "../assets/svg/svg_card_4";

function Card({ headerText, paragraphText, content }) {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/4">
        <div className=" group mb-12">
          <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
            <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45">
              {content}
            </span>
          </div>
          <h4 className="mb-3 text-xl font-bold text-black ">{headerText}</h4>
          <p className="mb-8 text-slate-500 dark:text-dark-6 lg:mb-9">
            {paragraphText}
          </p>
          <a
            href="javascript:void(0)"
            className="text-base font-medium text-black hover:text-sky-600  dark:hover:text-sky-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}

export default function Cards() {
  return (
    <>
      <div className="md:flex max-lg flex-wrap ">
        <Card
          headerText="Premium Property Listings"
          paragraphText="Discover an array of hand-picked properties that meet the highest standards of luxury and comfort." content={<SVG_card_4 />} />

        <Card
          headerText="Personalized Property Matching"
          paragraphText="Our advanced matching system pairs you with properties that align with your specific needs and desires" content={<SVG_card_1 />}
        />
        <Card
          headerText="Expert Guidance and Support"
          paragraphText="Benefit from the expertise of our dedicated team of real estate professionals." content={<SVG_card_2 />}
        />
        <Card
          headerText="Virtual Tours"
          paragraphText="Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home." content={<SVG_card_3 />}
        />
      </div>
    </>
  );
}
