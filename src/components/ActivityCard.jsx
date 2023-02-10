import activityCardImg from "../assets/images/activitycardimg.jpg"

const ActivityCard = () => {
    return (
        <div className="ActivityCard">
            <img src={ activityCardImg }></img>
            <span>Punta Monita</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>from &#36;399 pp</p>
        </div>
    )
};

export default ActivityCard;