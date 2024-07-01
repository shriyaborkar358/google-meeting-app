import "./Home.css"

import MeetingCard from "../../components/MeetingCard/MeetingCard"
import Circle from "./circle.png"
import Hand from "./hand.png"
import Menu from "./menu.png"
import Mic from "./mic.png"
import Share from "./share.png"
import Video from "./video.png"
import SakshiProfile from "./Sakshi.jpeg"
import ShriyaProfile from "./Shriya.jpeg"
import PranayProfile from "./Pranay.jpeg"
import SauravProfile from "./Saurav.jpeg"
import LakshmanProfile from "./Lakshman.jpeg"

function Home() {
  return (
    <>
    <div className="meeting-card-container">
    <MeetingCard StudentName="Shriya Borkar" StudentImg= {ShriyaProfile}MuteUnmute={false} />
    <MeetingCard StudentName="Sakshi Lambe" StudentImg={SakshiProfile} MuteUnmute={true} />
    <MeetingCard StudentName="Lakshman Kolpe" StudentImg= {SauravProfile} MuteUnmute={true} />
    <MeetingCard StudentName="Pranay Dandekar" StudentImg= {PranayProfile} MuteUnmute={true} />
    <MeetingCard StudentName="Saurav Shete" StudentImg={LakshmanProfile} MuteUnmute={false} />
    <MeetingCard StudentName="Nita Sharma" StudentImg="https://i.pravatar.cc/150?img=30" MuteUnmute={true} />
    <MeetingCard StudentName="Raghav Raut" StudentImg="https://i.pravatar.cc/150?img=58" MuteUnmute={true} />
    <MeetingCard StudentName="Mayuri Ramteke" StudentImg="https://i.pravatar.cc/150?img=38" MuteUnmute={true} />
    <MeetingCard StudentName="Ganesh Meshram" StudentImg="https://i.pravatar.cc/150?img=56" MuteUnmute={false} />
    </div>
    <div className="side-card-container">
      <div className="side-container">
        <div className="header">
        <span className="heading">Activities</span><img src="https://cdn-icons-png.flaticon.com/128/1828/1828774.png" className="cross-icon"/>
        </div>

        <div className="logo-name-container">
          <img src= "https://cdn-icons-png.flaticon.com/128/9506/9506009.png" className="logos"/><span className="logo-name">Polls: Get a quick pilse of the audience</span>
        </div>

        <div className="logo-name-container">
          <img src= "https://cdn-icons-png.flaticon.com/128/1271/1271292.png" className="logos"/><span className="logo-name">Q & A: Give everyonr an easy wat to ask questions</span>
        </div>

        <div className="logo-name-container">
          <img src= "https://cdn-icons-png.flaticon.com/128/4296/4296157.png" className="logos"/><span className="logo-name">Breakout Rooms: Split into smaller group descussion</span>
        </div>

        <div className="logo-name-container">
          <img src= "https://cdn-icons-png.flaticon.com/128/5822/5822065.png" className="logos"/><span className="logo-name">Live Streaming: Let people watch without joining</span>
        </div>

        <div className="logo-name-container">
          <img src= "https://cdn-icons-png.flaticon.com/128/440/440854.png" className="logos"/><span className="logo-name">Recording: Record Meetings for On-demand viewing</span>
        </div>

        <div className="logo-name-container">
          <img src= "https://cdn-icons-png.flaticon.com/128/10052/10052839.png" className="logos"/><span className="logo-name">Whiteboard: Be creative and sketch some idea</span>
        </div>
      </div>
    </div>

    <div className="icons-container">
      <div className="icons">
      <img src={Mic} className="icon"/>
      </div>

      <div className="icons">
      <img src={Video} className="icon"/>
      </div>

      <div className="icons">
      <img src={Hand} className="icon"/>
      </div>

      <div className="icons">
      <img src={Share} className="icon"/>
      </div>

      <div className="icons">
      <img src={Menu} className="icon"/>
      </div>

      <div className="icons">
      <img src={Circle} className="icon"/>
      </div>
      </div>
    </>
  )
}

export default Home