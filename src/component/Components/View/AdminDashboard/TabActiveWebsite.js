import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import PropTypes from 'prop-types'
import { Button, ToggleButtonGroup, ToggleButton } from '@mui/material'
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
      <DialogTitle>ایا اطمینان دارید؟</DialogTitle>
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

export default function TabActiveWebsite() {
  const [rows, setRows] = useState([])
  const [status, setStatus] = useState(0)
  const [toggleSelected, setToggleSelected] = useState("DeActive")
  const [open, setOpen] = useState(false)
  const [activatedList, setActivatedList] = useState([])
  const [deActivatedList, setDeActivatedList] = useState([])
  const [data, setData] = useState({ userId: null })
  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const ChangeToURLHandler = (prop) => {
    try {
      const img = URL.createObjectURL(prop)
      return img
    } catch (error) {
      return null
    }
  }
  const TrophyImg = styled('img')({
    bottom: 50,
    height: 50,
  })
  const columns = [
    {
      field: 'id',
      headerName: 'شناسه',
      headerClassName: 'super-app-theme--header',
      flex: 0.6,
      headerAlign: 'center'
    },
    {
      field: 'userId',
      headerName: 'شماره کاربر',
      headerClassName: 'super-app-theme--header',
      flex: 0.6,
      headerAlign: 'center'
    },
    {
      flex: 0.8,
      field: 'action',
      headerName: 'فعال/غیرفعال',
      // sortable: false,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      /* cellClassName: 'super-app-theme--cell'*/
      renderCell: params => {
        const onClick = async e => {
          e.stopPropagation() // don't select this row after clicking          
          const thisRow = {}
          const tkn = localStorage.getItem('token')
          const api = params.api
          api
            .getAllColumns()
            .filter(c => c.field !== '__check__' && !!c)
            .forEach(c => (thisRow[c.field] = params.getValue(params.id, c.field)))
          setData({ userId: thisRow.userId })
          setOpen(true)
          // return alert(JSON.stringify(thisRow, null, 4))
        }
        return (
          <Button variant='contained' size='small' color='warning' sx={{ height: 'auto', width: '100%', color: 'darkblue', fontSize: '20px', m: 2 }} onClick={onClick}>
            {(status == 1) ? "غیر فعال" : "فعال"}
          </Button>
        )
      }
    },
    {
      field: 'guildNo',
      headerName: 'شماره صنف',
      flex: 0.8,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'guildCode',
      headerName: 'نوع صنف',
      flex: 0.6,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      flex: 1,
      field: 'image',
      headerName: 'عکس',
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      renderCell: params => {
        // console.log(params.formattedValue)
        return (
          (<TrophyImg alt='image' src={ChangeToURLHandler(params.formattedValue)} />)
        )
      }
    },
    {
      field: 'managerNameFa',
      headerName: 'نام مدیر',
      flex: 0.9,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'managerNationalCode',
      headerName: 'کد ملی مدیر',
      flex: 0.9,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'mobile',
      headerName: 'شماره موبایل',
      flex: 0.9,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      editable: false
    },
    {
      field: 'nameFa',
      headerName: 'نام',
      flex: 0.9,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      editable: false
    },
    {
      field: 'isActive',
      headerName: 'وضعیت',
      flex: 0.6,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      editable: false,
      renderCell: params => {
        // console.log(params.formattedValue)
        return params.formattedValue == false ? "غیر فعال" : "فعال"
      }
    }
  ]
  const [selectedValue, setSelectedValue] = React.useState(emails[1])

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

  const handleChange = (event, newAlignment) => {
    // setAlignment(event.target);
    if (event.target.value == "Active") {
      setToggleSelected("Active")
      setStatus(1)
      setRows(activatedList)
      setRows([...activatedList])
    } else if (event.target.value == "DeActive") {
      setToggleSelected("DeActive")
      setStatus(0)
      setRows(deActivatedList)
    }
  }
  return (
    <Box sx={{ height: 770, width: '100%' }}>
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={toggleSelected}
        sx={{ direction: "ltr", m: 4, mt: 8 }}
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="Active">لیست کاربران فعال</ToggleButton>
        <ToggleButton value="DeActive">لیست کاربران غیر فعال</ToggleButton>
      </ToggleButtonGroup>
      <DataGrid
        sx={{
          '& .super-app-theme--header': { backgroundColor: "darkorange", color: "white" },
          boxShadow: 2,
          backgroundColor: 'lightyellow',
          mt: 1,
          ml: 3,
          mr: 3,
          color: '#320d3e',
          fontWeight: 800,
          height: 650,
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
        // components={{ Toolbar: GridToolbar }}
        // onCellClick={event => {
        //   // console.log(event)
        //   if (event.field === 'action') {
        //     setUser(event)
        //     setOpen(true)
        //   }
        // }}
        getRowId={row => row.id}
        experimentalFeatures={{ newEditingApi: true }}
      />
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </Box>
  )
}
