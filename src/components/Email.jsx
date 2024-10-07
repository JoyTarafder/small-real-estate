/* eslint-disable react/prop-types */
export function Lavel({ LabelName, HTMLfor }) {
  return (
    <>
      <label
        htmlFor={HTMLfor}
        className="mb-4 block text-sm text-body-color dark:text-dark-6"
      >
        {LabelName}
      </label>
    </>
  );
}
export default function Input({ Text, Name, Placeholder }) {
  return (
    <>
      <input
        type={Text}
        name={Name}
        placeholder={Placeholder}
        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
      />
    </>
  );
}
