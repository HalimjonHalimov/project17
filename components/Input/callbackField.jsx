export default function CallbackField({ id, placeholder }) {
  return (
    <label
      htmlFor={id}
      className="w-full h-auto my-2 flex p-5 bg-[#19113E] rounded-xl"
    >
      <input
        type="text"
        name={id}
        placeholder={placeholder}
        className="w-full h-auto bg-transparent border-none text-[#F5F5F5] text-base font-normal outline-none"
      />
    </label>
  );
}
