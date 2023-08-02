// ** React Imports
import { useState, useEffect, useRef } from 'react'

// ** MUI Imports
import {Box,IconButton} from '@mui/material'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import Languages from 'src/language/Languages'
// import themeConfig from 'src/configs/themeConfig'
import { DropzoneArea, DropzoneAreaBase } from 'mui-file-dropzone'

const TrophyImg = styled('img')({
  right: '10%',
  bottom: 50, width: "80%",
  height: '80%',
  position: 'absolute'
})

const TabWebsiteImage = () => {
  // ** Hooks
  // const lan = Languages()
  const childRef = useRef(null)
  var files = []
  const childRef1 = useRef(null)
  const [message, setMessage] = useState("")
  const [imageCount, setImageCount] = useState(1)
  const [arrayOfImages, setArrayOfImages] = useState([])
  const ServerImages = []

  // useEffect(async () => {
  //   SetUpHandler()
  // }, [])
  // const SetUpHandler = async () => {
  //   const Send = await fetch(`${themeConfig.servicesAddress}media/get`, {
  //     method: 'POST',
  //     body: JSON.stringify({}),
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-type': 'application/json',
  //       'Access-Control-Allow-Headers': 'Content-Type',
  //       'Access-Control-Allow-Methods': 'POST',
  //       'Access-Control-Allow-Headers': 'X-Requested-With',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     }
  //   }).catch(err => {
  //   })
  //   if (Send != undefined) {
  //     if (Send.status == 200) {
  //       const SvImages = Send.json()
  //       ServerImages = SvImages.data
  //     }
  //   }
  // }

  // const SaveInfoHandler = async () => {
  //   setMessage("در حال ذخیره سازی")
  //   handleClickPopUp('error')
  //   for (let i = 0; i < arrayOfImages.length; i++) {
  //     if (ServerImages[i] != undefined && ServerImages[i] != null) {
  //       if (arrayOfImages[i] == ServerImages[i]) {
  //         continue
  //       } else {
  //         await fetch(`${themeConfig.servicesAddress}media/new`, {
  //           method: 'POST',
  //           body: JSON.stringify({ WholesaleImage: arrayOfImages[i], OrderId: i }),
  //           headers: {
  //             'Access-Control-Allow-Origin': '*',
  //             'Content-type': 'application/json',
  //             'Access-Control-Allow-Headers': 'Content-Type',
  //             'Access-Control-Allow-Methods': 'POST',
  //             'Access-Control-Allow-Headers': 'X-Requested-With',
  //             Authorization: `Bearer ${localStorage.getItem('token')}`
  //           }
  //         }).catch(err => {
  //         })
  //       }
  //     } else {
  //       await fetch(`${themeConfig.servicesAddress}media/new`, {
  //         method: 'POST',
  //         body: JSON.stringify({ WholesaleImage: arrayOfImages[i], OrderId: i }),
  //         headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-type': 'application/json',
  //           'Access-Control-Allow-Headers': 'Content-Type',
  //           'Access-Control-Allow-Methods': 'POST',
  //           'Access-Control-Allow-Headers': 'X-Requested-With',
  //           Authorization: `Bearer ${localStorage.getItem('token')}`
  //         }
  //       }).catch(err => {
  //       })
  //     }
  //   }
  //   SetUpHandler()
  //   setMessage("ذخیره سازی با موفقیت انجام شد")
  //   handleClickPopUp('error')
  // }

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

  const refreshPage = () => {
    for (let i = 0; i < imageCount; i++) {
      const imgid = "imglogo" + (i + 1)
      document.getElementById(imgid).src = null
      arrayOfImages[i] = { image: "" }
    }
  }
  const ShowImagesHandler = () => {
    if (arrayOfImages.length == 0) {
      for (let i = 0; i < imageCount; i++) {
        const variable = arrayOfImages
        variable.push({ image: "" })
        setArrayOfImages(variable)
      }
    }
    const rows = [];
    for (let i = 0; i < imageCount; i++) {
      const imgid = "imglogo" + (i + 1)
      const inputid = "input" + (i + 1)
      rows.push(<Box sx={{ width: "225px", height: "225px", minWidth: "225px", border: "1px solid #ddd", mb: 12,mr:2, mt: 6, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", borderRadius: "15px" }} key={i} ><Box onDrop={(ev) => {
        ev.preventDefault()
        let data = ev.dataTransfer.getData("text")
        document.getElementById(imgid).src = data
        arrayOfImages[i] = data
      }}>
        <img style={{ position: 'absolute', width: '225px', height: '225px', borderRadius: "15px",border:"1px solid red" }} id={imgid} />
      </Box>
        <Typography sx={{ border: "1px solid #ddd", backgroundColor: "#ddd", color: "black", width: "30px", textAlign: "center", fontSize: "1.375rem", zIndex: 1, position: "absolute", transform: "translate(-100px,228px)" }}>{i + 1}</Typography>
      </Box>);
      if (ServerImages[i] != undefined && ServerImages[i] != null) {
        arrayOfImages[i] = ServerImages[i]
        document.getElementById(imgid).src = ServerImages[i]
      }
    }
    return <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>{rows}</Box>;
  }

  return (
    <CardContent>
      <Box sx={{ marginTop: 3,bgcolor:"lightyellow" }} >
        <Box sx={{ width: "90%", m: "0 auto", mb: 10,pt:5 }}>
          <DropzoneArea dropzoneText='عکس ها را انتخاب کنید یا بکشید' getDropRejectMessage={() => "فرمت فایل مورد نظر صحیح نمیباشد"} getFileAddedMessage={() => "فایل مورد نظر اضافه گردید"} getFileLimitExceedMessage={() => "خطای محدودیت تعداد عکس"} getFileRemovedMessage={() => "فایل با موفقیت حذف گردید"} showFileNamesInPreview={false} showFileNames acceptedFiles={["image/jpeg", "image/png", "image/bmp", "image/jpg"]} filesLimit={imageCount} onChange={(e) => { files = e }} />
        </Box>
        <Box>
          <Typography sx={{ color: "black" }}>عکس های انتخابی را به ترتیب دلخواه در فیلد های زیر بکشید (اعداد زیر هر فیلد ترتیب نمایش آن عکس را در صفحه وب سایت نشان میدهد) {<br />} لزومی به پرکردن تمامی فیلد ها نیست</Typography>
        </Box>
        <Box sx={{ border: "1px solid #ddd", borderRadius: "15px", width: "90%", margin: "0 auto", mt: 5, mb: 5,position:"relative",display:"flex",justifyContent:"right" }}>
          <ShowImagesHandler />
          {imageCount <5 && <IconButton sx={{width:"100px",height:"100px",mt:"auto",mb:"auto",mr:5,ml:5}} onClick={()=>{setImageCount(imageCount+1)}}><AddCircleIcon sx={{fontSize:"5rem",color:"gray"}}/></IconButton>}
        </Box>
        <Box >
          <Button variant='contained' sx={{ marginLeft: 3.5 }}>
            ذخیره سازی
          </Button>
          <Button type='reset' onClick={refreshPage} variant='outlined' color='secondary'>
            ریست
          </Button>
          {/* <Button type='reset' onClick={show} variant='outlined' color='secondary'>
            نمایش
          </Button> */}
        </Box>
      </Box>
    </CardContent>
  )
}
export default TabWebsiteImage
