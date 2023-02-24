import { Link, Outlet } from "react-router-dom";

export default function MessageBoard() {
  return (
    <>
      <Link to="/1">Message Board</Link>
      <Outlet />
    </>
  );
}
