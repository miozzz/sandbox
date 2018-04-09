export const chartobj = {
  type: "map",
  pathToImages: "http://www.amcharts.com/lib/3/images/",
  addClassNames: true,
  fontSize: 15,
  color: "#000000",
  projection: "mercator",
  backgroundAlpha: 1,
  backgroundColor: "rgba(92,124,153,0)",
  dataProvider: {
    map: "philippinesLow",
    getAreasFromMap: true,
    images: []
  },
  balloon: {
    enabled: false
  },
  areasSettings: {
    color: "rgba(70,70,70,1)",
    outlineColor: "rgb(70,70,70)",
    rollOverOutlineColor: "rgb(70,70,70)",
    outlineThickness: 0.1
  },
  imagesSettings: {
    color: "#e42a2abb",
    selectedColor: "#e42a2a",
    fixedSize: false,
    rollOverBrightness: 20,
    selectedOutlineColor: "#181818",
    bringForwardOnHover: true,
    descriptionWindowBottom: 15,
    descriptionWindowLeft: 10
  },
  zoomControl: {
    zoomControlEnabled: true,
    homeButtonEnabled: true,
    panControlEnabled: false,
    right: 15,
    bottom: 15,
    minZoomLevel: 0.25,
    maxZoomLevel: 32,
    gridHeight: 100,
    gridAlpha: 0.1,
    gridBackgroundAlpha: 0,
    gridColor: "#FFFFFF",
    draggerAlpha: 1,
    buttonCornerRadius: 2,
    buttonSize: 20,
    zoomFactor: 1.5
  }

}
