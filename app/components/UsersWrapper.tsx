"use client"
import React, { FC } from 'react';
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CustomerField } from 'anjrot-components';
// import Image from 'next/image';


export declare type UserField = {
    _id: string;
    name: string;
    email: string;
    username: string;
    roles: []
};



const TableUsers: FC<{ users: UserField[] }> = ({ users }) => {

    // console.log(users);

    const columns: GridColDef<UserField>[] = [
        // { field: "_id", headerName: "ID", cellClassName: "name-column--cell" },
        // {
        //     field: "image_url",
        //     headerName: "picture",
        //     type: "string",
        //     headerAlign: "left",
        //     align: "left",
        //     cellClassName: "name-column--cell",
        //     renderCell: (params) => (
        //         <div className='flex items-center justify-center'>
        //             <Image src={params.value} alt="Imagen" width="40" height="40" className='rounded-full' />
        //         </div>
        //     ),
        // },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "username",
            headerName: "UserName",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "roles",
            headerName: "Roles",
            flex: 1,
            cellClassName: "name-column--cell",
            // renderCell: ({roles}) => (
            //     <div className='flex items-center justify-center'>
                  
            //     </div>
            // ),
        },

    ];
    const getRowId = (row: CustomerField) => row._id;
    return (
        <Box m="20px">
            <Box
                m="40px 0 0 0"
                height="75vh"
                color="white"
            // sx={{
            //     "& .MuiDataGrid-root": {
            //         border: "1px solid #ddd",
            //     },
            //     "& .MuiDataGrid-cell": {
            //         borderBottom: "",
            //     },
            //     "& .name-column--cell": {
            //         // color: colors.greenAccent[ 300 ],
            //         color: "#94e2cd",

            //     },

            //     "& .MuiDataGrid-columnHeaders": {
            //         // backgroundColor: colors.blueAccent[ 700 ],
            //         backgroundColor: "#3e4396 !important",
            //         // borderBottom: "none",
            //     },
            //     "& .MuiDataGrid-topContainer": {
            //         borderTop: "none",
            //         // backgroundColor: colors.blueAccent[ 700 ],
            //         backgroundColor: "#3e4396 !important",
            //     },
            //     "& .MuiDataGrid-container--top": {
            //         borderTop: "none",
            //         // backgroundColor: colors.blueAccent[ 700 ],
            //         backgroundColor: "#3e4396 !important",
            //     },
            //     "& .css-1r7svyj-MuiDataGrid-root": {
            //         borderTop: "none",
            //         // backgroundColor: colors.blueAccent[ 700 ],
            //         backgroundColor: "#3e4396 !important",
            //     },

            //     "& .MuiDataGrid-virtualScroller": {
            //         // backgroundColor: colors.primary[ 400 ],
            //         backgroundColor: "#1E293B",
            //     },
            //     "& .MuiDataGrid-footerContainer": {
            //         borderTop: "none",
            //         // backgroundColor: colors.blueAccent[ 700 ],
            //         backgroundColor: "#3e4396",
            //     },
            //     "& .MuiCheckbox-root": {
            //         // color: `${colors.greenAccent[ 200 ]} !important`,
            //         color: "#1e5245",
            //     },
            // }}
            >
                <DataGrid
                    checkboxSelection
                    rows={users}
                    columns={columns}
                    getRowId={getRowId}
                />
            </Box>
        </Box>
    );
}

export default TableUsers;