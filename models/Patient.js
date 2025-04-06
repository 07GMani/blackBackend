class Patient {
    constructor(name,triageLvl){
        this.id = Date.now().toString();
        this.name=name;
        this.triageLvl=triageLvl
        this.status='waiting'
        this.arrivalTime = new Date()
    }
}

module.exports=Patient