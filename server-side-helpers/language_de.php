<?php
// Put the following line in your code before including "fancy_file_uploader_helper.php":
// require_once "language_de.php";

if(!function_exists("Translate_DE")) 
{
	function Translate_DE($string)
	{
		$translations['LANG']					="German";
		$translations['UPLOAD_ERR_INI_SIZE']	="Die hochgeladene Datei ist größer als 'upload_max_filesize' in der 'php.ini'.";
		$translations['UPLOAD_ERR_FORM_SIZE']	="Die hochgeladene Datei ist größer als 'max_file_size' im Formular.";
		$translations['UPLOAD_ERR_PARTIAL']		="Die Datei wurde nur teilweise hochgeladen.";
		$translations['UPLOAD_ERR_NO_FILE']		="Es wurde keine Datei hochgeladen.";
		$translations['UPLOAD_ERR_NO_TMP_DIR']	="Der temporäre Ordner auf dem LoxBerry ist nicht vorhanden.";
		$translations['UPLOAD_ERR_CANT_WRITE']	="Kann die temporäre Datei nicht schreiben. Entweder ist Speicherplatz voll oder das Speichermedium defekt.";
		$translations['UPLOAD_ERR_EXTENSION']	="Keine PHP Erweiterung stoppte das Hochladen.";
		$translations['UPLOAD_ERR_UNKNOWN']		="Ein unbekannter Fehler ist aufgetreten.";
		$translations['INVALID_INPUT_FILENAME']	="Der angegebene Dateiname wurde nicht auf diesen Server hochgeladen.";
		$translations['BAD_INPUT']				="Dateiinformationen wurden gesendet aber es fehlen Angaben.";
		$translations['INVALID_FILE_EXT']		="Ungültige Dateiendung. Es muss eine von diesen sein %s.";
		$translations['INVALID_FILENAME']		="Der Server hat keinen gültigen Dateinamen gesendet.";
		$translations['FILE_TOO_LARGE']			="Die Server Dateigrößenbeschränkung wurde überschritten.";
		$translations['OPEN_WRITE_FAILED']		="Kann eine benötigte Datei nicht für den Schreibzugriff öffnen.";
		$translations['OPEN_READ_FAILED']		="Kann eine benötigte Datei nicht für den Lesezugriff öffnen.";
		$translation = ($translations["$string"]) ? $translations["$string"] : $string;
		return $translation;
	}
define("CS_TRANSLATE_FUNC", "Translate_DE");
}

