

const x1 = 4523;
const v1 = 8092;
const x2 = 9419;
const v2 = 8076;

function kangaroo(x1, v1, x2, v2) {

    if (v1 <= v2) {
        return "NO";
    }

    while(true) {
        if(x1 > x2) {
            return "NO";
        }

        x1 += v1;
        x2 += v2;

        if(x1 === x2) {
            return "YES";
        }
    }
}

function main() {
    console.log(kangaroo(x1, v1, x2, v2));

}

main();