import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Browse from './browse/browse';
import Layout from './Layout';
import NetflixTitle from './NetflixTitle';
import Blogs from './pages/Blogs';
import Certifications from './pages/Certifications';
import ContactMe from './pages/ContactMe';
import Music from './pages/Music';
import Projects from './pages/Projects';
import Reading from './pages/Reading';
import Recommendations from './pages/Recommendations';
import Skills from './pages/Skills';
import WorkExperience from './pages/WorkExperience';
import WorkPermit from './pages/WorkPermit';
import ProfilePage from './profilePage/profilePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/music" element={<Layout><Music /></Layout>} />
      <Route path="/reading" element={<Layout><Reading /></Layout>} />
      <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
    </Routes>
  );
};

export default App;
