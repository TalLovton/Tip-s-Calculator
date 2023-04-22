
class Table{
    static tmpTipNum = 0;
    //CTOR
    constructor(billSum = 0,peopleAmount = 1,tipPrecent = 0){
        this.bill = billSum;
        this.tip = tipPrecent;
        this.peopleNum = peopleAmount;
    }
    
    // Setters

    set setTip(tipPrecent){
        this.tip = tipPrecent;
    }
    set setPeopleNum(peopleAmount){
        this.peopleNum = peopleAmount;
    }
    set setBillSum(billSum){
        this.bill = billSum;
    }

    //Getters
    get getTip(){
        return this.tip;
    }
    get getPeopleNum(){
        return this.peopleNum;
    }
    get getBillSum(){
        return this.bill;
    }
    
    // Functions
    
    mathCalc(table){
        let billAfterTip = (((table.tip) / 100) + 1) * (table.bill); 
        return Math.round(billAfterTip);
    }

}


const calcTip = () => {
    const billamount= parseInt(document.getElementById('billamount').value);
    
    const peopleAmount= parseInt(document.getElementById('peopleAmount').value);
    let flag = true;
    
    // creating the obj
    flag = isValid(billamount,peopleAmount);
    const table = new Table(billamount,peopleAmount,Table.tmpTipNum);
    
    const tipSplit = table.mathCalc(table);
    
    flag ? myAlert(tipSplit/table.peopleNum) :null;
    
}


const isValid = (billamount,peopleAmount,tip) => {
    const text = 'Error with the values...Please try again (:'; 
    const flag = false;
    if(billamount < 0 || billamount === '' || tip === 0 || isNaN(billamount)){
        myAlert(text);
        return flag;
    }
    else if(peopleAmount <= 0 || isNaN(peopleAmount)){
        myAlert(text);
        return flag;
    }

    return true;

}

const tipFunction = () => {
    
    const buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.classList.remove('active-button');
        button.addEventListener("click", () =>{
            Table.tmpTipNum = parseInt(button.id);
            button.classList.add('active-button')
        });
        
     }
     
  
}

const myAlert = (newText) => {
    const text = 'Total bill for each: '
    let costumeAlert = document.getElementById('customAlert');
    let receipt = document.getElementById('container');
    if(parseInt(newText) > 0){
        document.getElementById('alert-text').innerText = text + newText + '₪';
    }
    else{
        document.getElementById('alert-text').innerText = newText;
    }
    receipt.style.display = 'none';
    costumeAlert.style.display = 'inline-block';
}


const hideAlert = () => {
    let costumeAlert = document.getElementById('customAlert');
    let receipt = document.getElementById('container');
    receipt.style.display = 'grid';
    costumeAlert.style.display = 'none';
    location.reload();
}

















