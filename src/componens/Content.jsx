import React from "react";
import content from "./Content.module.css"

// let content ={
//   "content":"Content_content__-EeII",
//   "beki":"Content_beki__lEeXU",
//   "geti":"Content_geti__VumN8"
// }


const Content =()=>{
    return( <div className={content.content}>
    <div>
      <img src='https://avatars.mds.yandex.net/i?id=d582b5cb5707ecd29f9dd6bb710cf4cf-5878684-images-thumbs&n=13'></img>
    </div>
    <div className={content.beki}>
      ava-description
    </div>
    <div className={content.geti}>
    My-Post
    <div>
      New post
    </div>
    </div>
    <div>
      post 1
    </div>
    <div>
      post 2
    </div>
    
  </div>

    );
}
export default Content;