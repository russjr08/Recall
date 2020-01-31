class Util {

    static quantify_string(name: string, quantity: number) {
        if(quantity === 1) {
            return name
        } else {
            return name + 's'
        }
    }
}

export default Util