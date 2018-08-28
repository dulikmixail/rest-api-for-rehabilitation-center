require('./delete_all_model');

require('./models/post');
require('./models/ph_r_group__ph_r_sub_group');
require('./models/assessment_of_functional_capability');
require('./models/criterion');
require('./models/m_treatment');
require('./models/mode_of_motor_activity');
require('./models/ph_r_allowed');
Promise.all([require('./models/ph_r_f_l_i_title'),require('./models/ph_r_f_l_i_value'),require('./models/ph_r_f_l_title')]).then((values => {
    // require('./models/ph_r_f_l_i_title_and_values');
    require('./models/ph_r_form');
}));
