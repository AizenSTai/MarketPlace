import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import useFileUpload from 'react-use-file-upload';
import { DataGrid, GridColDef, GridApi, GridCellValue, GridToolbarQuickFilter, GridToolbarContainer } from '@mui/x-data-grid'
// import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
// import { GridCsvExportOptions } from '@mui/x-data-grid-pro'
// import { GridToolbar } from '@mui/x-data-grid'
// import { GridToolbarExport } from '@mui/x-data-grid'
import Typography from '@mui/material/Typography'
import { TextField, MenuItem, Select, InputAdornment, FormControl, InputLabel ,Button, Chip} from '@mui/material'
// import { Toolbar } from '@mui/material'
import { NumberFormatBase, NumericFormat } from 'react-number-format'
import { Information, Script } from 'mdi-material-ui'
import { styled, useTheme } from '@mui/material/styles'

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ color: "black", width: 300, height: 50 }}>
      <GridToolbarQuickFilter placeholder='جستجو  ...... ' sx={{ border: "3px solid darkgray", fontSize: "20px" }} />
    </GridToolbarContainer>
  );
}
function numberWithCommas(x) {
  // console.log(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const inputImageHandler = () => {
  const input = document.getElementById('inputImage')
  const image = document.getElementById('blah')
  // console.log(input)
  // console.log(image)
  // console.log(input.files)
  const [file] = input.files
  if (file) {
    image.src = URL.createObjectURL(file)
    return URL.createObjectURL(file)
  }
}

export default function AddProducts(props) {

  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const [id, setId] = useState(null)
  const [product, setproduct] = useState(null)
  const [info, setInfo] = useState(null)
  const [available, setAvailable] = useState(null)
  const [made, setMade] = useState(null)
  const [cost, setCost] = useState(null)
  const [keyWords, setKeyWords] = useState([])
  const [selectItem, setSelectItem] = useState("")
  const [selectAvailableItem, setSelectAvailableItem] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [imgOpen, setImgOpen] = useState(false)
  const TrophyImg = styled('img')({
    bottom: 50,
    height: 50,
  })

  const columns = [
    {
      field: 'userId',
      headerName: 'ردیف',
      headerClassName: 'super-app-theme--header',
      flex: 0.4,
      headerAlign: 'center',
    },
    // {
    //   field: 'product',
    //   headerName: 'نوع کالا',
    //   headerClassName: 'super-app-theme--header',
    //   flex: 1.5,
    //   headerAlign: 'center',

    // },
    // {
    //   field: 'made',
    //   headerName: 'ساخت',
    //   headerClassName: 'super-app-theme--header',
    //   flex: 1.5,
    //   headerAlign: 'center'
    // },
    {
      width: 75,
      field: 'image',
      headerAlign: 'center',
      headerName: 'عکس',
      flex:5,
      headerClassName: 'super-app-theme--header',
      renderCell: params => {
        // console.log(params.formattedValue)
        return (
          (<TrophyImg alt='image' src={params.formattedValue} />)
        )
      }
    },
    {
      field: 'info',
      headerName: 'مشخصات کالا',
      headerClassName: 'super-app-theme--header',
      flex: 10,
      headerAlign: 'center'
    },
    {
      field: 'available',
      headerName: 'موجودی',
      headerClassName: 'super-app-theme--header',
      flex: 2,
      headerAlign: 'center',
      renderCell :params =>{
        // console.log(params)
        return (<Typography sx={{width:"100%",textAlign:"center"}}>{params.formattedValue}</Typography>)
      }
    },
    {
      field: 'cost',
      headerName: 'قیمت',
      headerClassName: 'super-app-theme--header',
      flex: 2,
      headerAlign: 'center'
    }
  ]

  const [rows, setRows] = useState([
    { userId: "1", made: 'ایران', image: '/images/misc/trophy.png',available:"نا موجود", product: "رنگ", info: "خاکستری", cost: "60,000,000 تومان" },
    { userId: "2", made: 'ایتالیا', image: '/images/misc/paypal.png',available:"موجود", product: "رنگ", info: "سفید", cost: "40,000,000 تومان" },
    { userId: "3", made: 'ترک', image: '/images/misc/chart.png',available:"نا موجود", product: "رنگ", info: "قهوه ای", cost: "30,000,000 تومان" },
    { userId: "4", made: 'چین', image: '/images/misc/favicon.jpg',available:"موجود", product: "سیمان", info: "سفید 15 کیلویی", cost: "100,000,000 تومان" },
  ])

  const snackHandleClick = () => {
    childRef.current.handleClick()
  }
  const snackHandleClick1 = () => {
    childRef1.current.handleClick()
  }
  const SearchFocus = useRef()
  const handleClickPopUp = prop => {
    if (prop === 'success') {
      snackHandleClick()
    } else {
      snackHandleClick1()
    }
  }

  const onCellClickhandker = (prop) => {
    setImgOpen(true)
    setId(prop.row.userId)
    setCost(prop.row.cost)
    setInfo(prop.row.info)
    setAvailable(prop.row.available)
    setproduct(prop.row.product)
    setMade(prop.row.made)
    setImageFile(prop.row.image)
    // KeywordsFunction()
  }
  const onDeleteClickhandler = () => {
    const rowsDouble = rows
    // const leftRows = rowsDouble.map((itm, index) => {
    //   if (itm.userId != id) {
    //     return itm
    //   } else {
    //     return null
    //   }
    // })
    const leftRows = []
    rowsDouble.forEach(element => {
      if (element.userId != id) {
        leftRows.push(element)
      }
    });
    // console.log([leftRows])
    setRows(leftRows)
    setproduct("")
    setAvailable("")
    setCost("")
    setId("")
    setInfo("")
    setMade("")
    setSelectItem("")
    setSelectAvailableItem("")
    setImageFile("")
    const pic = document.getElementById('blah')
    pic.src = "#"
    setImgOpen(false)
  }
  const costOnchangehandler = (prop) => {
    setCost(prop.target.value)
  }
  const infoOnchangehandler = (prop) => {
    setInfo(prop.target.value)
    KeywordsFunction()
  }
  const KeywordsFunction =()=>{
    if(info){
      const words = info.split(" ")
      const wordsfiltered = words.filter(word =>{
        if(word.length > 1){
          return word
        }
      })
      setKeyWords(wordsfiltered)
    }
  }
  const madeOnchangehandler = (prop) => {
    setMade(prop.target.value)
  }

  const onAddClickhandler = () => {
    // rowsDouble.push({ userId: (rows.length + 1), product: product, info: info, cost: cost })
    if (cost != null && info != null && product != null && made != null && imageFile != null) {
      setRows([...rows, { userId: (rows.length + 1), image: imageFile, product: product, made: made, info: info, cost: cost }])
    }
    setproduct("")
    setAvailable("")
    setCost("")
    setId("")
    setInfo("")
    setMade("")
    setSelectItem("")
    setSelectAvailableItem("")
    setImageFile("")
    const pic = document.getElementById('blah')
    pic.src = "#"
    setImgOpen(false)
  }
  const add2PercentClickhandler = () => {
    const rowsDouble = rows
    const leftRows = []
    rowsDouble.forEach(element => {
      const precost = element.cost
      var maincost = precost.replace('تومان', '')
      while (maincost.includes(',')) {
        maincost = maincost.replace(',', '')
      }
      maincost = numberWithCommas(Math.ceil(parseInt(maincost) + parseInt(maincost) * 0.01)) + ' تومان '
      leftRows.push({ userId: element.userId, image: element.image, product: element.product, made: element.made, info: element.info, cost: maincost })
    })
    setRows(leftRows)
  }
  const Subtract2PercentClickhandler = () => {
    const rowsDouble = rows
    const leftRows = []
    rowsDouble.forEach(element => {
      const precost = element.cost
      var maincost = precost.replace('تومان', '')
      while (maincost.includes(',')) {
        maincost = maincost.replace(',', '')
      }
      maincost = numberWithCommas(Math.ceil(parseInt(maincost) - parseInt(maincost) * 0.01)) + ' تومان '
      leftRows.push({ userId: element.userId, image: element.image, product: element.product, made: element.made, info: element.info, cost: maincost })
    })
    setRows(leftRows)
  }
  const onEditClickhandler = () => {
    const rowsDouble = rows

    const leftRows = []
    rowsDouble.forEach(element => {
      if (element.userId != id) {
        leftRows.push(element)
      } else if (element.userId == id) {
        leftRows.push({ userId: element.userId, product: product, image: imageFile, made: made, info: info, cost: cost,available: available})
      }
    })
    setRows(leftRows)
    setproduct("")
    setAvailable("")
    setCost("")
    setId("")
    setInfo("")
    setMade("")
    setSelectItem("")
    setSelectAvailableItem("")
    const pic = document.getElementById('blah')
    pic.src = "#"
    setImgOpen(false)
  }
  const handleProductSelectChange = (event) => {
    // console.log(event.target)
    if (event.target.value == 'color') {
      setproduct('رنگ')
      setSelectItem('color')
    } else if (event.target.value == 'cement') {
      setproduct('سیمان')
      setSelectItem('cement')
    } else {
      setproduct("")
      setSelectItem('')
    }
  }
  const handleAvailableSelectChange = (event) => {
    // console.log(event.target)
    if (event.target.value == 'available') {
      setAvailable('موجود')
      setSelectAvailableItem('available')
    } else if (event.target.value == 'unavailable') {
      setAvailable('ناموجود')
      setSelectAvailableItem('unavailable')
    } else {
      setAvailable("")
      setSelectAvailableItem('')
    }
  }
  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();
  const inputRef = useRef();
  return (
    <Box sx={{ height: "auto", width: '100%' }}>
      <Box sx={{ display: "flex", justifyContent: "right", flexDirection: "column", height: "auto", m: 5, mb: 5, borderRadius: "10px",bgcolor:"lightyellow", border: "1px solid #ddd" }}>
        <Box sx={{ display: "flex", m: 2, gap: "10px", justifyContent: "right", flexWrap: "wrap" }}>
          {/* <Box sx={{ display: "flex", width: "20%", alignSelf: "flex-start", mt: 4, position: "relative", minWidth: "200px" }}>
            <Typography sx={{ width: "50%", color: "black", fontSize: "1rem", alignSelf: "center", textAlign: "center" }}> انتخاب کالا :</Typography>
            <FormControl sx={{ alignSelf: "center", width: "10%" }}>
              <InputLabel></InputLabel>
              <Select sx={{ color: "white" }} onChange={handleProductSelectChange} value={selectItem} variant='filled' >
                <MenuItem sx={{ direction: "rtl" }} value="">هیچکدام</MenuItem>
                <MenuItem sx={{ direction: "rtl" }} value="color">رنگ</MenuItem>
                <MenuItem sx={{ direction: "rtl" }} value="cement">سیمان</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              value={product}
              id='product'
              variant='filled'
              defaultValue=' '
              InputProps={{
                readOnly: true
              }}
              sx={{ width: "50%", alignSelf: "center" }}
            />
          </Box > */}
          {/* <Box sx={{ display: "flex", width: "20%", alignSelf: "flex-start", mt: 4, minWidth: "200px" }}>
            <Typography sx={{ color: "black", fontSize: "1rem", alignSelf: "center", textAlign: "center", width: "20%", minWidth: "60px" }}>ساخت : </Typography>
            <TextField
              value={made}
              fullWidth
              defaultValue=' '
              id='info'
              multiline
              onChange={madeOnchangehandler}
              maxRows={2}
              variant='filled'
              InputLabelProps={{ shrink: false }}
              sx={{ width: "80%", alignSelf: "center" }}
            />
          </Box> */}
          <Box sx={{ display: "flex", width: "45%", alignSelf: "flex-start", mt: 4, minWidth: "250px" }}>
            <Typography sx={{ color: "black", fontSize: "1rem", alignSelf: "center", textAlign: "center", width: "20%", minWidth: "80px" }}>مشخصات کالا : </Typography>
            <TextField
              value={info}
              multiline
              fullWidth
              defaultValue=' '
              id='info'
              onChange={infoOnchangehandler}
              maxRows={3}
              variant='filled'
              InputLabelProps={{ shrink: false }}
              sx={{ width: "80%", alignSelf: "center" }}
            />
          </Box>
          <Box sx={{ display: "flex", width: "20%", alignSelf: "flex-start", mt: 4, position: "relative", minWidth: "200px" }}>
            <Typography sx={{ width: "50%", color: "black", fontSize: "1rem", alignSelf: "center", textAlign: "center" }}>موجودی</Typography>
            <FormControl sx={{ alignSelf: "center", width: "10%" }}>
              <InputLabel></InputLabel>
              <Select sx={{ color: "white" }} onChange={handleAvailableSelectChange} value={selectAvailableItem} variant='filled' >
                <MenuItem sx={{ direction: "rtl" }} value="">هیچکدام</MenuItem>
                <MenuItem sx={{ direction: "rtl" }} value="available">موجود</MenuItem>
                <MenuItem sx={{ direction: "rtl" }} value="unavailable">نا موجود</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              value={available}
              id='product'
              variant='filled'
              defaultValue=' '
              InputProps={{
                readOnly: true
              }}
              sx={{ width: "50%", alignSelf: "center" }}
            />
          </Box >
          <Box sx={{ display: "flex", width: "30%", alignSelf: "flex-start", mt: 4, minWidth: "300px" }}>
            <Typography sx={{ color: "black", fontSize: "1rem", alignSelf: "center", textAlign: "center", width: "40%" }}> قیمت کالا :</Typography>
            <NumericFormat
              style={{ width: "60%", border: "1px solid #ddd", padding: "10px", height: "60px", borderRadius: "10px", textAlign: "center", fontSize: "1rem", alignSelf: "center", color: "green", }}
              thousandSeparator
              onChange={costOnchangehandler}
              // value={amount}
              value={cost}
              suffix=' تومان '
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "5px", ml: 5, flexDirection: "row", flexWrap: "wrap", marginTop: "auto", mb: 4, minWidth: "600px" }}>
          <Box sx={{ flex: 5 }} >
            <Typography sx={{ marginRight: "5px", fontSize: "1.5rem", mb: 5 }}>آپلود عکس</Typography>
            <Box sx={{ display: "flex", gap: "25px", flexWrap: "wrap" }} >
              <Button sx={{ height: "50px" }} variant='contained' onClick={() => { inputRef.current.click()
                 setImgOpen(true) }}>انتخاب عکس</Button>
              <input
                id='inputImage'
                accept='.jpg,.png,.bmp,.svg'
                ref={inputRef}
                type="file"
                multiple
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = inputImageHandler()
                  setImageFile(file)
                  // console.log(imagefile)
                  if (fileNames.length > 0) {
                    fileNames.map((name) => {
                      removeFile(name)
                    })
                  }
                  setFiles(e, 'a');
                  inputRef.current.value = null;
                }}
              />
              {true && <Box sx={{ borderTop: "1px solid black", width: "200px", height: "200px" }} >
                {/* {console.log(fileNames)} */}
                <Box sx={{ position: "relative" }}>
                  {imgOpen && <img style={{ position: "absolute", width: "200px", height: "200px" }} id="blah" src={imageFile} />}

                  {/* <ul style={{ position: "absolute", top: "210px" }}>
                    {fileNames.length != 0 &&

                      <li>{fileNames[fileNames.length - 1]}</li>
                    }
                  </ul> */}
                </Box>
              </Box>}
              <Box sx={{width:"50%",display:"flex"}}>
                <Typography>کلمات کلیدی :</Typography>
                <Box sx={{width:"80%",border:"1px solid #ddd",bgcolor:"white",borderRadius:"10px",mr:2,ml:2,minHeight:"50px",display:"flex",maxHeight:"150px",overflowY:"auto",flexWrap:"wrap"}}>
                    {keyWords.map((itm)=>{
                      if(itm != "بر" && itm != "ما" && itm != "هر" && itm != "از" && itm != "تا" && itm != "جا" && itm != "همه" && itm != "اما" && itm !== "برای" && itm != "تر"){
                        // console.log(itm)
                        return (
                          <Chip
                          variant="filled"
                          label={itm}
                          sx={{direction:"ltr",mr:1,border:"1px solid gray",bgcolor:"#ddd",mt:2}}                          
                          />
                          )
                      }else{
                        return null
                      }
                    })}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "5px", flex: 1, alignSelf: "flex-end", maxHeight: "40px" }}>
            <Button variant='contained' size='small' color='error' onClick={onDeleteClickhandler}>حذف</Button>
            <Button size='large' onClick={onEditClickhandler} variant='contained'>ویرایش</Button>
            <Button size='large' onClick={onAddClickhandler} variant='contained'>جدید</Button>
          </Box>
        </Box>
      </Box>
      {/* DataGrid Section */}
      <Box sx={{ display: "flex", justifyContent: "left" }}>
        <Button variant='contained' sx={{ ml: 3 }} onClick={Subtract2PercentClickhandler}>کاهش -1% قیمت</Button>
        <Button variant='contained' sx={{ ml: 3 }} onClick={add2PercentClickhandler}>افزایش +1% قیمت</Button>
      </Box>
      <DataGrid
        disableExtendRowFullWidth={false}
        sx={{
          '& .super-app-theme--header': { backgroundColor: "darkorange", color: "white" },
          boxShadow: 2,
          backgroundColor: 'lightyellow',
          mt: 2,
          ml: 3,
          mb: 6,
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
        components={{ Toolbar: CustomToolbar }}
        onCellDoubleClick={onCellClickhandker}
        // //this is sooooo important getRowId :)))))))))
        // getRowId={row => row.userId}
        getRowId={row => row.userId}
        // getRowId={}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      {/* <SnackbarPopUp ref={childRef} severity={'success'} message={'عملیات موفق'} />
      <SnackbarPopUp ref={childRef1} severity={'error'} message={'عملیات ناموفق'} /> */}
    </Box >
  )
}

