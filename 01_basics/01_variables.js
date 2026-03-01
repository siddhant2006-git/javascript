const accountId=14435;

/**
 * Email address associated with the user account
 * @type {string}
 * @constant
 * @description This variable stores the primary email address used for account identification and communication purposes
 * 
 * File: 01_variables.js
 * Purpose: Demonstrates basic variable declaration and assignment in JavaScript
 * 
 * This file covers fundamental concepts:
 - Variable declaration using the 'let' keyword (block-scoped, reassignable)
 * - String data type for storing email addresses
 * - Naming conventions for variables (camelCase)
 * - Best practices for storing sensitive user information
 * 
 * Note: Email addresses should ideally be handled securely and validated
 * before storage in production environments
 */


let accountemail="siddhantbhatnagar11@gmail.com";
var accountpassword="2233";
let accountcity="jaipur";
let accountstate;

// accountid=2  // not allowed

console.log(accountId);

accountemail="siddhant@123";
accountpassword="6678877";
accountcity = "sambhal";

console.table([{ accountId, accountpassword, accountemail, accountstate }]);


// var cannot be use because of issue block scope and function scope 
