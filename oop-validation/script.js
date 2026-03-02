let config = {
    'ime_prezime': {
        required: true,
        minlehgth: 3,
        maxlength: 50
    },

    'korisnicko_ime': {
        required: true,
        minlehgth: 5,
        maxlength: 50
    },

    'email': {
        required: true,
        email: true,
        minlehgth: 5,
        maxlength: 50
    },

    'broj_telefona': {
        minlehgth: 9,
        maxlength: 13
    }, 

    'lozinka': {
        required: true,
        minlehgth: 7,
        maxlength: 25,
        matching: 'ponovi_lozinku'
    },

    'ponovi_lozinku': {
        required: true,
        minlehgth: 7,
        maxlength: 25,
        matching: 'lozinka'
    },
};

let validator = new Validator(config);