import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./scenes/navigation/RootLayout";
import Homepage from "./scenes/pages/homepage/Homepage";
import Visas from "./scenes/pages/visas/Visas";
import VisasSingle from "./scenes/pages/visas/VisasSingle";
import Evisas from "./scenes/pages/visas/Evisas";
import EvisasSingle from "./scenes/pages/visas/EvisasSingle";
import Contact from "./scenes/pages/contact/Contact";
import VisaProcess from "./scenes/pages/visa-process/VisaProcess";
import UsPassport from "./scenes/pages/us-passport/UsPassport";
import Blog from "./scenes/pages/blog/BlogPage";
import BlogSinglePage from "./scenes/pages/blog/BlogSinglePage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/visas", element: <Visas /> },
      { path: "/visas/:slug", element: <VisasSingle /> },
      { path: "/e-visas", element: <Evisas /> },
      { path: "/e-visas/:slug", element: <EvisasSingle /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/visa-process", element: <VisaProcess /> },
      { path: "/us-passport", element: <UsPassport /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:slug", element: <BlogSinglePage /> },
    ],
  },
]);

function App() {
  return (
    <div className="fl-page">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
