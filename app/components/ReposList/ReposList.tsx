import RepoCard from "./components/RepoCard/RepoCard";
import { Loader, Error } from "@components";
import { useRepos } from "@hooks";
import { type Repo } from "@types";

import s from "./ReposList.module.css";

function ReposList({ username }: { username: string }) {
    const { data, loading, error } = useRepos(username);

    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <Error error={error} action={false} />;
    }

    return (
        <div className={s.list} data-cy="repolist">
            {data.length ? (
                data.map((repo: Repo) => <RepoCard key={repo.id} data={repo} />)
            ) : (
                <Error
                    error="No public repos found for this user"
                    action={false}
                />
            )}
        </div>
    );
}

export default ReposList;
