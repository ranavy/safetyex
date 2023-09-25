import React from "react";
import AccountMenu from "./components/FeaturesOnDashboard/AccountMenu";
import DataGrid2 from "./components/FeaturesOnDashboard/DataGrid2";
import SubmitCardAtRoot from "./components/FeaturesOnDashboard/SubmitCardAtRoot";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-white"> {/* Set the entire page background to white */}
      <header className="p-0 text-black"> {/* Remove the gray background and set text color to black */}
        <AccountMenu></AccountMenu>
      </header>
      <div>
        <main className="flex-grow p-4">
          <DataGrid2></DataGrid2>
        </main>
        <footer className="p-0 text-black"> {/* Remove the gray background and set text color to black */}
          {/* Your footer content */}
        </footer>
      </div>
    </div>
  );
};

export default page;
