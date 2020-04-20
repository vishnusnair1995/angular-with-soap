import { Component, OnInit } from '@angular/core';
import { SoapService } from '../soap.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {
  name = 'SOAP Prototype';
  jsonData: any;
  private xmlData: any;
   dataEmp :any
 empData:any;
 empData2: any;
  DataSet: any;
 dataFromService: any;
 empDatafirstName:any;
 empDatasecondName: any;
  constructor(private soapService: SoapService) { }

  ngOnInit() {
    this.fetchDataByXmlTOJsonConversionInClientSide();
    this.fetchDataByXmlTOJsonConversionInServerSide();

  }
  fetchDataByXmlTOJsonConversionInClientSide()
  {
    this.soapService.getSoapData().subscribe((data) => {
      console.warn('SOAP data received:', data);
      this.DataSet = data;
      this.empData =this.DataSet.employees.employee
      console.log("json data is"+ JSON.stringify( this.xmlData));
    },
    (err) => {
      console.warn('Erroneous! Err:', err);
    });

  }
  fetchDataByXmlTOJsonConversionInServerSide()
  {
    this.soapService.getJsonData().subscribe((data)=>{
      this.dataFromService = data;
     this. empDatafirstName = this.dataFromService.root.firstName;
     this. empDatasecondName =  this.dataFromService.root.lastName;

     } );
  }
  passData(empData2:any)
  {
this.dataEmp = empData2;
  }
}