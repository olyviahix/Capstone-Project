// import mobiscroll from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import Card from 'react-bootstrap/Card';

// // class App extends React.Component {
//    function PostContent() {
//         return (
//             <div>
//                 <mobiscroll.Card
//                     theme="ios" 
//                     themeVariant="light"
//                     >
//                     <mobiscroll.CardHeader>
//                         <mobiscroll.Avatar src="https://img.mobiscroll.com/demos/mr-profile2.png" />
//                         <mobiscroll.CardTitle className="mbsc-bold">Carl Obama</mobiscroll.CardTitle>
//                         <mobiscroll.CardSubtitle> at 5:16 PM</mobiscroll.CardSubtitle>
//                     </mobiscroll.CardHeader>
//                     <img src="https://img.mobiscroll.com/demos/Blueberry.png" />
//                     <mobiscroll.CardContent>
//                         Yeaahhh :D :D :D I've made it. It took me 3 months to improve my blueberry cake. But it's perfect now. :P
//                     </mobiscroll.CardContent>
//                     <mobiscroll.CardFooter>
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="heart"></button>
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="thumbs-up2"></button>
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="material-message"></button>
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="tag"></button>
//                     </mobiscroll.CardFooter>
//                 </mobiscroll.Card>
            
//                 <mobiscroll.Card
//                     theme="ios" 
//                     themeVariant="light"
//                     >
//                     <mobiscroll.CardHeader>
//                         <mobiscroll.Avatar src="https://img.mobiscroll.com/demos/mrs-profile1.png" />
//                         <mobiscroll.CardTitle className="mbsc-bold">Hortense Tinker</mobiscroll.CardTitle>
//                         <mobiscroll.CardSubtitle> at 4:55 PM</mobiscroll.CardSubtitle>
//                     </mobiscroll.CardHeader>
//                     <img src="https://img.mobiscroll.com/demos/card_1.png" />
//                     <mobiscroll.CardContent>
//                         Best places to seek silence !!! The Dhamma Giri, a vipassana meditation retreat.
//                     </mobiscroll.CardContent>
//                     <mobiscroll.CardFooter className="mbsc-align-right">
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="fa-mail-reply"></button>
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="star3">3</button>
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="fa-retweet">5</button>
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="fa-ellipsis-h"></button>
//                     </mobiscroll.CardFooter>
//                 </mobiscroll.Card>
            
//                 <mobiscroll.Card
//                     theme="ios" 
//                     themeVariant="light"
//                     >
//                     <mobiscroll.CardHeader>
//                         <mobiscroll.Avatar src="https://img.mobiscroll.com/demos/mrs-profile2.png" />
//                         <mobiscroll.CardTitle className="mbsc-bold">Jenna Doe</mobiscroll.CardTitle>
//                         <mobiscroll.CardSubtitle> at 4:16 PM</mobiscroll.CardSubtitle>
//                     </mobiscroll.CardHeader>
//                     <img src="https://img.mobiscroll.com/demos/card_2.png" />
//                     <mobiscroll.CardContent>
//                         There is a new baby panda at the zoo.... :) :O :D
//                     </mobiscroll.CardContent>
//                     <mobiscroll.CardFooter className="mbsc-align-right">
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="fa-mail-reply"></button>
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="star3">19</button>
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="fa-retweet">3</button>
//                         <button className="mbsc-btn mbsc-btn-flat" data-icon="fa-ellipsis-h"></button>
//                     </mobiscroll.CardFooter>
//                 </mobiscroll.Card>
            
//                 <mobiscroll.Card
//                     theme="ios" 
//                     themeVariant="light"
//                     >
//                     <mobiscroll.CardHeader>
//                         <mobiscroll.Avatar src="https://img.mobiscroll.com/demos/mr-profile1.png" />
//                         <mobiscroll.CardTitle className="mbsc-bold">John Bush</mobiscroll.CardTitle>
//                         <mobiscroll.CardSubtitle> at 2:23 PM</mobiscroll.CardSubtitle>
//                     </mobiscroll.CardHeader>
//                     <img src="https://img.mobiscroll.com/demos/account-background.jpg" />
//                     <mobiscroll.CardContent>
//                         Best trip ever!!! :D I'll definetly come back here. :)
//                     </mobiscroll.CardContent>
//                     <mobiscroll.CardFooter>
//                         <button className="mbsc-btn mbsc-btn-flat">Like</button>
//                         <button className="mbsc-btn mbsc-btn-flat">Share</button>
//                     </mobiscroll.CardFooter>
//                 </mobiscroll.Card>
//             </div>
//         );
//     }    

// export default PostContent;


import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import postpic from '../Images/postpic.JPG'



function PostContent() {
  return (
    <Card className="userPost" >
      <Card.Body>
        <Card.Title>USERNAME</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body class="icons">
      <button class="bi-heart-fill"></button>
      <button class="bi-chat-left-fill"></button>
      </Card.Body>
    </Card>
    
  );
}

export default PostContent;