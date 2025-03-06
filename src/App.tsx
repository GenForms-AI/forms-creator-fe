import { Route, Routes } from "react-router-dom";

import FormBuilderPage from "./pages/FormBuilderPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormBuilderPage />} />
    </Routes>
  );
}

export default App;
