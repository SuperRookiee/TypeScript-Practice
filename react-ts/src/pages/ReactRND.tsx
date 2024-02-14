import * as Styled from '../style/ReactRND';

interface FreePost {
    content: string;
    width?: number;
    height?: number;
}

const posts: FreePost[] = [
    { content: '안녕하세요', width: 400, height: 200 },
    { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', width: 450, height: 337.5 },
    { content: 'C' },
];

function ReactRND() {

    return (
        <Styled.RNDContainer>
                {posts.map((post, idx) => (
                    <Styled.PostWrapper
                        key={idx}
                        default={{ x: 0, y: 0, width: post.width ?? 100, height: post.height ?? 100 }}
                        minWidth={post.width ? post.width / 5 : 0}
                        minHeight={post.height ? post.height / 5 : 0}
                        maxWidth={post.width ? post.width * 2 : undefined}
                        maxHeight={post.height ? post.height * 2 : undefined}
                        lockAspectRatio={post.width && post.height ? post.width / post.height : false}
                    >
                        <button onClick={(e)=> {e.stopPropagation(); alert("Hi")}}>Hi!</button>
                        {post.content}
                    </Styled.PostWrapper>
                ))}
        </Styled.RNDContainer>
    );
}

export default ReactRND;