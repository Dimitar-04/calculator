let result;
let dot=false;
function add(a,b)
{
    result=a+b;
    return result;
}
function subtract(a,b)
{
    result=a-b;
    return result;
}
function multiply(a,b)
{
    result=a*b;
    return result;
}
function divide(a,b)
{
    result=a/b;
    return result;
}
let firstnum;
let operator;
let secondnum;
function operate(operator,a,b)
{
    let d;
    if(operator==='+')
    {
        d=add(a,b);
        
    }
    else if(operator==='-')
    {
        d=subtract(a,b);
    }
    else if(operator==='*')
    {
        d=multiply(a,b);
    }
    else if(operator==='/')
    {
        d=divide(a,b);
    }
    return d;
}
let arr=[];
let i=0;
let text;
function populate_board(value)
{
    let board=document.querySelector('.textbox')
    arr[i]=value;
    text=arr.join("");
    board.textContent=text;
    i++;
    if(value=='+'||value=='-'||value=='*'||value=='/')
    {
        dot=false;
    }
}
function isdecimal(num)
{
    return num%1!==0;
}

function solve()
{
    let num1=[];
    let result=0;
    let number1;
    let number2;
    let num2=[];
    let k=0;
    let i=0;
    let dali=0;
    let op;
    let l=text.length;
    for(let j=0;j<l;j++)
    {
        if(text[j]=='+')
        {
            
            let cpy=j;
            cpy--;
            if(result==0){
                while(cpy>=0 && text[cpy]!='+' && text[cpy]!='-' && text[cpy]!='*'&& text[cpy]!='/')
                {
                
                    num1[i]=text[cpy];
                    i++;
                    cpy--;
                }
                num1.reverse();
                number1=num1.join("");
                number1=Number(number1);
                i=0;
            }
            cpy=j;
            cpy++;
        
            while(cpy<=text.length && text[cpy]!='+' && text[cpy]!='-'&& text[cpy]!='*' && text[cpy]!='/')
            {
                
                num2[k]=text[cpy];
                k++;
                cpy++;
                dali=1;
            }
            number2=num2.join("");
            number2=Number(number2);
            k=0;
            if(result==0)
            {
                result=add(number1,number2);
            }
            else{
                result=add(result,number2);
            }
            

        }
        else if(text[j]=='-')
        {
            let cpy=j;
            cpy--;
            if(result==0){
            while(cpy>=0 && text[cpy]!='+' && text[cpy]!='-' && text[cpy]!='*'&& text[cpy]!='/')
            {
                
                num1[i]=text[cpy];
                i++;
                cpy--;
            }
            
            
            num1.reverse();
            number1=num1.join("");
            number1=Number(number1);
            i=0;
            }
            cpy=j;
            cpy++;
            while(cpy<=text.length && text[cpy]!='+' && text[cpy]!='-'&& text[cpy]!='*' && text[cpy]!='/')
            {
                
                num2[k]=text[cpy];
                k++;
                cpy++;
                dali=1;
            }
            k=0;
            number2=num2.join("");
            number2=Number(number2);
            if(result==0)
            {
                result=subtract(number1,number2);
            }
            else{
                result=subtract(result,number2);
            }
            

        }
        else if(text[j]=='*')
        {
            let cpy=j;
            cpy--;
            if(result==0){
            while(cpy>=0 && text[cpy]!='+' && text[cpy]!='-' && text[cpy]!='*'&& text[cpy]!='/')
            {
                
                num1[i]=text[cpy];
                i++;
                cpy--;
            }
            i=0;
            num1.reverse();
            number1=num1.join("");
            number1=Number(number1);
            }
            cpy=j;
            cpy++;
            while(cpy<=text.length && text[cpy]!='+' && text[cpy]!='-'&& text[cpy]!='*' && text[cpy]!='/')
            {
                
                num2[k]=text[cpy];
                k++;
                cpy++;
                dali=1;
            }
            k=0;
            number2=num2.join("");
            number2=Number(number2);
            if(result==0)
            {
                result=multiply(number1,number2);
            }
            else
            {
                result=multiply(result,number2);
            }
            

        }
        else if(text[j]=='/')
        {
            let cpy=j;
            cpy--;
            if(result==0){
            while(cpy>=0 && text[cpy]!='+' && text[cpy]!='-' && text[cpy]!='*'&& text[cpy]!='/')
            {
                
                num1[i]=text[cpy];
                i++;
                cpy--;
            }
            i=0;
            num1.reverse();
            number1=num1.join("");
            number1=Number(number1);
            }
            cpy=j;
            cpy++;
            while(cpy<=text.length && text[cpy]!='+' && text[cpy]!='-'&& text[cpy]!='*' && text[cpy]!='/')
            {
                
                num2[k]=text[cpy];
                k++;
                cpy++;
                dali=1;
            }
            k=0;
            number2=num2.join("");
            number2=Number(number2);
            if(number2==0)
            {
                let board=document.querySelector('.textbox')
                board.textContent="Cannot divide by 0!";
                return 0;
            }
            else if(result==0)
            {
                result=divide(number1,number2);
            }
            else{
                result=divide(result,number2);
            }
           

        }
        
    }
    if(dali!=0)
    {
        if(isdecimal(result))
        {
            result=result.toFixed(2);
        }
        let board=document.querySelector('.textbox');
        board.textContent=" ";
        board.textContent=result;
    }
    
};
function clearboard()
{
    
    let board=document.querySelector('.textbox');
    arr=[];
    board.textContent='0';
}
function decimal()
{
    if(dot==false)
    {
    let board=document.querySelector('.textbox')
    arr[i]='.';
    text=arr.join("");
    board.textContent=text;
    i++;
    dot=true;
    }
}

function backspace()
{
    let board=document.querySelector('.textbox')
    arr.pop();
    text=arr.join("");
    board.textContent=text;
    i--;
}

//keyboard support
document.addEventListener('keydown',(event)=>
{
    if(event.key>=0 && event.key<=9)
    {
        populate_board(event.key);
    }
    else if(event.key=='+'||event.key=='-'||event.key=='*'||event.key=='/')
    {
        populate_board(event.key);
    }
    else if(event.key=='Backspace')
    {
        backspace();
    }
    else if(event.key=='.')
    {
        decimal();
    }
    else if(event.key=='Escape')
    {
        clearboard();
    }
    else if(event.key=='Enter')
    {
        solve();
    }
    
});

// function backspace()
// {
//     let board=document.querySelector('.textbox')
//     arr.pop();
//     text=arr.join("");
//     board.textContent=text;
//     i--;
// }