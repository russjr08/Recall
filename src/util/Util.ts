class Util {

    static quantify_string(name: string, quantity: number) {
        if(quantity === 1) {
            return name
        } else {
            return name + 's'
        }
    }

    // Today check snippet from https://flaviocopes.com/how-to-determine-date-is-today-javascript/ with extras to return true if earlier date
    static isToday = (someDate: Date) => {
        const today = new Date()

        if(someDate < today) {
            return true
        }

        return someDate.getDate() === today.getDate() &&
          someDate.getMonth() === today.getMonth() &&
          someDate.getFullYear() === today.getFullYear()
      }
}

export default Util