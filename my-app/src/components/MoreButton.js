import Button from "@material-ui/core/Button";

export default function MoreButton({onClickMore}) {
    return <Button variant="text" color="primary" onClick={onClickMore}>Show More</Button>
}