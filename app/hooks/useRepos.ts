import { useEffect, useState } from "react";
import { type Repo } from "../types";

const useRepos = (user: string) => {
    const [data, setData] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setError(null);
        const fetchData = async () => {
            await fetch(`/api/repos?user=${user}`)
                .then((res) => res.json())
                .then((res) => setData(res))
                .catch((e) => setError(e?.message || "Something went wrong"))
                .finally(() => setLoading(false));
        };

        fetchData();
    }, [user]);

    return { data, loading, error };
};

export default useRepos;
