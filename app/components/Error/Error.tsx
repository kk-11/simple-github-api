import s from "./Error.module.css";

const Error = ({
    error,
    action,
}: {
    error: string | null;
    action?: boolean;
}) => (
    <div className={s.wrapper} data-cy="error">
        <div data-cy="errorText">{error || "Something went wrong"}</div>
        {action && (
            <a target="_self" href="/" data-cy="errorAction">
                Refresh
            </a>
        )}
    </div>
);

export default Error;
