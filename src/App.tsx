import Examen from "./components/Hooks/Examen";
import { Navigate, Route, Routes } from 'react-router-dom';
import MainHooks from "./components/Hooks/MainHooks";




function App() {
  return (
    <div>
      {/* <Headers /> */}
      <Routes>
        <Route path='hooks' element={< MainHooks />} />
      </Routes>
      
  </div>
  );
}


export default App;
