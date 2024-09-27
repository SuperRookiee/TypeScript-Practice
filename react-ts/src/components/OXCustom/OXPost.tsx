import * as Styled from '../../style/OXCustom.style';
import { Post } from '../../types/Post.ts';

interface IOXPostProps {
    posts: Post[];
    area: number;
    handleDragStop: (post: Post, x: number, y: number, area: number) => void;
}

function OXPost({ posts, area, handleDragStop }: IOXPostProps) {
    return (
        <Styled.Zone $area={area}>
            {posts.map(post => (
                <Styled.RND
                    key={`${post.id}_${post.uuid}`}
                    $area={area}
                    bounds={`#OXContainer`}
                    enableResizing={false}
                    default={{
                        x: post.x,
                        y: post.y,
                        width: 200,
                        height: 120
                    }}
                    onDragStop={(_e, d) => handleDragStop(post, d.x, d.y, area)}
                >
                    <span>{post.title}</span>
                    <div>{post.contents}</div>
                </Styled.RND>
            ))}
        </Styled.Zone>
    );
};

export default OXPost;
