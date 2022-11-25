import randomNumFrom from "./methods.js";

const countries = {

  allCountries: [
    {code: "ITA", island: false, region: "europe"},
    {code: "CAN", island: false, region: "americas"},
    {code: "USA", island: false, region: "americas"}, 
    {code: "FRA", island: false, region: "europe"},
    {code: "ESP", island: false, region: "europe"},
    {code: "DEU", island: false, region: "europe"},
    {code: "BRA", island: false, region: "americas"},
    {code: "ARG", island: false, region: "americas"},
    {code: "SWE", island: false, region: "europe"},
    {code: "ISR", island: false, region: "asia"},
    {code: "GBR", island: true, region: "europe"},
    {code: "GRC", island: false, region: "europe"},
    {code: "IRL", island: true, region: "europe"},
    {code: "JPN", island: true, region: "asia"},
    // Ajusta tamanho bandeira suiça depois
    {code: "CHE", island: false, region: "europe"},
    {code: "RUS", island: false, region: "asia europe"},
    {code: "POL", island: false, region: "europe"},
    {code: "NLD", island: false, region: "europe"},
    {code: "BEL", island: false, region: "europe"},
    {code: "PRT", island: false, region: "europe"},
    {code: "DNK", island: false, region: "europe"},
    {code: "AUS", island: true, region: "oceania"},
    {code: "CHN", island: false, region: "asia"},
    {code: "IND", island: false, region: "asia"},
    {code: "KOR", island: false, region: "asia"},
    {code: "PRK", island: false, region: "asia"},
    {code: "COL", island: false, region: "americas"},
    {code: "MEX", island: false, region: "americas"},
    {code: "VEN", island: false, region: "americas"},
    {code: "EGY", island: false, region: "asia"},
    {code: "CHL", island: false, region: "americas"},
    {code: "ZAF", island: false, region: "africa"},
    {code: "NOR", island: false, region: "europe"},
    {code: "JAM", island: true, region: "americas"},
    {code: "CZE", island: false, region: "europe"},
    {code: "CUB", island: true, region: "americas"},
    {code: "FIN", island: false, region: "europe"},
    {code: "URY", island: false, region: "europe"},
    {code: "ISL", island: true, region: "europe"},
    {code: "ECU", island: false, region: "americas"},
    {code: "AUT", island: false, region: "europe"},
    {code: "SAU", island: false, region: "asia"},
    {code: "ROU", island: false, region: "europe"},
    {code: "TWN", island: true, region: "asia"},
    {code: "HRV", island: false, region: "europe"},
    {code: "PRY", island: false, region: "americas"},
    {code: "NZL", island: true, region: "oceania"},
    {code: "MOZ", island: false, region: "africa"},
    {code: "PRI", island: true, region: "americas"},
    {code: "GHA", island: false, region: "africa"},
    {code: "CRI", island: false, region: "americas"},
    {code: "PER", island: false, region: "americas"},
    {code: "AGO", island: false, region: "africa"},
    {code: "MAR", island: false, region: "africa"},
    {code: "TUR", island: false, region: "europe asia"},
    {code: "GRL", island: true, region: "americas"},
    {code: "TUN", island: false, region: "africa"},
    {code: "IRN", island: false, region: "asia"},
    {code: "SYR", island: false, region: "asia"},
    {code: "MYS", island: false, region: "asia"},
    {code: "IDN", island: false, region: "asia"},
    {code: "SGP", island: true, region: "asia"},
    {code: "LBN", island: false, region: "asia"},
    {code: "QAT", island: false, region: "asia"},
    {code: "DZA", island: false, region: "africa"},
    {code: "CIV", island: false, region: "asia"},
    {code: "CMR", island: false, region: "europe"},
    {code: "PSE", island: false, region: "asia"},
    {code: "PHL", island: true, region: "asia"},
    {code: "SEN", island: false, region: "africa"},
    {code: "EST", island: false, region: "europe"},
    {code: "HUN", island: false, region: "europe"},
    {code: "TZA", island: false, region: "africa"},
  ],


  getRandomCountry() {
    let country = this.allCountries[randomNumFrom(this.allCountries)];
    return country;
  },

};

export default countries;
