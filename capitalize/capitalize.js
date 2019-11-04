export default function capitalize(str) {
  if (str) {
    const cap = str.split('');
    cap.unshift(cap.shift().toUpperCase());
    return cap.join('');
  }
  return '';
}

// or

// export default function capitalize(str) {
//   if (str) {
//     return str.substr(0, 1).toUpperCase() + str.substr(1);
//   }
//   return '';
// }

// or

// export default function capitalize(str) {
//   if (str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
//   return '';
// }
