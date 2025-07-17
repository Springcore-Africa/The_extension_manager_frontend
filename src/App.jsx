import {  Routes, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs';
import NotFound from "./pages/NotFound";
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Demograph from './FarmerSignUpComp/Demograph';
import Personal from './FarmerSignUpComp/Personal';
import RS from './FarmerSignUpComp/RS';
import ResidentialAdd from './FarmerSignUpComp/ResidentialAdd';
import Auth from './pages/Auth';
import FarmersDashboard from './Dashboards/FarmersDashboard';
import InvestorsSignup from './InvstSignUp/InvestorsSignup';
import Products from './pages/Products';
import ResetPassword from './pages/ResetPassword';
import MyFarms from './Farmer/MyFarms';
import Profile from './Farmer/Profile';
import Farm from './Farmer/Farm';
import AgriBusiness from './pages/AgriBusiness';
import InvestorDashboard from "./Dashboards/InvestorDashboard";
import Reports from "./Farmer/Reports";
import Finance from "./Farmer/Finance";
import DisplayReport from "./Farmer/DisplayReport";
import IProfile from "./Investors/IProfile";
import Farmers from "./Investors/Farmers";
import Farms from "./Investors/Farms";
import Agri_Business from "./Investors/Agri_Business";
import OngoingInvestments from "./Investors/OngoingInvestments";
import AvailableInvestments from "./Investors/AvailableInvestments";
import ExtensionAgentDashboard from "./Dashboards/ExtensionAgentDashboard";
import Efarms from "./ExtensionManager/Efarms";
import Eprofile from "./ExtensionManager/Eprofile";
import EagriBussiness from "./ExtensionManager/EagriBussiness";
import Ereports from "./ExtensionManager/Ereports";
import Efinance from "./ExtensionManager/Efinance";
import AgroProcessorDashboard from "./Dashboards/AgroProcessorDashboard";
import Aprofile from "./AgroProcessor/Aprofile";
import Aproducts from "./AgroProcessor/Aproducts";
import Afinance from "./AgroProcessor/Afinance";
import Areport from "./AgroProcessor/Areport";
import Aagribusiness from "./AgroProcessor/Aagribusiness";
import Aextensionworkers from "./AgroProcessor/Aextensionworkers";



function App() {
  

  return (

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/FarmerSignUpComp/Demograph" element={<Demograph />} />
          <Route path="/FarmerSignUpComp/Personal" element={<Personal />} />
          <Route path="/FarmerSignUpComp/ResidentialAdd" element={<ResidentialAdd/>} />
          <Route path="/FarmerSignUpComp/RS" element={<RS/>} />
          <Route path="/Auth" element={<Auth/>} />
          <Route path="/FarmersDashboard" element={<FarmersDashboard/>} />
          <Route path="/InvestorsSignup" element={<InvestorsSignup/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/Farmer/MyFarms" element={<MyFarms/>} />
          <Route path="/Farmer/profile" element={<Profile/>} />
          <Route path="/Farmer/farm" element={<Farm />} />
          <Route path="/Farmer/reports" element={<Reports />} />
          <Route path="/Farmer/DisplayReport" element={<DisplayReport />} />
          <Route path="/Farmer/Finance" element={<Finance />} />
          <Route path="/agribusiness" element={<AgriBusiness />} />
          <Route path="/investordashboard" element={<InvestorDashboard />} />
          <Route path="/Investors/IProfile" element={<IProfile />} />
          <Route path="/Investors/Farmers" element={<Farmers />} />
          <Route path="/Investors/Farms" element={<Farms />} />
          <Route path="/Investors/Agri_Business" element={<Agri_Business />} />
          <Route path="/Investors/OngoingInvestments" element={<OngoingInvestments />} />
          <Route path="/Investors/AvailableInvestments" element={<AvailableInvestments />} />
          <Route path="/ExtensionAgentDashboard" element={<ExtensionAgentDashboard />} />
          <Route path="/ExtensionManager/Efarms" element={<Efarms />} />
          <Route path="/ExtensionManager/Eprofile" element={<Eprofile />} />
          <Route path="/ExtensionManager/Ereports" element={<Ereports />} />
          <Route path="/ExtensionManager/Efinance" element={<Efinance />} />
          <Route path="/ExtensionManager/EagriBusiness" element={<EagriBussiness />} />
          <Route path="/AgroProcessorDashboard" element={<AgroProcessorDashboard />} />
          <Route path="/AgroProcessor/Aprofile" element={<Aprofile />} />
          <Route path="/AgroProcessor/Aproducts" element={<Aproducts />} />
          <Route path="/AgroProcessor/Afinance" element={<Afinance />} />
          <Route path="/AgroProcessor/Areport" element={<Areport />} />
          <Route path="/AgroProcessor/Aagribusiness" element={<Aagribusiness />} />
          <Route path="/AgroProcessor/Aextensionworkers" element={<Aextensionworkers />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      
  )
}

export default App



