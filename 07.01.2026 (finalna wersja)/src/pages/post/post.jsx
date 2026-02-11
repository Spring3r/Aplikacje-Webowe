import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./post.module.scss";

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.log(err));
    }, [id]);
    if (!post) return <p>Ładowanie...</p>;
    return(
        <main className={styles.stt}>
            <header>
                {post.title}
            </header>
            <div>
                <p>{post.body}</p>

            </div>
            <Link to={`/posty`}>
                <button>Wroc do postow</button>
            </Link>
        </main>
    );
}