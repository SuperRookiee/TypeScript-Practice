interface IResult {
    data: number,
}

function Result({ data }: IResult) {
    return (
        <p>A + B = {data}</p>
    )
}

export default Result;