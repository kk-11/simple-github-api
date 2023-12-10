"use client";

import { useState } from "react";
import s from "./Accordion.module.css";
import ReposList from "../ReposList";
import { User } from "../../types";

const Accordion = ({ login, id }: User) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen((prev) => !prev);

    return (
        <details className={s.accordion} data-cy="accordion">
            <summary className={s.summary} key={id} onClick={toggleOpen}>
                {login}
                <span className={`${s.chevron} ${open ? s.active : ""}`}>
                    V
                </span>
            </summary>
            {open && <ReposList username={login} />}
        </details>
    );
};

export default Accordion;
