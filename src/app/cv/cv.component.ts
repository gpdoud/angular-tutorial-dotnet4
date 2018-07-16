import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  name: string = "Greg Doud";
  address: string = "4900 Parkway Dr., Mason, OH 45040";
  email: string = "gdoud@maxtrain.com";
  phone: string = "513-555-1212";

  skills = [ "C#", "SQL Server", "EntityFramework", "MVC", "WebAPI"];

  experiences = [
    { 
      company: "MAX Technical Training",
      position: ".NET Boot Camp Instructor",
      start: "May 2017", end: "",
      description: [
        "Taught multiple .Net boot camps",
        "Completed four boot camps",
        "Had a great time doing it"

    },
    { 
      company: "The Iron Yard",
      position: ".NET Boot Camp Instructor",
      start: "July 2016", end: "Apr 2017",
      description: [
        "Taught multiple .Net boot camps"
        ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
