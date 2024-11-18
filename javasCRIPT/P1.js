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
// rectangle function 

function calculate2(){
    let input2_1=document.getElementById('input-2.1').value;
    let input2_1_text=parseFloat(input2_1)

    let input2_2=document.getElementById('input2.2').value;
    let input2_2Text=parseFloat(input2_2)

    let Area=input2_1 * input2_2Text;
    let areaResult=document.getElementById('rectangle_area')
    areaResult.innerText=Area
}