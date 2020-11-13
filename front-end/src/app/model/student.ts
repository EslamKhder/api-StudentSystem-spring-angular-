export class Student {

  id: number;
  fullName: string;
  gender: String;
  age: string;
  address: string;
  phone: string;
  dataCreated: Date;
  dataUpdated: Date;


  constructor(id: number, fullName: string, gender: String, age: string, address: string, phone: string, dataCreated: Date, dataUpdated: Date) {
    this.id = id;
    this.fullName = fullName;
    this.gender = gender;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.dataCreated = dataCreated;
    this.dataUpdated = dataUpdated;
  }
}
