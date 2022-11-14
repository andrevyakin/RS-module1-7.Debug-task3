const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
//let totalJuniorDevelopersSalary;
//Ошибка
//Правильно
let totalJuniorDevelopersSalary = 0;

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
    totalJuniorDevelopersSalary += salaryWithTax;
    console.log(totalJuniorDevelopersSalary)
    //Овибка в том, что переменная totalJuniorDevelopersSalary изначально не была инициализирована
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);