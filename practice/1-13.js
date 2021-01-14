    //your code
    //a: ##
    //b: ##
    // read() {
    //         this.a = Number(prompt(`what is the first number?`, 0));
    //         this.b = Number(prompt(`what is the second number?`, 0));

    //     },
    //     sum() {
    //         return this.a + this.b;
    //     },
    //     mul() {
    //         return this.a * this.b;
    //     }
    // }

    // calculator.read(); //prompts for two values and saves them as objects

    // alert(calculator.sum()); //returns the sum of 2 values

    // alert(calculator.mul()); //returns the product of the 2 values

    let variable = 10;
    let ladder = {
        step: 0,
        //max = max
        up() {
            if (this.max == undefined || this.step < this.max) {
                this.step++
                    return this;
            } else {
                return this;
            }
        },
        down() {
            if (this.step > 0) {
                this.step -= 1;
                return;
            } else {
                return this;
            }
        },
        showStep() {
            console.log(this.step);
        },
        height(max) {
            this.max = max;
            return this;
        }
    }
    ladder.up()
    ladder.up()
    ladder.up()
    ladder.up()
    ladder.up()
    ladder.up()
    console.log(ladder.showStep());

    // ladder.up(); // go up one step
    // ladder.up();
    // ladder.down(); //go down 1 step
    // ladder.showStep(); //shows what step you are on, 1 in this case