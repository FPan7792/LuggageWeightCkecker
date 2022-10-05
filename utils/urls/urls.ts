const KEY = process.env.NEXT_PUBLIC_API_KEY;

export const URLS = {
  carriers_url: `https://the-offline-bp-back.herokuapp.com/get-carriers?secret_key=${KEY}`,
  inventory_url: `https://the-offline-back.herokuapp.com/api/v2/cabin-luggage-inventory`,
};
