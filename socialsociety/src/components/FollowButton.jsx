//This is a code I got from online but isn't currently using


// import { useState } from 'react';
import classNames from 'classnames';
// import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import useFollow from '../components/UseFollow';


// function FollowBtn() {
//     const [follow, setFollow] = useState('Follow');

//     function handleClick() {
//         setFollow('Unfollow');
//     }  

//     return (
//         <div>
//             <button className = 'fBtn' onClick = {handleClick} >{follow}</button>

          
//         </div>
//     )
// }
// export default FollowBtn;


function FollowBtn({ userId }) {
    const { isFollowing, toggleFollow } = useFollow({ userId })
  
    return (
      <Container>
        <button
          className={classNames(isFollowing ? 'following' : 'not-following')}
          onClick={toggleFollow}
        >
          {isFollowing ? (
            <div className="follow-text">
              <span className="follow-text__following">Following</span>
              <span className="follow-text__unfollow">Unfollow</span>
            </div>
          ) : (
            'Follow'
          )}
        </button>
      </Container>
    )
  }
  export default FollowBtn;