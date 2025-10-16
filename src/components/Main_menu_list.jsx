
import { useState } from "react";

const Main_list = ({items})=>{
const [selectedItem,setSelectedItem]=useState(0)   ;

const handlerClick =(index)=>{
   setSelectedItem(index);
}

const RenderList =() => {
   //  if (!items?.length) return <h3>This list is empty</h3>;
    return( 
      <>
      {/* use ternery Perator insted use function direction in return in jsx */}
      {!items.length && <h3>This list is empty</h3>  } 
      {items?.map((item,index) =>(
       <li onClick={()=>handlerClick(index)}
       key={item}
       className={selectedItem===index ? "selected-item" : "" }>{item}</li>
    ))}
     </>); 
   };


   return(
    <>
        <h2>Main Menu</h2>
        <ul>
        {RenderList()}
        </ul>
    </>
   );
};
export default Main_list;
