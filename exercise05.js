const height = parseFloat(+prompt("Hãy nhập chiều cao của bạn (m)")); 
const weight = parseFloat(+prompt("Hãy nhập cân nặng của bạn (kg)"));
const type = prompt(`Tiêu chuẩn của bạn tình theo WHO(Nhập A)/IDI & WPRO(Nhập B)`)
const bmi = weight / (height * height);
if (type === "A" && height >=0 && weight >= 0 ) {
    alert("Theo chuẩn WHO");
    if ( bmi<18.5) {
        alert("Cân nặng thấp (gầy)");
    } else if(bmi>=18.5 &&  bmi<25) {
       alert("Bình thường");
    } else if(bmi === 25) {
        alert("Thừa cân");
    } else if(bmi >25 &&  bmi<30) {
        alert("Tiền béo phì ");
    } else if(bmi >=30 &&  bmi <35) {
        alert("Béo phì đọ I");
    } else if(bmi >=35 &&  bmi <40) {
        alert("Béo phì đọ II");
    } else {
        alert("Béo phì đọ III");
    };
    
} else if(type === "B" && height >=0 && weight >= 0 ) {
    alert("Theo chuẩn IDI & WPRO");
    if ( bmi<18.5) {
        alert("Cân nặng thấp (gầy)");
    } else if(bmi>=18.5 &&  bmi<23) {
       alert("Bình thường");
    } else if(bmi === 23) {
        alert("Thừa cân");
    } else if(bmi >23 &&  bmi<25) {
        alert("Tiền béo phì ");
    } else if(bmi >=25 &&  bmi <30) {
        alert("Béo phì đọ I");
    } else {
        alert("Béo phì đọ II-III");
    };
}else{
    alert("Dữ liệu bạn nhập không đúng yêu cầu")
}