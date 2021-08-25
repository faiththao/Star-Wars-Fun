import CountDown from "./CountDown/CountDown"

const May42022Timestamp = 1659983662000

export default function Home() {
    return (
        <div className="homeContainer">
            <h1>Home Page</h1>
            <img src="https://learn.corel.com/wp-content/uploads/2018/04/may-the-fourth-blog-feature-image.jpg" alt="May the Fourth"/>
            <CountDown countdownTimestampMs={1651647600000}  />
        </div>
    )
}