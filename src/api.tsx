const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  const res = await fetch(`${BASE_URL}/coins`);
  const json = await res.json();
  return json;
}

export async function fetchCoinInfo(coinId: string) {
  const res = await fetch(`${BASE_URL}/coins/${coinId}`);
  const json = await res.json();
  return json;
}

export async function fetchCoinTickers(coinId: string) {
  const res = await fetch(`${BASE_URL}/tickers/${coinId}`);
  const json = await res.json();
  return json;
}

export async function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  const res = await fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  );
  const json = await res.json();
  return json;
}
