import { useRouter } from "next/router";

export default function BoardPage() {
  const router = useRouter();
  return (
    <>
      <div>안녕하세요 게시판 동적 페이지 입니다.</div>
      <div>게시글아이디:{router.query.boardId}</div>
    </>
  );
}

const getSeverSideProps = () => {
  // 만약 서버사이드 렌더링을 하는 페이지라면 out 폴더로 생성 불가
  // 이런 경우, next.config.js에서 exportPathMap을 사용해서 현재 페이지 제외시키기
};
