import React, {useEffect, useRef, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AddLibrary from "../components/AddLibrary";
import AddQueue from "../components/AddQueue";
import { AiOutlineCheck, AiOutlinePlusCircle  } from "react-icons/ai";
import { Tooltip } from '@mui/material';

function ViewBook () {

    // retrieves data from useState which was set in components Library Row and Queue Row  
    const location = useLocation();
    const results = location.state;

    const navigate = useNavigate();

    // variables to access components upon rendering and display data about selected book
    const alreadyFetched = useRef(false);
    const [info, setInfo] = useState();
    const [display, setDisplay] = useState(false);
    const [render, setRender] = useState(false);
    const [renderQueue, setRenderQueue] = useState(false);

   // calls backend to access MongoDb data through a title, display information 
    useEffect(() => {
        function displayInfo() {
            fetch('https://be-bookshelf-eb8a2587c2db.herokuapp.com/display_info', {
                mode: 'cors',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(results.title)
              }) 
              .then((response) => response.json())
              .then((data) => {
                setInfo(data)
                setDisplay(true)
              }) 
        return info
        };
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    displayInfo();
    }, [info, results.title]);

    // code taken from React navigation: url:https://reactnavigation.org/docs/navigation-prop/
    const goBack = () => {
		navigate(-1);
	}

    return (
        <>
         <main>
            <section>
                <button className="main-button" onClick={goBack}>
                    Back 
                </button>
                <br></br>
                { display ?
                    <figure className="images"> 
                      <img src={info.image} alt="" width={200} height={300}></img>
                        <figcaption> 
                          <h2>{info.title}</h2>
                          <h1>{info.author}</h1> 
                          <p>{info.description}</p>
                          <p>Genre: {info.category}</p>
                          <p>Page Count: {info.pageCount}</p>
                          <p>Publication Date: {info.publishedDate}</p>
                          <p>Publisher: {info.publisher}</p>
                        </figcaption> 
                      <Tooltip title="Add to Bookshelf">
                        <button className="more-info-popout" onClick={() => setRender(true)} ><i><AiOutlineCheck className='icon-five'/></i></button>
                        {render ? <AddLibrary result={info} />: null}
                      </Tooltip>
                      <Tooltip title="Add to Queue">
                        <button className="more-info-popout" onClick={() => setRenderQueue(true)} ><i><AiOutlinePlusCircle className='icon-five'/></i></button>
                        {renderQueue ? <AddQueue result={info} />: null}
                      </Tooltip>
                    </figure>: null    
                  }
            </section>
        </main>
        </>
    )
};
export default ViewBook;