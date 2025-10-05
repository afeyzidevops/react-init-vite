

const Main_list = ()=>{
const menu_list=["داشبورد", "گزارشات" ,"نمودارها و ترندها" , "مشخصات فنی تجهیزات"  , "نقشه های تک خطی"] ;
   return(
    <ul>
       {menu_list.map((item) => {
            return <li key={item}>{item}</li>
       })}
    </ul>
   );
};
export default Main_list;

