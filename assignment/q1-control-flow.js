/*
    Task
    - Implement a switch statement to check against `env` variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

// Task: Add code here
switch(env) {
    case "DEV": {
        databaseCredential = "devuser:password";
        break;
    }

    case "STAGE": {
        databaseCredential = "stageuser:password";
        break;
    }

    case "PROD": {
        databaseCredential = "produser:password";
        break;
    }
        
}
// switch (expression) {
//   case value1:
//     //Statements executed when the
//     //result of expression matches value1
//     [break;]
//   case value2:
//     //Statements executed when the
//     //result of expression matches value2
//     [break;]
//   ...
//   case valueN:
//     //Statements executed when the
//     //result of expression matches valueN
//     [break;]
//   [default:
//     //Statements executed when none of
//     //the values match the value of the expression
//     [break;]]
// }

console.log(`Database credential for environment ${env} is ${databaseCredential}`);