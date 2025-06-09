import DirectoryItem from "../directory-item/directory-item.jsx";
import "./directory.scss"
import { Fragment } from "react";

 const categories = [
   {
    id:1,
    title:'Hats',
    imageURL:"https://i.ibb.co/cvpntL1/hats.png",
    route:'shop/hats'
   },
   {
    id:2,
    title:'Jackets',
    imageURL:"https://i.ibb.co/px2tCc3/jackets.png",
    route:'shop/jackets'
   },
   {
    id:3,
    title:'Sneakers',
    imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route:'shop/sneakers'
   },
   {
    id:4,
    title:'Womens',
    imageURL:"https://i.ibb.co/GCCdy8t/womens.png",
    route:'shop/womens'
   },
   {
    id:5,
    title:'Mens',
    imageURL:"https://i.ibb.co/R70vBrQ/men.png",
    route:'shop/mens'
   },
  
 ]


const Directory = ()=>{

  return (
       <div className="container">
          <div className="row">
              {
               categories && categories.map((category)=>     
              	  <DirectoryItem key={category.id} category={category} /> 
                )
              }              
           </div>
       </div>
  )
}

export default Directory;
