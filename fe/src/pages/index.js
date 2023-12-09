import { useState } from "react";
import { loginAPI } from "@/lib/api.constant";
import axios from "axios";
import cookie from "cookiejs";
import { useRouter } from "next/router";
import { setAxiosInstanceToken } from "@/lib/axiosIntance"; 


export default function Login() {
    const router = useRouter();
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    function handleOnChange(event){
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(){
        await axios.post(loginAPI, state).then(({ data }) => {
            cookie.set('token', data.token);
            setAxiosInstanceToken(data.token);
            router.push('/u/dashboard');
        }).catch((err) => {
            console.log(err)
        });
    }


    return (
        <div className="flex flex-col min-h-screen justify-center bg-stone-200">
            <div className="flex-grow">
                <div className="bg-fuchsia-950 py-6 w-full">
                <p className="text-center text-white font-bold text-3xl">
                    Beat Rate
                </p>
                </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
            </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                    </label>
                    <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        value={state.email}
                        onChange={handleOnChange}
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-950 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <a
                            href="#"
                            className="font-semibold text-fuchsia-950 hover:text-indigo-500">
                        Forgot password?
                        </a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        value={state.password}
                        onChange={handleOnChange}
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-950 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="flex w-full justify-center rounded-md bg-fuchsia-950 px-3 py-1.5 text-sm font-semibold 
                        leading-6 text-white shadow-sm hover:bg-fuchsia-800 focus-visible:outline focus-visible:outline-2 
                        focus-visible:outline-offset-2 focus-visible:outline-fuchsia-950">
                        Sign in
                    </button>
                </div>
                </form>
                </div>
            </div>
            
        </div>
        
    );
}
