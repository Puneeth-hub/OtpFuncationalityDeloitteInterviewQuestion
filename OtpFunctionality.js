function generateOtp(){
    let otp = ''; 
    otp = Math.floor(Math.random() * 9000 + 1000); 
  
  
    return otp
}
console.log(generateOtp())
  