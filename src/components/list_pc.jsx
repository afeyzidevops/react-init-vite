const Main_list = ()=>{
const menu_list=["داشبورد", "گزارشات" ,"نمودارها و ترندها" , "مشخصات فنی تجهیزات"  , "نقشه های تک خطی"] ;
   // if (!menu_list.length) return <div>this is a empty list</div>
   

   const RenderList =() => {
    if (!menu_list.length) return <div>this list is empety</div>;
    return menu_list.map((item) =>(
       <li key={item}>{item}</li>
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
