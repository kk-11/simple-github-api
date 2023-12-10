"use client";
import { useState } from "react";
import s from "./page.module.css";
import UsersList from "./components/UsersList";

export default function Home() {
    const [query, setQuery] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <main className={s.main}>
            <input
                className={s.input}
                onChange={handleChange}
                placeholder="Search for a github user..."
                type="text"
            />
            <section className={s.section}>
                {query && <UsersList query={query} />}
            </section>
        </main>
    );
}
