import React from "react";
import UserInfo from "./components/UserInfo";
const App = () =>
{
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className="w-1/4 p-6">
                <UserInfo />
            </div>

            <div className="w-3/4">

            </div>



        </div>
    );
};

export default App;