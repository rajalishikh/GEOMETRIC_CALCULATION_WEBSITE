function calculate4(){
    let result_input=getInputFieldById('input-5.1')
    let result_input2=getInputFieldById('input5.2')
    let area= 0.5*result_input*result_input2;

    setElementById('pentagon_area',area)
}