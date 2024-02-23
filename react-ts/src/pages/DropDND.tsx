import { useState } from 'react';
import * as Styled from '../style/DropDND';

function DropDND() {
    const [area] = useState([1, 2]);
    const [color] = useState(['#4949d3', '#cc4a4a']);
    const [post, setPost] = useState([
        { id: 1, area: 1, x: 0, y: 0, content: "101호" },
        { id: 2, area: 1, x: 100, y: 100, content: "102호" },
        { id: 3, area: 1, x: 200, y: 200, content: "103호" },

        { id: 4, area: 2, x: 0, y: 200, content: "201호" },
        { id: 5, area: 2, x: 100, y: 300, content: "202호" },
        { id: 6, area: 2, x: 200, y: 400, content: "203호" },

        { id: 7, area: 3, x: 0, y: 400, content: "301호" },
        { id: 8, area: 3, x: 100, y: 500, content: "302호" },
        { id: 9, area: 3, x: 200, y: 600, content: "303호" },
    ]);

    const movePost = (id: number, toArea: number) => {
        const updatedPosts = post.map(item => {
            if (item.id === id) {
                return { ...item, area: toArea };
            }
            return item;
        });
        setPost(updatedPosts);
    }

    const saveLocate = (id: number, x: number, y: number) => {
        const updatedPosts = post.map(item => {
            if (item.id === id) {
                return { ...item, x, y };
            }
            return item;
        });
        setPost(updatedPosts);
    }

    return (
        <Styled.DropDNDContainer id='container'>
            {area.map((item) => (
                <Styled.PostDropZone key={item}>
                    {post.filter((x) => x.area === item).map((v, i) => (
                        <Styled.RNDWrapper
                            key={`${v.id}_${i}`}
                            enableResizing={false}
                            bounds={`parent`}
                            style={{background: color[item - 1] || 'white'}}
                            default={{
                                x: v.x,
                                y: v.y,
                                width: 200,
                                height: 120
                            }}
                            onDragStop={(e, d) => saveLocate(v.id, d.x, d.y)}
                        >
                            <div className='content'>{v.content}</div>
                            {area.map((target) => (
                                target !== v.area && <button key={target} onClick={() => movePost(v.id, target)}>{target}</button>
                            ))}
                        </Styled.RNDWrapper>
                    ))}
                </Styled.PostDropZone>
            ))}
        </Styled.DropDNDContainer>
    )
}

export default DropDND;