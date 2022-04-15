import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
   console.log(props.img)
  return (

    <Card>
        <li className={classes.item}>
    <div className={classes.image}>
        <img src={props.image} alt={props.title} width={400}></img>
    </div>
    <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>
            {props.description}
        </p>
      
    </div>
{/* ruk uri wla lagana pafega */}
    <div className={classes.actions}>
        <button>To Favourites</button>
    </div>
  </li>

    </Card>


  
  );
}

export default MeetupItem;
