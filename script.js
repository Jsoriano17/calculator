
//numbers and operators

const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const dot = document.getElementById('dot')
const plus = document.getElementById('plus')
const sub = document.getElementById('sub')
const mult = document.getElementById('mult')
const divide = document.getElementById('divide')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')
const answer = document.getElementById('answer')
const display = document.getElementById('display')
const addReducer = (accumulator, currentValue) => accumulator + currentValue;
let number = []
let total = []



//operator functions

function addNums(x){
  let signP = x.indexOf("+")
  let firstNum = x.slice(0, signP).join('')
  let secondNum = x.slice(signP + 1).join('')
  let test = parseInt(firstNum, 10);
  let test2 = parseInt(secondNum, 10);
  let numArr = test + test2;
  return numArr;
}

function subNums(x){
    let signP = x.indexOf("-")
    let firstNum = x.slice(0, signP).join('')
    let secondNum = x.slice(signP + 1).join('')
    let test = parseInt(firstNum, 10);
    let test2 = parseInt(secondNum, 10);
    let numArr = test - test2;
    return numArr;
  }

  function multNums(x){
    let signP = x.indexOf("*")
    let firstNum = x.slice(0, signP).join('')
    let secondNum = x.slice(signP + 1).join('')
    let test = parseInt(firstNum, 10);
    let test2 = parseInt(secondNum, 10);
    let numArr = test * test2;
    return numArr;
  }

  function divideNums(x){
    let signP = x.indexOf("/")
    let firstNum = x.slice(0, signP).join('')
    let secondNum = x.slice(signP + 1).join('')
    let test = parseInt(firstNum, 10);
    let test2 = parseInt(secondNum, 10);
    let numArr = test / test2;
    return numArr;
  }

//number clicks adds to var number
zero.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push(0)
        console.log(0)
    } else {
        total.push(0)
        console.log(0)
    }
 })

one.addEventListener('click', function (){
   if (total.length === 0)  {
    number.push(1)
    console.log(1)
} else {
    total.push(1)
    console.log(1)
}

})

two.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push(2)
        console.log(2)
    } else {
        total.push(2)
        console.log(2)
    }
    
})

three.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push(3)
        console.log(3)
    } else {
        total.push(3)
        console.log(3)
    }
    
})

four.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push(4)
        console.log(4)
    } else {
        total.push(4)
        console.log(4)
    }
    
})

five.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push(5)
        console.log(5)
    } else {
        total.push(5)
        console.log(5)
    }
    
})

six.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push(6)
        console.log(6)
    } else {
        total.push(6)
        console.log(6)
    }
    
})

seven.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push(7)
        console.log(7)
    } else {
        total.push(7)
        console.log(7)
    }
    
})

eight.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push(8)
        console.log(8)
    } else {
        total.push(8)
        console.log(8)
    }
    
})

nine.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push(9)
        console.log(9)
    } else {
        total.push(9)
        console.log(9)
    }
    
})

dot.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push('.')
        console.log('.')
    } else {
        total.push('.')
        console.log('.')
    }
    
 })


//signs clicks also add to var number

plus.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push('+')
        console.log('+')
    } else {
        total.push('+')
        console.log('+')
    }
   
})

sub.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push('-')
        console.log('-')
    } else {
        total.push('-')
        console.log('-')
    }
   
 })

 mult.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push('*')
        console.log('*')
    } else {
        total.push('*')
        console.log('*')
    }
   
 })

 divide.addEventListener('click', function (){
    if (total.length === 0)  {
        number.push('/')
        console.log('/')
    } else {
        total.push('/')
        console.log('/')
    }
   
 })


clear.addEventListener('click', function (){
    number = []
    total = []
    answer.innerHTML = '0'
    console.log("clear")
 })

equal.addEventListener('click', function (){
    console.log('=')
    if (total.length === 0)  {
        checkOpp()
    } else { 
        if(total.includes("+")) {
            newTotal = addNums(total)
            answer.innerHTML = newTotal
          } else if (total.includes("-")) {
            newTotal = subNums(total)
          answer.innerHTML = newTotal
        } else if (total.includes("*")) {
            newTotal = multNums(total)
            answer.innerHTML = newTotal
        } else if (total.includes("/")) {
            newTotal = divideNums(total)
            answer.innerHTML = newTotal
        }
    }
})


function checkOpp() {
    if(number.includes("+")) {
        total.push(addNums(number))
        answer.innerHTML = total
      } else if (number.includes("-")) {
          total.push(subNums(number))
        answer.innerHTML = total
      } else if (number.includes("*")) {
          total.push(multNums(number))
        answer.innerHTML = total
      } else if (number.includes("/")) {
          total.push(divideNums(number))
        answer.innerHTML = total
      }
}
