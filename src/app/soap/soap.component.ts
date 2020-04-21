import { Component, OnInit } from '@angular/core';
import { NgxSoapService, ISoapMethod, Client, ISoapMethodResponse } from 'ngx-soap';
@Component({
  selector: 'app-soap',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.css']
})
export class SoapComponent  {
  intA: number;
  intB: number;
  loading: boolean;
  showDiagnostic: boolean;
  message: string;
  xmlResponse: string;
  jsonResponse: any;
  resultLabel: string;
  client: Client;
  constructor(private soap: NgxSoapService) {
    this.soap.createClient('assets/calculator.wsdl')
      .then(client => {
        console.log('Client', client);
        this.client = client;
      })
      .catch(err => console.log('Error', err));
  }

  sum() {
    this.loading = true;
    const body = {
      intA: this.intA,
      intB: this.intB
    };

    this.client.call('Add', body).subscribe(res => {
      this.jsonResponse = res;
      this.xmlResponse = res.responseBody;
      this.message = res.result.AddResult;
      this.loading = false;
    }, err => console.log(err));

  }


  subtract() {
    this.loading = true;
    const body = {
      intA: this.intA,
      intB: this.intB
    };
    (<any>this.client).Subtract(body).subscribe(
      (res: ISoapMethodResponse) => {
        console.log('method response', res);
        this.jsonResponse = res;
        this.xmlResponse = res.xml;
        this.message = res.result.SubtractResult;
        this.loading = false;
      },
      err => console.log(err)
    );
  }
}