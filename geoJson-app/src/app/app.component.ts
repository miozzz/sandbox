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
  public startdate : string
  public enddate : string

  constructor(private http: HttpClient, private geojson: GeoJson, private geoparser: GeoParser) {
    this.startdate = "2014-01-01" 
    this.enddate = "2014-02-01"
    
  }

  ngOnInit() {
    this.chart = this.makeChart()
  }
  plotQuakes() {
 
    this.geojson.getData(this.startdate, this.enddate).subscribe((data) => {
      let newData = this.geoparser.toAmChart(data)
      this.chart.dataProvider.images = newData;
      this.chart.validateData();
    })
  }

  openTab(){
    console.log('a')
  }


  makeChart() {
    return this.AmCharts.makeChart("phMap", chartobj);
  }


}
