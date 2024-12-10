const list = [
    { name: 'Jhonas', age: 17},
    { name: 'Anna', age: 25}, 
    { name: 'Steve', age: 22},
    { name: 'Albert', age: 15}, 
    { name: 'Jhon', age: 30},
    { name: 'Ellen', age: 18},
    { name: 'Ellen', age: 22}];
/*
console.log(list);
list.sort();
console.log(list);
list.sort((e1, e2) => {
    if (e1.name === e2.name) {
        if (e1.age > e2.age) {
            return -1;
        } else {
            return 1;
        }
    } else if (e1.name > e2.name) {
        return 1;
    } else {
        return -1;
    }
    //return e1.name.localeCompare(e2.name)
});
console.log(list);

list.sort((e1, e2) => {
    if (e1.age === e2.age) {
        if (e1.name > e2.name) {
            return -1;
        } else {
            return 1;
        }
    } else if (e1.age > e2.age) {
        return 1;
    } else {
        return -1;
    }
    //return e1.age.localeCompare(e2.age)
});
console.log(list);
*/
const list1 = [1,2,3,4,5]
const list2 = Array.from(list1);
list2.push(33);
const list3 = list1.slice(2);
const list4 = list1.slice(2,4);
const list5 = [...list1];
console.log("Lista 1");
console.log(list1);
console.log("Lista 2");
console.log(list2);
console.log("Lista 3");
console.log(list3);
console.log("Lista 4");
console.log(list4);
console.log("Lista 5");
console.log(list5);