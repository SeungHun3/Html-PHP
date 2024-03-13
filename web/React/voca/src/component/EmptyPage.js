import { Link } from "react-router-dom";

export default function EmptyPage() {
    // 위의 조건이 해당하지 않을때 EmptyPage로 나옴
    return (
        <>
            <h2>잘못된 접근입니다</h2>
            <Link to="/">돌아가기</Link>
        </>
    )
}