"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Register() {
  
  const [user, satUser] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => { satUser({ ...user, [e.target.name]: e.target.value }) };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
        });
        if (error) {
            alert("error");
            return;
        }
        if(!error){
            alert("Registration successful");
            redirect("/login");
        }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray bg-amber-200">
      <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button>Register</button>
      </form>
      <button onClick={wow}>wow</button>
    </div>
  );
}