import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar, useGridApiRef } from '@material-ui/data-grid';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

import { XGrid } from '@material-ui/x-grid'

// const IGridColumn = { 
//     valueGetter: function(params),
//     valueFormatter: function (params),
//     renderCell: function (params: GridCellParams)
// }






export default function AdminDataGrid(props) {

    const [pageSize, setPageSize] = useState(props.pagesize)

    const handlePageSizeChange = (params) => {
        setPageSize(params.pageSize);
    };

    const [editRowsModel, setEditRowsModel] = React.useState({});

    const handleEditRowModelChange = React.useCallback((params) => {
        setEditRowsModel(params.model);
    }, []);



    // const rows = async () => {
    //     const data = await fetch('https://52.165.147.19/api/v2/internships/1')
    //     const items = await data.json()
    //     console.log(items)
    //     setRow(items)
    // }
    console.log(props)
    return (
        <div style={{ height: props.styles.height, width: props.styles.width, border: props.styles.border }}>
            <strong>{props.title}</strong>
            {/* <code>editRowsModel: {JSON.stringify(editRowsModel)}</code> */}
            {/* <strong>{internshipGridOptions.title}</strong> */}
            <DataGrid
                autoHeight
                rowHeight={props.rowHeight}
                rows={props.rows}
                columns={props.columns}
                pageSize={pageSize}
                onPageSizeChange={handlePageSizeChange}
                rowsPerPageOptions={[5, 10, 15]}
                pagination
                editRowsModel={editRowsModel}
                onEditRowModelChange={handleEditRowModelChange}
                components={{
                    Toolbar: GridToolbar,
                }}
            // filterModel={{
            //     items: [
            //         { columnField: 'age', operatorValue: '>', value: '22' },
            //     ],
            // }}
            />
        </div>
    );
}