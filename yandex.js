
const userInfo = +localStorage.getItem('userCoords');

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [43.239206, 76.905212],
        zoom: 15
    });
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [userInfo] // координаты точки
        }
    });
    myMap.geoObjects.add(myGeoObject);
}