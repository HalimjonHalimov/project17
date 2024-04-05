export default function CallbackField({ id, placeholder }) {
  return (
    <label
      htmlFor={id}
      className="w-full h-auto my-2 flex md:p-5 p-2 md:px-0 px-4 bg-[#19113E] rounded-xl"
    >
      <input
        type="text"
        name={id}
        placeholder={placeholder}
        className="w-full h-auto bg-transparent border-none text-[#F5F5F5] md:text-base text-[12px] font-normal outline-none"
      />
    </label>
  );
}
