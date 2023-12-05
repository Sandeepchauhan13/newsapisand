import React, { Component } from 'react'
import {FacebookShareButton, FacebookIcon, TwitterIcon,TwitterShareButton, WhatsappShareButton, WhatsappIcon} from "react-share";
export class NewsItem extends Component {
  render() {
    let{title, description,imgUrl,url,source,author,date}=this.props;
    const shareUrl = 'https://www.facebook.com/'
    const shareUrlt = 'https://www.twitter.com/'
    const shareUrlw = 'https://www.whatsapp.com/'
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
        <div 
          // this is the code to fix the badge inside the card
          style= {{display:'flex',
          justifyContent:'flex-end',
         position:'absolute'}}>
        {/* <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span> */}
        <span className=" badge rounded-pill bg-danger">{source}</span>
</div>



  <img src={imgUrl?imgUrl:"https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/10/1408/814/10.23.23_MLB-Live-Updates_Astros_Rangers_16x9.jpg?ve=1&tl=1"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-danger">By {author} on {new Date(date).toGMTString()}  </small></p>
    <a href={url} target="_blank" className="btn btn-dark">readmore..</a>
    <FacebookShareButton className='my-3 mx-2' url={shareUrl}>
 <FacebookIcon size={30}/>
</FacebookShareButton>
   
{/* twitter-- */}
 <TwitterShareButton className='my-3 mx-2' url={shareUrlt}>
 <TwitterIcon size={30}/>
</TwitterShareButton>
{/* whatsapp ---- */}
<WhatsappShareButton className='my-3 mx-2' url={shareUrlt}>
 <WhatsappIcon size={30}/>
</WhatsappShareButton>



  </div>
</div>
      </div>
    )
  }
}

export default NewsItem;
