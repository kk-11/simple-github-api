import Accordion from "../Accordion";
import { useUsers } from "@/app/hooks";
import { type User } from "@/app/types";
import s from "./UsersList.module.css";
import Loader from "../Loader";
import Error from "../Error";

const UsersList = ({ query }: { query: string }) => {
    const { data, loading, error } = useUsers(query);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Error error={error} action={true} />;
    }

    return data.length ? (
        data.map((user: User) => <Accordion key={user.id} {...user} />)
    ) : (
        <Error error="No users found" action={false} />
    );
};

export default UsersList;
