function is_pair(s) {
    var result = true;
    var s_arr = [];
    var map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }


    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" ||
            s[i] === "{" ||
            s[i] === "[") {
            s_arr.push(s[i]);
        } else if (
            s[i] === ")" ||
            s[i] === "}" ||
            s[i] === "]") {
                var s_key = s_arr.pop();
                if(s[i] !== map[s_key]) {
                    return false;
                }
            }
        }

        if(s_arr.length !== 0) {
            result = false;
        }
        return result;
}