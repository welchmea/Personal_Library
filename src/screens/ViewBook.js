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
    const [result, setResult] = useState();
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
                setResult(data)
                setDisplay(true)
              }) 
        return result
        };
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    displayInfo();
    }, [result, results.title]);

    // code taken from React navigation: url:https://reactnavigation.org/docs/navigation-prop/
    const goBack = () => {
		navigate(-1);
	}

    return (
        <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">Discover new ideas.</div>
        <div className="text-white pb-12 text-xl">
          <button className="main-button" onClick={goBack}>
            Back to Search Results
          </button>
        </div>
                { display ?
                        <div className="flex flex-col w-5/6 images text-lg p-4">
                        <div className="flex flex-row">
                          <div className="p-2 place-content-center ml-8">
                            <img
                              className="mt-8 mb-8"
                              src={result.image}
                              alt=""
                              width={400}
                              height={500}
                            ></img>
                            <div className="text-xl">{result.title}</div>
                            <div className="italic mt-2 text-md">{result.author}</div>
                          </div>
                          <div className="flex flex-col gap-y-4 justify-center ml-8 p-2">
                            <div>{result.description}</div>
                            <div>Genre: {result.category}</div>
                            <div>Page Count: {result.pageCount}</div>
                            <div>Publication Date: {result.publishedDate}</div>
                            <div>Publisher: {result.publisher}</div>
                            <div>Cost on Barnes and Noble: </div>
                          </div>
                        </div>
                        <div className="flex justify-center p-2">
                          <Tooltip title="Add to Bookshelf">
                            <button onClick={() => setRender(true)}>
                              <i>
                                <AiOutlineCheck className="text-lg mr-2" />
                              </i>
                            </button>
                            {render ? <AddLibrary result={result} /> : null}
                          </Tooltip>
                          <Tooltip title="Add to Queue">
                            <button onClick={() => setRenderQueue(true)}>
                              <i>
                                <AiOutlinePlusCircle className="text-lg" />
                              </i>
                            </button>
                            {renderQueue ? <AddQueue result={result} /> : null}
                          </Tooltip>
                        </div>
                      </div>
                    // <figure className="images"> 
                    //   <img src={info.image} alt="" width={200} height={300}></img>
                    //     <figcaption> 
                    //       <h2>{info.title}</h2>
                    //       <h1>{info.author}</h1> 
                    //       <p>{info.description}</p>
                    //       <p>Genre: {info.category}</p>
                    //       <p>Page Count: {info.pageCount}</p>
                    //       <p>Publication Date: {info.publishedDate}</p>
                    //       <p>Publisher: {info.publisher}</p>
                    //     </figcaption> 
                    //   <Tooltip title="Add to Bookshelf">
                    //     <button className="more-info-popout" onClick={() => setRender(true)} ><i><AiOutlineCheck className='icon-five'/></i></button>
                    //     {render ? <AddLibrary result={info} />: null}
                    //   </Tooltip>
                    //   <Tooltip title="Add to Queue">
                    //     <button className="more-info-popout" onClick={() => setRenderQueue(true)} ><i><AiOutlinePlusCircle className='icon-five'/></i></button>
                    //     {renderQueue ? <AddQueue result={info} />: null}
                    //   </Tooltip>
                    // </figure>
                    : null    
                  }
        </div>
        </>
    )
};
export default ViewBook;