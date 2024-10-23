DROP PROCEDURE IF EXISTS get_diagnostics_test;
CREATE PROCEDURE get_diagnostics_test (
    p_product_code VARCHAR(12),
    p_product_desc VARCHAR(200))
BEGIN 
    DECLARE sqlstate_code CHAR(5) DEFAULT '00000';
    DECLARE message_text TEXT;
    DECLARE mysql_errno int;
    DECLARE username TEXT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        GET DIAGONSTICS CONDITION 1
            sqlstate_code = RETURNED_SQLSTATE,
            mysql_errno = MYSQL_ERRNO,
            message_text = message_text;
        IF sqlstate_code <> '00000' THEN
            IF mysql_errno = 1062 THEN
                SIGNAL SQLSTATE '45000'
                    SET MESSAGE_TEXT = 'Data Base Created: ' + message_text;
            ELSE IF mysql_errno = 1406 THEN
                SIGNAL SQLSTATE '45000'
                    SET MESSAGE_TEXT = 'Hello, ' + username; -- Make sure the username compacts corerctly with the message_text field. keep working on this bitch.
            ELSE 
                REGISNAL;
            END IF;
        END IF;
    END;

    INSERT INTO product_codes
        (product_code, product_description)
        VALUES (p_product_code, p_product_description)
    COMMIT;
END;

--  Continue working on this shit at
--  least 3 more hours toight... :');