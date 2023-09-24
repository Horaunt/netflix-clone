    import React from 'react'
    import { useState } from 'react';
    import { useEffect } from 'react';
    import axios from 'axios';
    import fetchUrl from './App';
    
    function Row({  title   }) {
            const [movies, setMovies] = useState([]);

            // A snippet of code which runs based on a specific condition
            useEffect(() => {
                // if [], run once when the row loads, and dont run again
                async function fetchData(){
                    const request = await axios.get(fetchUrl);
                    console.log(request);
                    return request;
                }
                fetchdata();

            }, []);

      return (
        <div>
            <h2>{title}</h2>

            {/* container -> posters */}
        </div>
      )
    }
    
    export default Row