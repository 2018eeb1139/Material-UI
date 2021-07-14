import React, { useState } from 'react'
import MaterialTable, { MTablePagination } from 'material-table'
import { forwardRef } from 'react';

import { TablePagination } from '@material-ui/core'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};



const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, city: "Bangalore" },
  { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 9812345678, city: "Chennai" },
  { id: 3, name: "David", email: 'david342@gmail.com', phone: 7896536289, city: "Jaipur" },
  { id: 4, name: "Akash", email: 'akash75@gmail.com', phone: 9087654321, city: "kanpur" },
  { id: 5, name: "Vinay", email: 'vinay75@gmail.com', phone: 9087654321, city: "gaziabad" },
  { id: 6, name: "Vinod", email: 'vinod75@gmail.com', phone: 9087654321, city: "Allahbad" },
  { id: 7, name: "Abhi", email: 'abhi75@gmail.com', phone: 9087654321, city: "Sirohi" },
  { id: 8, name: "Aniket", email: 'aniket234@gmail.com', phone: 9087654321, city: "Anwarganj" },
  { id: 9, name: "Aabhas", email: 'aabhas098@gmail.com', phone: 9087654321, city: "Nagrwal" },
  { id: 10, name: "Viresh", email: 'viresh254@gmail.com', phone: 9087654321, city: "Indinty" },
  { id: 11, name: "Anuugu", email: 'anuugu664@gmail.com', phone: 9087654321, city: "Vellore" },
  { id: 12, name: "Virat", email: 'virat@gmail.com', phone: 9087654321, city: "Kochi" },
  { id: 13, name: "Rohit", email: 'rohit765@gmail.com', phone: 9087654321, city: "Vidarbh" },
  { id: 14, name: "Pawan", email: 'pawan987@gmail.com', phone: 9087654321, city: "Chitrkut" },
  { id: 15, name: "Ayush", email: 'ayush789@gmail.com', phone: 9087654321, city: "Banda" },
  { id: 16, name: "Harshit", email: 'harshit34@gmail.com', phone: 9087654321, city: "Lajapt" },
]


const columns = [
  { title: "ID", field: "id", editable: false },
  { title: "Name", field: "name" },
  { title: "Email", field: "email" },
  { title: "Phone Number", field: 'phone', },
  { title: "City", field: "city", }
]

export default function Table(props) {
  // console.log(props)
  const [data, setData] = useState(props.rows)
  // const [pageNumber, setPage] = React.useState(0);
  const pageNumber=0
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const firstLoad=true
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 5));
  //   setPage(0);
  // };
  return (
    <div style={{ width: props.styles.width}}>
      <MaterialTable
        icons={tableIcons}
        title={props.title}
        data={data}
        columns={props.columns}
        // components={{
        //   Pagination: props => (
        //     <TablePagination
        //       {...props}
        //       rowsPerPageOptions={[5, 10, 20, 30]}
        //       rowsPerPage={rowsPerPage}
        //       // count={this.state.totalRow}
        //       count={100}
        //       page={
        //         firstLoad
        //           ? pageNumber
        //           : pageNumber - 1
        //       }
        //       onChangePage={(e, page) =>
        //         this.handleChangePage(page + 1)
        //       }
        //       onChangeRowsPerPage={event => {
        //         props.onChangeRowsPerPage(event);
        //         this.handleChangeRowPerPage(event.target.value);
        //       }}
        //     />
        //   ),
        // }}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
            const index = oldRow.tableData.id;
            const updatedRows = [...data]
            updatedRows[index] = updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first", filtering: true
        }}
      />
    </div>
  );
}