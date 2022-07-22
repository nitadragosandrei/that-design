export default function HeaderButton(props: any) {
  return (
    <button className="px-4 py-2 font-bold text-white rounded hover:bg-white hover:text-black ml-4">
      {props.text}
    </button>
  );
}
