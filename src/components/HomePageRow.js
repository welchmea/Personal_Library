import React from 'react';
import { GrView } from 'react-icons/gr';
import { Link } from 'react-router-dom';

// represents a row in the recently visited table on the Home page
function HomePageRow ({row}) {

    return (
      <tr key={row.title}> 
        <td>
        <img src={row.image} alt="" height={40} width={30}></img>
        </td>
        <td>
          {row.title}
        </td>
        <td>
          {row.author[0]}
        </td>
        <td>
        <Link to="/ViewBook" state={row} ><i><GrView/></i></Link><br/>
        </td> 
      </tr>

    )
};

export default HomePageRow;