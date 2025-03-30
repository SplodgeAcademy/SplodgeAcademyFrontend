import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/Home/HomePage';
import ProfilePage from './pages/Profile/ProfilePage';
import CoursesPage from './pages/Courses/CoursesPage';
import ExamsPage from './pages/Exams/ExamsPage';
import ForumPage from './pages/Forum/ForumPage';
import ChatPage from './pages/Chat/ChatPage';
import SearchPage from './pages/Search/SearchPage';
import LogInPage from './pages/LogIn/LogInPage';
import RegisterPage from './pages/Register/RegisterPage';
import UseOfEnglishPage from './pages/UseOfEnglish/UseOfEnglishPage';
import WritingPage from './pages/Writing/WritingPage';
import ListeningPage from './pages/Listening/ListeningPage';
import ReadingPage from './pages/Reading/ReadingPage';
import SpeakingPage from './pages/Speaking/SpeakingPage';
import { AuthContext } from './context/authContext/AuthContext';

import './App.css';


function App() {

    const { user } = useContext(AuthContext);



    
    return (
        <>
            <BrowserRouter>
                {/* Routes */}
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="courses" element={user ? <CoursesPage /> : <LogInPage />} />
                    <Route path="exams" element={<ExamsPage />} />
                    <Route path="forum" element={<ForumPage />} />  
                    <Route path="chat" element={<ChatPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="profile" element={<ProfilePage />} /> 

                    <Route path="logIn" element={user ? <HomePage /> : <LogInPage />} /> 
                    <Route path="register" element={user ? <HomePage /> : <RegisterPage />} />

                    <Route path="useOfEnglish" element={<UseOfEnglishPage />} />
                    <Route path="writing" element={<WritingPage />} /> 
                    <Route path="listening" element={<ListeningPage />} /> 
                    <Route path="reading" element={<ReadingPage />} /> 
                    <Route path="speaking" element={<SpeakingPage />} /> 
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
