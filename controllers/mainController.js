const {studentDB} = require('./dbConfig/dbConfig');

const postAddStudent = (req, res) => {
    let name = req.body.name, age = req.body.age, grade = req.body.grade;

    if(name === '' || age === '' || grade === '') {
        res.json('Vui lòng nhập đầy đủ thông tin!');
    }
    else {
        return studentDB.create(
            {
                name: req.body.name,
                age: req.body.age,
                grade: req.body.grade
            }, (err, result) => {
                if(err) return handleError(err);
                else return res.json(result);
            }
        )
    }
}

const findStudent = (req, res) => {
    // return studentDB.findOne({name: req.params.name}, (err, obj) => {
    //     console.log(obj)
    // })

    return studentDB.findOne({name: req.body.name}, (err, result) => {
        if(err) res.send(err)
        else return res.send(result)
    })
}


module.exports = {postAddStudent, findStudent}