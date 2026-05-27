function Card({

    title,
    description,
    buttonText,
    onClick

}) {

    return (

        <div
            style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow:
                    "0 2px 8px rgba(0,0,0,0.1)"
            }}
        >

            <h2>
                {title}
            </h2>

            <p>
                {description}
            </p>

            <button
                onClick={onClick}
                style={{
                    padding: "10px 15px",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                {buttonText}
            </button>

        </div>

    );

}

export default Card;