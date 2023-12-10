import s from "./Loader.module.css";

const Loader = () => {
    const text = "Loading...";
    return (
        <div className={s.wrapper}>
            {text.split("").map((letter, i) => (
                <span
                    data-cy="loader"
                    key={letter + i}
                    className={`${s.letter} ${i}`}
                    style={{
                        animationDelay: `${0.16 * i}s`,
                    }}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
};

export default Loader;
