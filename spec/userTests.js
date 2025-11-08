import { CustomerModel } from "../model/customermodel.js";

describe("User Registration", function() {
  let customermodel;

  beforeEach(function() {
    localStorage.clear();
    customermodel = new CustomerModel();
  });

  it("should add a new customer to the system", function() {
    const newCustomer = {
      fullName: "Ethan",
      email: "ethan@gmail.com",
      phoneNumber: "232323",
      date: "1/1/2025"
    };

    customermodel.addCustomer(newCustomer);

    expect(customermodel.getallCustomers().length).toBe(1);
    expect(customermodel.getallCustomers()[0].fullName).toBe("Ethan");
  });
});
