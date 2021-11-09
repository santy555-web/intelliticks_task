import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public managementForm!: FormGroup;
  formData = [
    {
      name: 'Lodha ',
      description: '3BHK',
      size: '400',
    }
  ];
  onlineData= [];
  constructor(private service:AppService){}
  ngOnInit() {
    this.managementForm = new FormGroup({
      name: new FormControl(null, [Validators.required ]),
      description: new FormControl(null, [Validators.required]),
      size: new FormControl(null, [Validators.required]),
    });

    this.service.getData().subscribe((res)=>{
      this.onlineData.push(res)
    });
    console.log(this.onlineData)
  }
  OnSubmitManagementForm(){
    this.formData.push({
      name: this.managementForm.value.name,
      description: this.managementForm.value.description,
      size: this.managementForm.value.size,
    });
    this.service.submitData(this.managementForm.value);
    this.managementForm.reset();
  }
  OnDelete(key) {
    this.formData.splice(key, 1);
  }
}
