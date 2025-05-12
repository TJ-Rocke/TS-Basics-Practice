let userName: string; // sets expected type of variable to string, called a 'type assignment'
let userAge = 38; // 'type inference' ts can infer type based off an initial value

// ... expected basic types are (lowercase btw):
// string
// number
// boolean
userName = "Max";
// userAge = "34"; <-- cannot be assigned to type 'number'
