function copyComment(text) {
2
 
3
navigator.clipboard.writeText(text);
4
 
5
document.getElementById("status").innerText =
6
"Copied to clipboard!";
7
}
8
 
9
document
10
.getElementById("approvedCommercial")
11
.addEventListener("click", () => {
12
 
13
copyComment(
14
"These commercial plans have been APPROVED after review for substantial code compliance."
15
);
16
});
17
 
18
document
19
.getElementById("approvedResidential")
20
.addEventListener("click", () => {
21
 
22
copyComment(
23
"These residential plans have been APPROVED after review for substantial code compliance."
24
);
25
});
26
 
27
document
28
.getElementById("noMEPWork")
29
.addEventListener("click", () => {
30
 
31
copyComment(
32
"No Proposed MEP, Fire Suppression, or Fire Alarm work, none approved."
33
);
34
});
35
 
36
document
37
.getElementById("NoMEPCHAP")
38
.addEventListener("click", () => {
39
 
40
copyComment(
41
"No Proposed MEP, Fire Suppression, or Fire Alarm work modifications, none approved."
42
);
43
});
44
 
45
document
46
.getElementById("clearClipboard")
47
.addEventListener("click", () => {
48
 
49
document.getElementById("status").innerText = "";
50
});