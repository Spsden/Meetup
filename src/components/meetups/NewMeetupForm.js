import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import {useRef} from 'react';



function NewMeetupForm() {

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  
  
  
  



  function submitHandler(event) {
    console.log('clicked')
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descriptionInputRef.current.value;

    const meetupData = {
      title : enteredTitle,
      Image : enteredImage,
      address : enteredAddress,
      description : enteredDesc,

    };

    console.log(meetupData);
  }
  return (
    <Card>

      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image"  ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}/>
        </div>

        <div className={classes.actions}>
          <button  >Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
