// create an array with 5 students names after that create a fucnton whcich take 2 parameters (allStudents and studentName  itrate over all students all find that specific user studnetnName

const student =["aleince", "bob", "charlie", "david", "eva"]

const findStuendt=(allStuent, studentName)=>{

    for(let i= 0; i<allStuent.length; i++){
        if(allStuent[i]=== studentName ){
            console.log(`stuent '${studentName}' found. `);
            return;
            
        }
        console.log('');
        
    }

}
