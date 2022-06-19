const flag = true

if (!flag) {
    console.log("condition is true ")
} else {
    console.log("condition is not true")
}
let i =0
while (i<10) {
    i++
    console.log("check the numbers"+i)
}

console.log("*******************")
for(k=1;k<=100;k++){
    if(k%2==0 && k%5==0){
        console.log(k)
        if(k==40)
        break
    }

}