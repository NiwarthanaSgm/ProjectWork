import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ScheduleData from './ScheduleData';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 'auto', height: '100%', typography: 'body1', flex:1, backgroundColor:'inherit', minHeight:500, maxWidth:850}}>
      <TabContext value={value} sx={{width:'auto'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width:'auto'}}>
          <TabList onChange={handleChange} aria-label="Dashboard Tab">
            <Tab label="Schedule" value="1" />
            <Tab label="Reschedule" value="2" />
            <Tab label="Completed" value="3" />
            <Tab label="Cancelled" value="4" />
            <Tab label="Stared" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"><ScheduleData /></TabPanel>
        <TabPanel value="2"><ScheduleData /></TabPanel>
        <TabPanel value="3">No any completed meetings</TabPanel>
        <TabPanel value="4"><ScheduleData /></TabPanel>
        <TabPanel value="5"><ScheduleData /></TabPanel>
      </TabContext>
    </Box>
  );
}