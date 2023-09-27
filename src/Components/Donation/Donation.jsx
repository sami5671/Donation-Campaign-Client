import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationCard } from "../../Utility/localStorage";
const Donation = () => {
  const donationCards = useLoaderData();
  const [dCard, setDonationCards] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    const storedCardsIds = getStoredDonationCard();
    if (donationCards.length > 0) {
      const donationCard = [];
      for (const id of storedCardsIds) {
        const card = donationCards.find((parameter) => parameter.id === id);
        if (card) {
          donationCard.push(card);
        }
      }
      setDonationCards(donationCard);
    }
  }, []);

  return (
    <>
      <section className="container mx-auto">
        <div className="grid px-4 lg:grid-cols-2 gap-4">
          {dCard.slice(0, dataLength).map((donate) => (
            <div
              style={{ backgroundColor: donate.cardColor }}
              className="card lg:card-side shadow-xl "
              key={donate.id}
            >
              <figure>
                <img
                  className="w-full rounded-lg"
                  src={donate.image}
                  alt="donation"
                />
              </figure>
              <div className="card-body">
                <h2 style={{ color: donate.textColor }} className="">
                  {donate.title}
                </h2>
                <p className="text-xl font-bold">{donate.categoryname}</p>
                <p style={{ color: donate.textColor }} className="font-bold">
                  {donate.price}
                </p>
                <div className="card-actions">
                  <button
                    style={{
                      backgroundColor: donate.textColor,
                    }}
                    className="justify-center px-4 py-2 text-white rounded-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={dataLength === dCard.length && "hidden"}>
          <button
            className="btn btn-primary"
            onClick={() => setDataLength(dCard.length)}
          >
            Show All
          </button>
        </div>
      </section>
    </>
  );
};

export default Donation;
