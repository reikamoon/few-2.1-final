// reikamoon's date library
const {months, mons, days, dys } = require('./utils')

class D {
    constructor(...args) {
        this._date = new Date(...args)
    }

    get year() {
        return this._date.getFullYear()
    }

    get yr() {
        return this._date.getFullYear() % 100 
    }

    get month() {
        return months[this._date.getMonth()]
    }

    get mon() {
        return mons[this._date.getMonth()]
    }

    get day() {
        return days[this._date.getDay()]
    }

    get dy() {
        return dys[this._date.getDay()]
    }

    get date() {
        return this._date.getDate()
    }

    get hour() {
        return this._date.getHours()
    }

    get min() {
        return this._date.getMinutes()
    }

    get sec() {
        return this._date.getSeconds()
    }

     format(mask = 'M D Y') {
        const dict = {
            "Y": this.year,
            "y": this.yr,
            "M": this.month,
            "m": this.mon,
            "D": this._date.getDate(),
            "d": this.date,
            "H": this._date.getHours(),
            "h": this._date.getHours(),
            "I": this._date.getMinutes(),
            "i": this.mins,
            "S": this._date.getSeconds(),
            "s": this.secs,
        }

        let output = ''
        for (let i = 0; i < mask.length; i++) {
            if (dict[mask[i]] === undefined) {
                output += mask[i]
            } else {
                output += dict[mask[i]]
            }
        }
        return output
    }

    when() {
        const msg = []; /// Years, Months, Days
        const now = new D();
        const ydiff = (this.year - now.year);
        var absoluteyear = Math.abs(ydiff);
        const mdiff = Math.abs(this._date.getMonth() - now._date.getMonth() + ydiff);
        var absolutemonth = Math.abs(mdiff);
        const ddiff = Math.abs(this._date - now._date)
        var absoluteday = Math.abs(ddiff);
        var roundeddays = Math.round(absoluteday);

        if (ydiff != 0) {
            if (ydiff === 1) {
                msg.push(`Next year.`);
            } else if(ydiff === -1) {
                msg.push(`Last year.`)
            } else if(ydiff < 0) {
                msg.push(`${absoluteyear} years ago.`);
            } else if(ydiff > 0) {
                msg.push(`${absoluteyear} years from now.`);
         }

        if (mdiff != 0) {
            if (mdiff === 1) {
                msg.push(`Next month.`);
            } else if(mdiff === -1) {
                msg.push(`Last month.`)
            } else if(mdiff < 0) {
                msg.push(`${absolutemonth} months ago.`)
            } else if(mdiff > 0) {
                msg.push(`${absolutemonth} months from now.`)
            }
        }

        if (ddiff != 0) {
            if (ddiff === 1) {
                msg.push(`A day from now, tomorrow.`);
            } else if(ddiff === -1) {
                msg.push(`A day before, yesterday.`);
            } else if(ddiff < 0) {
                msg.push(`${absoluteday} days ago.`)
            } else if(ddiff > 0) {
                msg.push(`${absoluteday} days from now.`)
            }
        }
        
        return msg
    }
}
}


module.exports = D

day = new D(2020, 3, 14).when()
console.log(day)