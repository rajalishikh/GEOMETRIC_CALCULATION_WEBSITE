function calculate4(){
    let result_input=getInputFieldById('input-4.1')
    let result_input2=getInputFieldById('input4.2')
    let area= 0.5*result_input*result_input2;

    setElementById('rhombus_area',area)
}