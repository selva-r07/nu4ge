"use client";

import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    college: "",
    member1: "",
    member2: "",
    member3: "",
    event: "",
    email: ""
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      await axios.post("/api/register", form);
      alert("Registration successful!");
    } catch (err: any) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
      <div className="bg-white/10 p-8 rounded-xl w-[380px] space-y-3">
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <input name="college" placeholder="College Name" onChange={handleChange} className="input" />
        <input name="member1" placeholder="Member 1*" onChange={handleChange} className="input" />
        <input name="member2" placeholder="Member 2" onChange={handleChange} className="input" />
        <input name="member3" placeholder="Member 3" onChange={handleChange} className="input" />

        <select name="event" onChange={handleChange} className="input">
          <option value="">Select Event</option>
          <option>Code Cure</option>
          <option>Dark Logic</option>
          <option>Idea Forge</option>
        </select>

        <input name="email" placeholder="Email" onChange={handleChange} className="input" />

        <button onClick={submit} className="w-full bg-orange-500 py-2 rounded-lg font-semibold">
          Submit
        </button>
      </div>
    </main>
  );
}
