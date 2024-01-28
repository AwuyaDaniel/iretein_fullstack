import React from 'react';
import RegistrationForm from "../Auth/Registration";

function Reg() {
    return (
        <div className="">
            <div className="flex justify-center">
                <div className="pt-20 pb-10">
                    <img alt="home" src="/images/Frame%201000004343.svg"/>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className="border-2 rounded-lg py-10 px-6">
                    <div className="grid justify-items-center ...">
                        <div>
                            <h1 className="text-4xl">Sign Up</h1>
                        </div>
                        <div>
                            <h1 className="text-sm">Create an account</h1>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center">
                        <RegistrationForm/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Reg;
