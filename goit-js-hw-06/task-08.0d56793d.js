document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();var l=e.currentTarget.elements,t=l.email.value,a=l.password.value;0!==t.length&&0!==a.length||alert("Please complete all fields!");var r={email:t,password:a};console.log(r)}));
//# sourceMappingURL=task-08.0d56793d.js.map
