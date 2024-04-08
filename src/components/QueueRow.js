import React, {useState} from 'react';
import DeleteDb from './DeleteDB';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {HiOutlineSwitchHorizontal} from 'react-icons/hi';
import SwitchDB from './SwitchDB';


// represents a row in the queue table results on the Queue page
function QueueRow ({row}) {

    const [render, setRender] = useState(false);
    const [rerender, setRerender] = useState(false);

     // asks user if they want to delete before it is deleted. 
     function verifyDelete () {
      if (window.confirm("Do you want to delete? This cannot be undone...")) {
        setRender(true);
      } 
    }

    return (
      <div className="text-white" key={row.title}>
      <div className="flex flex-wrap items-center mb-4">
        <Link to="/ViewBook" state={row}>
          <img src={row.image} alt="" height={300} width={200}></img>
        </Link>
      </div>
      <div className="flex flex-wrap max-w-52 mb-2 text-md">{row.title}</div>
      <div className="flex flex-wrap mb-2 font-normal">{row.author[0]}</div>
      <div className="flex flex-row">
        <div className="flex flex-col text-xl">
          <button className="" onClick={() => setaddFavorite(true)}>
            <i>
              <HiOutlineSwitchHorizontal className="mr-4" />
            </i>
          </button>
          {rerender ? <SwitchDB id={row} />: null}
        </div>

        <div className="flex text-xl">
          <button onClick={verifyDelete}>
            <i>
              <AiFillDelete />
            </i>
          </button>
          {render ? <DeleteDb id={row} /> : null}
        </div>
      </div>
    </div>

    )
};

export default QueueRow;