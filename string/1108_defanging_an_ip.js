// https://leetcode.com/problems/defanging-an-ip-address/

const defangIpaddr = (address) => {
  //O(n) time and O(n) space
  return address.replace(/\./g, "[.]");
};

console.log(defangIpaddr("1.1.1.1"));
