import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useMode, colorContext } from "./theme";
import TopBar from "./layouts/TopBar";
import Dashboard  from "./pages/dashboard"
function App() {
  const [theme, colorMode] = useMode();

  return (
    <colorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
            <Routes>
              <Route path ="/" element= {<Dashboard/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorContext.Provider>
  );
}

export default App;
