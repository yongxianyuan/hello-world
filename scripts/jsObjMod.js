function Employee () {
    this.name = "";
    this.dept = "general";
}

function Manager () {
    this.reports = [];
}
Manager.prototype = new Employee;

function WorkBee () {
    this.projects = [];
}
WorkBee.prototype = new Employee;

function SalesPerson () {
    this.dept = "sales";
    this.quota = 100;
}
SalesPerson.prototype = new WorkBee;

function Engineer () {
    this.dept = "engineering";
    this.machine = "";
}
Engineer.prototype = new WorkBee;