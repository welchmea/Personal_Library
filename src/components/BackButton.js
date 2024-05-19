import { useNavigate } from "react-router-dom";

export default function BackButton() {
const navigate = useNavigate();
  return (
    <>
      <div className="text-white text-xl">
        {" "}
        <button id="back" className="bg-[#FFF7F7] hover:bg-[#5A66F4] hover:text-white touch-manipulation font-normal rounded-xl text-black p-4 text-center text-sm transition-colors" onClick={() => navigate("/")}>
          Back to Home Page
        </button>
      </div>
    </>
  );
}
