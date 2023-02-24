import { useParams } from "react-router-dom";

export default function AllPosts() {
  const { pageNumber } = useParams();
  return <div>AllPosts - page: {pageNumber}</div>;
}
