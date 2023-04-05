document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();const l=e.currentTarget.elements,t=l.email.value,n=l.password.value;0!==t.length&&0!==n.length||alert("Please complete all fields!");const o={email:t,password:n};console.log(o)}));
//# sourceMappingURL=task-08.48c4d791.js.map
