import React from 'react'
import './App.css';
import { DataGrid,GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

let i=0
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: false,
  },
  {
    field: 'duration',
    headerName: 'Internship Duration',
    width: 200,
    editable: true,
  },
  {
    field: 'stipend',
    headerName: 'Stipend',
    width: 140,
    type:'number',
    editable: true,
  },
  {
    field: 'PhoneNo',
    headerName: 'Phone Number',
    width: 200,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 24, role:'SDE',email: 'jon@snow.com', duration:'2 months', stipend:1000, PhoneNo:'9876543210', },
  { id: 2,lastName: 'Lannister', firstName: 'Cersei', age: 23, role:'UX designer',email: 'cersei@lannister.com', duration:'2 months', stipend:4000, PhoneNo:'9876543210', },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 22, role:'Scrum Master',email: 'jaime@lannister.com', duration:'3 months', stipend:1000, PhoneNo:'9876543210', },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 21, role:'Product manager',email: 'arya@stark.com', duration:'3 months', stipend:2000, PhoneNo:'9876543210', },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 20, role: 'web developer',email: 'daenerys@targaryen.com', duration:'4 months', stipend:3000, PhoneNo:'9876543210', },
  { id: 6, lastName: 'Melisandre', firstName: 'Vivek', age: 22, role: 'backend developer',email: 'vivek@melisandre.com', duration:'6 months', stipend:2000, PhoneNo:'9876543210', },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 23, role: 'coordinator',email: 'ferrara@cilfford.com', duration:'6 months', stipend:1000, PhoneNo:'9876543210', },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 24, role:'Digital Marketer',email: 'rossini@frances.com', duration:'3 months', stipend:5000, PhoneNo:'9876543210', },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 21, role:'Social influencer',email: 'harvey@roxie.com', duration:'3 months', stipend:4000, PhoneNo:'9876543210', },
  { id: 10, lastName: 'Anime', firstName: 'Vikas', age: 23, role:'Product Manager',email: 'vikas@anime.com', duration:'4 months', stipend:2000, PhoneNo:'9876543210', },
  { id: 11, lastName: 'Shukla', firstName: 'Harshit', age: 21, role:'SDE 1',email: 'harshit@shukla.com', duration:'2 months', stipend:4000, PhoneNo:'9876543210', },
  { id: 12, lastName: 'Katiyar', firstName: 'Abdul', age: 21, role:'Product Owner',email: 'abdul@katiyar.com', duration:'3 months', stipend:3000, PhoneNo:'9876543210', },
  { id: 13, lastName: 'Gupta', firstName: 'Ronny', age: 21, role:'Mentor',email: 'ronny@gupta.com', duration:'2 months', stipend:5000, PhoneNo:'9876543210', },
  { id: 14, lastName: 'Chaudhary', firstName: 'Avi', age: 21, role:'SQL Expert',email: 'avi@chaudhary.com', duration:'1 months', stipend:2000, PhoneNo:'9876543210', },
  { id: 15, lastName: 'Khanuja', firstName: 'Ansh', age: 21, role:'DataBase Manager',email: 'ansh@khanuja.com', duration:'4 months', stipend:2000, PhoneNo:'9876543210', },
  { id: 16, lastName: 'Kumar', firstName: 'Ankit', age: 21, role:'Coder',email: 'ankit@kumar.com', duration:'2 months', stipend:5000, PhoneNo:'9876543210', },
  { id: 17, lastName: 'Chandra', firstName: 'Jitendra', age: 21, role:'Software Developer',email: 'jitendra@chandra.com', duration:'5 months', stipend:5000, PhoneNo:'9876543210', },
  { id: 18, lastName: 'Meena', firstName: 'Poojith', age: 21, role:'UI Designer',email: 'poojith@meena.com', duration:'2 months', stipend:4000, PhoneNo:'9876543210', },
  { id: 19, lastName: 'Keshri', firstName: 'Mukul', age: 21, role:'Typist',email: 'mukul@keshri.com', duration:'1 months', stipend:3000, PhoneNo:'9876543210', },
  { id: 20, lastName: 'Parit', firstName: 'Aditya', age: 21, role:'Data Owner',email: 'aditya@parit.com', duration:'3 months', stipend:2000, PhoneNo:'9876543210', },
  { id: 21, lastName: 'Chawla', firstName: 'Vinay', age: 21, role:'Role Owner',email: 'vinay@Chawla.com', duration:'6 months', stipend:1000, PhoneNo:'9876543210', },
];

function BasicSortingGrid() {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 100,
  //   maxColumns: 10,
  // });

  return (
    <div style={{ height: 400, width: '100%', marginTop:'15px', border:'2px solid black' }}>
      <DataGrid
        // {...data}
        // sortModel={[
        //   {
        //     field: 'commodity',
        //     sort: 'asc',
        //   },
        // ]}
        rows={rows}
        columns={columns}
        // pageSize={9}
        pagination
        // checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  );
}

function BasicFilteringGrid(){
  return (
    <div style={{height:400,width:'100%',marginTop:'20px', border:'2px solid blue'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        components={{
          Toolbar: GridToolbar,
        }}
        filterModel={{
          items: [
            { columnField: 'age', operatorValue: '>', value: '22' },
            // { columnField: 'firstName', operatorValue: 'contains', value: 'V' },
          ],
        }}
      />
    </div>
  );
}

function SizePaginationGrid() {
  const [pageSize, setPageSize] = React.useState(5);

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };

  return (
    <div style={{ height: 400, width: '100%',marginTop:'20px', border:'2px solid lightGreen'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      />
    </div>
  );
}



  function App() {
    return (
      <div className="App">
        <header className="App-header">
            Basic Sorting Grid
            <BasicSortingGrid/>
            Basic Filtering Grid
            <BasicFilteringGrid/>
            Size Pagination Grid
            <SizePaginationGrid/>
        </header>
      </div>
    );
  }

  export default App;


