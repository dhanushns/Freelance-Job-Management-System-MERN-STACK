import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/style.css';
import Home from './pages/home';
import Login from './pages/login';
import Registartion from './pages/registration';
import Buyer from './pages/buyer/buyer';
import Services from './pages/buyer/services';
import ProfilesDashboard from './pages/buyer/profile_dashboard';
import ProfileView from './pages/buyer/profile_view';
import PostJob from './pages/buyer/post_job';
import MyPost from './pages/buyer/my_post';
import Dashboard from './pages/seller/dashboard';
import Proposals from './pages/seller/proposals';
import MyProjects from './pages/seller/my_projects';
import Jobs from './pages/seller/jobs';
import OnboardSeller from './pages/onboard_seller';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path = '/' element = {<Home/>}></Route>
        <Route exact path = '/login' element = {<Login/>}></Route>
        <Route exact path = '/signup' element = {<Registartion/>}></Route>
        <Route exact path = '/buyer' element = {<Buyer/>}></Route>
        <Route exact path = '/buyer/services' element = {<Services/>}></Route>
        <Route exact path = '/services' element = {<Services/>}></Route>
        <Route exact path = '/buyer/services/category' element = {<ProfilesDashboard/>}></Route>
        <Route exact path = '/buyer/profile_view' element = {<ProfileView/>}></Route>
        <Route exact path = '/buyer/create_job' element = {<PostJob/>}></Route>
        <Route exact path = '/buyer/my_post' element = {<MyPost/>}></Route>
        <Route exact path = '/seller/dashboard' element = {<Dashboard/>}></Route>
        <Route exact path = '/seller/proposals' element = {<Proposals/>}></Route>
        <Route exact path = '/seller/projects' element = {<MyProjects/>}></Route>
        <Route exact path = '/seller/jobs' element = {<Jobs/>}></Route>
        <Route exact path = '/onboard_seller' element = {<OnboardSeller/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);