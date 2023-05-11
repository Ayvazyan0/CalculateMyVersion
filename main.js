let numbers = document.querySelectorAll('.number')
let arr = [[ ],[ ],[ ]]
let k = true

arr[0].innerHTML = ''
arr[1].innerHTML = ''
arr[2].innerHTML = ''
numbers.forEach(element => 
        element.addEventListener('click', (e) => {
            if(k == true){
                arr[0].innerHTML += e.target.innerHTML
                result.innerHTML = arr[0].innerHTML
                
            }
            if(k == false){
                arr[2].innerHTML = e.target.innerHTML 
                result.innerHTML += arr[2].innerHTML
            }
        }) 
    )


zero.addEventListener('click', (e) => {
    result.innerHTML += e.target.innerHTML
})

clearAll.addEventListener('click', (e) => {
    result.innerHTML = ''
    arr[0].innerHTML = ''
    arr[1].innerHTML = ''
    arr[2].innerHTML = ''
    
})

clear.addEventListener('click', (e) => {
    if(k == true){
        arr[0].innerHTML = arr[0].innerHTML.substring(0, arr[0].innerHTML.length-1)     
        result.innerHTML = arr[0].innerHTML
    }
    if(k == false){
        arr[2].innerHTML = arr[2].innerHTML.substring(0, arr[2].innerHTML.length-1)     
        result.innerHTML = arr[2].innerHTML
    }
})

dot.addEventListener('click', () =>{
    result.innerHTML += '.'
}) 

plus.addEventListener('click', ()=>{
    k = false
    arr[1].innerHTML = '+'
    
    result.innerHTML += arr[1].innerHTML
})

minus.addEventListener('click', ()=>{
    k = false
    arr[1].innerHTML = '-'
    
    result.innerHTML += arr[1].innerHTML
})

multiply.addEventListener('click', ()=>{
    k = false
    arr[1].innerHTML = '*'
    
    result.innerHTML += arr[1].innerHTML
})

division.addEventListener('click', ()=>{
    k = false
    arr[1].innerHTML = '/'
    
    result.innerHTML += arr[1].innerHTML
})

equality.addEventListener('click', ()=>{
    res(arr[0].innerHTML,arr[1].innerHTML,arr[2].innerHTML)
    
})

function res(a, b, c){
    if(b == '+'){

        x = parseInt(a) + parseInt(c)
        result.innerHTML += '=' + x
    }
    if(b == '-'){

        x = parseInt(a) - parseInt(c)
        result.innerHTML += '=' + x
    }
    if(b == '*'){

        x = parseInt(a) * parseInt(c)
        result.innerHTML += '=' + x
    }
    if(b == '/'){

        x = parseInt(a) / parseInt(c)
        result.innerHTML += '=' + x
    }
}


 
