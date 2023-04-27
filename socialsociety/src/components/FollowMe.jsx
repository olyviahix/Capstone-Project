
function FollowMe() {
    //function would be here to increase and decrease the numbers by the follower
    //on the list using Axios.Get(POST, FOLLOWING, FOLLOWERS)

    

    return(

        <div className = 'Follow'> 
            <p> 
                
                <a href = '/follow'
                className = 'hover-link'>
                Followers: 0
                </a> 
                
                <a href = '/follow'
                className = 'hover-link'>
                Following: 0</a>

                Post: 0
            </p>
        </div>
    )
}
export default FollowMe;
