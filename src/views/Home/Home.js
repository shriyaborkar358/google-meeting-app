import "./Home.css"

import MeetingCard from "../../components/MeetingCard/MeetingCard"

function Home() {
  return (
    <>
    <h1 className="heading">Google meeting Cards</h1>

    <div className="meeting-card-container">
    <MeetingCard StudentName="Shriya Borkar" StudentImg="https://i.pravatar.cc/150?img=28" MuteUnmute={false} />

    <MeetingCard StudentName="Sakshi Lambe" StudentImg="https://i.pravatar.cc/150?img=30" MuteUnmute={true} />

    <MeetingCard StudentName="Pranay Dandekar" StudentImg="https://i.pravatar.cc/150?img=57" MuteUnmute={false} />

    <MeetingCard StudentName="Saurav Shete" StudentImg="https://i.pravatar.cc/150?img=58" MuteUnmute={true} />

    <MeetingCard StudentName="lakshman kolpe" StudentImg="https://i.pravatar.cc/150?img=56" MuteUnmute={false} />
    </div>
    </>
  )
}

export default Home