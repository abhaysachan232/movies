import React, { useEffect, useState } from 'react'
import {Card,Button} from 'react-bootstrap'


const Element =(props)=>{

    const {
        image,
        title,
        cardtext,
        button,
        id


    }=props
    return(
        <div class="col" key = {id}>
     
 <Card  style={{ width: '18rem' , marginTop : '4rem' , height:'32.5rem'}}>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${image}`} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
  </Card.Body>
</Card>
</div>
    )
}



const Movie = ()=>{   
const [state,setState] = useState({})
 useEffect(()=>{fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63')
        .then((res)=>res.json()).then(res =>setState(res))})
    return(
    <>
    <div className="container">
  <div className="row">
  

  
{state.results && state.results.map((item)=>{
          return(<Element 
        image = {item.poster_path}
        title = {item.original_title}
        cardtext={item.overview}
        id = {item.id}
        
          
          />)

      })

      } 


    
</div>
</div>
    


</>)
}

export default Movie;