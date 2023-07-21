import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import PropTypes from 'prop-types'
import { Button, ToggleButtonGroup, ToggleButton, Grid, TextField } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import styled from '@emotion/styled'

const emails = ['username@gmail.com', 'user02@gmail.com']
function SimpleDialog(props) {
  const { onClose, selectedValue, open, func } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = value => {
    onClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>رمز کاربر ریست شود؟</DialogTitle>
      <div>
        <Button
          onClick={() => {
            handleListItemClick('addAccount')
            func()
          }}
        >
          بله
        </Button>
        <Button onClick={() => handleListItemClick('addAccount')}>خیر</Button>
      </div>
    </Dialog>
  )
}
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
}

export default function TabWebsiteImageSettings() {
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [List, setList] = useState([])
  const [size, setSize] = useState()
  const [count, setCount] = useState()
  const [data, setData] = useState({ PicMaxQuantity: null, PicMaxSize: null })
  const childRef = useRef(null)
  const childRef1 = useRef(null)

  const columns = [
    {
      flex: 0.2,
      field: 'id',
      headerName: 'شناسه',
      headerClassName: 'super-app-theme--header',

      renderCell: params => {
        return (params.getRowId)
      }
    },
    {
      flex: 0.5,
      field: 'action',
      headerName: 'حذف تنظیمات',
      // sortable: false,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      /* cellClassName: 'super-app-theme--cell'*/
      renderCell: params => {
        const onClick = async e => {
          e.stopPropagation() // don't select this row after clicking
          const tkn = localStorage.getItem('token')
          const api = params.api
          const thisRow = {}
          api
            .getAllColumns()
            .filter(c => c.field !== '__check__' && !!c)
            .forEach(c => (thisRow[c.field] = params.getValue(params.id, c.field)))
          setData({ PicMaxQuantity: null, PicMaxSize: null })
          setOpen(true)
          // return alert(JSON.stringify(thisRow, null, 4))
        }
        return (
          <Button variant='contained' size='small' color='warning' sx={{ height: 'auto', width: '100%', color: 'darkblue', fontSize: '20px', m: 2 }} onClick={onClick}>
            حذف
          </Button>
        )
      }
    },
    {
      field: 'picMaxQuantity',
      headerName: 'محدودیت تعداد عکس ها',
      headerClassName: 'super-app-theme--header',
      flex: 1,
      headerAlign: 'center'
    },
    {
      field: 'picMaxSize',
      headerName: 'محدودیت سایز عکس ها',
      flex: 1,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'recordUsername',
      headerName: 'نام کاربری معرف',
      flex: 1,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    }

  ]
  const [selectedValue, setSelectedValue] = React.useState(emails[1])

  const onCellDoubleClickHandler = (prop) => {
    setSize(prop.row.picMaxSize)
    setCount(prop.row.picMaxQuantity)
  }
  const handleClose = value => {
    setOpen(false)
    setSelectedValue(value)
  }
  const snackHandleClick = () => {
    childRef.current.handleClick()
  }
  const snackHandleClick1 = () => {
    childRef1.current.handleClick()
  }
  const handleClickPopUp = prop => {
    if (prop === 'success') {
      snackHandleClick()
    } else {
      snackHandleClick1()
    }
  }

  const SizeOnchangeHandler = (event) => {
    setSize(event.target.value)
  }
  const CountOnchangeHandler = (event) => {
    setCount(event.target.value)
  }

  return (
    <Box sx={{ minHeight: 750, width: '60%', margin: "0 auto" }}>
      <DataGrid
        sx={{
          '& .super-app-theme--header': { backgroundColor: "darkorange", color: "white" },
          boxShadow: 2,
          backgroundColor: 'lightyellow',
          // backgroundColor: '#e4dce6',
          mt: 1,
          ml: 3,
          mr: 3,
          color: '#320d3e',
          fontWeight: 800,
          height: 500,
          fontSize: "1rem",
          direction: 'rtl',
          '@media (max-width:1199px)': {
            '& .super-app-theme--header': {
              fontSize: "0.9rem"
            }
          }
        }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        onCellDoubleClick={onCellDoubleClickHandler}
        experimentalFeatures={{ newEditingApi: true }}
        getRowId={row => row.id}
      />
      <Box container sm={12} sx={{ width: "95%", display: "flex", margin: "0 auto", mt: 10, gap: "40px", justifyContent: "center" }} >
        <TextField fullWidth multiline label="تعداد" value={count} sx={{ width: "20%" }} onChange={CountOnchangeHandler} />
        <TextField fullWidth label="حجم" multiline value={size} sx={{ width: "20%" }} onChange={SizeOnchangeHandler} />
        <Button variant='contained' sx={{ width: "100px" }} >{rows.length == 0 ? "افزودن" : "آپدیت"}</Button>
      </Box>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </Box>
  )
}
