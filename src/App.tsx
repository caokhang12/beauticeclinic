import './App.css';
import { ThemeProviderWrapper } from './providers/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';

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
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Profile from './pages/auth/profile';

function App() {
	return (
		<AuthProvider>
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
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</ThemeProviderWrapper>
		</AuthProvider>
	);
}

export default App;
