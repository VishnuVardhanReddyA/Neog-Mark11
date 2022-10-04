const Bday=document.getElementById('birthday')
const lucky=document.getElementById('luckyno')
const output=document.querySelector('.output')
const check=document.querySelector('#check')

function calculateSum(date){
    date=date.replaceAll('-','')
    date=Number(date)
    var s=0
    while(date!=0){
        s+=date%10
        date=Math.floor(date/10)
    }
    return s
}

check.addEventListener('click',()=>
{
    const dob=Bday.value
    const luckyNumber=lucky.value
    if(dob && luckyNumber){
        const sum=calculateSum(dob)
        console.log(sum,Number(luckyNumber))
        if(sum%Number(luckyNumber)==0){
            output.innerText=luckyNumber+' is a Lucky Number🤩🤩'
            document.body.style.backgroundColor='magenta'
        }
        else{
            output.innerText=luckyNumber+' is not a lucky number😌😓'
            document.body.style.backgroundColor='red'
        }
    }
    else{
        output.innerText='Please enter both the fields'
    }


})