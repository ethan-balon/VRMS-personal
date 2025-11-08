export class ReservationModel {
    constructor(){
        const saved = localStorage.getItem("reservationdatabase")
        this.allReservations =  []
    }
    addReservation(newVehicle) {
        
        this.allReservations.push(newVehicle)
        this.saveReservations()

      
    }
    getallReservations() {
        return this.allReservations
    }
    saveReservations(){
        localStorage.setItem("reservationdatabase", JSON.stringify(this.allrentals))
    }
    removeallrentals() {
        this.allReservations = []
        this.saveReservations()
    }
    removeReservation(targetindex) {
        this.allReservations.splice(targetindex, 1)
        this.saveReservations()
    }
    reserveVehicle(targetindex) {
        const targetVehicle = this.allReservations[targetindex]
        if (targetVehicle.status === "unavailable") {
            targetVehicle.status = "available"
        }else {
            targetVehicle.status = "unavailable"
        }
        this.saveCustomers()
    }
}
