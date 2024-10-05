import SVG_card_1 from "../assets/svg/svg_card_1";
import SVG_card_2 from "../assets/svg/svg_card_2";
import SVG_card_3 from "../assets/svg/svg_card_3";
import SVG_card_4 from "../assets/svg/svg_card_4";
import Cards from "./Cards";

export default function FeatureSection() {
  return (
    <>
      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <div className=" flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                <span className="mb-2 block text-lg font-semibold text-sky-600 ">
                  Features
                </span>
                <h2 className="mb-3 text-3xl font-bold text-black  sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Main Features Of Play
                </h2>
                <p className="text-base text-slate-400">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex max-lg flex-wrap ">
            <Cards
              headerText="Premium Property Listings"
              paragraphText="Discover an array of hand-picked properties that meet the highest standards of luxury and comfort."
              content={<SVG_card_4 />}
            />

            <Cards
              headerText="Personalized Property Matching"
              paragraphText="Our advanced matching system pairs you with properties that align with your specific needs and desires"
              content={<SVG_card_1 />}
            />
            <Cards
              headerText="Expert Guidance and Support"
              paragraphText="Benefit from the expertise of our dedicated team of real estate professionals."
              content={<SVG_card_2 />}
            />
            <Cards
              headerText="Virtual Tours"
              paragraphText="Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home."
              content={<SVG_card_3 />}
            />
          </div>
        </div>
      </section>
    </>
  );
}
