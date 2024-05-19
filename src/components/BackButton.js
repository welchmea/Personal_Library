import { useNavigate } from "react-router-dom";

export default function BackButton({ title }) {
  const navigate = useNavigate();

  //code on lines 20-22 taken from React navigation: url:https://reactnavigation.org/docs/navigation-prop/
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="text-white text-xl">
        {" "}
        <button
          id="back"
          className="bg-[#FFF7F7] hover:bg-[#5A66F4] hover:text-white touch-manipulation font-normal rounded-xl text-black p-4 text-center text-sm transition-colors"
          onClick={goBack}
        >
          {title}
        </button>
      </div>
    </>
  );
}
