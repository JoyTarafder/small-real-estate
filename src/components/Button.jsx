/* eslint-disable react/prop-types */
export function Button3({buttonName}) {
  return (
    <>
      <a
        href="#home"
        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
      >
        {buttonName}
      </a>
    </>
  );
}
export function Button2({ ButtonName }) {
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-600"
    >
      {ButtonName}
    </a>
  );
}

export default function Button({ buttonName = "Sing Up", bgColor }) {
  return (
    <>
      <a
        href="#"
        className={`flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-black ${bgColor}`}
      >
        {buttonName}
      </a>
    </>
  );
}
