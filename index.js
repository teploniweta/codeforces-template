const { readline, print } = require('@ip-algorithmics/codeforces-io');
var x = readline();
for(var i = 0 ; i < x ; i++) {
    var input = readline();
    var numbers = input.split(' ').map(Number);
    print(numbers);
}
