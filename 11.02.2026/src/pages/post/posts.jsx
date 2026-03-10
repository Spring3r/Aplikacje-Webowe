import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./Posts.module.scss";

export default function Posts() {
    const { data: posts = [], isLoading, isError } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) throw new Error("Blad z pobieraniekm postow");
            return res.json();
        },
    });
    if (isLoading) {
        return (
            <main className={styles.kafelek}>
                <p>Ładowanie...</p>
            </main>
        );
    }

    if (isError) {
        return (
            <main className={styles.kafelek}>
                <p>Błąd podczas ładowania postów</p>
            </main>
        );
    }

    return(
        <main className={styles.kafelek}>
            {posts.map(post => (
                <div>
                    <header>{post.title.substring(0, 20)}...</header>
                    <section>{post.title.substring(0, 50)}...</section>
                    <Link to={`/post/${post.id}`}>
                        <button>Przejdz do posta</button>
                    </Link>
                </div>
            ))}
        </main>
    );
}