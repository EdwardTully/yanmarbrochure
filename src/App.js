import { Routes, Route} from 'react-router-dom';
import './App.css';
import TableContents from './TableContents';
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import PageFour from './PageFour'
import SalesInfo from './SalesInfo';
import Americas from './Americas';
import AsiaPac from './AsiaPac';
import NotFound from './NotFound';
import Home from './Home';

function App() {
  return (
<<<<<<< HEAD
  <div>

       
=======
  
    <div className="App">
      <div>
        <h1 className='frontTitle'>Yanmar YSB-8 & YSB-12 Brochure</h1>
        
    </div>
>>>>>>> e4df83e9f62fd18f3ed49e57ce9db385216f9f5c
    
        <Routes>
          
<<<<<<< HEAD
            <Route index element={<Home/>}/>
            <Route path='/contents/:id' element={<TableContents/>}/>
            <Route path='/contents/1' element={<PageOne/>}/>
            <Route path='/contents/2' element={<PageTwo/>}/>
            <Route path='/contents/3' element={<PageThree/>}/>
            <Route path='/contents/4'element={<PageFour/>}/>
            <Route path='/contactsales' element={<SalesInfo/>}>
              <Route path='americas' element={<Americas/>}/>
              <Route path='asianpacific' element={<AsiaPac/>}/>
            </Route>
=======
            <Route path='/' element={<App/>}/>
            <Route path='/contents' element={<TableContents/>}/>
            <Route path='/pageone' element={<PageOne/>}/>
            <Route path='/pagetwo' element={<PageTwo/>}/>
            <Route path='/pagethree' element={<PageThree/>}/>
            <Route path='/pagefour'element={<PageFour/>}/>
>>>>>>> e4df83e9f62fd18f3ed49e57ce9db385216f9f5c
            <Route path='*' element={<NotFound/>}/>
        
        
         </Routes>
    
    </div>

  );
  
}

export default App;
