const Guide = require('../models/Guide');
const LocalStrategyGuides = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passportGuides = require('passport');

passportGuides.serializeUser((user, next) => {
    next(null, user.id);
});
  
passportGuides.deserializeUser((id, next) => {
    Guide.findById(id)
      .then(user => next(null, user))
      .catch(next)
});

passportGuides.use(new LocalStrategyGuides((username, password, next) => {
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

        next(null, foundUser);
    });
}));