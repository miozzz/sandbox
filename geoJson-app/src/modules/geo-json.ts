import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class GeoJson {
    //Main class that connects with USGS API.
    constructor(private http: HttpClient) {}

    private generateUrl(start, end) {
        let coordinates = [13, 124]
        let radius = '900'
        let format = "geojson"
        let starttime = start
        let endtime = end 
        let baseUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?"
        let ret =
            `${baseUrl}format=${format}&starttime=${starttime}` +
            `&endtime=${endtime}&latitude=${coordinates[0]}` +
            `&longitude=${coordinates[1]}&maxradiuskm=${radius}`
        return ret
    }

    getData(start, end) {
        let url = this.generateUrl(start, end)
        return this.http.get(url)

    }


}

export class GeoParser {
    //Class for parsing GeoJson to other formats.
    //Should be in a dedicated worker.

    constructor() { }
 
    //Extracting basic properties of each feature that will fit amCharts format.
    private getItemFromFeature({geometry,properties}) {
        return {
            latitude: geometry.coordinates[1],
            longitude: geometry.coordinates[0],
            height: this.magnitudeToRadius(properties.mag),
            width: this.magnitudeToRadius(properties.mag),
            title:"",
            description:this.formatDescription(properties),
            type: "circle"
        }
    }

    //Arbitrary scaling of magnitude to emphasize magnitude difference in plot.
    private magnitudeToRadius(magnitude){
        return 5 * (magnitude-2)
    }

    //Basic description HTML for each point in the plot
    private formatDescription(properties){
        let date = new Date(properties.time)
        let dateStr = date.toString().split('(')[0]
        let description = `
        <div class="infoBox">
            <h3>${properties.title}</h3>
            <label><span>Magnitude: </span><span>${properties.mag}</span></label>
            <label><span>Date: </span><span>${dateStr}</span></label>
        </div>
        `
        return description;
    }

    toAmChart(data) {
        let stack = []
        data.features.forEach((feature)=>{
            stack.push(this.getItemFromFeature(feature))
        })
        return stack
    }

}