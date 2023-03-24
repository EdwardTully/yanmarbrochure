import { Routes, Route} from 'react-router-dom';
import './App.css';
import TableContents from './TableContents';
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import PageFour from './PageFour'
import NotFound from './NotFound';

function App() {
  return (
  
    <div className="App">
      <div>
        <h1 className='frontTitle'>Yanmar YSB-8 & YSB-12 Brochure</h1>
        
    </div>
    
         <Routes>
          
            <Route path='/' element={<App/>}/>
            <Route path='/contents' element={<TableContents/>}/>
            <Route path='/pageone' element={<PageOne/>}/>
            <Route path='/pagetwo' element={<PageTwo/>}/>
            <Route path='/pagethree' element={<PageThree/>}/>
            <Route path='/pagefour'element={<PageFour/>}/>
            <Route path='*' element={<NotFound/>}/>
        
        
        </Routes>
    
    </div>

  );
  
}

export default App;
