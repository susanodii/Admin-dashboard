import './datatable.scss'

import { userColumns, userRows } from '../../datatablesource'

import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import React from 'react'

const Datatable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/Users/test">
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
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
        rows={userRows}
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
