"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Booking = {
  day: string;
  date: string;
  time: string;
  employeeName: string;
  employeeId: string;
};

export default function AttendancePage() {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    day: "Monday",
    date: "",
    time: "",
  });

  // Dummy data booking staff lain
  const [bookings, setBookings] = useState<Booking[]>([
    {
      day: "Monday",
      date: "2026-05-25",
      time: "09:00 AM",
      employeeName: "Ali",
      employeeId: "EMP001",
    },
    {
      day: "Tuesday",
      date: "2026-05-26",
      time: "02:00 PM",
      employeeName: "Siti",
      employeeId: "EMP002",
    },
  ]);

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

    // Check kalau slot dah diambil
    const alreadyBooked = bookings.find(
      (booking) =>
        booking.date === formData.date && booking.time === formData.time,
    );

    if (alreadyBooked) {
      alert("This slot has already been booked!");
      return;
    }

    const newBooking: Booking = {
      day: formData.day,
      date: formData.date,
      time: formData.time,
      employeeName: formData.employeeName,
      employeeId: formData.employeeId,
    };

    setBookings([...bookings, newBooking]);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    setFormData({
      employeeName: "",
      employeeId: "",
      day: "Monday",
      date: "",
      time: "",
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
              Book Schedule
            </Link>
          </li>
        </ul>
      </div>

      {/* Timetable UI */}

      <div className="flex-1 p-8 relative bg-gray-100">
        <div className="flex justify-end mb-6 relative">
          <Link href="/scheduling">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-lg font-bold">+</span>
              Add Booking
            </button>
          </Link>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-sky-300">
            <thead>
              <tr className="bg-sky-100 text-sky-700">
                <th className="border border-sky-300 p-3 w-32">Day / Time</th>

                <th className="border border-sky-300 p-3">8AM - 10AM</th>

                <th className="border border-sky-300 p-3">10AM - 12PM</th>

                <th className="border border-sky-300 p-3">12PM - 2PM</th>

                <th className="border border-sky-300 p-3">2PM - 4PM</th>

                <th className="border border-sky-300 p-3">4PM - 6PM</th>
              </tr>
            </thead>

            <tbody>
              {/* Monday */}
              <tr className="h-28">
                <td className="border border-sky-300 bg-sky-50 font-bold text-sky-700 text-center">
                  MONDAY
                </td>

                <td className="border border-sky-300"></td>

                {/* Booked Slot */}
                <td className="border border-sky-300 bg-red-200 text-center">
                  <p className="font-bold text-red-700">BOOKED</p>
                  <p className="text-sm text-gray-700">Ali</p>
                  <p className="text-xs text-gray-500">EMP001</p>
                </td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>
              </tr>

              {/* Tuesday */}
              <tr className="h-28">
                <td className="border border-sky-300 bg-sky-50 font-bold text-sky-700 text-center">
                  TUESDAY
                </td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300 bg-green-200 text-center">
                  <p className="font-bold text-green-700">BOOKED</p>
                  <p className="text-sm text-gray-700">Siti</p>
                  <p className="text-xs text-gray-500">EMP002</p>
                </td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>
              </tr>

              {/* Wednesday */}
              <tr className="h-28">
                <td className="border border-sky-300 bg-sky-50 font-bold text-sky-700 text-center">
                  WEDNESDAY
                </td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>
              </tr>

              {/* Thursday */}
              <tr className="h-28">
                <td className="border border-sky-300 bg-sky-50 font-bold text-sky-700 text-center">
                  THURSDAY
                </td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300 bg-yellow-200 text-center">
                  <p className="font-bold text-yellow-700">BOOKED</p>
                  <p className="text-sm text-gray-700">John</p>
                  <p className="text-xs text-gray-500">EMP003</p>
                </td>

                <td className="border border-sky-300"></td>
              </tr>

              {/* Friday */}
              <tr className="h-28">
                <td className="border border-sky-300 bg-sky-50 font-bold text-sky-700 text-center">
                  FRIDAY
                </td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>

                <td className="border border-sky-300"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
