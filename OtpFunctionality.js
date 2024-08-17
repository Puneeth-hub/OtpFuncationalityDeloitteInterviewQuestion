function generateOtp(){
    let otp = ''; 
    otp = Math.floor(Math.random() * 9000 + 1000); 
  
  
    return otp
}
console.log(generateOtp())
  


//Another Approach   


function generateOTP(length = 4) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}
console.log(generateOTP())



