import * as Styled from '../style/OXCustom.style';
import OXPost from '../components/OXCustom/OXPost';
import { Post } from '../types/Post.ts';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const viewPortWidthHalf = 1914 / 2;
const postHalf = 200 / 2;

const DBData: Post[] = [
    { id: 1, area: 1, x: 0, y: 0, title: "호랑이", contents: "어흥" },
    { id: 2, area: 1, x: 500, y: 100, title: "원숭이", contents: "우끼끼" },
    { id: 3, area: 1, x: 200, y: 200, title: "참새", contents: "짹짹" },
    { id: 4, area: 2, x: 0, y: 200, title: "고양이", contents: "야옹" },
    { id: 5, area: 2, x: 150, y: 500, title: "강아지", contents: "멍멍" },
    { id: 6, area: 2, x: 700, y: 400, title: "돼지", contents: "꿀꿀" },
]

function OXCustom() {
    const data: Post[] = DBData.map(item => ({ ...item, uuid: uuid() }));
    const [posts, setPosts] = useState<Post[]>(data);

    const handleDragStop = (post: Post, x: number, y: number, area: number) => {
        let newX = x;
        let newArea = area;

        switch (area) {
            case 1:
                //선을 넘는 경우
                if (x >= viewPortWidthHalf) {
                    newX = x - viewPortWidthHalf;
                    newArea = 2;
                }
                //절반보다 많이 넘는 경우
                else if (x >= viewPortWidthHalf - postHalf) {
                    newX = 0;
                    newArea = 2;
                }
                // 절반보다 적게이면서 게시물이 조금 넘어갔을때
                else if (x < viewPortWidthHalf && x > viewPortWidthHalf - postHalf * 2) {
                    newX = viewPortWidthHalf - postHalf * 2;
                }
                break;
            case 2:
                //선을 넘는 경우
                if (x < -200) {
                    newX = viewPortWidthHalf + x;
                    newArea = 1;
                }
                //절반보다 많이 넘는 경우
                else if (x < -100) {
                    newX = viewPortWidthHalf - 200;
                    newArea = 1;
                }
                // 절반보다 적게이면서 게시물이 조금 넘어갔을때
                else if (x <= 0 && x > -postHalf) {
                    newX = 0;
                }
                break;
        }

        setPosts(posts.map(p => {
            if (p.id === post.id)
                return { ...p, x: newX, y: y, area: newArea, uuid: uuid() };
            return p;
        }));
    };

    return (
        <>
            <button onClick={() => console.log(posts)}>현재값</button>
            <Styled.OXContainer id='OXContainer'>
                {[1, 2].map((area) => (
                    <OXPost key={area} posts={posts.filter(p => p.area === area)} area={area} handleDragStop={handleDragStop} />
                ))}
            </Styled.OXContainer>
        </>
    )
}

export default OXCustom;