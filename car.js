x=1;
function slide(){
        while(x>=7){
            x=x-7;
        }
    x+=1
    c=document.getElementById(x);
    c.style.display='inline-block';
    if(x==1){
        c=document.getElementById(7);
        c.style.display='none';
    }
    else{
    c=document.getElementById(x-1);
    c.style.display='none';
    }
}
