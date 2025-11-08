import { SearchView } from "../view/searchview.js";


export class VehicleModel {
    constructor(){
        const saved = localStorage.getItem("vehicledatabase")
        this.allVehicles = saved ? JSON.parse(saved) : []
        this.searchView = new SearchView()
    }
    addVehicle(newVehicle) {
        
        this.allVehicles.push(newVehicle)
        this.saveVehicles()
        console.log(this.allVehicles)


      
    }
    getallVehicles() {
        return this.allVehicles
    }
    saveVehicles(){
        localStorage.setItem("vehicledatabase", JSON.stringify(this.allVehicles))
    }
    removeallVehicles() {
        this.allVehicles = []
        this.saveVehicles()
    }
    removeVehicle(targetindex) {
        this.allVehicles.splice(targetindex, 1)
        this.saveVehicles()
    }

    statusVehicleUpdate(targetID){
        for (let i=0; i<this.allVehicles.length; i++){
            if (this.allVehicles[i].vehicleId === targetID){
                this.allVehicles[i].status = "unavailable"
            }

        }
        this.saveVehicles()

        console.log(this.allVehicles)
        
    }
    reserveVehicle(targetID){
        console.log('test')
        for (let i=0; i<this.allVehicles.length; i++){
            if (this.allVehicles[i].vehicleId === targetID){
                console.log('vehicle found')
                this.allVehicles[i].status = "reserved"
            }

        }
        this.saveVehicles()

        console.log(this.allVehicles)
        
    }

    searchVehicle(searchTerm) {
        const matchedVehicles = [] //results go here
        
        //search using make first
        for (let i=0; i<this.allVehicles.length; i++){
            if (this.allVehicles[i].make.toLowerCase() === searchTerm.toLowerCase()){
                matchedVehicles.push(this.allVehicles[i])
            }
        }
        //search using model
        for (let i=0; i<this.allVehicles.length; i++){
            if (this.allVehicles[i].model.toLowerCase() === searchTerm.toLowerCase()){
                matchedVehicles.push(this.allVehicles[i])
            }
        }
        //search using type
        for (let i=0; i<this.allVehicles.length; i++){
            if (this.allVehicles[i].type.toLowerCase() === searchTerm.toLowerCase()){
                matchedVehicles.push(this.allVehicles[i])
            }
        }


        this.searchView.displayResult(matchedVehicles)
    }
}
