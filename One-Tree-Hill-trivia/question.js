class question{

    constructor(ques, option1, option2, option3, option4, correct){
        this.ques = ques;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
    }

    display(){
        console.log(this.ques);
        console.log(this.option1);
        console.log(this.option2);
        console.log(this.option3);
        console.log(this.option4);
    }
}

