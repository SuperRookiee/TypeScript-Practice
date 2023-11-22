interface IError {
    message: string,
}

function Error({ message }: IError) {
    return (
        <p>Error: {message}</p>
    )
}

export default Error;