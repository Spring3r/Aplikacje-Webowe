import { Routes, Route } from "react-router-dom"
import Home from './pages/home/home.jsx'
import Posts from './pages/post/posts.jsx'
import Post from './pages/post/post.jsx';
import Categories from './pages/category/category.jsx'
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
            <Route path="/post/:id" element={<Post />} />
        </Routes>
        </>
    )
}

export default App
