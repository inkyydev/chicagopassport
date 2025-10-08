import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./scenes/navigation/RootLayout";
import Homepage from "./scenes/pages/homepage/Homepage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ path: "/", element: <Homepage /> }],
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
