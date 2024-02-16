import { useState } from 'react';
import * as Styled from '../style/ReactRND';
import Menu from '../components/ReactRND/Menu';

interface FreePost {
    content: string;
    width?: number;
    height?: number;
}

const posts: FreePost[] = [
    { content: '안녕하세요', width: 400, height: 300 },
    { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', width: 500, height: 300 },
    { content: 'C', width: 300, height: 600 },
];

function ReactRND() {
    const [showMenus, setShowMenus] = useState<boolean[]>(Array(posts.length).fill(false));
    const [zIndices, setZIndices] = useState<number[]>(Array(posts.length).fill(1));
    const [menuPositions, setMenuPositions] = useState<{ x: number; y: number }[]>(Array(posts.length).fill({ x: 0, y: 0 }));

    const openMenu = (idx: number, e: React.MouseEvent<HTMLButtonElement>) => {
        setShowMenus(prevState => {
            const newState = [...prevState];
            newState[idx] = true;
            return newState;
        });
        setMenuPositions(prevState => {
            const newMenuPositions = [...prevState];
            newMenuPositions[idx] = { x: e.clientX, y: e.clientY };
            return newMenuPositions;
        });
    }

    const closeMenu = (idx: number) => {
        setShowMenus(prevState => {
            const newState = [...prevState];
            newState[idx] = false;
            return newState;
        });
    }

    const increaseZIndex = (idx: number) => {
        setZIndices(prevState => {
            const newZIndices = [...prevState];
            newZIndices[idx]++;
            return newZIndices;
        });
    }

    const decreaseZIndex = (idx: number) => {
        setZIndices(prevState => {
            const newZIndices = [...prevState];
            if (newZIndices[idx] > 0) {
                newZIndices[idx]--;
            }
            return newZIndices;
        });
    }

    return (
        <Styled.RNDContainer>
            {posts.map((post, idx) => (
                <Styled.PostWrapper
                    key={idx}
                    style={{ zIndex: zIndices[idx] }}
                    default={{ x: 0, y: 0, width: post.width ?? 100, height: post.height ?? 100 }}
                    minWidth={post.width ? post.width / 5 : 0}
                    minHeight={post.height ? post.height / 5 : 0}
                    maxWidth={post.width ? post.width * 2 : undefined}
                    maxHeight={post.height ? post.height * 2 : undefined}
                    lockAspectRatio={post.width && post.height ? post.width / post.height : false}
                >
                    <button onClick={(e) => openMenu(idx, e)} className='text-white w-full h-full'>메뉴 열기</button>
                    <button className='text-white bg-blue-400' onClick={() => decreaseZIndex(idx)}>zindex-</button>
                    <button className='text-white bg-blue-400' onClick={() => increaseZIndex(idx)}>zindex+</button>
                    {post.content}
                    {showMenus[idx] && (
                        <div style={{ position: 'absolute', left: menuPositions[idx].x, top: menuPositions[idx].y, zIndex: 9999}}>
                            <Menu setShowMenu={() => closeMenu(idx)} />
                        </div>
                    )}
                </Styled.PostWrapper>
            ))}
        </Styled.RNDContainer>
    );
}

export default ReactRND;