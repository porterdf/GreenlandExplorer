 require([
  "esri/Map",
  "esri/views/SceneView", 
  "esri/Graphic"
  ], function(Map, SceneView, Graphic) {

    var map = new Map({
      basemap: "satellite",
        ground: "world-elevation"  // show elevation
      });

    var view = new SceneView({
      container: "viewDiv",
      map: map,
      constraints: {
       rotationEnabled: false
      },
      camera: {
        position: {  // observation point
          x: -60,
          y: 31,
          z: 2500000 // altitude in meters
        },
        tilt: 0  // perspective in degrees
      }
    });


    // Set the sun position to fully illuminate antarctica
    view.environment.lighting.date = new Date("June 21, 2019, 12:00");


    var greenland = {
      type: "point",
      longitude: -45,
      latitude: 70
    };

    var greenlandText = {
      type: "point",
      longitude: -50,
      latitude: 65
    };

    var simpleMarkerSymbol = {
      type: "simple-marker",
      color: [77, 77, 168], 
      outline: {
          color: [255, 255, 255], // white
          width: 1
        }
      };

      var pictureMarker = {
        type: "picture-marker",
        url: "img/location-marker.png",
        width: 50,
      };

      var textSymbol= {
        type: "text", 
        text: "Greenland",  
        font: { size: 25, weight: "bold", family: "arial" },
        verticalAlignment: "bottom",
        color: [77, 77, 168, 1],
      };

      var textGraphic = new Graphic({
        geometry: greenlandText,
        symbol: textSymbol
      });
      var pointGraphic = new Graphic({
        geometry: greenland,
        symbol: pictureMarker
      });

      view.graphics.add(pointGraphic);
      view.graphics.add(textGraphic);

      view.goTo({
        center: [-45,70],
        zoom:4,
        heading:0
      }, {
        animate: true,
        speedFactor:0.2
      });



    });


 function startGreenlandExplorer() {
  $("#viewDiv").fadeOut(1000);
  $("#start_btn").hide();
  $(".map-div").css('opacity',1);
  // $("#menu").hide();
}