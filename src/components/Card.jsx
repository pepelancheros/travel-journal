export function Card(props) {
  return (
    <div className="card">
      <img
        className="card__image"
        src={props.imageUrl}
        alt="a touristic spot on the country"
      />
      <div>
        <div className="card__top-info">
          <img
            className="card__location-icon"
            src="src/assets/location.svg"
            alt="location icon"
          />
          <p className="card__location-text">{props.location}</p>
          <a
            className="card__link"
            href={props.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="card__title">{props.title}</h2>
        <time dateTime={props.startDate}>{props.startDate}</time> -{" "}
        <time dateTime={props.endDate}>{props.endDate}</time>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
}
