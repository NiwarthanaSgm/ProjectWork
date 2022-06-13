import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../../styles/earnings.css';


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
function payments(){
  return 200;
}
function accrued(){
  return getTotal()-payments();
}
export default function PaymentDetails() {
  return (
    <><div className='cards'><Card style={styleAdded.card}>
      <CardContent>
        <Typography style={styleAdded.title} color="text.secondary" gutterBottom>
          This Month Pays
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
          This week Pays
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
          Total Pays
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
          Payments
        </Typography>
        <Typography style={styleAdded.description} color="text.secondary">
          $ {payments()}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Card sx={{ width: '200px', margin:'5px'}}>
      <CardContent>
        <Typography style={styleAdded.title} color="text.secondary" gutterBottom>
           Accrued Payments
        </Typography>
        <Typography style={styleAdded.description} color="text.secondary">
          $ {accrued()}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card></div>
    </>
  );
}
