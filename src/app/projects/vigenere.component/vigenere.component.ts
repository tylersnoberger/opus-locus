import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'vigenere',
  templateUrl: './vigenere.component.html',
  styleUrls: ['./vigenere.component.css']
})
export class VigenereComponent implements OnInit {
  public formData: FormGroup;
  public plainText: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formData = this.fb.group({
      cipherText: ['', Validators.required],
      key: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      plainText: [{value: 'Plain Text will be output here.', disabled: true}],
    });
  }

  breakCipher() {
    let keyToUpper = this.formData.value.key.toUpperCase() + '';
    let cipherToUpper = this.formData.value.cipherText.toUpperCase() + '';
    cipherToUpper = cipherToUpper.replace(/(\r\n|\n|\r)/gm, "");
    let keyArray = [this.formData.value.key.charCodeAt(0), this.formData.value.key.charCodeAt(1), this.formData.value.key.charCodeAt(2)];
    let baseChar = "A";
    let base = baseChar.charCodeAt(0);
    let charIndex = 0;
    for (let key in keyArray) {
      keyArray[key] = base - keyArray[key];
    }

    let pt = "";
    for (let i = 0; i < cipherToUpper.length; i++){
      console.log(cipherToUpper.charCodeAt(i));
      if(cipherToUpper.charCodeAt(i) === 32){
        pt += ' '
        continue;
      }
      let temp = 0;
      if(charIndex % 3 == 0){
        temp = (cipherToUpper.charCodeAt(i) - 65);
        console.log(temp)
        // System.out.println((int)ct.charAt(i));
        temp = ((temp + keyArray[0]) % 26);
        if(temp < 0){
           temp = temp + 26;
        }

        pt += String.fromCharCode(temp + 65);
      }
      if(charIndex % 3 == 1){
        temp = cipherToUpper.charCodeAt(i) - 65;
        temp = ((temp+ keyArray[1]) % 26);
        if(temp <0){
           temp = temp + 26;
        }
        pt += String.fromCharCode(temp + 65);
      }
      if(charIndex % 3 == 2){
        temp = cipherToUpper.charCodeAt(i) - 65;
        temp = ((temp+ keyArray[2]) % 26);
        if(temp <0){
           temp = temp + 26;
        }
        pt += String.fromCharCode(temp + 65);
      }
      charIndex++;
    }
    console.log(pt)
    this.formData.controls.plainText.setValue(pt);
  }
}
