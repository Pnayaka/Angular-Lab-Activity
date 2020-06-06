interface DateFormatter{
    printDate():void;
}

class CurrentDateFormatter implements DateFormatter{
    currentDate:Date;
    constructor(){
        	this.currentDate = new Date();
        }
    
    printDate():void {
        console.log("DATE:"+this.currentDate);
    }
}

const currentdate = new CurrentDateFormatter();
currentdate.printDate();
