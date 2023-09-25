import React from "react";
import AccountMenu from "./components/FeaturesOnDashboard/AccountMenu";
import DataGrid2 from "./components/FeaturesOnDashboard/DataGrid2";
import SubmitCardAtRoot from "./components/FeaturesOnDashboard/SubmitCardAtRoot";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 p-0 text-white">
        <AccountMenu></AccountMenu>
      </header>
      <div>
        <main className="flex-grow p-4">
          <DataGrid2></DataGrid2>
        </main>
        <footer className="bg-gray-800 p-0 text-white">
          {/* Your footer content */}
        </footer>
      </div>
    </div>
  );
};

export default page;
