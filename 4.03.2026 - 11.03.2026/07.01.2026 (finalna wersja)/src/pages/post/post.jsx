import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./post.module.scss";

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [komentarze, setKomentarze] = useState([]);
    const [nowyKom, setNowyKom] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/wpisy/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.log(err));
    }, [id]);

    useEffect(() => {
        if (!post) return;
        fetch(`http://localhost:3000/komentarze?wpisId=${post.id}`)
            .then(res => res.json())
            .then(data => setKomentarze(data))
            .catch(err => console.log(err));
    }, [post]);

    function dodajKom() {
        fetch("http://localhost:3000/komentarze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Komentarz: nowyKom,
                Autor: "anonimowy",
                kategoriaId: post.kategoriaId,
                wpisId: post.id
            })
        })
            .then(res => res.json())
            .then(data => {
                setKomentarze([...komentarze, data]);
                setNowyKom("");
            })
            .catch(err => console.log(err));
    }

    if (!post) return <p>Ładowanie...</p>;

    return (
        <main className={styles.stt}>
            <header>Autor: {post.Autor}</header>
            <div><p>{post.Wpis}</p></div>

            <section>
                <h1>Dodaj komentarz:</h1>
                <input
                    type="text"
                    value={nowyKom}
                    onChange={e => setNowyKom(e.target.value)}
                />
                <button onClick={dodajKom}>Dodaj komentarz</button>

                <h1>Komentarze:</h1>
                {komentarze.map(kom => (
                    <p key={kom.id}>{kom.Autor}: {kom.Komentarz}</p>
                ))}
            </section>

            <Link to={`/posty`}>
                <button className={styles.dopost}>Wroc do postow</button>
            </Link>
        </main>
    );
}