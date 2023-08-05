import './datatable.scss'

import { userColumns, userRows } from '../../datatablesource'

import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import React from 'react'
import {useState} from 'react'

const Datatable = () => {

  const [data, setData] = useState(userRows)
  const handleDelete = (id)=>{
    setData(data.filter((item) => item.id !==id))
  }


  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/Users/test">
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        )
      },
    },
  ]

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link
          to="/users/New"
          style={{ textDecoration: 'none' }}
          className="link"
        >
          {' '}
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default Datatable
