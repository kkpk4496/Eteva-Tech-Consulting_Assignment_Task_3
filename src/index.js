let List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan']
let List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav']
let list1_length = List1.length
let list2_length = List2.length
let output1 = []
let output2 = []
let output3 = []
for (let i = 0; i < list1_length; i++) {
  if (!List2.includes(List1[i])) {
    output1.push(List1[i])
  } else if (List2.includes(List1[i])) {
    output3.push(List1[i])
  }
}
for (let j = 0; j < list2_length; j++) {
  if (!List1.includes(List2[j])) {
    output2.push(List2[j])
  }
}
console.log(output1)
console.log(output2)
console.log(output3)
