import { useEffect, useState } from "react";
import styles from "./posts.module.scss";
import {Link} from "react-router-dom";
export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/wpisy/")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err));
    }, []);
    return(
        <main className={styles.kafelek}>
            {posts.map(post => (
                <div>
                    <header>{post.Wpis.substring(0, 20)}...</header>
                    <section>{post.Wpis.substring(0, 20)}...</section>
                    <Link to={`/post/${post.id}`}>
                        <button>Przejdz do posta</button>
                    </Link>
                </div>
            ))}
        </main>
    );
}