function HouseKeeper(
  name,
  age,
  yearsOfExperience,
  contact,
  address,
  cleaningReportoire,
) {
  this.name = name;
  this.age = age;
  this.yearsOfExperience = yearsOfExperience;
  this.contact = contact;
  this.address = address;
  this.cleaningReportoire = cleaningReportoire;
}

let houseKeeper1 = new HouseKeeper("Grace", 21, true, ["Igbo", "French"]);
