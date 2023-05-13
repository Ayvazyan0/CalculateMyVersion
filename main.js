let numbers = document.querySelectorAll('.number')

numbers.forEach(element => 
        element.addEventListener('click', (e) => {
            result.innerHTML += e.target.innerHTML
            let d = result.innerHTML.split(/[-+*\/]/)
            let summ = d[d.length -1]
            if(summ[0] == 0 && !summ.includes('.')){
                result.innerHTML = e.target.innerHTML
            }
        }) 
    )


zero.addEventListener('click', (e) => {
    let d = result.innerHTML.split(/[-+*\/]/)
    let summ = d[d.length -1]
    if(!summ.includes('.') && summ == ''){
        result.innerHTML += e.target.innerHTML + '.'
    }
    if(summ[0] == 0 && !summ.includes('.')){
        result.innerHTML = e.target.innerHTML
    }
    else if(summ.includes('.')){
        result.innerHTML += '0'
    }else(result.innerHTML += e.target.innerHTML)
    
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
    if(result.innerHTML.endsWith('-')){
        result.innerHTML = result.innerHTML.replace('-', '+')
    }
    if(result.innerHTML.endsWith('*')){
        result.innerHTML = result.innerHTML.replace('*', '+')
    }
    if(result.innerHTML.endsWith('/')){
        result.innerHTML = result.innerHTML.replace('/', '+')
    }
    if(result.innerHTML.endsWith('%')){
        result.innerHTML = result.innerHTML.replace('%', '+')
    }
    let d = result.innerHTML.split('')
    let summ = d[d.length -1] 
    if(!summ.includes('+')){
        result.innerHTML += '+'
    }    
    
})

minus.addEventListener('click', ()=>{
    if(result.innerHTML.endsWith('+')){
        result.innerHTML = result.innerHTML.replace('+', '-')
    }
    if(result.innerHTML.endsWith('*')){
        result.innerHTML = result.innerHTML.replace('*', '-')
    }
    if(result.innerHTML.endsWith('/')){
        result.innerHTML = result.innerHTML.replace('/', '-')
    }
    if(result.innerHTML.endsWith('%')){
        result.innerHTML = result.innerHTML.replace('%', '-')
    }
    let d = result.innerHTML.split('')
    let summ = d[d.length -1] 
    if(!summ.includes('-')){
        result.innerHTML += '-'
    }  
})

multiply.addEventListener('click', ()=>{
    if(result.innerHTML.endsWith('-')){
        result.innerHTML = result.innerHTML.replace('-', '*')
    }
    if(result.innerHTML.endsWith('+')){
        result.innerHTML = result.innerHTML.replace('+', '*')
    }
    if(result.innerHTML.endsWith('/')){
        result.innerHTML = result.innerHTML.replace('/', '*')
    }
    if(result.innerHTML.endsWith('%')){
        result.innerHTML = result.innerHTML.replace('%', '*')
    }
    let d = result.innerHTML.split('')
    let summ = d[d.length -1] 
    if(!summ.includes('*')){
        result.innerHTML += '*'
    }  
})

division.addEventListener('click', ()=>{
    if(result.innerHTML.endsWith('-')){
        result.innerHTML = result.innerHTML.replace('-', '/')
    }
    if(result.innerHTML.endsWith('*')){
        result.innerHTML = result.innerHTML.replace('*', '/')
    }
    if(result.innerHTML.endsWith('+')){
        result.innerHTML = result.innerHTML.replace('+', '/')
    }
    if(result.innerHTML.endsWith('%')){
        result.innerHTML = result.innerHTML.replace('%', '/')
    }
    let d = result.innerHTML.split('')
    let summ = d[d.length -1] 
    if(!summ.includes('/')){
        result.innerHTML += '/'
    }  
})

percent.addEventListener('click', ()=>{
    if(result.innerHTML.endsWith('-')){
        result.innerHTML = result.innerHTML.replace('-', '%')
    }
    if(result.innerHTML.endsWith('*')){
        result.innerHTML = result.innerHTML.replace('*', '%')
    }
    if(result.innerHTML.endsWith('+')){
        result.innerHTML = result.innerHTML.replace('+', '%')
    }
    if(result.innerHTML.endsWith('/')){
        result.innerHTML = result.innerHTML.replace('/', '%')
    }
    let d = result.innerHTML.split('')
    let summ = d[d.length -1] 
    if(!summ.includes('%')){
        result.innerHTML += '%'
    }  
})

equality.addEventListener('click', ()=>{
    let d = result.innerHTML.split('%')
    let summ = eval(d[0]) * eval(d[1]) / 100
    if(result.innerHTML.includes('%')){
        result.innerHTML = summ
    }
    result.innerHTML = eval(result.innerHTML)
})




 
