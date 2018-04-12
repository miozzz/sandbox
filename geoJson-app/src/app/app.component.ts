import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { chartobj } from '../modules/chart-obj';
import { GeoJson, GeoParser } from '../modules/geo-json';


@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GeoJson, GeoParser]
})

export class AppComponent implements OnInit {
  private AmCharts = window['AmCharts']
  private chart: any
  public startdate: string
  public enddate: string
  public logMessage: string

  constructor(private http: HttpClient, private geojson: GeoJson, private geoparser: GeoParser) {
    //arbitrary default dates
    this.startdate = "1991-06-01"
    this.enddate = "1991-06-30"
    this.logMessage = ""

  }
  ngOnInit() {
    this.chart = this.makeChart()
  }
  plotQuakes() {
    this.logMessage = "Fetching earthquake data."
    this.geojson.getData(this.startdate, this.enddate)
      .subscribe((data) => {
        this.logMessage = "Parsing earthquake paramaters."
        let newData = this.geoparser.toAmChart(data)
        this.chart.dataProvider.images = newData;
        this.logMessage = "Plotting earthquake data."
        this.chart.validateData();
        this.logMessage = ""
      })
  }

  makeChart() {
    return this.AmCharts.makeChart("phMap", chartobj);
  }


}
