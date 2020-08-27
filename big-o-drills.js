1. What is the Big O for this?
  1. O(1)
  2. O(n)
2. Even or Odd
  O(1) it's a basic math operation and is only taking in one input with one operation done on it.
3. Are you here?
  O(n^2) it's a nested loop
4. Doubler
  O(n) one for loop iterating through one array
5. Naive Search
  O(n) one for loop iterating through one array
6. Creating pairs
  O(n^2) one array with 2 for loops nested.
7. Compute the sequence
  It's creating a fibonacci sequence. O(n)
8. An efficient search
  O(log(n))
9. Random element
  O(1) there is no looping involved. Independent of the input.
10. What am I?
  It's trying to determine if the number is a prime number and return true or false. O(n)
11. Tower of Hanoi
function TOH (num, source, dest, temp) {
  if (num === 1) {
    console.log(`${source} -> ${dest}`)
    return;
  }

TOH(num - 1, source, temp, dest)
console.log(`${source} -> ${dest}`)
TOH(num - 1, temp, dest, source)
}

TOH (5, 'A', 'B', 'C')
  O(2^n)
