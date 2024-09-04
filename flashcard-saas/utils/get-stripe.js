import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51Puf4807z2jG3UiTu4B83D7IEDoXzlaOQZy9erZzwMoS2Ph6llHqZBiw1qHLEe0nJa1Jwo1gbndQEjYv18GujpnS00TBCK8y0u"
    );
  }
  return stripePromise;
};

export default getStripe;
