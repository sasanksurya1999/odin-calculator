const input=document.querySelector('#input')
const output=document.querySelector('#output')
const buttons=document.querySelectorAll('button')
var currop=''
buttons.forEach(b=>{
    if(b.id=='+'||b.id=='-'||b.id=='/'||b.id=='*'||b.id=='%'){
        b.addEventListener('click',e=>{
            if(input.textContent!=''){
                output.textContent=input.textContent
                input.textContent=""
                currop=b.id
            }
        })
    }
    else if(b.id=='='){
        b.addEventListener('click',e=>{
            if(output.textContent.trim()!='' && input.textContent.trim()!=''){
                if(currop=='+'){
                    output.textContent= parseFloat(output.textContent)+parseFloat(input.textContent)
                }
                if(currop=='*'){
                    output.textContent= parseFloat(output.textContent)*parseFloat(input.textContent)
                }
                if(currop=='-'){
                    output.textContent= parseFloat(output.textContent)-parseFloat(input.textContent)
                }
                if(currop=='/'){
                    output.textContent= parseFloat(output.textContent)/parseFloat(input.textContent)
                }
                if(currop=='%'){
                    output.textContent= parseFloat(output.textContent)%parseFloat(input.textContent)
                }
                input.textContent=''
            }
        })
    }
    else if(b.id=='.'){
        b.addEventListener('click',e=>{
            if(!input.textContent.includes('.')){
                input.textContent=input.textContent+b.id
            }
        })
    }
    else if(b.id=='AC'){
        b.addEventListener('click',e=>{
            input.textContent=""
            output.textContent=""
        })
    }
    else if(b.id=='C'){
        b.addEventListener('click',e=>{
            input.textContent=input.textContent.slice(0,-1)
        })
    }
    else if(b.id=="."){
        b.addEventListener('click',e=>{
            input.textContent=input.textContent+b.id
        })
    }
    else{
        b.addEventListener('click',e=>{
        input.textContent=input.textContent+b.id
        })
    }
})