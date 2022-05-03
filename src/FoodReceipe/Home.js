import React,{useState} from 'react';
import Product from './product'
function Home(props) {
    const [search,setSearch]=useState("")
    const YOUR_APP_ID="8663120a"
    const YOUR_APP_KEY="95e20876472abc2688e685022e2217c5"
    const [data,setData]=useState([]);
    
    const handleSearch=()=>
    {

        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(res=>res.json()).then(data=>{return setData(data.hits);console.log(data)})
        
        
    }
    return (
        <div>
           <h2>Food Receipe</h2> 
           <input onChange={(e)=>setSearch(e.target.value)}></input><br/>
           <button className="btn btn-primary" onClick={handleSearch}>Search</button>
            {data.length>=1?<Product data={data}/>:null}
        </div>
    );
}

export default Home;