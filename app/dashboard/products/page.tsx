import { Box, Typography, IconButton } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React from 'react';
import { bebas } from '@/app/ui/fonts';


const Products = () => {
    return (
        <>
            <Box className="flex flex-col max-w-80 border h-32 rounded-md p-3 bg-slate-700">
                <Box className="flex items-center">
                    <IconButton className='cursor-help'>
                        <AttachMoneyIcon className='text-white' />
                    </IconButton>
                    <Typography fontFamily={bebas.className} className='text-white'>
                        Titulo
                    </Typography>
                </Box>
                <Box className="flex items-center justify-center text-center border grow rounded-md bg-white">
                    <Typography>
                        Cantidad
                    </Typography>
                </Box>
            </Box >
        </>
    )
}

export default Products;