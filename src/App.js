import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/HomePage';
import CoursesPage from './pages/Courses/CoursesPage';
import ExamsPage from './pages/Exams/ExamsPage';
import ForumPage from './pages/Forum/ForumPage';
import ChatPage from './pages/Chat/ChatPage';

import './App.css';


function App() {

    
    return (
        <>
            <BrowserRouter>
                {/* Navbar */}
                <Navbar />

                {/* Routes */}
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="courses" element={<CoursesPage />} />
                    <Route path="exams" element={<ExamsPage />} />
                    <Route path="forum" element={<ForumPage />} />  
                    <Route path="chat" element={<ChatPage />} />        
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
