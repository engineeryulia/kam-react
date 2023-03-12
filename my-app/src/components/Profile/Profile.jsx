import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'


const Profile = () => {
  return (<div className={s.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HpG9laTV78HZXwhR0PZTVsYyMe7veyHBzI7GK2_RS5ax7DEHeTn0WylFeiC3plOR85E&usqp=CAU"/>
      </div>
      <div>avatar + discription</div>
      <MyPosts />
    </div>)
}

export default Profile
