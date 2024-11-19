import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './utils/theme';
import DashboardPage from './pages/dashboard';

Object.entries(theme.colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--color-${key}`, value);
});

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
            </Routes>
        </Router>
    );
};

export default App;
