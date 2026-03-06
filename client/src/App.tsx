import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Route, Routes } from 'react-router-dom';
import Generator from './pages/Generator';
import Community from './pages/Community';
import Result from './pages/Result';
import Plans from './pages/Plans';
import MyGenerations from './pages/MyGenerations';

function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/generate' element={<Generator />}/>
        <Route path='/result/:projectId' element={<Result />}/>
        <Route path='/my-generations' element={<MyGenerations/>}/>
        <Route path='/community' element={<Community />}/>
        <Route path='/plans' element={<Plans />}/>
      </Routes>

			<Footer />
		</>
	);
}
export default App;