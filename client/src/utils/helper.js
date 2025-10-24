export const validateEmail=(email)=> {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!email){
    return "Email is required";
  }
  if(!regex.test(email)){
    return "Please enter a valid email address";
  }
  return "";
};

export const validatePassword=(password)=>{
    if(!password){
        return "Password is required";
    }
    if(password.length<6){
        return "Password must be at least 6 characters";
    }
    return "";
};