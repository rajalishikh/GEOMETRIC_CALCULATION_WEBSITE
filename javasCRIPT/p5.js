function calculate5(){
    let result_input=getInputFieldById('input-6.1')
    let result_input2=getInputFieldById('input6.2')
    let area= 3.1416*result_input*result_input2;

    setElementById('Ellipse_area',area)
}