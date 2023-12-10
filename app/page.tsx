"use client";
import Head from "next/head";
import { useState } from "react";
import s from "./page.module.css";
import UsersList from "./components/UsersList";
import Branding from "./components/Branding";

export default function Home() {
    const [query, setQuery] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <main className={s.main}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
            </Head>
            <input
                className={s.input}
                onChange={handleChange}
                placeholder="Search for a github user..."
                type="text"
            />
            <section className={s.section}>
                {query && <UsersList query={query} />}
            </section>
            <Branding />
        </main>
    );
}
