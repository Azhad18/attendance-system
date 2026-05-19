"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AttendancePage() {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    attendanceType: "Check In",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Attendance Submitted:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    setFormData({
      employeeName: "",
      employeeId: "",
      department: "",
      attendanceType: "Check In",
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5 flex flex-col items-center">
        <div>
          <Image
            className="mb-4"
            src="/logo_amber.png"
            alt="Amber Coffee logo"
            width={200}
            height={200}
            priority
          />
        </div>
        <ul className="space-y-4 mt-10">
          <li>
            <Link href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>

          <li>
            <Link href="/attendance" className="hover:text-gray-300">
              Attendance
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Attendance
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Employee Name</label>
              <input
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-xl text-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Employee ID</label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-xl text-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-xl text-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Attendance Type</label>
              <select
                name="attendanceType"
                value={formData.attendanceType}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-xl text-gray-700"
              >
                <option value="Check In">Check In</option>
                <option value="Check Out">Check Out</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Submit Attendance
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
