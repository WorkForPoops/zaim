<?php
class Logic
{
    public $error = false;
    private $reconnecting = false;

    public function __construct()
    {
        global $caller_config;
        // инит sql
        require "Sql.php";
        $this->sql = new Sql();
    }


    public function InsertData($data)
    {   

        $q = "
			insert into clients
			(
				f_name,
				l_name,
                m_name,
                birthday,
                phone,
                email,
                sex,
                reg_region,
                reg_city,
                reg_street,
                reg_building,
                reg_apartment,
                pasport_number,
                pasport_date_issue,
                pasport_code,
                pasport_issuer,
                pasport_bitrh_place
			) values (
				'{$data['first_name']}',
				'{$data['last_name']}',
                '{$data['middle_name']}',
                '{$data['birthday']}',
                '{$data['phone']}',
                '{$data['email']}',
                '{$data['sex']}',
                '{$data['reg_region']}',
                '{$data['reg_city']}',
                '{$data['reg_street']}',
                '{$data['reg_building']}',
                '{$data['reg_apartment']}',
                '{$data['pasport_number']}',
                '{$data['pasport_date_issue']}',
                '{$data['pasport_code']}',
                '{$data['pasport_issuer']}',
                '{$data['pasport_bitrh_place']}'
			);";
      
        return $this->sql->query($q);
    }

}
// $logic = new Logic();
// $result= $logic->InsertData('ffs','lasf');
?>