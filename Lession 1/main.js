// 1. write a function with 2 input parrameters ( each parameter in an array). This fuction returns an array  of the same elements in two arrays

function getSameElements(arr1,arr2){
    const samElements = [];
    for(let i=1;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            samElements.push(arr1[i])
        }
    }
    return samElements;
}

//2. Find 2 element with the greatest sum in an array

function greatestSum(arr){
    arr.sort((a,b) => b - a );
    return [arr[0],arr[1]]
}

//3. Find pairs of elements whose sum is equal to a given number 

 function findPairs(arr,sum){
    const pairs = [];
    for (i=0; i<arr.length -1;i++){
        for(j=1;j<arr.length; j++){
            if (arr[i]+arr[j]== sum){
                pairs.push([arr[i],arr[j]])
            }
        }
    }
    return pairs;
}
//4. Get a new array from the given array so that the elements apper only once (implement 2 ways: using get, not using get)

// using set

function uniqueArray(arr){
    const set = new Set(arr);
    const uniqueArr = Array.from(set)
    return uniqueArr
}

// not using set
function uniqueArray(arr){
    const  uniqueArr = [];
    const obj = {};
    for (const item of arr){
        if (!obj[item]){
            uniqueArr.push(item);
            obj[item]= true;
        }
    }
    return uniqueArr 
}

//5. get a new array of duplicate element in 2 array, each element appears exactly once in th new array

function duplicateArray(arr1,arr2){
    const duplicateArr=[];
    for(const item of arr1){
        if(arr2.includes(item) && !duplicateArr.includes(item)){
            duplicateArr.push(item)
        }
    }
    return duplicateArr;
}

//6. given an array arr1. Write a function that returns a new array of element that appaer more than once in arr1. The element in new array can only appear once in this array

function findDuplicates(arr){
    const count={};
    const duplicate=[]
    for(const item of arr){
        count[item]= (count[item] || 0) + 1
    }
    for (const item in count){
        if( count[item]>1){
            duplicate.push(item)
        }
    }
    return duplicate
}

//7.  

const arr=['face','zalo','face','gmail','zalo','zalo']
let result={};
for (let item of result){
    count=0;
    for(let item1 of result){
        if( item === item1){
            count ++;
            result[item1]= count;
        }
    }
}
console.log(result);
