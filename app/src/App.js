import { Route, Routes } from 'react-router-dom';

import Quiz from './pages/Quiz';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="*" element={<div>Page not found!</div>} />
        </Routes>
    );
}
