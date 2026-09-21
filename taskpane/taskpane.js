function copyComment(text) {
navigator.clipboard.writeText(text);

document.getElementById("status").innerText =

"Copied to clipboard!";
}

document

.getElementById("approvedCommercial")

.addEventListener("click", () => {

copyComment(
"These commercial plans have been APPROVED after review for substantial code compliance."
);
});

document

.getElementById("approvedResidential")

.addEventListener("click", () => {

copyComment(

"These residential plans have been APPROVED after review for substantial code compliance."
);
});

document

.getElementById("NoMEPWork")

.addEventListener("click", () => {

copyComment(

"No Proposed MEP, Fire Suppression, or Fire Alarm work, none approved."
);
});

document

.getElementById("NoMEPCHAP")

.addEventListener("click", () => {

copyComment(

"No Proposed MEP, Fire Suppression, or Fire Alarm work modifications, none approved."
);
});

document

.getElementById("clearClipboard")

.addEventListener("click", () => {

document.getElementById("status").innerText = "";
});