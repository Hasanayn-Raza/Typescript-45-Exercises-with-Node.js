function make_shirt(size, printedMessage) {
    if (size === void 0) { size = "large"; }
    if (printedMessage === void 0) { printedMessage = "I love Typescript"; }
    console.log("We are manufacturing a shirt with ".concat(size, " size and and a message which goes like \"").concat(printedMessage, "\""));
}
make_shirt();
make_shirt("small");
make_shirt("extra large", "I love Python");
