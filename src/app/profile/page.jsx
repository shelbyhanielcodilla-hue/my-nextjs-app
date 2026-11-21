"use client";


import { useRouter } from "next/navigation";


export default function Profile() {
  const router = useRouter();


  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <p>Profile</p>


      <img
        src="memes.png"
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4 border-2 border-gray-500 shadow-md"
      />


      <p className="text-xl font-lightbold mb-1">Shelby Haniel Codilla</p>


      <p className="text-sm text-gray-600 mb-4">
        You have successfully logged in.
      </p>


      <button
        className="bg-blue-500 hover:cursor-pointer text-white py-2 px-2 rounded-md"
        onClick={() => router.back()}
      >
        Back to Login
      </button>
    </div>
  );
}
