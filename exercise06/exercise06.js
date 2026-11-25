const a = Number(prompt("Hãy nhập vao số a"))
const b = Number(prompt("Hãy nhập vao số b"))
let operation = prompt("Hãy nhập phép tính mà bạn muốn +, -, *, /")
switch (operation) {
    case "+": alert(`Kết quả củ phép tính : a + b = ${ a + b}`)
        break;
    case "-": alert(`Kết quả củ phép tính : a - b = ${ a - b}`)
        break;
    case "*": alert(`Kết quả củ phép tính : a * b = ${ a * b}`)
        break;
    case "/": alert(`Kết quả củ phép tính : a / b = ${ a / b}`)
        break;

    default: alert("Bạn nhập không đúng yêu cầu, vui lòng kiểm tra lại")
        break;
}