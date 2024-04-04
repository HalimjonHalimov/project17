export default function ButtonField({ id, placeholder, title, value }) {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
      <span className="text-[#605D6E] text-xs font-normal">{title}</span>
      <label
        htmlFor={id}
        className="w-full h-auto  flex py-2 px-4 bg-[#19113E] rounded-full"
      >
        <input
          type="text"
          name={id}
          placeholder={placeholder}
          value={value}
          className="w-full h-auto bg-transparent border-none text-[#F5F5F5] text-base font-normal outline-none"
          disabled
        />
      </label>
    </div>
  );
}
