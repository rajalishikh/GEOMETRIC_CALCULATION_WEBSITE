function calculation3(){
    let result_input=getInputFieldById('input-3.1')
    console.log(result_input)
 
    let result_input2=getInputFieldById('input3.2')

    let area=result_input*result_input2;
    console.log(area)

    setElementById('parallelogram_area',area)

    
}

function getInputFieldById(event){
    let input=document.getElementById(event).value;
    let input_text=parseFloat(input)
    return input_text

}

function setElementById(eventid,value){
    let area_result=document.getElementById(eventid)
    area_result.innerText=value
}