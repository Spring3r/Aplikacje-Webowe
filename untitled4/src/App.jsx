import { Routes, Route } from "react-router-dom"
import Home from './pages/home.jsx'
import Posts from './pages/posts.jsx'
import Categories from './pages/category.jsx'
import Header from './components/header.jsx'
import './App.css'

function App() {
    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posty" element={<Posts />} />
            <Route path="/kategorie" element={<Categories />} />
        </Routes>
        </>
    )
}

export default App
