import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonationCard } from "../../Utility/localStorage";
const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((parameter) => parameter.id === idInt);

  const handleDonate = () => {
    saveDonationCard(idInt);
    toast("addedd !!!!!!");
  };
  return (
    <>
      <section className="container mx-auto m-auto">
        <div className="w-auto px-4">
          <img
            className="lg:w-2/3 lg:h-96 rounded-md"
            src={donation.image}
            alt=""
          />
          <div className="absolute -mt-12">
            <button
              onClick={handleDonate}
              className="bg-[#FF444A] py-3 px-6 rounded-lg text-white text-xl"
            >
              Donate $290
            </button>
          </div>
        </div>
        <div className="px-4">
          <h2 className="text-3xl font-bold mt-8">{donation.categoryname}</h2>
          <p className="mt-6 text-gray-500">{donation.donation_description}</p>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default DonationDetails;
