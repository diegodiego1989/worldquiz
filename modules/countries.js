import randomNumFrom from "./methods.js";

let latestCurrentCountry;

const countries = {

  easyLevel: [
    {code: "ITA", island: false},
    {code: "CAN", island: false},
    {code: "USA", island: false}, 
    {code: "MEX", island: false},
    {code: "FRA", island: false},
    {code: "ESP", island: false},
    {code: "DEU", island: false},
    {code: "BRA", island: false},
    {code: "ARG", island: false},
    {code: "SWE", island: false},
    {code: "ISR", island: false},
    {code: "GBR", island: true},
    {code: "MEX", island: false},
    {code: "IRL", island: true},
    {code: "JPN", island: true},
    {code: "CHE", island: false},
    {code: "RUS", island: false},
    {code: "POL", island: false},
    {code: "NLD", island: false},
    {code: "BEL", island: false},
    {code: "PRT", island: false},
    {code: "DNK", island: false},
    {code: "AUS", island: false},
    {code: "CHN", island: false},
    {code: "IND", island: false},
    {code: "KOR", island: false},
  ],
  
  mediumLevel: [
    {code: "PRK", island: false},
    {code: "COL", island: false},
    {code: "VEN", island: false},
    {code: "CHL", island: false},
    {code: "ZAF", island: false},
    {code: "NOR", island: false},
    {code: "GRC", island: false},
    {code: "JAM", island: true},
    {code: "CZE", island: false},
    {code: "CUB", island: true},
    {code: "FIN", island: false},
    {code: "URY", island: false},
    {code: "ISL", island: true},
    {code: "ECU", island: false},
    {code: "AUT", island: false},
    {code: "SAU", island: false},
    {code: "ROU", island: false},
    {code: "TWN", island: true},
    {code: "HRV", island: false},
    {code: "PRY", island: false},
    {code: "NZL", island: true},
    {code: "MOZ", island: false},
    {code: "PRI", island: true},
    {code: "EGY", island: false},
  ],
  
  hardLevel: [
    {code: "GHA", island: false},
    {code: "CRI", island: false},
    {code: "PER", island: false},
    {code: "AGO", island: false},
    {code: "MAR", island: false},
    {code: "TUR", island: false},
    {code: "GRL", island: true},
    {code: "TUN", island: false},
    {code: "IRN", island: false},
    {code: "SYR", island: false},
    {code: "MYS", island: false},
    {code: "IDN", island: false},
    {code: "SGP", island: true},
    {code: "LBN", island: false},
    {code: "QAT", island: false},
    {code: "DZA", island: false},
    {code: "CIV", island: false},
    {code: "CMR", island: false},
    {code: "PSE", island: false},
    {code: "PHL", island: true},
    {code: "SEN", island: false},
    {code: "HUN", island: false},
    {code: "TZA", island: false},
  ],


  get levels() {
    const allLevels = [
      this.easyLevel,
      this.mediumLevel,
      this.hardLevel,
    ];

    return allLevels;
  },

  
  get allCountries() {
    return this.levels.flat();
  },

  randomLevel() {
    const level = randomNumFrom(this.levels);
    return level;
  },

  
  pickDifficulty(level = this.randomLevel()) {
    const difficultyArr = this.levels[level];
    return difficultyArr;
  },
  

  getRandomCountry(level) {
    // P/ DEBUG ESCOLHER DIFICULDADE 
    // 0 - Países dificuldade fácil
    // 1 - Países dificuldade média
    // 2 - Países dificuldade díficil

    // const difficultyLeveL = 1;

    const difficultyLevel = this.pickDifficulty(level);
    let country = difficultyLevel[randomNumFrom(difficultyLevel)];

    return country;
  },

};

export default countries;