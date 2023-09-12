import React, { useState, useEffect, useRef} from "react";
import HomePageRow from "../components/HomePageRow";

function HomePage( ) {
    
    // variables for navigation and displaying browsed data from db
    const [library, setLibrary] = useState();
    const [state, setState] = useState(false);
    const alreadyFetched = useRef(false); 
    
    // calls MongoDB to retrieve last 10 viewed books 
    useEffect(() => {
        function displayBrowsed() {
            fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/display_browsed`, {
              mode:'cors'})
              .then((response) => response.json())
              .then((data) => {
              setLibrary(data)
              setState(true)
              .catch(()=> {
                 alert("Oh No! Something is wrong...Try again.")
                });
              }) 
        return library
        };
    // only allows useEffect to run once
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    displayBrowsed();
    console.log("useEffect ran...");
    }, [library]);
    
    return (
        <>
        <main>
            <section>
                <article>
                <table>
                    <caption>Recently Visited</caption>
                        <thead>
                        <tr>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>View</th>
                        </tr>
                        </thead>
                        <tbody>
                        { state ? library.map((book, i) => <HomePageRow row={book} key={i}/>):null}     
                        </tbody>
                    </table>
                </article> 
            </section>
        </main>
        </>
    )
};

export default HomePage;