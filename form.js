class Form{
    constructor(){
        this.title = createElement("h1");
        this.name = createInput("Enter Your Name");
        this.email = createInput("Enter Your Email ID");
        this.proceed = createButton("PROCEED-->");
        this.endingMsg = createElement("h2");
        this.ans1 = createElement("h3")
        this.ans2 = createElement("h3");
        this.ans3 = createElement("h3");
        this.thank = createElement("h2");
    }
    
    
    display(){
        this.title.html("A SURVEY ABOUT TO BRING CHANGE!");
        this.title.position(320,100);
        this.name.position(550,220);
        this.email.position(550,270);
        this.proceed.position(600,320);
        this.proceed.mousePressed(()=>{
           

            this.q1 = createElement("h3");
            this.q1yes = createButton("YES");
            this.q1no = createButton("NO");

            form.next1();
            candidateName = this.name.value;
            candidateEmail = this.email.value;
            this.name.hide();
            this.proceed.hide();
            this.email.hide();
        })
        
    }
    next1(){
        this.q1.html("1) Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.q1.position(220,300);
        this.q1yes.position(450,370);
        this.q1no.position(650,370);
        this.q1yes.mousePressed(()=>{

            this.q2 = createElement("h3");
            this.q2yes = createButton("YES");
            this.q2no = createButton("NO");

            form.next2();
            q1ans = "1) YES";
            this.q1.hide();
            this.q1yes.hide();
            this.q1no.hide();
        })
        this.q1no.mousePressed(()=>{

            this.q2 = createElement("h3");
            this.q2yes = createButton("YES");
            this.q2no = createButton("NO");

            form.next2();
            q1ans = "1) NO";
            this.q1.hide();
            this.q1yes.hide();
            this.q1no.hide();
        })

        
    }
    next2(){
        this.q2.html("2) Would you be willing to contribute a small amount every month for such a program?");
        this.q2.position(220,400);
        this.q2yes.position(450,470);
        this.q2no.position(650,470);
        this.q2no.mousePressed(()=>{

            this.q3 = createElement("h3");
            this.q3100 = createButton("100");
            this.q3500 = createButton("500");
            this.q31000 = createButton("1000");
           
            this.q3none = createButton("NONE");
            this.submit = createButton("SUBMIT");

            form.next3();
            q2ans = "2) NO";
            this.q2.hide();
            this.q2yes.hide();
            this.q2no.hide();
        })
        this.q2yes.mousePressed(()=>{

            this.q3 = createElement("h3");
            this.q3100 = createButton("100");
            this.q3500 = createButton("500");
            this.q31000 = createButton("1000");
            
            this.q3none = createButton("NONE");
            this.submit = createButton("SUBMIT");

            form.next3();
            q2ans = "2) YES";
            this.q2.hide();
            this.q2yes.hide();
            this.q2no.hide();
        })

        
    }
    next3(){
        this.q3.html("3) How much per month would you be willing to pay?");
        this.q3.position(220,500);
        this.q3100.position(350,570);
        this.q3500.position(450,570);
        this.q31000.position(550,570);
        
        this.q3none.position(250,570);
        this.submit.position(670,700);
        this.q3100.mousePressed(()=>{
            
            q3ans = "3) 100";
        })
        this.q3500.mousePressed(()=>{
            
            q3ans = "3) 500";
        })
        this.q31000.mousePressed(()=>{
            
            q3ans = "3) 1000";
        })
        
        this.q3none.mousePressed(()=>{
            
            q3ans = "3) None";
        })
        this.submit.mousePressed(()=>{
            form.hide3();
            if(this.q3moreans){
                this.q3moreans.hide();
            }
            
            this.endingMsg.html("Your answers are as follows:");
            this.endingMsg.position(300,300);
            this.ans1.html(q1ans);
            this.ans1.position(300,400);
            this.ans2.html(q2ans);
            this.ans2.position(300,450);
            this.ans3.html(q3ans);
            this.ans3.position(300,500);
            this.thank.html("Thank you for your time!");
            this.thank.position(300,600);
        })
        
        
    }
    hide3(){
        this.q3.hide();
        this.q3100.hide();
        this.q3500.hide();
        this.q31000.hide();
       
        this.q3none.hide();
        
        this.submit.hide();
    }
    
}