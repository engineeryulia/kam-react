import React from "react";
import s from './MyPosts.module.css'


const MyPosts = () => {
  return ( 
    <div>
      My posts
        <div>
          <textaria></textaria>
          <button>Add post</button>
          <button>Remove</button>

        </div>
    <div className={s.posts}></div>
      <div className={s.item}>
        post1
      </div>

      <div className={s.item}>
        post2
      </div>

      <div className={s.item}>
        post3
      </div>

      <div className={s.item}>
        post4
      </div>

      <div className={s.item}>
        post5
      </div>

    </div>  
  )
  
}

export default MyPosts
