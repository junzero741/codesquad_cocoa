function is_pair(s) {
    var result = true;
    var s_arr = [];

    for (let i = 0; i < s.length; i++) {
        if(s[i] === "[") {
            s_arr.push(s[i]);
        } else if(s[i] === "]") {
            if(s_arr.length === 0) {
                return result = false;
            }
            s_arr.pop();
        }
    }

    if(s_arr.length !== 0) {
        result = false;
    }
    return result;
}