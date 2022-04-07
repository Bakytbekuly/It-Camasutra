import React from "react"
import d from './Profile.module.css'
import MyPosts from './MyPosts/Post/MyPost';

function Profile() {
    return (
        <div className={d.content}>
            <div>
                <img src="https://geeksspaceship.com/uploads/images/original/18/03-05/earth-mountain-25350.jpg" alt="" />
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>

    )
}

export default Profile