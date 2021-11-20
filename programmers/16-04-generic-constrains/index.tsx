interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

function pay<E extends Employee>(employee: E): E {
  employee.pay();
  return employee;
}

const full = new FullTimeEmployee();
const part = new PartTimeEmployee();

const paidFull = pay(full);
const paidPart = pay(part);

paidFull.pay();
paidFull.workFullTime();
paidPart.pay();
paidPart.workPartTime();
