import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AllPosts from "./AllPosts";
import MessageBoard from "./MessageBoard";
import NavBar from "./NavBar";
import PostView from "./PostView";
import Welcome from "./Welcome";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <MessageBoard />,
          children: [
            {
              path: ":pageNumber",
              element: <AllPosts />,
            },
            {
              path: "post/:postId",
              element: <PostView />,
            },
          ],
        },
        {
          path: "welcome",
          element: <Welcome />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
