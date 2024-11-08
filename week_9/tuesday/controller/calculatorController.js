const router = require("express").Router();

//dallimi mes rq.params dhe query string
//what is a router/ controller (relative paths)

router.get("/", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const operation = req.query.operation;
    if (isNaN(a) || isNaN(b)) {
        res.statusCode = 400;
        res.json({ error: "please write actual numbers!" });
        return;
    }
    let answer;
    switch (operation) {
        case "add":
            answer = a + b;
            break;
        case "subtract":
            answer = a - b;
            break;
        case "multiply":
            answer = a * b;
            break;
        case "divide":
            if (b === 0) {
                res.status(400);
                res.json({ error: "cannot divide by 0" });
            }
            answer = a / b;
            break;
        default:
            res.status(400);
            res.json({ error: "invalid operation" });
            break;
    }
    res.json({ a: a, b: b, operation: operation, answer: answer });
});

// router.get("/add", (req, res) => {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     let answer;
//     if (isNaN(a) || isNaN(b)) {
//         res.statusCode = 400;
//         res.json({ error: "please write numbers!" });
//         res.end();
//         return
//     } else {
//         answer = a + b;
//     }

//     res.json({ a: a, b: b, operation: "add", answer: answer });
// });

// router.get("/subtract", (req, res) => {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     let answer;
//     if (isNaN(a) || isNaN(b)) {
//         res.statusCode = 400;
//         res.json({ error: "please write numbers!" });
//         res.end();
//         return
//     } else {
//         answer = a - b;
//     }

//     res.json({ a: a, b: b, operation: "subtract", answer: answer });
// });

// router.get("/multiply", (req, res) => {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     let answer;

//     if (isNaN(a) || isNaN(b)) {
//         res.statusCode = 400;
//         res.json({ error: "please write numbers!" });
//         res.end();
//         return
//     } else {
//         answer = a * b;
//     }

//     res.json({ a: a, b: b, operation: "multiply", answer: answer });
// });

// router.get("/divide", (req, res) => {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     let answer;

//     if (isNaN(a) || isNaN(b)) {
//         res.statusCode = 400;
//         res.json({ error: "please write numbers!" });
//         res.end();
//         return
//     } else if (b == 0) {
//         res.statusCode = 400;
//         res.json({ error: "please write numbers!" });
//         res.end();
//     } else {
//         answer = a / b;
//     }

//     res.json({ a: a, b: b, operation: "divide", answer: answer });
// });

module.exports = router;
