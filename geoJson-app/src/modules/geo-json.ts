import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class GeoJson {

    constructor(private http: HttpClient) {

    }
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

    constructor() { }

    // private worker = new Worker('../modules/parser-worker.ts')
    private minMag : any
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
    private magnitudeToRadius(magnitude){
        return 20 * (magnitude-this.minMag)
    }
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
        console.log(JSON.stringify(data.features[0]))
        let stack = []
        this.minMag = 5
        data.features.forEach((feature)=>{
            let mag = parseInt(feature.properties.mag)
            if(mag < this.minMag) this.minMag = mag
            stack.push(this.getItemFromFeature(feature))
        })
        console.log('minMag',this.minMag)
        return stack
    }

}