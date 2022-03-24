// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

// all your routes here
router.get("/", async (req, res, next) => {
    try {
        const movies = await Movie.find()
        res.render('movies/movies', { movies })
    } catch (error) {
        console.error(error)
    }
});


router.get("/create", async (req, res, next) => {
    try {
        const celebs = await Celebrity.find()
        res.render("movies/new-movie",{celebs});
    } catch (error) {
        console.error(error)
    }
});

router.post("/create", async (req, res, next) => {
    try {
        const movieToCreate = req.body
        await Movie.create(movieToCreate)
        res.redirect('/movies')
    } catch {
        res.redirect('create')
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id).populate('cast')
        res.render('movies/movie-details', { movie })
    } catch (error) {
        console.error(error)
    }
});

router.post("/:id", async (req, res, next) => {
    try {
        const movieToEdit = req.body
        await Movie.findByIdAndUpdate(req.params.id,movieToEdit)
        res.redirect('/movies/'+req.params.id)
    } catch (error) {
        console.error(error)
    }
});

router.get("/:id/delete", async (req, res, next) => {
    try {
        await Movie.findByIdAndRemove(req.params.id)
        const movie = await Movie.find()
        res.render('movies/movies', { movie })
    } catch (error) {
        console.error(error)
    }
});

router.get("/:id/edit", async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id)
        const celebs = await Celebrity.find()
        res.render('movies/edit-movie', { movie,celebs })
    } catch (error) {
        console.error(error)
    }
});

module.exports = router;