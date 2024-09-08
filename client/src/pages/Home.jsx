import { useContext } from "react";
import { UserContext } from "../App";


export default function Home() {
    const { state } = useContext(UserContext);

    return (
        <div className="w-full mx-auto my-16 max-w-7xl">
            <aside className="relative mx-2 overflow-hidden text-black bg-gray-100 rounded-lg sm:mx-16 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pt-10 pb-20 mx-auto sm:py-24 sm:px-6 lg:px-8">
                    <div className="max-w-xl space-y-8 text-center sm:mt-1 mt-80 sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            {state.userSession ? `WELCOME ${state.fullName}`: "WELCOME To MERN"} 
                            <span className="block text-2xl">{state.userSession ? "Happy, to see you back" : "Developement"}</span>
                        </h2>  
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full pt-12 pl-8 sm:my-20 sm:pt-1 ">
                    <img className="w-96" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image1" />
                </div>
            </aside>
        </div>
    );
}
