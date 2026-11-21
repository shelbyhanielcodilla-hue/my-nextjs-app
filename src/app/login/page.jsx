"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Login() {
  const router = useRouter();


  const myUsername = "Hannah Mycah";
  const myPassword = "081806";


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const [showPassword, setShowPassword] = useState(false);


  const [error, setError] = useState("");


  function handleLogin() {
    if (username == "" || password == "") {
      setError("Enter your username and password.");
      return;
    }


    if (username != myUsername) {
      setError("Please enter a valid username.");
      return;
    }


    if (password != myPassword) {
      setError("Please enter a valid password.");
      return;
    }


    if (username == myUsername && password == myPassword) {
      router.push("/profile");
    }
  }


  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center bg-pink-100 border border-gray-200 py-4 px-6 rounded-lg shadow-md">
        <p className="text-2xl font-bold">Login</p>


        <div className="flex flex-col gap-2">
          <input
            className="border border-gray-300 rounded-md py-2 px-4"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />


          <input
            className="border border-gray-300 rounded-md py-2 px-4"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <label className="flex items-center gap-2 text-xs">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
        </div>


        {error && <p className="text-red-500">{error}</p>}


        <button
          className="hover:cursor-pointer bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}