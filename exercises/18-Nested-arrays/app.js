let coordinatesArray = [[33.747252,-112.633853],[-33.867886, -63.987],[41.303921, -81.901693],[-33.350534, -71.653268]];

function longitude(arr) {
    for (const coordinate of arr) {
        let value = coordinate[1];
        console.log(value);        
    };    
};

console.log(longitude(coordinatesArray));