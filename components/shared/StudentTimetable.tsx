"use client";
import React, { useState } from "react";
import StudentTimetableRow from "./StudentTimetableRow";
import { Table, TableBody, TableHead, TableRow } from "@/components/ui/table";
import { TimetableDataType } from "@/lib/constant";
import { getSubjectsResponse } from "@/lib/responseType";

const StudentTimetable = ({
  role,
  timetableData,
  timetableSubject,
}: {
  role: "teacher" | "student" | "admin";
  timetableData: TimetableDataType[] | [];
  timetableSubject: getSubjectsResponse;
}) => {
  const [show, setShow] = useState<"Week" | "Day">("Week");

  const activeStyle = "font-semibold text-lg border-b-2 border-black";

  const date = new Date();
  const [day, setDay] = useState<number>(date.getDay());

  const handleDay = (day: number) => {
    if (show === "Day") {
      setDay(day);
    }
  };

  const majorTableRowStyle = (input: number) =>
    `table-head rounded-md text-black text-center  text-lg ${day !== input ? "font-[500]" : "font-[900]"} ${show === "Day" && "cursor-pointer"}`;

  return (
    <div className="mt-4">
      {/* Timetable */}
      {timetableData.length > 0 ? (
        <>
          <div className="flex flex-row gap-4 items-center">
            <button
              onClick={() => {
                setShow("Week");
                setDay(date.getDay());
              }}
              className={show === "Week" ? activeStyle : ""}
            >
              <p className="">Week</p>
            </button>

            {role === "student" && (
              <button
                onClick={() => setShow("Day")}
                className={show === "Day" ? activeStyle : ""}
              >
                <p>Day</p>
              </button>
            )}
          </div>

          <Table className="w-full mt-6">
            <TableBody>
              <TableRow className="bg-blue-100 hover:bg-blue-100">
                <TableHead className="table-head"></TableHead>
                <TableHead
                  onClick={() => handleDay(1)}
                  className={majorTableRowStyle(1)}
                >
                  <p>Mon</p>
                </TableHead>
                <TableHead
                  onClick={() => handleDay(2)}
                  className={majorTableRowStyle(2)}
                >
                  <p>Tue</p>
                </TableHead>
                <TableHead
                  onClick={() => handleDay(3)}
                  className={majorTableRowStyle(3)}
                >
                  <p>Wed</p>
                </TableHead>
                <TableHead
                  onClick={() => handleDay(4)}
                  className={majorTableRowStyle(4)}
                >
                  <p>Thu</p>
                </TableHead>
                <TableHead
                  onClick={() => handleDay(5)}
                  className={majorTableRowStyle(5)}
                >
                  <p>Fri</p>
                </TableHead>
              </TableRow>
              {timetableData.map((item: TimetableDataType, index) => (
                <StudentTimetableRow
                  key={index}
                  time={item.time}
                  term={item.term}
                  year={item.year}
                  subjects={item.subjects}
                  timetableSubject={timetableSubject}
                  day={day}
                  show={show}
                  role={role}
                />
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <div className="flex justify-center items-center h-[200px]  text-xl font-semibold text-gray-600">
          No Timetable Found
        </div>
      )}
    </div>
  );
};

export default StudentTimetable;
