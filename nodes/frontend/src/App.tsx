import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import ContactsPage from "./pages/CallsPage";
import CreateNewModel from "./pages/CreateNewModel";
import CompaignsPage from "./pages/Compaigns";
import CampaignDetails from "./pages/CampaignDetails";
import CreateNewCompaign from "./pages/CreateNewCompaign";
import Models from "./pages/Models";
import RequireAuth from "./auth/auth";
import Login from "./pages/Login"; // <- your login page
import LeadsTable from "./pages/LeadsTable";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="*"
        element={
          <RequireAuth>
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/create-new-model" element={<CreateNewModel />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/compaigns" element={<CompaignsPage />} />
                <Route path="/create-new-campaign" element={<CreateNewCompaign />} />
                <Route path="/models" element={<Models />} />
                <Route path="/campaign-details" element={<CampaignDetails />} />
                <Route path='/leads' element={<LeadsTable/>} />
                <Route path="*" element={<div>404 Not Found</div>} />
              </Routes>
            </Layout>
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
