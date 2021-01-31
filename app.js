function resultButton(){
    const wholeNum = document.getElementById('wholeNum').value;
    const percentNum = document.getElementById('percentNum').value;

    const multiply = wholeNum * percentNum;
    const percent = multiply / 100;
    // console.log(percent );
    document.getElementById('result').innerHTML = Math.round(percent);
}
