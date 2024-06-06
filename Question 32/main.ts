let current_users = ["Ali","hAider","Usman","Hamza"]

let new_users = ["Hasanayn","Hasan","Ibraheem","Haider"]

new_users.forEach(newUser => {
  let condition = current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())
  if(condition){
    console.log(`Sorry "${newUser}" is already taken!`);
  }
  else{
    console.log(`Username "${newUser}" is available`);
    
  }
})