document.getElementById('count_value').innerHTML=0;
const increment = () => {
    let modify_by =Number(document.getElementById('modify_by').value);
    if(modify_by>0){
    let count_value =Number(document.getElementById('count_value').innerHTML);
    count_value +=modify_by;
    document.getElementById('count_value').innerHTML= count_value;
    }
    
}

const decrement = () => {
    let modify_by =Number(document.getElementById('modify_by').value);
    if(modify_by>0){
    let count_value =Number(document.getElementById('count_value').innerHTML);
    count_value -=modify_by;
    if(count_value>=0){document.getElementById('count_value').innerHTML= count_value;}
    }
    
}


