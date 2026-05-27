function FormContainer({

    title,
    children

}) {

    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#f3f4f6",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px"
            }}
        >

            <div
                style={{
                    background: "white",
                    padding: "40px",
                    borderRadius: "12px",
                    width: "100%",
                    maxWidth: "500px",
                    boxShadow:
                        "0 4px 10px rgba(0,0,0,0.1)"
                }}
            >

                <h1
                    style={{
                        marginBottom: "25px"
                    }}
                >
                    {title}
                </h1>

                {children}

            </div>

        </div>

    );

}

export default FormContainer;