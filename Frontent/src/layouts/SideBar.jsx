import React from "react";
import {
  LayoutDashboard,
  Network,
  ShieldCheck,
  Server,
  Star,
  Shield,
  Orbit,
  Settings,
  Info
} from "lucide-react";

import Navlink from "../components/common/Navlink";
import Button from "../components/ui/Button";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between w-64 h-screen bg-[#080F13] text-white p-6 border border-cyan-500">
      <div>
      <div className="flex items-center gap-2">
        <Orbit className="text-[#3AB7FF]" size={28} />
        <h1 className="text-xl font-bold">ProofMesh</h1>
      </div>

      <p className="text-gray-400 text-sm mb-8">
        DePIN Control Center
      </p>
      <div className="flex flex-col gap-4">

        <Navlink 
          icon={LayoutDashboard}
          name="Dashboard"
          path="dashboard"
        />

        <Navlink 
          icon={Network}
          name="Network"
          path="network"
        />

        <Navlink 
          icon={ShieldCheck}
          name="Verification"
          path="verification"
        />

        <Navlink 
          icon={Server}
          name="Nodes"
          path="nodes"
        />

        <Navlink 
          icon={Star}
          name="Reputation"
          path="reputation"
        />

        <Navlink 
          icon={Shield}
          name="Security"
          path="security"
        />

      </div>
      </div>
      <div className="flex flex-col py-2  gap-4 border-t-2 border-cyan-500 ">
         <Button name ={"Connect Node"}
         />
         <div className="flex flex-col gap-2">
            <Navlink 
          icon={Info}
          name="Support"
          path="support"
          />
          <Navlink 
          icon={Settings}
          name="Settings"
          path="/settings"
          />
         </div>
      </div>
    </div>
  );
};

export default SideBar;