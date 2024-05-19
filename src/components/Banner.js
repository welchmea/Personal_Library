import { ResetDB } from "./ResetDB";

export default function Banner({title, subTitle, label, collection, }) {
  return (
    <>
      <div className="text-white p-12 text-3xl">
       {title}
      </div>
      <div className="text-white pb-12 text-xl">{subTitle}</div>
      <div className="flex flex-row w-full justify-between mb-2 text-sm text-white">
        <div className="flex justify-end ml-4">{label}</div>

        <div className="flex underline text-white mr-4">
          <button className="transition hover:scale-110 duration-100" id="reset" onClick={() => ResetDB(collection)}>
            reset
          </button>
        </div>
      </div>
    </>
  );
}
