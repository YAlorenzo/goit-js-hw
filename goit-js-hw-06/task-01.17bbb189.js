const e=document.querySelector("#categories").children,l=e.length,t=[];console.log(`Number of categories: ${l}`);for(let l=0;l<e.length;l++)t.push(e[l]);t.forEach((e=>{let l=e.firstElementChild.textContent,t=e.lastElementChild.querySelectorAll("li").length;console.log(`Category: ${l}`),console.log(`Elements: ${t}`)}));
//# sourceMappingURL=task-01.17bbb189.js.map
