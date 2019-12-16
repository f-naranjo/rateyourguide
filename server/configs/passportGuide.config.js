const Guide = require('../models/Guide');
const User = require('../models/User');
const LocalStrategyGuides = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passportGuides = require('passport');

passportGuides.serializeUser((user, next) => {
    next(null, user);
});

passportGuides.deserializeUser((user, next) => {
    if (user.hasOwnProperty("info")) {
        Guide.findById(user.id)
            .populate('toursCreated')
            .populate('tourSessions')
            .populate('comments')
            .then(user => {
                next(null, user)
            })
            .catch(next)
    } else {
        User.findById(user.id)
            .then(user => {

                next(null, user)
            })
            .catch(next)
    }
});

passportGuides.use(new LocalStrategyGuides(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true,
    },

    (req, username, password, next, ) => {
        if (req.params.true) {
            Guide.findOne({ username }, (err, foundUser) => {
                if (err) {
                    next(err);
                    return;
                }

                if (!foundUser) {
                    next(null, false, { message: 'Usuario no registrado.' });
                    return;
                }

                if (!bcrypt.compareSync(password, foundUser.password)) {
                    next(null, false, { message: 'Contraseña incorrecta.' });
                    return;
                }

               
            })
            .populate('toursCreated')
            .populate('tourSessions')
            .populate('comments')
            .then(user => {
                next(null, user)
            })
            .catch(next)

        }
        else {

            User.findOne({ username }, (err, foundUser) => {
                if (err) {
                    next(err);
                    return;
                }

                if (!foundUser) {
                    next(null, false, { message: 'Usuario no registrado.' });
                    return;
                }

                if (!bcrypt.compareSync(password, foundUser.password)) {
                    next(null, false, { message: 'Contraseña incorrecta.' });
                    return;
                }

                next(null, foundUser);
            });
        }

    }));