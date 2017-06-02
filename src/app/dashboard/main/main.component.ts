import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChartsModule } from "ng2-charts";
import { CalendarComponent } from "ap-angular2-fullcalendar";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  public yearToDateIncome: number = Math.round(Math.random() * 5000000);
  public monthlyAverage: number = Math.round(Math.random() * 200000);

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Store A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Store B' },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Store C' },
  ];

  public toggleView(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }


  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56], label: 'Store A' },
    { data: [28, 48, 40, 19, 86], label: 'Store B' },
    { data: [18, 48, 77, 9, 100], label: 'Store C' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 20000) + 1);
      }
    }
    this.lineChartData = _lineChartData;

    this.randomizeBar();
    this.yearToDateIncome = Math.round(Math.random() * 5000000);
    this.monthlyAverage = Math.round(Math.random() * 200000);
  }

  public _data = [];

  public randomizeBar(): void {
    // Only Change 3 values
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = this.randomizeData();
    clone[1].data = this.randomizeData();
    clone[2].data = this.randomizeData();
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  randomizeData() {
    this._data = [
      Math.round(Math.random() * 5000000),
      Math.round(Math.random() * 5000000),
      Math.round(Math.random() * 5000000),
      Math.round(Math.random() * 5000000),
      Math.round(Math.random() * 5000000),
      Math.round(Math.random() * 5000000),
      Math.round(Math.random() * 5000000)];

    return this._data;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public calendarOptions: Object;

  constructor() {


  }

  ngOnInit() {

    this.calendarOptions = {
      height: 'parent',
      fixedWeekCount: false,
      defaultDate: '2016-09-12',
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-09-01'
        },
        {
          title: 'Php 12,021.01',
          start: '2016-09-01',
          color: '#00af60'
        },
        {
          title: 'Long Event',
          start: '2016-09-07',
          end: '2016-09-10'
        },
        {
          title: 'Php 18,369.25',
          start: '2016-09-07',
          color: '#00af60'
        },
        {
          title: 'Php 7,389.65',
          start: '2016-09-08',
          color: '#00af60'
        },
        {
          title: 'Php 17,289.15',
          start: '2016-09-09',
          color: '#00af60'
        },
        {
          title: '30% Off sale',
          start: '2016-09-16'
        },
        {
          title: 'Php 9,048.07',
          start: '2016-09-16',
          color: '#00af60'
        },

        {
          title: 'Day Sale 50% Off',
          start: '2016-09-11',
          end: '2016-09-13'
        },
        {
          title: 'Php 272,849.00',
          start: '2016-09-11',
          end: '2016-09-13',
          color: '#00af60'
        }


      ]
    };
  }

  ngAfterViewInit() {

  }

  //fullcalendar


  changeCalendarView(view) {
    this.myCalendar.fullCalendar('changeView', view);
  }



}
