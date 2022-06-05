import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ScheduleData from './ScheduleData';

const styleAdded = {
  box:{
    width: 'auto', height: '100%', typography: 'body1', flex:1, backgroundColor:'inherit', minHeight:450, maxWidth:850,
  }, tab:{
    width:'auto',
  }, box1:{
    borderBottom: 1, borderColor: 'divider', width:'auto',
  },
};

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={styleAdded.box}>
      <TabContext value={value} sx={styleAdded.tab}>
        <Box styles={styleAdded.box1}>
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
