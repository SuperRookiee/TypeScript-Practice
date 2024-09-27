import * as Styled from '../../style/SectionDrag.style';
import { Post } from '../../types/Post.ts';

interface ISectionPostProps {
    posts: Post[];
    handleDragStop: (post: Post, x: number, y: number) => void;
}

function SectionPost({ posts, handleDragStop }: ISectionPostProps) {
    return (
        <>
            {posts.map(post => (
                <Styled.RND
                    $area={post.area}
                    key={`${post.id}_${post.uuid}`}
                    bounds={`#OXContainer`}
                    enableResizing={false}
                    default={{
                        x: post.x,
                        y: post.y,
                        width: 200,
                        height: 120
                    }}
                    onDragStop={(_e, d) => handleDragStop(post, d.x, d.y)}
                >
                    <span>{post.title}</span>
                    <div>{post.contents}</div>
                    <div>{post.area}</div>
                </Styled.RND>
            ))}
        </>
    );
};

export default SectionPost;
