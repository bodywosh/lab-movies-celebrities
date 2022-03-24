const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/", async (req, res, next) => {
    try {
        const celebs = await Celebrity.find()
        res.render('celebrities/celebrities', { celebs })
    } catch (error) {
        console.error(error)
    }
});

router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res, next) => {
    try {
        const celebToCreate = req.body
        await Celebrity.create(celebToCreate)
        res.redirect('/celebrities')
      } catch {
        res.redirect('/celebrities/new-celebrity')
      }
})


module.exports = router;