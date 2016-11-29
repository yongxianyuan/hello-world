function reverseString(str) {
	var s = str.replace(/\W/,'');

  return s.split('').reverse().join('');
}

function palindrome(str) {
  // Good luck!
  if (reverseString(str) === str)
  	return true;
}


console.log(reverseString("h,el lo"));
console.log(palindrome("eye"));