export class RentalModel {
    constructor(){
        const saved = localStorage.getItem("rentaldatabase")
        this.allrentals = saved ? JSON.parse(saved) : []
    }
    addRental(newRental) {
        
        this.allrentals.push(newRental)
        this.saveRentals()

      
    }
    getallRentals() {
        return this.allrentals
    }
    saveRentals(){
        localStorage.setItem("rentaldatabase", JSON.stringify(this.allrentals))
    }
    removeallrentals() {
        this.allrentals = []
        this.saveRentals()
    }
    removeRental(targetindex) {
        this.allrentals.splice(targetindex, 1)
        this.saveRentals()
    }
    statusVehicle(targetvehicle) {
        // const targetVehicle = this.allrentals[targetindex]
        // if (targetVehicle.status === "unavailable") {
        //     targetVehicle.status = "available"
        // }else {
        //     targetVehicle.status = "unavailable"
        // }
        // console.log(this.allrentals)
        // this.saveVehicles()
        

        console.log(targetvehicle)

    }
}
