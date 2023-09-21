
function calculate(){
    const userInput = document.form1.answer.value
    try{
        let result = eval(userInput)
        document.form1.answer.value = result
    }catch(error){
        alert(`Error (${error})`)
    }
}