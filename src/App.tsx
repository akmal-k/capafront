import "./App.css";
import AppRouter from "./routes/Routes";
import MainLayout from "./components/layouts/Main";

function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

export default App;
