const Main_list = ()=>{
const menu_list=["داشبورد", "گزارشات" ,"نمودارها و ترندها" , "مشخصات فنی تجهیزات"  , "نقشه های تک خطی"] ;
   // if (!menu_list.length) return <div>this is a empty list</div>
   
   return(
      <>
      <h2>Menu bar</h2>
      {/* {!menu_list.length ? <div>This is empty list</div> : null} */}
      {/* use comprasion operators*/}
      {!menu_list.length && <div>this is list is empty</div>}
    <ul>
       {menu_list.map((item) => {
            return <li key={item}>{item}</li>
       })}
    </ul>
    </>
   );
};
export default Main_list;
