for (let i = 0; i < 2; i++) {
    console.log(`Outer loop i = ${i}`);
    
    for (let j = 0; j < 3; j++) {
        console.log(`  Inner loop j = ${j}`);
    }
    
    console.log("End of one outer loop round");
}
+3