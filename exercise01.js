let input = +prompt("Nhập số năm cần kiểm tra năm nhuận");
if (input <= 0 ){
    alert("Vui lòng nhập số năm là số dương và lớn hơn 0");
}else{
    if(input % 400 === 0 || (input % 4 === 0 && input % 100 !== 0)){
        alert(`năm ${input} là năm nhuận`);
    }else{
        alert(`năm ${input} không phải là năm nhuận`)
    };
}