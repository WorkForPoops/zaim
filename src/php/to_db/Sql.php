<?php
class Sql
{
	private $link;
	private $error = false;
	private $try_count = 0;
	
	private function Connect()
	{
		require "Config.php";
		//echo $config["db_host"];
		global $config;
		$this->link = @new mysqli($config["db_host"], $config["db_user"], $config["db_pass"], $config["db_name"]);
		if ($this->link->connect_errno)
		{
			if ($this->try_count >= 10)
				return array("code" => $this->link->connect_errno, "msg" => $this->link->connect_error);
			else
			{
				echo "SQLEngine: Соединение невозможно, спим 1 сек и пробуем соединиться.";
				sleep(1);
				$this->try_count++;
				return $this->Connect();
			}
		}
		else
		{
			$this->link->query("set names utf8");
			$this->try_count = 0;
			return array("code" => 0);
		}
	}

	private function Disconnect()
	{
		$this->link->close();
	}

	function query($sql)
	{
		$res = $this->Connect();
		if ($res["code"] !== 0)
			return $res;
		if ($dbres = $this->link->query($sql))
			$result = array("code" => 0, "dbres" => $dbres);
		else
			$result = array("code" => $this->link->errno, "msg" => $this->link->error);
		$this->Disconnect();
		return $result;
	}
	
	function escape_str($str)
	{
		return str_replace(array('\\', "\0", "\n", "\r", "'", '"', "\x1a"), array('\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z'), $str); 
	}
}
?>