import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from './Components/header/Header';
import Banner from './Components/banner/Banner';
import Main from './Components/main/Main';
import Footer from  './Components/footer/Footer';
import PostView from './Components/main/postView/PostView';

function App() {
	return(
	<BrowserRouter>
	<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/postview1" element={<PostView/>}/>
	</Routes>
	</BrowserRouter>
	);
}

function Home(){
	return(
		<>
		<Header />
		<Banner />
		<Main />
		<Footer />
		</>
	)
}

export default App;
