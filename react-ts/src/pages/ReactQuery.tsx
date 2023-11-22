import * as Styled from "../style/ReactQuery.style";
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../components/reactQuery/Loading';
import Error from '../components/reactQuery/Error';
import Result from '../components/reactQuery/Result';

interface IFetchCalculate {
    A: number,
    B: number,
}

//Calculate A+B
const fetchCalculate = async ({ A, B }: IFetchCalculate): Promise<number> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(A + B), 1000);
    });
};

function ReactQuery() {
    const [A, setA] = useState<number>(0);
    const [B, setB] = useState<number>(0);
    const { data, error, isLoading } = useQuery<number, Error>(['Calculate', A, B], () => fetchCalculate({ A, B }));
    // reset, onSuccess
    return (
        <Styled.ReactQueryContainer>
            <h1>useQuery</h1>
            <section>
                <Styled.InputLabelContainer>
                    A <Styled.Input type="number" value={A} onChange={(e) => setA(parseInt(e.target.value))} />
                </Styled.InputLabelContainer>
                <Styled.InputLabelContainer>
                    B <Styled.Input type="number" value={B} onChange={(e) => setB(parseInt(e.target.value))} />
                </Styled.InputLabelContainer>
            </section>

            <section>
                <h2>Result</h2>
                {isLoading && <Loading />}
                {error && <Error message={error.message} />}
                {data!==undefined && <Result data={data} />}
            </section>
        </Styled.ReactQueryContainer>
    );
}

export default ReactQuery;