import CountDown from "./CountDown/CountDown"
import Container from "@material-ui/core/Container"

const May42022Timestamp = 1659983662000

export default function Home() {
    return (
        <Container >
            <div className="homeContainer">
                <h1>Home Page</h1>
                <img src="https://learn.corel.com/wp-content/uploads/2018/04/may-the-fourth-blog-feature-image.jpg" alt="May the Fourth" />
                
                <Container maxWidth="sm" className="countdownClass">
                    <CountDown countdownTimestampMs={1651647600000} />
                </Container >
            </div>
        </Container>
    )
}