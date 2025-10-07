import { useState } from "react";

const Main_list = (probs)=>{
const [selectedItem,setSelectedItem]=useState(0)   ;

const handlerClick =(index)=>{
   setSelectedItem(index);
}

const RenderList =() => {
    if (!probs.items.length) return <div>this list is empety</div>;
    return probs.items.map((item,index) =>(
       <li onClick={()=>handlerClick(index)}
       key={item} 
       className={selectedItem===index ? "selected-item" : "" }>{item}</li>
    )); 
   };


   return(
    <>
        <h2>Menu bar</h2>
        <ul>
        {RenderList()}
        </ul>
    </>
   );
};
export default Main_list;
