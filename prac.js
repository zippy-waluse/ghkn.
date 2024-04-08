function arrNumb(numbers){

    let odd = [];
    let even = [];

    for(let number of numbers){
        if(number % 2 === 0){
            even.push(number);
        } else{
            odd.push(number)
        }
    }

    odd.sort((a,b) => a - b);

    even.sort((a,b) => a-b);
    console.log(odd)
    console.log(even)

}

let arr = [1,2,3,4,5,6]
arrNumb(arr);





}
