import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Earnings.css';

const styleAdded ={
  card:{
    width: '200px', margin:'5px',
  }, title:{
    fontSize: 14, textAlign:'center', color:'blueviolet',
  }, description:{
    mb: 1.5, textAlign:'center',
  },
};

function getMonthly(){
  return 100;
}
function getWeekly(){
  return 45;
}
function getTotal(){
  return 350;
}
function withdrawal(){
  return 200;
}
function receivables(){
  return getTotal()-withdrawal();
}
export default function BasicCard() {
  return (
    <><div className='cards'><Card style={styleAdded.card}>
      <CardContent>
        <Typography style={styleAdded.title} color="text.secondary" gutterBottom>
          This Month Earns
        </Typography>
        <Typography style={styleAdded.description} color="text.secondary">
          $ {getMonthly()}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Card sx={{ width: '200px', margin:'5px'}}>
      <CardContent>
        <Typography style={styleAdded.title} color="text.secondary" gutterBottom>
          This week Earns
        </Typography>
        <Typography style={styleAdded.description} color="text.secondary">
          $ {getWeekly()}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Card sx={{ width: '200px', margin:'5px'}}>
      <CardContent>
        <Typography style={styleAdded.title} color="text.secondary" gutterBottom>
          Total Earns
        </Typography>
        <Typography style={styleAdded.description} color="text.secondary">
          $ {getTotal()}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Card sx={{ width: '200px', margin:'5px'}}>
      <CardContent>
        <Typography style={styleAdded.title} color="text.secondary" gutterBottom>
          Withdrawals
        </Typography>
        <Typography style={styleAdded.description} color="text.secondary">
          $ {withdrawal()}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Card sx={{ width: '200px', margin:'5px'}}>
      <CardContent>
        <Typography style={styleAdded.title} color="text.secondary" gutterBottom>
          Receivable Withdrawals
        </Typography>
        <Typography style={styleAdded.description} color="text.secondary">
          $ {receivables()}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card></div>
    </>
  );
}
