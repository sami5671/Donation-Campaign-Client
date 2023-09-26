const getStoredDonationCard = () => {
  const storedDonationCard = localStorage.getItem("donationCard");
  if (storedDonationCard) {
    return JSON.parse(storedDonationCard);
  }
  return [];
};
const saveDonationCard = (id) => {
  const storedDonationCards = getStoredDonationCard();
  const exists = storedDonationCards.find((d) => d.id === id);

  if (!exists) {
    storedDonationCards.push(id);
    localStorage.setItem("donationCard", JSON.stringify(storedDonationCards));
  }
};

export { getStoredDonationCard, saveDonationCard };
