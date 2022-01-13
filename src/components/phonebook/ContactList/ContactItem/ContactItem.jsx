import PropTypes from "prop-types";
import { memo } from "react";
import style from "./ContactItem.module.css";

const ContactItem = ({ id, name, phone, delet }) => {
  console.log(id)
  const remove = () => delet(id);
  return (
    <li className={style.li}>
      <p>
        {name}: {phone}
      </p>
      <button className={style.btn} onClick={remove}>
        delete
      </button>
    </li>
  );
};

export default memo(ContactItem);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  delet: PropTypes.func.isRequired,
};
