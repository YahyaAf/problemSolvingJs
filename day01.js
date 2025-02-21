    // Level: 1 
    const empty = [];
    const cities = ['safi','chemaia','qalaa magouna','watya','warzzazate','44'];
    const lengthOfCities = cities.length;
    const firstElement = cities[0];
    const lastElement = cities[lengthOfCities-1];
    const middleElement = cities[Math.round((cities.length - 1) / 2)];
    const mixedDataTypes = [55,'y',true,"yahya afadisse",{test : "voila"},66.88];
    const lengthMixedDataTypes = mixedDataTypes.length;
    const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
    const numberOfCompanies = itCompanies.length;
    const firstCompany = itCompanies[0];
    const lastCompany = itCompanies[numberOfCompanies-1];
    const middleCompany = itCompanies[Math.round((numberOfCompanies-1)/2 )];
    const printAllCompany = itCompanies.forEach(company => console.log(company));
    const printUpperCompany = itCompanies.forEach(company => console.log(company.toUpperCase()));
    
    