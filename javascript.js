/*
const coding = ['js','ruby','python','c++','java']

// example 1
coding.forEach(function (items) {
    console.log(items);
})

// example 2
coding.forEach((items)=> {
    console.log(items); 
    return items  // foreach only print this value but not return to store them in any other variable  , for return purpose we us other methods map,filter ,reduce 
})

// example 3

function printMe (items){
    console.log(items); 
}
coding.forEach(printMe)

//example 4

coding.forEach(  (items,index,arr)=> {  // items , uska index{0,1..},full array ==> arr
    console.log(items,index,arr);
})

*/

const myCoding = [
    {
    languageName: 'javascript',
    languageFileName: 'js'
    },
    {
    languageName: 'java',
    languageFileName: 'java'
    },
    {
    languageName: 'python',
    languageFileName: 'js'
    }
]

myCoding.forEach(  (items) => {
    console.log(items.languageName);  
})