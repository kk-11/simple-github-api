import { Repo } from "@types";
import s from "./RepoCard.module.css";

export default function RepoCard({ data }: { data: Repo }) {
    return (
        <div className={s.repo} key={data.id}>
            <div className={s.header}>
                <h3 className={s.name}>{data.name}</h3>
                <div className={s.stars}>{data.stargazers_count} STARS</div>
            </div>
            <p className={s.description}>{data.description}</p>
            <a className={s.link} href={data.html_url} target="_blank">
                See more
            </a>
        </div>
    );
}
