import { Link } from "react-router-dom";

const DonationCard = ({ cards }) => {
  const { id, image, title, categoryname, cardColor, textColor } = cards;

  const cardStyle1 = {
    backgroundColor: cardColor,
  };
  const cardStyle2 = {
    color: textColor,
  };
  return (
    <>
      <Link to={`/DonationCard/${id}`}>
        <div style={cardStyle1} className="rounded-lg mb-12">
          <div className="card card-compact rounded-lg">
            <figure className="mx-auto">
              <img src={image} alt="donation" />
            </figure>
            <div className="card-body">
              <h2 style={cardStyle2} className="card-title text-sm ">
                {title}
              </h2>
              <p className="font-bold text-xl" style={cardStyle2}>
                {categoryname}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default DonationCard;
