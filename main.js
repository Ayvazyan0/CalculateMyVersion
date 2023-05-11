let numbers = document.querySelectorAll('.number')

numbers.forEach(element => 
        element.addEventListener('click', (e) => {
            result.innerHTML += e.target.innerHTML
        }) 
    )


zero.addEventListener('click', (e) => {
    let d = result.innerHTML.split(/[-+*\/]/)
    let summ = d[d.length -1]
    if(!summ.includes('.') && summ == ''){
        result.innerHTML += e.target.innerHTML + '.'
    }
    else(result.innerHTML += e.target.innerHTML)  
})

clearAll.addEventListener('click', () => {
    result.innerHTML = ''
})

clear.addEventListener('click', () => {
    result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length -1)
})

dot.addEventListener('click', () =>{
    let d = result.innerHTML.split(/[-+*\/]/)
    let summ = d[d.length -1]
    if(!summ.includes('.') && summ != ''){
        result.innerHTML += '.'
    }
}) 

plus.addEventListener('click', ()=>{
    let d = result.innerHTML.split(/[-+*\/]/)
    let summ = d[d.length -1]
    if(!summ.includes('+') && summ != ''){
        result.innerHTML += '+'
    }
    
})

minus.addEventListener('click', ()=>{
    let d = result.innerHTML.split(/[-+*\/]/)
    let summ = d[d.length -1]
    if(!summ.includes('-') && summ != ''){
        result.innerHTML += '-'
    }
})

multiply.addEventListener('click', ()=>{
    let d = result.innerHTML.split(/[-+*\/]/)
    let summ = d[d.length -1]
    if(!summ.includes('*') && summ != ''){
        result.innerHTML += '*'
    }
})

division.addEventListener('click', ()=>{
    let d = result.innerHTML.split(/[-+*\/]/)
    let summ = d[d.length -1]
    if(!summ.includes('/') && summ != ''){
        result.innerHTML += '/'
    }
})

equality.addEventListener('click', ()=>{
    if(result.innerHTML != ''){
        result.innerHTML += '=' + eval(result.innerHTML)
    }
})




 
