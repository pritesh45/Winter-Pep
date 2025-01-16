function createUserProfile(username, age = 25, country = "Unknown") {
  return {
      username: username,
      age: age,
      country: country
  };
}

const userProfile = createUserProfile("Navneet");
console.log(userProfile); 

const userProfile2 = createUserProfile("John", 30, "USA");
console.log(userProfile2); 
