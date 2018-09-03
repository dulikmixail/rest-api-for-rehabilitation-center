require('./delete_all_model');

require('./models/post');
require('./models/ph_r_group__ph_r_sub_group');
require('./models/assessment_of_functional_capability');
require('./models/criterion');
require('./models/treatment');
require('./models/mode_of_motor_activity');
require('./models/ph_r_allowed');
Promise.all(
    [
        require('./models/ph_r_f_l_i_title'),
        require('./models/ph_r_f_l_i_value'),
        require('./models/ph_r_f_l_title')
    ]
).then((() => {
    require('./models/ph_r_f_l_i_title_and_values');
    require('./models/ph_r_form');
}));
Promise.all(
    [
        require('./models/m_allowed_contraindications')
    ]
).then(() => {
    require('./models/m_allowed');
});

Promise.all(
    [
        require('./models/m_cl_value')
    ]
).then(() => {
    Promise.all(
        [
            require('./models/m_classifier')
        ]
    ).then(() => {
        require('./models/m_cl_group');
    })
});

require('./models/m_duration');
require('./models/m_treatment');