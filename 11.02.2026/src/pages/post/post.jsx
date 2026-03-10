import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./post.module.scss";
export default function Post() {
    const { id } = useParams();
    const { data: post, isLoading } = useQuery({
        queryKey: ["post", id],
        queryFn: async () => (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json(),
    });


    if (isLoading) return <p>Ładowanie...</p>;
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