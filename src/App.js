import { useState } from 'react';
import './App.css';
import Navabr from './components/Navabr';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

 function App(){
    const [mode, setDarkMode] = useState('light') //Dark mode enabled or not
    const toggleMode =()=>{
         if (mode==='light') {
            setDarkMode('dark')
            document.body.style.backgroundColor='#262626'
         }else{
            setDarkMode('light')
            document.body.style.backgroundColor='white'
         }
    }
     return (
      <>
   <Navabr title='TextUtils' home='Home' about='About' mode={mode} toggleMode={toggleMode}/>
     <Alert alert='This is alert' />
  <div className={'container'}>
  <TextForm heading='Enter the text to analyze' mode={mode} />
  {/* <About/> */}
  </div>
      </>
     );
 }
 export default App;