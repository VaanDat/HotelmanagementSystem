import React, { useState } from "react";
import { useTable } from "react-table";
import Table from "../../Table";
import Popup from "reactjs-popup";
import { StaffsColumns } from "./StaffsColumns";
import { useEffect, useMemo } from "react";

const StaffsTable = () => {
  const [StaffData, setData] = useState([]);
  const userid = JSON.parse(localStorage.getItem("userAuth")).ID;
  useEffect(() => {
    const getStaff = async () => {
      try {
        const respone = await fetch(
          `http://localhost:5000/staffs?userId=${userid}`
        );
        const jsonData = await respone.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getStaff();
  }, []);

  const data = useMemo(() => StaffData);
  const columns = useMemo(() => StaffsColumns);

  const tableInstance = useTable({ columns, data });
  return <Table tableInstance={tableInstance} />;
};
export default StaffsTable;
