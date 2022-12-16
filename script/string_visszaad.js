//3 string veletlenszeruen a listabol
function return_random_string(str_list) {
    if (str_list.length >= 5) {
        var result_list = [];
        for (var i = 0; i < 3; i++) {
            var index = Math.floor(Math.random() * str_list.length);
            var j = 0;
            while (j < i) {
                if (str_list[index] == result_list[j]) {
                    index = Math.floor(Math.random() * str_list.length);
                    j = -1;
                }
                j++;
            }
            result_list[i] = str_list[index];
        }
        return result_list;
    }
    else {
        return "Nem eleg hosszu a lista!";
    }
}
