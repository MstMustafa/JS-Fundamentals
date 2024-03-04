function organizeCompanyEmployees(input) {
    const companyEmployees = {};

    input.forEach(item => {
        let [company, employeeId] = item.split(' -> ');
        if (!companyEmployees[company]) {
            companyEmployees[company] = [];
        }

        if (!companyEmployees[company].includes(employeeId)) {
            companyEmployees[company].push(employeeId);
        }
    });

    const sortedCompanies = Object.keys(companyEmployees).sort();
    sortedCompanies.forEach(company => {
        console.log(company);
        companyEmployees[company].forEach(id => {
            console.log(`-- ${id}`);
        });
    });
}
