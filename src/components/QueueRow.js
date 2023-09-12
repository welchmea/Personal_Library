import React, {useState} from 'react';
import DeleteDb from './DeleteDB';
import { AiFillDelete } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
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
      <tr key={row.title}> 
        <td>
        <img src={row.image} alt="" height={40} width={30}></img>
        </td>
        <td>
          {row.title}
        </td>
        <td>
          {row.author}
        </td>
        <td>
        <Link to="/ViewBook" state={row} ><i><GrView/></i></Link><br/>
        </td> 
        <td><button className="view-icon" onClick={verifyDelete} ><i><AiFillDelete className="icon-five"/></i></button>
        {render ? <DeleteDb id={row}/>: null}
        </td>
        <td>
        <button className="view-icon" onClick={() => setRerender(true)} ><i><HiOutlineSwitchHorizontal className='icon-five'/></i></button>
        {rerender ? <SwitchDB id={row} />: null}
        </td>
      </tr>

    )
};

export default QueueRow;