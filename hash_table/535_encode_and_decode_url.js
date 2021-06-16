// https://leetcode.com/problems/encode-and-decode-tinyurl/

class Solution {
  constructor() {
    this.hash = {};
  }
  encode(url) {
    this.hash["shortUrl"] = `http://tinyurl.com/${Math.random()
      .toString(36)
      .slice(2)}`;
    this.hash["longUrl"] = url;
    return this.hash["shortUrl"];
  }

  decode(tiny) {
    return this.hash["longUrl"];
  }
}

const s = new Solution();
console.log(s.hash);
s.encode("https://leetcode.com/problems/design-tinyurl");
console.log(s.hash);
