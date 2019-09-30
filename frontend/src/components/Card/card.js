import React,{useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.css'


export default function SimpleCard() {

  useEffect(() => {

    fetch(`${MAIN_URL}/getData`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: localStorage.getItem("UserId")
      })
    })
      .then(response => response.json())
      .then(function (body) {
        console.log(body)
        // if (body[0].status !== "failed") {
          if (body.data !== "null" ) {
          setDashboardData(body.data);
          }


      });



  }, []);


  const userCount = applicants.map(each => {
    return each.length;
  });

    
  return (
    <Card className="card" >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
         Header
        </Typography>
      
        <Typography color="textSecondary">
        
        </Typography>
        <Typography component="p">
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Button...</Button>
      </CardActions>
    </Card>
  );
}