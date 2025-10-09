import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./scenes/navigation/RootLayout";
import Homepage from "./scenes/pages/homepage/Homepage";
import Visas from "./scenes/pages/visas/Visas";
import VisasSingle from "./scenes/pages/visas/VisasSingle";
import Evisas from "./scenes/pages/visas/Evisas";
import EvisasSingle from "./scenes/pages/visas/EvisasSingle";
import Contact from "./scenes/pages/contact/Contact";

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
