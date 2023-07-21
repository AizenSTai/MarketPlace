import { Box, Button, IconButton, Typography, useTheme, InputBase, Popover, Divider, useScrollTrigger, Toolbar, CssBaseline, Menu, MenuItem, Card } from "@mui/material";
import { tokens } from "../../../../theme";
import * as React from 'react';
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import MuiTab from '@mui/material/Tab'
import Card5 from "../../../MainComponents/Cards/Card5";
import GoldenCard from "../../../MainComponents/Cards/GoldenCard";
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import FilterListIcon from '@mui/icons-material/FilterList';
import Topbar from "../../../MainComponents/Topbar/Topbar";
import { useTranslation } from "react-i18next";
import SilverCard from "../../../MainComponents/Cards/SilverCard";
import CooperCard from "../../../MainComponents/Cards/CooperCard";
import { NestedDropdown } from "mui-nested-menu";
import { useState } from "react";
import { styled } from '@mui/material/styles'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import TabAccount from '../../View/SellerDashboard/TabAccount'
import TabWebsiteText from '../../View/SellerDashboard/TabWebsiteText'
import TabWebsiteImage from '../../View/SellerDashboard/TabWebsiteImage'
import AddProducts from '../../View/SellerDashboard/AddProducts'

const Tab = styled(MuiTab)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        minWidth: 100
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: 67
    }
}))

const TabName = styled('span')(({ theme }) => ({
    lineHeight: 1.71,
    fontSize: '0.875rem',
    marginLeft: theme.spacing(2.4),
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const SellerDashboard = ({ title, subTitle }) => {
    const { t, i18n } = useTranslation()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [value, setValue] = useState('initializeWebsite')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Topbar page="sellers" />
            <Box sx={{ direction: "rtl",mb:6 }}>
                <TabContext value={value}>
                    <TabList
                        onChange={handleChange}
                        aria-label='account-settings tabs'
                        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}`, backgroundColor: "orange" }}
                    >
                        <Tab
                            value='initializeWebsite'
                            label={
                                <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                    <AccountOutline />
                                    <TabName sx={{ fontSize: '20px', fontWeight: '600' }}>اطلاعات پایه</TabName>
                                </Box>
                            }
                        />
                        <Tab
                            value='websiteText'
                            label={
                                <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                    <AccountOutline />
                                    <TabName sx={{ fontSize: '20px', fontWeight: '600' }}>اطلاعات متنی سایت</TabName>
                                </Box>
                            }
                        />
                        <Tab
                            value='websiteImage'
                            label={
                                <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                    <AccountOutline />
                                    <TabName sx={{ fontSize: '20px', fontWeight: '600' }}>عکس های سایت</TabName>
                                </Box>
                            }
                        />
                        <Tab
                            value='addproducts'
                            label={
                                <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                    <AccountOutline />
                                    <TabName sx={{ fontSize: '20px', fontWeight: '600' }}>افزودن کالا</TabName>
                                </Box>
                            }
                        />
                    </TabList>
                    <TabPanel sx={{ p: 0 }} value='initializeWebsite'>
                        <TabAccount />
                    </TabPanel>
                    <TabPanel sx={{ p: 0 }} value='websiteText'>
                        <TabWebsiteText />
                    </TabPanel>
                    <TabPanel sx={{ p: 0 }} value='websiteImage'>
                        <TabWebsiteImage />
                    </TabPanel>
                    <TabPanel sx={{ p: 0 }} value='addproducts'>
                        <AddProducts />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}
export default SellerDashboard