import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/HomePage';
import ProfilePage from './pages/Profile/ProfilePage';
import CoursesPage from './pages/Courses/CoursesPage';
import ExamsPage from './pages/Exams/ExamsPage';
import ForumPage from './pages/Forum/ForumPage';
import ChatPage from './pages/Chat/ChatPage';
import SearchPage from './pages/Search/SearchPage';
import LogInPage from './pages/LogIn/LogInPage';
import SignUpPage from './pages/SignUp/SignUpPage';

import UseOfEnglishPage from './pages/UseOfEnglish/UseOfEnglishPage';
import WritingPage from './pages/Writing/WritingPage';
import ListeningPage from './pages/Listening/ListeningPage';
import ReadingPage from './pages/Reading/ReadingPage';
import SpeakingPage from './pages/Speaking/SpeakingPage';

import './App.css';
import Footer from "./components/Footer/Footer";


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
                    <Route path="search" element={<SearchPage />} />
                    <Route path="profile" element={<ProfilePage />} /> 

                    <Route path="logIn" element={<LogInPage />} /> 
                    <Route path="signUp" element={<SignUpPage />} />

                    <Route path="useOfEnglish" element={<UseOfEnglishPage />} />
                    <Route path="writing" element={<WritingPage />} /> 
                    <Route path="listening" element={<ListeningPage />} /> 
                    <Route path="reading" element={<ReadingPage />} /> 
                    <Route path="speaking" element={<SpeakingPage />} /> 
                </Routes>

                {/* Footer */}
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
