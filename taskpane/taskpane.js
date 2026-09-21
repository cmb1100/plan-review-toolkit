document
2
.getElementById("approvedCommercial")
3
.addEventListener("click", async () => {
4
 
5
const comment =
6
"These plans have been APPROVED after review for substantial code compliance.";
7
 
8
await navigator.clipboard.writeText(comment);
9
 
10
document.getElementById("status").innerText =
11
"Copied to clipboard!";
12
});