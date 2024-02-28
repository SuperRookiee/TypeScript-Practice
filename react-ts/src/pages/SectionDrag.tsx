import * as Styled from '../style/SectionDrag.style.tsx';
import SectionPost from "../components/SectionDrag/SectionPost.tsx";
import {Post} from '../types/Interfaces.ts';
import {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';

const viewPortWidth = 1914;

const postHalf = 200 / 2;

const DBData: Post[] = [
    {id: 1, area: 0, x: 0, y: 0, title: "호랑이", contents: "어흥"},
    {id: 2, area: 0, x: 300, y: 60, title: "원숭이", contents: "우끼끼"},
    {id: 3, area: 0, x: 200, y: 200, title: "참새", contents: "짹짹"},
    {id: 4, area: 1, x: 638, y: 150, title: "고양이", contents: "야옹"},
    {id: 5, area: 1, x: 750, y: 400, title: "강아지", contents: "멍멍"},
    {id: 6, area: 1, x: 1000, y: 300, title: "돼지", contents: "꿀꿀"},
    {id: 7, area: 2, x: 1276, y: 50, title: "말", contents: "히이힝"},
    {id: 8, area: 2, x: 1400, y: 200, title: "늑대", contents: "아~우~"},
    {id: 9, area: 2, x: 1500, y: 340, title: "사람", contents: "하이"},
    {id: 10, area: 3, x: 1606, y: 50, title: "알파카", contents: "퉤!"},
    {id: 11, area: 3, x: 1650, y: 200, title: "염소", contents: "메~~"},
    {id: 12, area: 3, x: 1700, y: 340, title: "소", contents: "음머"},
]

const DBSection = [0, 1, 2];

function SectionDrag() {
    const [posts, setPosts] = useState<Post[]>(DBData.map(item => ({...item, uuid: uuid()})));
    const [area, setArea] = useState<number[]>(DBSection);
    const point = area.map((_, index) => { // 638 1276 1914
        if (index === area.length - 1) {
            return viewPortWidth;
        } else {
            return viewPortWidth / area.length * (index + 1);
        }
    });

    const handleDragStop = (post: Post, x: number, y: number) => {
        let newX = x;
        let newArea = calculateNewArea(x);
        const points = [0, ...point];

        for (const [idx, pointValue] of points.entries()) {
            if (x >= pointValue && x < (points[idx + 1] || Infinity)) {
                newArea = idx;
                break;
            }
        }

        for (const [index, point] of points.entries()) {
            if (x > point - postHalf && x < point) {
                newArea = index;
                newX = point;
            } else if (x > point - postHalf * 2 && x < point - postHalf) {
                newArea = index - 1;
                newX = point - postHalf * 2;
            }
        }

        setPosts(posts.map(p => (
            p.id === post.id ? {...p, x: newX, y, area: newArea, uuid: uuid()} : p
        )));
    };

    const calculateNewArea = (x: number) => {
        return Math.floor(x / (viewPortWidth / area.length));
    };

    const handleChangeArea = (value: number) => {
        setArea(Array.from({length: value}, (_, i) => i));
    };

    useEffect(() => {
        setPosts(posts.map(post => ({...post, area: calculateNewArea(post.x)})));
    }, [area]);

    return (
        <>
            <label>Points: </label>
            <input type="number" value={area.length} min={1}
                   onChange={(e) => handleChangeArea(parseInt(e.target.value))}/>
            <Styled.DragSection id='OXContainer' $count={area.length}>
                {[...Array(area.length - 1)].map((_, index) =>
                    <Styled.SectionDivider key={index} $width={viewPortWidth} $length={area.length} $index={index + 1}/>
                )}
                <SectionPost posts={posts} handleDragStop={handleDragStop}/>
            </Styled.DragSection>
        </>
    )
}

export default SectionDrag;