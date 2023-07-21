import { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
// import Languages from 'src/language/Languages'
// import themeConfig from 'src/configs/themeConfig'

const StyledTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    right: 0,
    textAlign: "center"
  },
  "& .MuiInputLabel-shrink": {
    margin: "0 auto",
    position: "absolute",
    right: "0",
    left: "0",
    top: "-3px",
    width: "150px", // Need to give it a width so the positioning will work
    background: "white", // Add a white background as below we remove the legend that had the background so text is not meshing with the border
    display: "none" //if you want to hide it completly
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& legend ": {
      display: "none"
    }
  }
});
const TrophyImg = styled('img')({
  right: '10%',
  bottom: 50, width: "80%",
  height: '80%',
  position: 'absolute'
})

const TabAccount = () => {
  const [guildNO, setGuildNO] = useState(null)
  const [nameFa, setNameFa] = useState(null)
  const [nameEn, setNameEn] = useState(null)
  const [additionalData, setAdditionalData] = useState(null)
  const [guildCode, setGuildCode] = useState(null)
  const [guildId, setGuildId] = useState(null)
  const [managerNameFa, setManagerNameFa] = useState(null)
  const [managerNationalCode, setManagerNationalCode] = useState(null)
  const [mobile, setMobile] = useState(null)
  const [tel1, setTel1] = useState(null)
  const [tel2, setTel2] = useState(null)
  const [wholesaleLogo, setWholesaleLogo] = useState(null)
  const [nationalId, setNationalId] = useState(null)
  const [isRegistered, setIsRegistered] = useState(false)
  const inputRef = useRef()
  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const [message, setMessage] = useState("")

  const data = JSON.stringify({
    GuildCode: guildCode, ManagerNameFa: managerNameFa, ManagerNationalCode: managerNationalCode
    , Mobile: mobile, AdditionalData: additionalData, GuildNo: guildNO, NameFa: nameFa, NameEn: nameEn
    , NationalId: nationalId, WholesaleLogo: wholesaleLogo, Tel1: tel1, Tel2: tel2
  })

  return (
    <CardContent>
      <Grid container sm={12} sx={{ marginTop: 3,bgcolor:"lightyellow" }} spacing={8}>
        <Grid item sm={4}>
          <TextField fullWidth label="نام کامل" required InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{ direction: "ltr" }} item sm={4}>
          <TextField fullWidth label="نام کامل(انگلیسی)" InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{}} item sm={4}>
          <TextField fullWidth label="نام کامل مدیر" required InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{ direction: "ltr" }} item sm={4}>
          <TextField fullWidth label="شماره صنف" required InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{ direction: "ltr" }} item sm={4}>
          <TextField fullWidth label="نوع صنف" required InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{ direction: "ltr" }} item sm={4}>
          <TextField fullWidth label="کد ملی مدیر" required InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{ direction: "ltr" }} item sm={4}>
          <TextField fullWidth label="شماره تلفن همراه" required InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{ direction: "ltr" }} item sm={4}>
          <TextField fullWidth label="تلفن همراه 1" InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{ direction: "ltr" }} item sm={4}>
          <TextField fullWidth label="تلفن همراه 2" InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{ direction: "ltr" }} item sm={4}>
          <TextField fullWidth label="شماره ملی" required InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{}} item sm={8}>
          <TextField fullWidth label="سایر اطلاعات" multiline maxRows={2} required InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{ position: "relative", height: "250px" }} item sm={12}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <input
              id='inputImage'
              accept='.jpg,.png,.bmp,.svg'
              ref={inputRef}
              type="file"
              value={undefined}
              multiple
              style={{ display: 'none' }}
              onChange={(e) => {
                const [file] = e.target.files
                // if (file) {
                //   const image = document.getElementById('imglogo')
                //   // image.src = URL.createObjectURL(file)
                // }
                const fr = new FileReader()
                fr.readAsDataURL(file)
                fr.addEventListener("load", evnt => { setWholesaleLogo(evnt.target.result) })
                // inputRef.current.value = undefined
              }}
            />
            <Box sx={{ width: "200px", height: "200px" }} >
              <Box sx={{ position: "relative" }}>
                <img style={{ position: "absolute", width: "200px", height: "200px" }} id="imglogo" src={wholesaleLogo} />
              </Box>
            </Box>
            <Button sx={{ height: "50px", alignSelf: "end" }} variant='contained' onClick={() => { inputRef.current.click() }} >انتخاب لوگو *</Button>
          </Box>
        </Grid>
        {/* <Grid item sm={12}>
            <StyledTextField fullWidth label={lan.Address} />
          </Grid> */}
        <Grid item sm={12}>
          <Button variant='contained' /*onClick={SaveInfoHandler}*/ sx={{ marginLeft: 3.5 }}>
            ذخیره
          </Button>
          <Button type='reset' variant='outlined'>
            ریست
          </Button>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TabAccount
