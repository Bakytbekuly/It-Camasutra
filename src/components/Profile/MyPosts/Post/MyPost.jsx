import React from "react";
import d from './MyPost.module.css'

function MyPosts() {
    return (
        <div>
            MY posts
            <div>
                New post
            </div>
            <div className={d.posts}>
                <div className={d.item}>
                    post 1
                </div>
                <div className={d.item}>
                    post 2
                </div>
            </div>
        </div>
    )
}

export default MyPosts