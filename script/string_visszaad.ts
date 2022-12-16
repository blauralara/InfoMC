//3 string veletlenszeruen a listabol
function return_random_string(str_list : string[]) {
    if (str_list.length >= 5) {
        let result_list :string[] = [];
        for (let i=0; i < 3; i++) {
            let index = Math.floor(Math.random() * str_list.length);
            let j = 0;
            while(j < i) {
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