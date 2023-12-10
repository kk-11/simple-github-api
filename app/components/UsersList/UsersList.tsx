import { Loader, Accordion, Error } from "@components";
import { useUsers } from "@hooks";
import { type User } from "@types";

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
