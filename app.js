var otp = document.getElementById("otp-input-texts"); 
var input_tags_otp = otp.getElementsByTagName("input");
var employee_num = []

function set_number(num) {
    for (var i = 0, n = input_tags_otp.length; i < n; i = i + 1) {
        if(input_tags_otp[i].value==''){
            input_tags_otp[i].value = num;
            employee_num = employee_num + num
            if(i==4){
                document.getElementById("login-button").style.background='#005CB9';
                document.getElementById("login-button").style.color='#FFFFFF';
                document.getElementById("login-button").disabled = false;
            }
            break
        }
    }
}

function delete_number(condition) {
    document.getElementById("login-button").disabled = true;
    for (var i = input_tags_otp.length-1; i >= 0; i--) {
        if(input_tags_otp[i].value!=''){
            input_tags_otp[i].value = '';
            document.getElementById("login-button").style.background='#E8E8E9';
            document.getElementById("login-button").style.color='#717171';
            if(condition == 'just-one'){
                break
            }
        }
    }
    document.getElementById("login-button").disabled = true;
}

function validate_number() {
    if(employee_num == '00000'){
        swal("Ups!", "Número de empleado incorrecto, inténtelo nuevamente", "error");
        employee_num = []
        delete_number('')
    }
    else {
        swal("Éxito!", "Has iniciado sesión", "success");
        employee_num = []
        delete_number('')
    }
}