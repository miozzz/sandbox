# Philippine Earthquake Mapping

PEM is an application that uses USGS to plot earthquakes in the Philippines. 

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Setting Up in a Server
Copy the contents of `dist/` folder and paste in the server's root directory.

## Release 
Open the `release/` directory to see some of the stable builds.

## What to Expect

### Monochromatic Map of the Philippines
![Preview without data](https://github.com/miozzz/sandbox/blob/master/geoJson-app/assets/ipadnodata.png)

### Red Dots for Earthquakes
* Size of dots changes with magnitude of earthquake.

![Preview with data](https://github.com/miozzz/sandbox/blob/master/geoJson-app/assets/ipaddata.png)

### Interactive
* Click on the dots to view details.
![Preview with details](https://github.com/miozzz/sandbox/blob/master/geoJson-app/assets/ipaddetails.png)

### Adaptive
* Layout changes with screen resolution.
* Sample layout on iPhone.
![Preview with details](https://github.com/miozzz/sandbox/blob/master/geoJson-app/assets/iphonedata.png)
