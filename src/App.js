import react from "react";
import { useState,useEffect } from "react";
import axios from "axios"
const App=()=>{
  const [data,setdata]=useState([])
  const [pageNumber,setpageNumber]=useState(1)
  useEffect(()=>{
    axios.get(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
    .then((res)=>{
      setdata(res.data)
    })
  },[pageNumber])
  return(
    <div className="App">
      {
        data.map(x=>{
          return(
            <div>
              <ol>
                <li>{x.url}</li>
                <li>{x.labels_url}</li>
                <li>{x.comments_url}</li>
                <li>{x.events_url}</li>
                <li>{x.html_url}</li>
              </ol>
            </div>
          )
        })
      }
      <div><button onClick={()=>{setpageNumber(pageNumber-1)}}>prev page</button></div>
      <div><button onClick={()=>{setpageNumber(pageNumber+1)}}>next page</button></div>
    </div>
      )
      }
      
export default App;
