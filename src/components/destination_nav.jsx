export default function Destination_nav({ setSelected, active }) {
  const data = ["moon", "mars", "europa", "titan"];
  return (
    <ul className="flex w-3/4 md:w-3/6 justify-between items-center mx-auto lg:w-full" >
      {data.map((destination) => (
        <li onClick={() => setSelected(destination)} className={`cursor-pointer tracking-widest text-white py-4 ${active === destination && "border-b-solid border-b-2 border-b-white"} uppercase`} >{destination}</li>
      ))}
    </ul>
  );
}
