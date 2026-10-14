const StudentGrade=(name,marks)=>{
    console.log("Student marks");

    let grade="";
    if(marks>0 && marks<=30){
        grade="E"
    }
    else if(marks>30 && marks<=40){
        grade="D"
    }
    else if(marks>40 && marks<=50){
        grade="C"
    }

    else if(marks>50 && marks<=70){
        grade="B"
    }
    else if(marks>70 && marks<=100){
        grade="A"
    }
    else{
        console.log("invalid marks")
    }


    console.log(`${name} scored ${marks} and got grade ${grade}`);

}
StudentGrade("John",95)
StudentGrade("Alice",45)
StudentGrade("Peter",25)
StudentGrade("Joy",75)


