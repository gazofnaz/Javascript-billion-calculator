const one_billion = 1000000000;
const two_billion = 2 * one_billion;
const ten_billion = 10 * one_billion;
const sxt_billion = 60 * one_billion;
const hun_billion = 100 * one_billion;
const annual_interest_rate = 5;

let years = 0;
let fail = false;

// Set daily spend
let daily_spend = 5000000;

// Set total in bank
let total = sxt_billion;

console.log('If you had: £' + total.toLocaleString() + ' in the bank');
console.log('And you spent: £' + daily_spend.toLocaleString() + ' per day, earning no other income');

do {
    let annual_spend = daily_spend * 365;
    
    // subtract annual spend
    total -= annual_spend;

    // calculate annual interest
    let interest = (total * (annual_interest_rate/100));

    // assume 40% tax pain on interest
    let taxed_interest =  interest * (40/100);
    
    // check we spend more than we earn
    if(taxed_interest >= annual_spend){
	fail = true;
	break;
    }

    total += taxed_interest;
    // the interesting part
    years++;
}
while(total > 0);

if(fail === true){
    console.log('You will never spend all that money.');
}
else{
    console.log('It would take ' + years + ' years before you ran out of money');
}
