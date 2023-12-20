import * as Styled from '../style/UrlCheck.style'
import ReactLinkify from "react-linkify";

const contents = 
`  https://www.naver.com URL
https://www.naver.com주소
ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
  안녕하세요    반가워요~
 https://gw.chunjae.co.kr/app/mail 천재교육입니다~~ 
`

function UrlCheck() {
    const processContent = contents.split('\n');
    console.log(processContent)

    return (
        <Styled.UrlCheckContainer>
            <Styled.URLLink>
                {processContent.map((content, i) => (
                    <ReactLinkify key={i}>
                        <div>{content}</div>
                    </ReactLinkify>
                ))}
                
            </Styled.URLLink>
        </Styled.UrlCheckContainer>
    )
}

export default UrlCheck;