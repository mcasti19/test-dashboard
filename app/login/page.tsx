import React from 'react';
import { Logo } from '../components';
import LoginWrapper from '../components/LoginWrapper';


const Login = () => {
    return (
        <main className='flex items-center justify-center md:h-screen'>
            <div className="relative mx-auto flex flex-col max-w-[400] space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end rounded-lg p-3 bg-slate-700 md:h-36">
                    <div className="w-32 m-auto text-white md:w-36 ">
                        <Logo />
                    </div>
                </div>
                <LoginWrapper />
            </div>

        </main>
    )
}

export default Login;