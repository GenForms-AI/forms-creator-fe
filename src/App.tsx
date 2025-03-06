import { Route, Routes } from "react-router-dom";

import FormBuilderPage from "@/pages/FormBuilderPage";
import HomePage from "@/pages/HomePage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-svh">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form-builder" element={<FormBuilderPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
