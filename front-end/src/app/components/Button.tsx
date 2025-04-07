
export default function Button({...props}) {
  return (
      <button className="px-6 py-3 font-bold rounded-xl bg-primary text-background transition duration-300 ease-in-out cursor-pointer hover:shadow-lg shadow-primary/50">{props.children}</button>
  );
}
