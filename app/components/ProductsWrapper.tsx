"use client"
import React, { FC } from 'react';
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from 'next/image';

export declare type ProductField = {
    _id: string;
    title: string;
    description: string;
    price: string;
    stock: number;
    category: string;
    tags: [];
    status: boolean;
    img_url: string;
};

const TableProducts: FC<{ products: ProductField[] }> = ({ products }) => {

    const columns: GridColDef<ProductField>[] = [
        // { field: "_id", headerName: "ID", cellClassName: "name-column--cell" },

        {
            field: "img_url",
            headerName: "",
            flex: 1,
            cellClassName: "name-column--cell",
            renderCell: (params) => (
                <div className='flex items-center justify-center'>
                    <Image src={params.value} alt="Imagen" width="40" height="40" className='' />
                </div>
            ),
        },
        {
            field: "title",
            headerName: "Titulo",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "description",
            headerName: "Descripción",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "price",
            headerName: "Precio",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "stock",
            headerName: "Cantidad Disp.",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "category",
            headerName: "Categoria",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "tags",
            headerName: "Tags",
            flex: 1,
            cellClassName: "name-column--cell",
        },

    ];
    const getRowId = (row: ProductField) => row._id;
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
                    rows={products}
                    columns={columns}
                    getRowId={getRowId}
                />
            </Box>
        </Box>
    );
}

export default TableProducts;