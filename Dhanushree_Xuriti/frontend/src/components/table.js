import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
    sortable: false,
  },
  {
    field: "username",
    headerName: "Username",
    sortable: false,
    flex: 1,
    width: 150,
  },
  { 
    field: "date", 
    headerName: "Date of Register", 
    sortable: false, 
    width: 180,
    renderCell: (params) => {
      const formattedDate = new Date(params.value).toLocaleDateString();
      return <span>{formattedDate}</span>;
    },
  },
  { 
    field: "time", 
    headerName: "Time of Register", 
    width: 180 
  },
];

const DataTable = () => {
  const [users, setUsers] = useState([]);    
  const [pageSize, setPageSize] = useState(5);  // Set initial page size to 5

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/user/getusers`);
        console.log(res.data);
        const usersWithId = res.data.reverse().map((user, index) => ({
          id: index + 1,
          ...user,
          date: new Date(user.date).toLocaleDateString(),
        }));
        setUsers(usersWithId);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div style={{ height: 500, width: "100%" }}>
       <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}  // Set default page size
        pagination={false} // Disable pagination
        disableColumnMenu
        disableSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
