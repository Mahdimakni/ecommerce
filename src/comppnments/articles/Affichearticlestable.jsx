import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box } from '@mui/material';


const Affichearticlestable = ({articles}) => {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'imageart', //access nested data with dot notation
                header: 'Image',
                Cell: ({ cell}) => (
                <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                }}
                >
                <img
                alt=""
                height={100}
                src={cell.getValue()}
                loading="lazy"
                style={{ borderRadius: '20%' }}
                />
                
                </Box>),
                },
          {
            accessorKey: 'reference', //access nested data with dot notation
            header: 'Reference',
            size: 150,
          },
          {
            accessorKey: 'marque',
            header: 'Marque',
            size: 150,
          },
          {
            accessorKey: 'designation', //normal accessorKey
            header: 'Designation',
            size: 200,
          },
          {
            accessorKey: 'qtestock',
            header: 'Stock',
            size: 100,
          },
          {
            accessorKey: 'prix',
            header: 'Prix',
            size: 150,
          },
        ],
        [articles],
      );
    
      const table = useMaterialReactTable({
        columns,
        data:articles, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
      });



  return (
    <div>
        <center><h1>List article</h1></center>
      <MaterialReactTable table={table} />;
    </div>
  )
}

export default Affichearticlestable
