# dead_drop

Wireframes:

Landing page: https://wireframe.cc/UB4QB3


dead_drop=# SELECT p.pin_id, p.pin_title, p.pin_description, u.username AS receiver, u2.username AS dropper FROM pins p INNER JOIN users u ON u.user_id = p.receiver_id INNER JOIN users u2 ON u2.user_id = p.dropper_id;
 pin_id | pin_title |    pin_description    | receiver |   dropper
--------+-----------+-----------------------+----------+--------------
      3 | Backpack  | Next to the stoplight | Admin1   | regularUser2
(1 row)


SELECT p.pin_id, p.pin_title, p.pin_description, u.username AS dropper, u2.username AS receiver FROM pins p INNER JOIN users u ON u.user_id = p.dropper_id INNER JOIN users u2 ON u2.user_id = p.receiver_id;

SELECT p.*, u.username AS dropper, u2.username AS receiver FROM pins p INNER JOIN users u ON u.user_id = p.dropper_id LEFT JOIN users u2 ON u2.user_id = p.receiver_id;