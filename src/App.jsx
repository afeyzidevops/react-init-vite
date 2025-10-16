import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main_list from './components/Main_menu_list'
import Discription from './components/Project_Name_Discription'

const menu_list=["داشبورد", "گزارشات" ,"نمودارها و ترندها" , "مشخصات فنی تجهیزات"  , "نقشه های تک خطی"] ;
// const menu_list=[];

function App() {

  return (
    <>
      <div>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PSI + ARAS</h1>
      <Discription/>
      <Main_list items={menu_list}/>
    
    </>
  )
}

export default App;


