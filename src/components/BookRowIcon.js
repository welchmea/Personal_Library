import {  AiOutlineHeart } from "react-icons/ai";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

export default function BookRowIcon({ page }) {
    let icon = null;
    if (page === 'add_fav'){
        icon = <AiOutlineHeart/>
    } else if (page === 'switch_db') {
        icon = <HiOutlineSwitchHorizontal/>
    }
  return (
    <>
      <i>
        <div className="mr-4">
        {icon}
        </div>

      </i>
    </>
  );
}
