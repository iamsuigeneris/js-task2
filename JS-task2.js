
const data = [
    {
        "principal": 2500,
        "time": 1.8
    },
    {
        "principal": 1000,
        "time":  5
    },
    {
        "principal": 3000,
        "time":  1
    },
    {
        "principal": 2000,
        "time": 3
    }
]

const interestCalculator = data => {
    let interestData = []
    let rate = 0;
    let interest = 0

    for (let i = 0; i < data.length; i++){

        if((data[i].principal >= 2500) && (1 < data[i].time && data[i].time < 3)){
            rate = 3
        }
        else if(data[i].principal >= 2500 && data[i].time >= 3){
            rate = 4
        }
        else if(data[i].principal < 2500 || data[i].time <= 1){
            rate = 2
        }
        else{
            rate = 1
        }
        interest = (data[i].principal * rate * data[i].time) / 100

        interestData.push(
            {'principal': data[i].principal,
             'rate':rate,
             'time': data[i].time,
             'interest': interest
        })

        console.log(`
            Principal: ${data[i].principal}
            rate: ${rate}
            time: ${data[i].time} 
            interest: ${interest}
        `)
    }
     return interestData;

}
interestCalculator(data)