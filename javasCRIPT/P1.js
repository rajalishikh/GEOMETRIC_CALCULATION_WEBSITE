function calculate(){
    let input1=document.getElementById('input-1').value
    let input1textBhumi=parseFloat(input1)
    
    let input2=document.getElementById('input2').value;
    let input2textHeight=parseFloat(input2)

    let area=0.5*input1textBhumi*input2textHeight;
    console.log(area)

    let areaResult=document.getElementById('triangle_area')
    areaResult.innerText=area
}