/**
 * Centralized pricing configuration.
 *
 * USD (international) and INR (India) pricing are two SEPARATE,
 * independently-editable price lists — NOT currency conversions of one
 * another. There is no exchange rate and no USD -> INR calculation
 * anywhere in this file or in the site.
 *
 * To change a price:
 *   - International visitors: edit the matching value under `usd` below.
 *   - India visitors: edit the matching value under `inr` below.
 * Editing one never affects the other.
 *
 * The INR values below are starting placeholders (carried over as fixed
 * numbers, not calculated) until the actual India pricing is provided —
 * update them here whenever the real India price list is ready.
 */

export const pricing = {
  usd: {
    packages: { bronze: 300, silver: 600, gold: 900, oneTime: 200 },
    seoPackages: { value: 125, bronze: 225, silver: 400, gold: 700, platinum: 1050 },
    aeoSeoPackages: { bronze: 300, silver: 600, gold: 900 },
    localSeoPackages: { bronze: 150, silver: 225, gold: 350 },
    smoPackages: { bronze: 150, silver: 250, gold: 350, platinum: 450 },
    reputationManagement: { starter: 150, value: 200, premium: 350, strategic: 550 },
    ppcPackages: { bronze: 250, silver: 450, gold: 650 },
    webDesigning: { webShop: 2200, goPro: 1500, bizStartup: 950, budget: 450 },
    badLinkRemoval: { upTo500: 200, upTo1000: 400 },
    contentWriting: {
      website200: 10, article200: 7, pressRelease200: 8, blog200: 6,
      website400: 20, article400: 15, pressRelease400: 16, blog400: 13,
      website600: 28, article600: 20, pressRelease600: 22, blog600: 18
    },
    seoGeoServices: { bronze: 300, silver: 600, gold: 900 }
  },

  inr: {
    packages: { bronze: 25500, silver: 51000, gold: 76500, oneTime: 17000 },
    seoPackages: { value: 10625, bronze: 19125, silver: 34000, gold: 59500, platinum: 89250 },
    aeoSeoPackages: { bronze: 25500, silver: 51000, gold: 76500 },
    localSeoPackages: { bronze: 12750, silver: 19125, gold: 29750 },
    smoPackages: { bronze: 12750, silver: 21250, gold: 29750, platinum: 38250 },
    reputationManagement: { starter: 12750, value: 17000, premium: 29750, strategic: 46750 },
    ppcPackages: { bronze: 21250, silver: 38250, gold: 55250 },
    webDesigning: { webShop: 187000, goPro: 127500, bizStartup: 80750, budget: 38250 },
    badLinkRemoval: { upTo500: 17000, upTo1000: 34000 },
    contentWriting: {
      website200: 850, article200: 595, pressRelease200: 680, blog200: 510,
      website400: 1700, article400: 1275, pressRelease400: 1360, blog400: 1105,
      website600: 2380, article600: 1700, pressRelease600: 1870, blog600: 1530
    },
    seoGeoServices: { bronze: 25500, silver: 51000, gold: 76500 }
  }
};

/**
 * Looks up a price by dotted path (e.g. 'seoPackages.value') from the
 * pricing set for the given currency ('INR' or 'USD'). Returns undefined
 * if the path doesn't resolve, so missing prices fail loudly in dev
 * rather than silently showing a wrong number.
 */
export function getPrice(path, currency) {
  const root = currency === 'INR' ? pricing.inr : pricing.usd;
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), root);
}

/**
 * Formats an already-resolved numeric price for display. Does NOT
 * convert between currencies — `amount` must already be the correct
 * value for `currency`. Non-numeric labels (e.g. "Ask") pass through
 * unchanged.
 */
export function formatPrice(amount, currency) {
  const numeric = Number(amount);
  if (amount === null || amount === undefined || amount === '' || Number.isNaN(numeric)) {
    return amount;
  }

  if (currency === 'INR') {
    return `₹${numeric.toLocaleString('en-IN')}`;
  }

  return `$${numeric}`;
}

/**
 * Same as formatPrice, but returns { symbol, amount } separately for
 * markup that renders the currency symbol in its own (differently
 * styled) element rather than inline with the number.
 */
export function formatPriceParts(amount, currency) {
  const numeric = Number(amount);
  if (amount === null || amount === undefined || amount === '' || Number.isNaN(numeric)) {
    return { symbol: '', amount };
  }

  if (currency === 'INR') {
    return { symbol: '₹', amount: numeric.toLocaleString('en-IN') };
  }

  return { symbol: '$', amount: numeric };
}
