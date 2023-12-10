import { useEffect, useState } from "react";
import { type User } from "../types";

const useUsers = (query: string) => {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        setError(null);
        const fetchData = async () => {
            await fetch(`/api/users?qs=${query}`)
                .then((res) => res.json())
                .then((res) => setData(res))
                .catch((e) => setError(e?.message || "Something went wrong"))
                .finally(() => setLoading(false));
        };
        fetchData();
    }, [query]);

    return { data, loading, error };
};

export default useUsers;
