import { Route, Routes } from 'react-router-dom';
import './App.css';
import {About,Contact,Recipes,SingleRecipe,TagTemplate,Tags} from './pages'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/singlerecipe' element={<SingleRecipe/>}/>
      <Route path='/tagtemplate' element={<TagTemplate/>}/>
      <Route path='/tags' element={<Tags/>}/>
    </Routes>
  );
}

export default App;
