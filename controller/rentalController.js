import { RentalView } from "../view/rentalView.js";
import { VehicleView } from "../view/vehicleView.js";
import { RentalModel } from "../model/rentalmodel.js";
import { CustomerModel } from "../model/customermodel.js";
// import { VehicleModel } from "../model/vehiclemodel.js";
import { vehicleSharedModel } from "../model/sharedModels.js";

class RentalController {
    constructor(){
        this.rentalView=  new RentalView()
        this.rentalModel = new RentalModel()
        this.customerModel = new CustomerModel()
        // this.vehicleModel = new VehicleModel()
        this.vehicleModel = vehicleSharedModel
        this.vehicleView = new VehicleView()
        this.bindAddRental()
        this.bindDeleteRental()
        this.rentalView.displayAllRentals(this.rentalModel.getallRentals())
        this.bindCustomerValues()
        this.bindVehicleValues()
        
    }



    bindCustomerValues(){
        this.rentalView.customerValues(this.customerModel.getallCustomers())
    }



    bindVehicleValues(){
        this.rentalView.vehicleValues(this.vehicleModel.getallVehicles())
    }



    bindAddRental(){
        const button = document.getElementById("rental_form")
        button.addEventListener("submit", (e)=>{
            e.preventDefault()
            const [targetCustomer, targetVehicle, startDate, endDate, totalCost] = this.rentalView.get_values()
            const newRental = {targetCustomer, targetVehicle, startDate, endDate, totalCost}
            this.rentalModel.addRental(newRental)

            // const allvehicles = this.vehicleModel.getallVehicles()
            // for (let i = 0; i < allvehicles.length; i++) {
            // if (allvehicles[i].vehicleId === targetVehicle) {
            //     this.rentalModel.statusVehicle(i)
            // }}

            this.vehicleModel.statusVehicleUpdate(targetVehicle)

            const allrentals = this.rentalModel.getallRentals()
            this.rentalView.displayAllRentals(allrentals)
            this.vehicleView.displayAllVehicles(this.vehicleModel.getallVehicles())
        })
    }


    bindDeleteRental() {
    const rentalTable = document.getElementById("rentalTable");
    rentalTable.addEventListener("click", (e) => {
        if (e.target.classList.contains("vehicle-delete-btn")) {
            const targetindex = e.target.dataset.index
            this.rentalModel.removeRental(targetindex)
            this.rentalView.displayAllRentals(this.rentalModel.getallRentals())
        }
    });
    }


    bindActivateVehicle() {
    // const rentalTable = document.getElementById("rentalTable");
    // rentalTable.addEventListener("click", (e) => {
    //     if (e.target.classList.contains("customer-status-btn")) {
    //         const targetindex = e.target.dataset.index
    //         this.rentalModel.activateVehicle(targetindex)
    //         this.rentalView.displayAllRentals(this.rentalModel.getallRentals())
    //     }
    //     });
    let CustomerArray = this.customerModel.allCustomers
    CustomerArray.addEventListener("changed", (e) => {
        console.log('update')
    })
    }


   
}

const app = new RentalController()
