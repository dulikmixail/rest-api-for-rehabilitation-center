require('./post');
require('./ph_r_group__ph_r_sub_group');
require('./assessment_of_functional_capability');
require('./criterion');
require('./m_treatment');
require('./mode_of_motor_activity');
require('./ph_r_allowed');
require('./ph_r_form');
// require('./ph_r_f_l_i_title');
// require('./ph_r_f_l_i_value');
Promise.all([require('./ph_r_f_l_i_title'),require('./ph_r_f_l_i_value')]).then((values => {
    require('./ph_r_f_l_i_title_and_values');
}));