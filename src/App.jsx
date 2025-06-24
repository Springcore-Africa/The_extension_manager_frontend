import {  Routes, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Demograph from './SignUpComp/Demograph';
import Farming from './SignUpComp/FarmingBg';
import Personal from './SignUpComp/Personal';
import RS from './SignUpComp/RS';
import ResidentialAdd from './SignUpComp/ResidentialAdd';
import Auth from './pages/Auth';
import FarmersDashboard from './Dashboards/FarmersDashboard';
import InvestorsSignup from './InvestorsSignup';
import Products from './pages/Products';
import ResetPassword from './pages/ResetPassword';
import MyFarms from './pages/MyFarms';
import Profile from './pages/Profile';
import ExtensionAgent from './pages/ExtensionAgent';
import Farm from './pages/Farm';
import AgriBusiness from './pages/AgriBusiness';
import InvestorDashboard from "./Dashboards/InvestorDashboard";

function App() {
  

  return (
  
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUpComp/FarmingBg" element={<Farming />} />
          <Route path="/SignUpComp/Demograph" element={<Demograph />} />
          <Route path="/SignUpComp/Personal" element={<Personal />} />
          <Route path="/SignUpComp/ResidentialAdd" element={<ResidentialAdd/>} />
          <Route path="/SignUpComp/RS" element={<RS/>} />
          <Route path="/Auth" element={<Auth/>} />
          <Route path="/FarmersDashboard" element={<FarmersDashboard/>} />
          <Route path="/InvestorsSignup" element={<InvestorsSignup/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/myfarms" element={<MyFarms/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/extension-agent" element={<ExtensionAgent/>} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/agribusiness" element={<AgriBusiness />} />
          <Route path="/investordashboard" element={<InvestorDashboard />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      
  )
}

export default App
