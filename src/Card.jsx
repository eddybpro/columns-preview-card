import propTypes from "prop-types";

function Card(props) {
  return (
    <div className="Card">
      <div className="Card-ImgContainer">
        <img src={props.carImg} alt={props.name} />
      </div>
      <h1 className="Card-Title">{props.name}</h1>
      <p className="Card-Para">{props.desc}</p>
      <button className="Card-Btn">learn more</button>
    </div>
  );
}

Card.propTypes = {
  carImg: propTypes.string,
  name: propTypes.string,
  desc: propTypes.string,
};
export default Card;
