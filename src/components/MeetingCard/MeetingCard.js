import "./MeetingCard.css"



import MicOn from "./wave.png"
import MicOff from "./mute-mic.png"

function MeetingCard({StudentName, StudentImg, MuteUnmute}) {
  return (
    <>
    <div className="meeting-container">
        <span className="student-name">{StudentName}</span>
        <img src={StudentImg} className="student-img"/>
        <img src= {MuteUnmute ? MicOn : MicOff}  className="mic"/>
    </div>
    </>
  )
}

export default MeetingCard