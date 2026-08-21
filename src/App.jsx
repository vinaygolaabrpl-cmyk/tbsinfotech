import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/common/ScrollToTop';

export default function App() {
  useScrollAnimation();

  return (
    <ThemeProvider>
      {/* <BrowserRouter> */}
      <BrowserRouter  basename="/dev/tbsinfotech">
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
