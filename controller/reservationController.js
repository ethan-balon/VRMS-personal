import { ReservationView } from "../view/reservationview.js";
import { ReservationModel } from "../model/reservationmodel.js";
import { CustomerModel } from "../model/customermodel.js";
import { vehicleSharedModel } from "../model/sharedModels.js";
import { VehicleView } from "../view/vehicleView.js";

class ReservationController {
    constructor(){
        this.reservationView =  new ReservationView()
        this.reservationModel = new ReservationModel()
        this.customerModel = new CustomerModel()
        this.vehicleView = new VehicleView()
        this.vehicleModel = vehicleSharedModel
        this.bindAddReservation()
        this.bindDeleteRental()
        this.bindCustomerValues()
        this.bindVehicleValues()
        this.reservationView.displayAllReservations(this.reservationModel.getallReservations())
        
    }


    bindCustomerValues(){
        this.reservationView.customerValues(this.customerModel.getallCustomers())
    }


    
    bindVehicleValues(){
        this.reservationView.vehicleValues(this.vehicleModel.getallVehicles())
    }

    bindAddReservation(){
        const button = document.getElementById("reservation_form")
        button.addEventListener("submit", (e)=>{
            e.preventDefault()
            const [targetCustomer, targetVehicle, startDate] = this.reservationView.get_values()
            const newReservation = {targetCustomer, targetVehicle, startDate}
            this.reservationModel.addReservation(newReservation)

            this.vehicleModel.reserveVehicle(targetVehicle)

            const allrentals = this.reservationModel.getallReservations()
            this.reservationView.displayAllReservations(allrentals)
            this.vehicleView.displayAllVehicles(this.vehicleModel.getallVehicles())
        })
    }


    bindDeleteRental() {
    const rentalTable = document.getElementById("reservationTable");
    rentalTable.addEventListener("click", (e) => {
        if (e.target.classList.contains("vehicle-delete-btn")) {
            const targetindex = e.target.dataset.index
            this.reservationModel.removeReservation(targetindex)
            this.reservationView.displayAllReservations(this.reservationModel.getallReservations())
        }
    });
    }


    bindActivateVehicle() {
    const rentalTable = document.getElementById("reservationTable");
    rentalTable.addEventListener("click", (e) => {
        if (e.target.classList.contains("customer-status-btn")) {
            const targetindex = e.target.dataset.index
            this.reservationModel.activateVehicle(targetindex)
            this.reservationView.displayAllRentals(this.reservationModel.getallRentals())
        }
        });
    }
}

const app = new ReservationController()
