import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Home2 from './pages/Home2';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import { ThemeProviderWrapper } from './providers/ThemeProvider';

function App() {
	return (
		<ThemeProviderWrapper>
			<BrowserRouter basename="/beauticeclinic/">
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home2" element={<Home2 />} />
					<Route path="/about" element={<About />} />
					<Route path="/service" element={<Service />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/team" element={<Team />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</ThemeProviderWrapper>
	);
}

export default App;
