/* eslint-disable react/prop-types */

import { BathroomsSVG, BedroomsSVG } from "../assets/svg/svg";

/**
 * The `ItemCard` function in JavaScript React renders a card component displaying information about a
 * property listing including home name, price, image, bedrooms, and bathrooms.
 * @returns The `ItemCard` component is being returned, which displays information about a property
 * such as the home name, price, image, number of bedrooms, and number of bathrooms.
 */
export function ItemCard({ homeName, price, image }) {
  return (
    <>
      <div className="p-4 bg-white rounded-lg border border-gray-600/10">
        <img src={image} alt="property" />

        <div className="p-6">
          <h4 className="text-2xl font-bold cursor-pointer">{homeName}</h4>
          {/* <div>2 beds &bull; 2 baths</div> */}
          <div className="mt-2">
            <span className="text-xl font-extrabold text-blue-600">
              ${price}
            </span>{" "}
            /M
          </div>
        </div>
        <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
          <div className="flex items-center">
            <BedroomsSVG />
            <p>
              <span className="font-bold text-gray-900">3</span> Bedrooms
            </p>
          </div>
          <div className="flex items-center">
            <BathroomsSVG />
            <p>
              <span className="font-bold text-gray-900">2</span> Bathrooms
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * The function `Cards` is a React component that displays a card with a header, paragraph text,
 * content, and a "Learn More" link.
 * @returns The `Cards` component is being returned. It takes in props `headerText`, `paragraphText`,
 * and `content`, and renders a card with the provided header text, paragraph text, and content. The
 * card includes a title, description, and a "Learn More" link.
 */
export default function Cards({ headerText, paragraphText, content }) {
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
