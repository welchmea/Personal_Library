import React, {useState, useEffect, useRef} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddLibrary from "../components/AddLibrary";
import AddQueue from "../components/AddQueue";
import { AiOutlineCheck, AiOutlinePlusCircle} from "react-icons/ai";
import AddBrowse from "../components/AddBrowse";
import { Tooltip } from "@mui/material";

function Books () {
    
    // variables for rendering different components, navigation, and retrieving info using state.
    const [render, setRender] = useState(false);
    const [renderQueue, setRenderQueue] = useState(false)

    const location = useLocation();
    const result = location.state;

    const navigate = useNavigate();
    const alreadyFetched = useRef(false);

    const [price, setPrice] = useState('');

    //code taken from React navigation: url:https://reactnavigation.org/docs/navigation-prop/
    const goBack = () => {
		navigate(-1);
	};

    //retrieves price from partner's microservice
    useEffect(() => {
        function findPrice() {
            const query = result.title 
            fetch(`http://127.0.0.1:5000/price?input=${query}`, {
              mode:'cors'})
              .then((response) => response.text())
              .then((data) => {
              setPrice(data)
              })
              .catch(()=> {
              alert("Uh Oh! You messed up...Try again.")
              });
        return price
        };
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    findPrice();
    console.log("useEffect ran...");
    }, []);
    
    return (
        <>
        <main>
            <section>
                <button className="main-button" onClick={goBack}> Back to Search Results</button>
                <figure className="images">
                    <img src={result.image} alt="" width={200} height={300}></img>
                        <figcaption>
                            <h2>{result.title}</h2>
                            <h1>{result.author}</h1>
                            <p>{result.description}</p>
                            <p>Genre: {result.category}</p>
                            <p>Page Count: {result.pageCount}</p>
                            <p>Publication Date: {result.publishedDate}</p>
                            <p>Publisher: {result.publisher}</p>
                {/* <p>Cost on Barnes and Noble: {price}</p> */}
                        </figcaption>
                        <AddBrowse result={result}/>
                        <Tooltip title="Add to Bookshelf">
                            <button className="more-info-popout" onClick={() => setRender(true)} ><i><AiOutlineCheck className='icon-five'/></i></button>
                            {render ? <AddLibrary result={result} />: null}
                        </Tooltip>
                        <Tooltip title="Add to Queue">
                            <button className="more-info-popout" onClick={() => setRenderQueue(true)} ><i><AiOutlinePlusCircle className='icon-five'/></i></button>
                            {renderQueue ? <AddQueue result={result} />: null}
                        </Tooltip>
                </figure>
            </section>
        </main>
        </>
    )
};
export default Books;